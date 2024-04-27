import React, { useState, useEffect, createContext } from "react";
import StartQuiz from "./components/StartQuiz";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import QuizContextProvider from "./context/QuizContextProvider";


const App = () => {
  return (

    <div className="w-full min-h-screen bg-[#121113] grid place-items-center px-4">
      <QuizContextProvider>
        <StartQuiz
        />
        <Quiz

        />
        <Result
          
        />
      </QuizContextProvider>
    </div>
  );
}

export default App
