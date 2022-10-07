import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import Questions from "../../Components/Questions/Questions";
import "./Quiz.css";

const Quiz = ({ name, score, questions, setScore, setQuestions }) => {
  // whenever our component will bw render first time it will be call over here - useEffect()

  const [options, setOptions] = useState();
  const [currentQuestions, setCurrentQuestions] = useState(0);

  useEffect(() => {
    console.log(questions);

    setOptions(
      questions &&
        handleShuffle([
          questions[currentQuestions]?.correct_answer,
          ...questions[currentQuestions]?.incorrect_answers,
        ])
    );
  }, [questions, currentQuestions]);

  console.log(options);
  const handleShuffle = (event) => {
    return event.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quiz">
      <span className="subtitle">Welcome,{name}</span>
      {questions ? (
        <>
          <div className="quizInfo">
            <span>{questions[currentQuestions].category}</span>
            <span>Score:{score}</span>
          </div>
          <Questions
            currentQuestions={currentQuestions}
            setCurrentQuestions={setCurrentQuestions}
            questions={questions}
            options={options}
            correct={questions[currentQuestions]?.correct_answer}
            score={score}
            setScore={setScore}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
};

export default Quiz;
