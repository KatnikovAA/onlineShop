import styles from './ErrorPage.module.css' 

export const ErrorPage = () =>{
    return(
        <main className={styles.errorPage}>
            <div className={styles.mainBlock}>
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <div>This page doesn't exist!</div>
                </p>
            </div>
        </main>
    )
}