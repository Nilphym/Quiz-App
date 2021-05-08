import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import useQuestions from '../../hooks/useQuestions';
import Text from '../../components/Text';
import Button from '../../components/Button';
import styles from './questionsPage.module.scss';
import { shuffle } from '../../utils';

const QuestionsPage = () => {
  const questions = useQuestions(3);
  const history = useHistory();
  const [questionNumber, setQuestionNumber] = useState(0);
  const [, setUserAnswers] = useState({});

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
