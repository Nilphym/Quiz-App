import React from 'react';
import Text from '../../components/Text';
import LinkButton from '../../components/LinkButton';
import styles from './mainPage.module.scss';

const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      <Text tag="h1" fontSize="3rem" content="quizz app" />
      <LinkButton destination="/questions" content="start" fontSize="3rem" roundSize="15rem" />
    </div>
  );
};

export default MainPage;
