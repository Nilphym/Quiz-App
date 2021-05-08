import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import QuestionsContext from '../../context/questionsContext';
import Text from '../../components/Text';
import Button from '../../components/Button';
import NextButton from '../../components/NextButton';
import styles from './answersPage.module.scss';
import ReactAudioPlayer from 'react-audio-player';

// I am fully aware of duplicated code and that I could make AnswersPage and QuestionsPage as one component but I wanted to use routing and context api in order to learn them
const AnswersPage = () => {
  const context = useContext(QuestionsContext);
  const history = useHistory();
  const [questionNumber, setQuestionNumber] = useState(0);

  const handleNext = () => {
    if (questionNumber >= context.answers.length - 1) {
      history.push('/');
    } else {
      setQuestionNumber((prevNumber) => prevNumber + 1);
    }
  }

  const currentQuestion = context.questions[questionNumber];
  const currentAnswer = context.answers[questionNumber];

  return (
    <div className={styles.wrapper}>
      <Text tag="h2" fontSize="2.4rem" content={`Question ${questionNumber + 1}:`} />
      <Text tag="p" fontSize="1.5rem" content={currentQuestion.text} />
      {(currentQuestion.type) === 'music' ?
        <ReactAudioPlayer
          src={require(`../../audio/${currentQuestion.source}`).default}
          controls
        /> : <></>
      }
      {currentQuestion.answers.map((answer) => (
        <Button
          key={answer}
          content={answer}
          type={currentAnswer !== answer ? 'default' : currentAnswer === currentQuestion.correct ? 'success' : 'fail'}
          fontSize="2rem"
          width="15rem"
        />
      ))}
      <div className={styles.button}>
        <NextButton onClick={handleNext} />
      </div>
    </div>
  );
};

export default AnswersPage;
