import styles from './FaqQuestion.module.css' 
import { FC, useState } from 'react'
import crossImg from  '../../image/cross.png'
import { objFaqQuestionStub } from '../../stub'

type propsFaqQuestion = {
    question:objFaqQuestionStub
}

export const FaqQuestion:FC<propsFaqQuestion> = ({question}) =>{
    
    const[openAnswer,setOpenAnswer] = useState<boolean>(false) //использую анимации открытия/закрытия вопроса

    return(
        <label className={styles.question} onClick={() =>{setOpenAnswer((prevActive) => !prevActive)}}>
            <section className={styles.headerQuestion}>
                <div className={styles.name} aria-label={question.name}>{question.name} {question.id} </div>
                <div className={styles.imgCross}>
                    <img alt='' src={crossImg} className={!openAnswer ? styles.headerCrossClose : styles.headerCrossOpen}></img> 
                </div>
            </section>
            <p aria-label={question.answer} className={!openAnswer ? styles.answerClose : styles.answerOpen}>
                {question.answer}
            </p>
        </label>
)}