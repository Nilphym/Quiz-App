import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './containers/MainPage';
import QuestionsPage from './containers/QuestionsPage';
import AnswersPage from './containers/AnswersPage';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/questions">
          <QuestionsPage />
        </Route>
        <Route path="/answers">
          <AnswersPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
