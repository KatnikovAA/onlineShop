import { Button } from "../../Button/Button";
import styles from './Login.module.css'
import { useGetAuthUserMutation } from "../../../services/api";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { idUser } from "../../../redux/features/login/loginSlice";

export const Login:FC = () =>{

    const dispatch = useDispatch()
    const[login,setLogin] = useState<string>('')
    const[password,setPassword] = useState<string>('')
    const [auth, result] = useGetAuthUserMutation()
    const navigate = useNavigate()

    useEffect(()=>{

        if (result.status==="fulfilled") {
            console.log(result.status)
            dispatch(idUser(result.data.id)) // передаем Id юзера
            let authToken:string = result.data.token
            localStorage.token = authToken
            navigate('/'); 
          }
    },[result])

    console.log(result)

    const handleClickLogin = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        event.preventDefault();
        {
            //oliviaw oliviawpass использую для теста
        }
        auth({ 
            username: `${login}`, 
            password: `${password}`, 
            expiresInMins: 30 
            })   
    } 

    const handleChangeLogin = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setLogin(event.currentTarget.value)
    } 

    const handleChangePassword = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setPassword(event.currentTarget.value)
    } 

    console.log(result)

    return(
        <div className={styles.login}>
            <h1 className={styles.name}>Login</h1>
            <form className={styles.form}>
                <div className={styles.formInput}>
                    <input type="text" className={styles.input} placeholder="Login" onChange={handleChangeLogin}/>
                    <input type="password" className={styles.input} placeholder='Password' onChange={handleChangePassword}/>
                    { result.status==="rejected" && <div className={styles.errorText}>Incorrect login or password*</div>}
                    <Button value={"Login"} styleCss={'defaultButton'} onClickEvent={handleClickLogin}></Button>
                </div>
            </form>
        </div>
    )
}