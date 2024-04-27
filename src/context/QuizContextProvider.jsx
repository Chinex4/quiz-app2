import React, { createContext, useState, useEffect } from 'react'

export const QuizContext = createContext({});

const QuizContextProvider = ({ children }) => {
    const [showStart, setShowStart] = useState(true)
    const [showQuiz, setshowQuiz] = useState(false);
    const [showResult, setshowResult] = useState(false);

    const [quiz, setquiz] = useState([]);
    const [index, setindex] = useState(0);
    const [question, setquestion] = useState({});
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [correctAnswer, setcorrectAnswer] = useState('');
    const [mark, setMark] = useState(0);


    useEffect(() => {
        fetch('quiz.json')
            .then(res => res.json())
            .then(data => setquiz(data))
    }, []);
    useEffect(() => {
        if (quiz.length > index) {
            setquestion(quiz[index])
        }

    }, [quiz, index]);

    const handleStartQuiz = () => {
        setShowStart(false)
        setshowQuiz(true)
    }
    const handleNextButton = () => {
        setindex(number => number + 1)
        setSelectedAnswer('')
        setcorrectAnswer('')

    }
    const checkAnswer = (e, selected) => {
        if (!selectedAnswer) {
            setSelectedAnswer(selected)
            setcorrectAnswer(question.answer)

            if (selected === question.answer) {
                e.target.classList.remove('bg-[#2c3330fd]')
                e.target.classList.add('bg-green-600')
                setMark(mark => mark + 5)
            } else {
                e.target.classList.remove('bg-[#2c3330fd]')
                e.target.classList.add('bg-red-600')
            }
        }
    }

    const showTheResult = () => {
        setshowQuiz(false)
        setShowStart(false)
        setshowResult(true)
    }

    const startOver = () => {
        setshowResult(false)
        setShowStart(false)
        setindex(0)
        setshowQuiz(true)
        setMark(0)
        setSelectedAnswer('')
        setcorrectAnswer('')
    }
    return (
        <QuizContext.Provider value={{
            showQuiz,
            handleStartQuiz,
            showStart,
            showQuiz,
            index,
            quiz,
            question,
            selectedAnswer,
            handleNextButton,
            checkAnswer,
            showTheResult,
            showResult,
            mark,
            startOver
        }}>
            {children}
        </QuizContext.Provider>
    )
}

export default QuizContextProvider
