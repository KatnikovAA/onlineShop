import { Button } from "../../Button/Button";
import styles from './Login.module.css'
import { useGetAuthUserMutation } from "../../../services/api";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { idUser } from "../../../redux/features/login/loginSlice";
import { useGetCurrentAuthUserQuery } from "../../../services/api";
import { useRef } from "react";

export const Login:FC = () =>{
    const dispatch = useDispatch()
    const[login,setLogin] = useState<string>('carterb')
    const[password,setPassword] = useState<string>('carterbpass')
    const [auth, result] = useGetAuthUserMutation()
    const navigate = useNavigate()
    const {  error , isLoading: authIsLoading} = useGetCurrentAuthUserQuery(undefined); // проверяем срок жизни токена
    const loginRef = useRef<HTMLInputElement>(null)

    useEffect(()=>{
        loginRef.current?.focus()
        if (result.status==="fulfilled") {
            navigate('/onlineShop/'); 
          }
    },[result])

    useEffect(()=>{
        if (sessionStorage.token) {
          navigate('/onlineShop/'); 
        } else if (!sessionStorage.token) {
          navigate('/onlineShop/auth');
        }
      },[authIsLoading, error]);

    const handleClickLogin = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        event.preventDefault();
        auth({ 
            username: `${login}`, 
            password: `${password}`, 
            expiresInMins: 1
            }).then(respouse=>{
                dispatch(idUser(respouse.data.id)) // передаем Id юзера
                let authToken:string = respouse.data.token
                sessionStorage.token = authToken
                localStorage.token = authToken
            })
    } 


    const handleChangeLogin = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setLogin(event.currentTarget.value)
    } 

    const handleChangePassword = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setPassword(event.currentTarget.value)
    } 



    return(
        <div className={styles.login}>
        <h1 className={styles.name}>Login</h1>
        <form className={styles.form}>
            <div className={styles.formInput}>
                <input ref={loginRef} type="text" className={styles.input} placeholder="Login" onChange={handleChangeLogin} autoComplete="given-name" value={login}/>
                <input type="password" className={styles.input} placeholder='Password' onChange={handleChangePassword} autoComplete="current-password" value={password}/>
                <Button value={"Login"} styleCss={'defaultButton'} onClickEvent={handleClickLogin}></Button>
                { result.status==="rejected" && <div className={styles.errorText}>Incorrect login or password*</div>}
            </div>
        </form>

        

        </div>
    )
}