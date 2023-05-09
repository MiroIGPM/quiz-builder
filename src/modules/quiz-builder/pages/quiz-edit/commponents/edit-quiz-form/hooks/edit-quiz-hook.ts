import { useCallback, useEffect, useState } from 'react';
import uuid from 'react-uuid';
import { IQuestion } from 'src/modules/quiz-builder/context/models';

import { IEditQuizHook } from '../models/edit-quiz-hook';

export const useEditQuizHook = (questions: IQuestion[]): IEditQuizHook => {
  const [quizIds, setQuizQuestionsIds] = useState<string[]>([]);

  useEffect(() => {
    setQuizQuestionsIds(questions?.map((question) => question.id));
  }, [questions]);

  const updateQuizIds = useCallback(() => {
    setQuizQuestionsIds([...quizIds, uuid()]);
  }, [quizIds]);

  return {
    quizIds,
    updateQuizIds
  };
};
