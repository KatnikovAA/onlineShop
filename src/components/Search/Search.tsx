import styles from './Search.module.css'
import { SearchField } from '../SearchField/SearchField'
import { Button } from '../Button/Button'
import { textSerach } from '../../redux/features/searchField/searchFieldSlice'
import { useDispatch } from 'react-redux'
import { useState } from 'react'


export const Search = () => {

    const[searchValue,setSearchValue] = useState<string>('')

    const dispatch = useDispatch()
    
    const handleSearch = () => {
        dispatch(textSerach(searchValue))
    } 
       
    const handleTextValue = (valueText:string) =>{
        setSearchValue(valueText) 
    }

    return(
        <div className={styles.search} aria-label='Field for search'>
            <SearchField handleTextValue={handleTextValue}/>
            <Button aria-label='Button for search' value='Search' styleCss='defaultButton' onClickEvent={handleSearch}></Button>
        </div>
    )
}