import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useQuizBuilderContext } from '../../context';
import { IQuiz } from '../../context/models';
import { EditQuizForm } from './commponents/edit-quiz-form/EditQuizForm';

export const QuizEdit: FC = () => {
  const { activeQuiz, clearActiveQuiz, getActiveQuiz } = useQuizBuilderContext();

  const params = useParams<{ id: string }>();

  useEffect(() => {
    getActiveQuiz(Number(params?.id));
  }, [getActiveQuiz, params?.id]);

  useEffect(() => {
    return () => {
      clearActiveQuiz();
    };
  }, [clearActiveQuiz]);

  return <EditQuizForm quiz={activeQuiz as IQuiz} />;
};
