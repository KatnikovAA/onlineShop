import { FC } from 'react'
import styles from './ErrorPage.module.css' 

export const ErrorPage:FC = () =>{
    return(
        <main className={styles.errorPage}>
            <div className={styles.mainBlock}>
                <h1 tabIndex={22}>Oops!</h1>
                <p aria-label='Sorry, an unexpected error has occurred.This page doesnt exist!'>Sorry, an unexpected error has occurred.</p>
                <p>
                    <div>This page doesn't exist!</div>
                </p>
            </div>
        </main>
    )
}