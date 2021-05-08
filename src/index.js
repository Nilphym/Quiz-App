import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
import './index.scss';
import QuestionsContext from './context/questionsContext';

ReactDOM.render(
  <React.StrictMode>
    <QuestionsContext.Provider value={{
      questions: {},
      answers: {}
    }}>
      <Router>
        <App />
      </Router>
    </QuestionsContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
