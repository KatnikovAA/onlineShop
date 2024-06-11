import styles from './SearchField.module.css'

export const SearchField = () => {
    return(
        <input type="text" placeholder='Search by title' className={styles.seacrhText}/>
    )
}