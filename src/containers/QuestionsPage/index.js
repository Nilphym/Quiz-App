import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import useQuestions from '../../hooks/useQuestions';
import Text from '../../components/Text';
import Button from '../../components/Button';
import styles from './questionsPage.module.scss';


const shuffle = (array) => {
  const arrayCopy = [...array];
  for(let i = arrayCopy.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * i)
    const temp = arrayCopy[i]
    arrayCopy[i] = arrayCopy[j]
    arrayCopy[j] = temp
  }
  return arrayCopy;
};

const QuestionsPage = () => {
  const questions = useQuestions();
  const history = useHistory();
  const [questionNumber, setQuestionNumber] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [userAnswers, setUserAnswers] = useState({});
  
  const handleAnswer = (answer) => {
    setUserAnswers({questionNumber: answer});
    if (questionNumber >= questions.length - 1) {
      history.push('/answers');
    } else {
      setQuestionNumber((prevNumber) => prevNumber + 1);
    }
  }

  return (
    <div className={styles.wrapper}>
      <Text tag="h2" fontSize="2.4rem" content={`Question ${questionNumber + 1}:`} />
      <Text tag="p" fontSize="1.5rem" content={questions[questionNumber].text} />
      {shuffle(questions[questionNumber].answers).map((answer) => (
        <Button
          key={answer}
          onClick={() => handleAnswer(answer)}
          content={answer}
          fontSize="2rem"
          width="15rem"
        />
      ))}
    </div>
  );
};

export default QuestionsPage;
