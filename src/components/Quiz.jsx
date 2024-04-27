import React, { useContext, useEffect, useState } from 'react'
import { QuizContext } from '../context/QuizContextProvider'
import { motion } from 'framer-motion';

const Quiz = ({ }) => {
    const { showQuiz, index, quiz, question, handleNextButton, selectedAnswer, checkAnswer, showTheResult } = useContext(QuizContext);
    

    const disabled = selectedAnswer === '';
    let disabledClass = ' bg-[#27301e] cursor-not-allowed';

    if (!disabled) {
        disabledClass = ' bg-[#455237] cursor-pointer';
    }
    

    

    return (
        <>
            {
                showQuiz && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0, x: '100vw' }}
                        animate={{ scale: 1, opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className='w-full md:w-[35rem] bg-[#222725] px-4 md:px-6 md:py-10 py-6 rounded-md text-[#f7f7f2] space-y-4 md:space-y-6'>
                        <h1 className='text-[2rem] text-[#899878] font-bold'>Question {index + 1} of {quiz.length}</h1>
                        <p>{question.question}</p>
                        <ul className='space-y-4'>
                            {
                                question.options.map(answer => {
                                    return (
                                        <li onClick={
                                            (e) => checkAnswer(e, answer)
                                        } key={answer} className='p-4 bg-[#2c3330fd] rounded cursor-pointer'>
                                            {answer}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className='grid place-items-center'>
                            {
                                (index + 1) === quiz.length ? (
                                    <button onClick={showTheResult} className={`w-full md:w-[200px] text-center rounded  py-3${disabledClass} `} disabled={disabled}>Show Result</button>

                                ) : (
                                    <button onClick={handleNextButton} className={`w-full md:w-[200px] text-center rounded  py-3 ${disabledClass} `} disabled={disabled} >Next</button>
                                )
                            }
                        </div>
                    </motion.div>
                )
            }
        </>
    )
}

export default Quiz
