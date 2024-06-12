import styles from './Search.module.css'
import { SearchField } from '../SearchField/SearchField'
import { Button } from '../Button/Button'
import { useSelector } from 'react-redux'
import { RootState } from "../../redux/store"
import { textSerach } from '../../redux/features/searchField/searchFieldSlice'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import debounce from 'debounce'

export const Search = () => {

    const[searchValue,setSearchValue] = useState<string>('')

    useEffect(()=>{
        debounceOnChege()
    },[searchValue])

    const dispatch = useDispatch()
    
    const handleSearch = () => {
        dispatch(textSerach(searchValue))
    }

    const debounceOnChege:debounce.DebouncedFunction<() => void> = debounce(handleSearch,500)

    
    const handleTextValue = (valueText:string) =>{
        if(valueText === ''){
            setSearchValue(' ')
            
        }else{
            setSearchValue(valueText)
            
        }
        
    }

    return(
        <div className={styles.search} aria-label='Field for search'>
            <SearchField handleTextValue={handleTextValue}/>
            <Button aria-label='Button for search' value='Search' styleCss='defaultButton' onClick={handleSearch}></Button>
        </div>
    )
}