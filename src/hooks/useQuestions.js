import { useState } from 'react';
import { shuffle } from '../utils';

const questions = [
  {
    text: 'What was the first commercially successful video game?',
    answers: ['pac-man', 'pong', 'saper'],
    correct: 'pong',
    type: 'text'
  },
  {
    text: 'What is the best selling videogame of all time?',
    answers: ['minecraft', 'terraria', 'roblox'],
    correct: 'minecraft',
    type: 'text'
  },
  {
    text: 'What is the highest-selling gaming console to date?',
    answers: ['ps2', 'ps3', 'xbox 360'],
    correct: 'ps2',
    type: 'text'
  },
  {
    text: 'What is the name of Mario’s dinosaur sidekick?',
    answers: ['luigi', 'yoshi', 'bowser'],
    correct: 'yoshi',
    type: 'text'
  },
  {
    text: 'Who released the first flight simulator game?',
    answers: ['microsoft', 'apple', 'samsung'],
    correct: 'microsoft',
    type: 'text'
  },
  {
    text: 'What year was Nintendo founded?',
    answers: ['1954', '1889', '1992'],
    correct: '1889',
    type: 'text'
  },
  {
    text: 'Who composed this song?',
    answers: ['Beethoven', 'Mozart', 'Bach'],
    correct: 'Beethoven',
    type: 'music',
    source: 'audio1.mp3'
  }
];

const shuffleQuestions = (questions) => {
  return shuffle(questions.map((question) => ({
    answers: shuffle(question.answers),
    ...question
  })));
};

const useQuestions = (maxQuestions) => {
  const [chosenQuestions] = useState(shuffleQuestions(questions).slice(0, maxQuestions));
  return chosenQuestions;
};

export default useQuestions;
