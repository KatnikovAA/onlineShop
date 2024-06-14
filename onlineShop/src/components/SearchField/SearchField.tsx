import styles from './SearchField.module.css'
import { useDispatch } from 'react-redux'
import { textSerach } from '../../redux/features/searchField/searchFieldSlice'
import { FC } from 'react'
import { debounce } from 'lodash'
import { countLoadProductsDefult } from '../../redux/features/catalog/catalogSlice'
type searchFieldProps = {
    handleTextValue:(value:string)=>void
}

export const SearchField:FC<searchFieldProps> = ({handleTextValue}) => {    
    const dispatch = useDispatch()
    const handleChangeValue = (e:React.ChangeEvent<HTMLInputElement>) =>{
        dispatch(textSerach(e?.target?.value))
        dispatch(countLoadProductsDefult())
        handleTextValue(e.target.value)
    }

    const debounceOnChege = debounce(handleChangeValue,1000)

    return(
        <input onChange={debounceOnChege}type="text" placeholder='Search by title' className={styles.seacrhText} />
    )
}