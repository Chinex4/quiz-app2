import React, { useContext } from 'react'
import { QuizContext } from '../context/QuizContextProvider'
import { motion } from 'framer-motion'
const Result = ({  }) => {
    const { showResult, mark, quiz, startOver } = useContext(QuizContext)
    const total = 5 * quiz.length;
    return (
        <>
            {
                showResult && (
                    <motion.div 
                        initial={{ scale: 0, opacity: 0, y: 400 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ delay:0.4, duration: 1 }}
                        className='w-full md:w-[35rem] bg-green-800 text-[#f7f7f2] grid place-items-center space-y-4 py-10 rounded md:'>
                        <h1 className='font-bold text-3xl'>Awesome!</h1>
                        <p className='text-xl font-medium'>You Scored {mark} out of {total}.</p>
                        <button onClick={startOver} className='bg-[#f7f7f2] px-6 py-2 text-[#121113] rounded-md'>
                            Start Over
                        </button>
                    </motion.div>
                )
            }
        </>

    )
}

export default Result
