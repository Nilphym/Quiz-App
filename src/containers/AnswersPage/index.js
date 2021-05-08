import React, { useContext, useEffect } from 'react';
import QuestionsContext from '../../context/questionsContext';

const AnswersPage = () => {
  const context = useContext(QuestionsContext);
  useEffect(() => {
    console.log(context);
  }, []);

  return (
    <div>
      
    </div>
  );
};

export default AnswersPage;
