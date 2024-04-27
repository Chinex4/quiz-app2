import React, { useContext } from 'react'
import { QuizContext } from '../context/QuizContextProvider'
import { motion } from 'framer-motion'
// import Provider from '../context/DataContext'
// import DataContext from '../context/DataContext'

const StartQuiz = ({ }) => {
    const { startQuiz, handleStartQuiz, showStart } = useContext(QuizContext)
    let condition
    if (showStart && !startQuiz) {
        condition = true
    } else {
        condition = false
    }
    return (
        <>
            {
                condition && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className='w-full md:w-[35rem] p-4 rounded-md text-[#899878] grid place-items-center space-y-4 md:space-y-8'>
                        <h1 className='font-bold text-[3rem] md:text-[5rem]'>Quiz Genius</h1>
                        <p className='text-[#f7f7f2] text-lg md:text-xl'>Challenge yourself...</p>
                        <motion.button
                            animate={{ scale: [1, 1.1, 1, 1.1, 1, 1.1, 1, 1.1, 1] }}
                            transition={{ delay: 1, duration: 2 }}
                            onClick={handleStartQuiz} className='bg-[#222725] hover:bg-[#222725a2] text-[#f7f7f2] px-4 md:px-6 py-2 md:py-4 rounded-md md:text-xl'>
                            Start Quiz
                        </motion.button>
                    </motion.div>
                )
            }
        </>

    )
}

export default StartQuiz
