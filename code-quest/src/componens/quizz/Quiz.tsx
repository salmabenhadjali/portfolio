"use client";
import React, { useRef, useState } from "react";
import styles from "./quiz.module.css";
import { answerType, questionType } from "@/types/questionType";
import Link from "next/link";

const Quizz = ({ questions }: { questions: questionType[] }) => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [checked, setCheked] = useState(false);
  const option1 = useRef<HTMLLIElement>(null);
  const option2 = useRef<HTMLLIElement>(null);
  const option3 = useRef<HTMLLIElement>(null);
  const option4 = useRef<HTMLLIElement>(null);
  const options = [option1, option2, option3, option4];
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const { question, possibleAnswers, rightAnswer, source } =
    questions[activeQuestionIndex];

  const answerCoast = 5;

  // Select and check answer
  const onAnswerSelected = (
    e: React.MouseEvent<HTMLLIElement>,
    answer: answerType
  ) => {
    const target = e.target as HTMLLIElement;
    if (checked === false) {
      if (answer.id === rightAnswer[0]) {
        setSelectedAnswer(true);
        target.classList.add("correct");
      } else {
        setSelectedAnswer(false);
        target.classList.add("wrong");
        options[rightAnswer[0] - 1].current?.classList.add("correct");
      }
    }
    setCheked(true);
  };

  // Calculate and increment to next question
  const nextQuestion = () => {
    setSelectedAnswer(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + answerCoast,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );

    if (activeQuestionIndex !== questions.length - 1) {
      setActiveQuestionIndex((prev) => prev + 1);
    } else {
      setActiveQuestionIndex(0);
      setShowResult(true);
    }
    setCheked(false);
    options.map((option) => option.current?.classList.remove("wrong"));
    options.map((option) => option.current?.classList.remove("correct"));
  };

  const overall = () => {
    return Math.round((result.score / (answerCoast * questions.length)) * 100);
  };

  const isHTML = (str: string): boolean => {
    const regex = /<\/?[a-z][\s\S]*>/i;

    return regex.test(str);
  };

  return (
    <div className={styles.container}>
      <h1>Quizz page</h1>
      <div>
        {!showResult ? (
          <div className={styles.section}>
            <hr />
            <h2>
              Question: {activeQuestionIndex + 1}
              <span> / {questions.length}</span>
            </h2>
            <div className={styles.quizContainer}>
              {isHTML(question) ? (
                <h3>
                  {`${activeQuestionIndex + 1}. `}
                  <span dangerouslySetInnerHTML={{ __html: question }} />
                </h3>
              ) : (
                <h3>{`${activeQuestionIndex + 1}. ${question}`}</h3>
              )}

              <ul>
                {possibleAnswers.map((answer) => (
                  <li
                    ref={options[answer.id - 1]}
                    key={answer.id}
                    onClick={(e) => onAnswerSelected(e, answer)}
                  >
                    {answer.text}
                  </li>
                ))}
              </ul>

              {checked ? (
                <div>
                  <Link target="_blank" className={styles.source} href={source}>
                    Click here for more details
                  </Link>
                  <button onClick={nextQuestion} className={styles.btn}>
                    {activeQuestionIndex === questions.length - 1
                      ? "Finish"
                      : "Next"}
                  </button>
                </div>
              ) : (
                <button
                  onClick={nextQuestion}
                  disabled
                  className={styles.btnDisabled}
                >
                  {activeQuestionIndex === questions.length - 1
                    ? "Finish"
                    : "Next"}
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className={styles.section}>
            <hr />
            <h2>Results</h2>
            <div className={styles.quizContainer}>
              <h3>Overall {overall()} %</h3>
              <p>
                Total Questions: <span>{questions.length}</span>
              </p>
              <p>
                Total Score: <span>{result.score}</span>
              </p>
              <p>
                Wrong Answers: <span>{result.wrongAnswers}</span>
              </p>
              <p>
                Correct Answers: <span>{result.correctAnswers}</span>
              </p>
              <button className={styles.btn}>
                <Link href="/">Restart</Link>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quizz;
