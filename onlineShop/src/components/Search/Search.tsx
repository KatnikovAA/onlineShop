import styles from './Search.module.css'
import { SearchField } from '../SearchField/SearchField'
import { Button } from '../Button/Button'
import { useSelector } from 'react-redux'
import { RootState } from "../../redux/store"
import { textSerach } from '../../redux/features/searchField/searchFieldSlice'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import debounce
export const Search = () => {

    const[searchValue,setSearchValue] = useState<string>('')

    const dispatch = useDispatch()

    const handleSearch = () => {
        dispatch(textSerach(searchValue))
    }

    const handleTextValue = (value:string) =>{
        if(value===''){
            setSearchValue(' ')
        }else
        setSearchValue(value)

    }

    return(
        <div className={styles.search} aria-label='Field for search'>
            <SearchField handleTextValue={handleTextValue}/>
            <Button aria-label='Button for search' value='Search' styleCss='defaultButton' onClick={handleSearch}></Button>
        </div>
    )
}