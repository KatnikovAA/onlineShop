import styles from './Search.module.css'
import { SearchField } from '../SearchField/SearchField'
import { Button } from '../Button/Button'

export const Search = () => {
    return(
        <div className={styles.search} aria-label='Field for search'>
            <SearchField/>
            <Button aria-label='Button for search' value='Search' styleCss='defaultButton'></Button>
        </div>
    )
}