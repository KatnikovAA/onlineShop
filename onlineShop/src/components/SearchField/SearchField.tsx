import styles from './SearchField.module.css'
import { useDispatch } from 'react-redux'
import { textSerach } from '../../redux/features/searchField/searchFieldSlice'
import { FC } from 'react'


type searchFieldProps = {
    handleTextValue:(value:string)=>void
}

export const SearchField:FC<searchFieldProps> = ({handleTextValue}) => {

    

    
    
    // const handleEnterPress = (e:React.KeyboardEvent<HTMLInputElement>) =>{
    //     if(e.key === 'Enter') dispatch(textSerach(searchValue))
    // }

    const handleChangeValue = (e:React.ChangeEvent<HTMLInputElement>) =>{
        handleTextValue(e.target.value)
    }
    return(
        <input onChange={handleChangeValue}type="text" placeholder='Search by title' className={styles.seacrhText} />
    )
}