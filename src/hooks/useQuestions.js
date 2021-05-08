import { useState } from 'react';
import { shuffle } from '../utils';

const questions = [
  {
    text: 'What was the first commercially successful video game?',
    answers: ['pac-man', 'pong', 'saper'],
    correct: 'pong'
  },
  {
    text: 'What is the best selling videogame of all time?',
    answers: ['minecraft', 'terraria', 'roblox'],
    correct: 'minecraft'
  },
  {
    text: 'What is the highest-selling gaming console to date?',
    answers: ['ps2', 'ps3', 'xbox 360'],
    correct: 'ps2'
  },
  {
    text: 'What is the name of Mario’s dinosaur sidekick?',
    answers: ['luigi', 'yoshi', 'bowser'],
    correct: 'yoshi'
  },
  {
    text: 'Who released the first flight simulator game?',
    answers: ['microsoft', 'apple', 'samsung'],
    correct: 'microsoft'
  },
  {
    text: 'What year was Nintendo founded?',
    answers: ['1954', '1889', '1992'],
    correct: '1889'
  }
];

const useQuestions = (maxQuestions) => {
  const [chosenQuestions] = useState(shuffle(questions).slice(0, maxQuestions));
  return chosenQuestions;
};

export default useQuestions;
