import styles from './Faq.module.css'
import { faqQuestionStub } from '../../stub'
import { FaqQuestion } from '../FaqQuestion/FaqQuestion'
import { FC } from 'react'

export const Faq:FC = ({}) => {
    return(
        <section className={styles.faqBlock} id="FAQ">
            <div className={styles.main}>
                <div className={styles.name}>FAQ</div>
                <div className={styles.questionList}>
                {
                    faqQuestionStub.map((question) => {
                    return <FaqQuestion question={question} />
                    })
                }
                </div>
            </div>
      </section>
    )
}