/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useQuestions from '../../hooks/useQuestions';
import Text from '../../components/Text';
import Button from '../../components/Button';
import styles from './questionsPage.module.scss';
import QuestionsContext from '../../context/questionsContext';
import ReactAudioPlayer from 'react-audio-player';

// I am fully aware of duplicated code and that I could make AnswersPage and QuestionsPage as one component but I wanted to use routing and context api in order to learn them
const QuestionsPage = () => {
  const context = useContext(QuestionsContext);
  const questions = useQuestions(3);
  const history = useHistory();
  const [questionNumber, setQuestionNumber] = useState(0);

  useEffect(() => {
    context.questions = questions;
    context.answers = [];
  }, []);

  const handleAnswer = (answer) => {
    context.answers = [...context.answers, answer];

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
      {(questions[questionNumber].type) === 'music' ?
        <ReactAudioPlayer
          src={require(`../../audio/${questions[questionNumber].source}`).default}
          controls
        /> : <></>
      }
      {questions[questionNumber].answers.map((answer) => (
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
