import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useQuizBuilderContext } from '../../context';
import { IQuestion } from '../../context/models';
import { SolveQuizForm } from './commponents/solve-quiz-form/SolveQuizForm';

export const QuizView: FC = () => {
  const { activeQuiz, clearActiveQuiz, getActiveQuiz } = useQuizBuilderContext();

  const params = useParams<{ id: string }>();

  useEffect(() => {
    getActiveQuiz(Number(params?.id));
  }, [getActiveQuiz, params]);

  useEffect(() => {
    return () => {
      clearActiveQuiz();
    };
  }, [clearActiveQuiz]);

  return (
    <div className="quiz-view">
      {activeQuiz ? (
        <>
          <div>{activeQuiz?.name}</div>
          <div className="quiz-view-carousel">
            <SolveQuizForm quizQuestions={activeQuiz?.questions as IQuestion[]} />
          </div>
        </>
      ) : (
        <div>No such quiz</div>
      )}
    </div>
  );
};
