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
            <div className={styles.headerQuestion}>
                <div className={styles.name}>{question.name} {question.id}</div>
                <div className={styles.imgCross}>
                    <img src={crossImg} className={!openAnswer ? styles.headerCrossClose : styles.headerCrossOpen}></img> 
                </div>
            </div>
            <div className={!openAnswer ? styles.answerClose : styles.answerOpen}>
                {question.answer}
            </div>
        </label>
)}