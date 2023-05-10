import { useCallback, useEffect, useState } from 'react';
import { getUniqueIdentifier } from 'src/modules/common/helpers/identifier-helper';
import { IQuestion } from 'src/modules/quiz-builder/context/models';

import { IEditQuizHook } from '../models/edit-quiz-hook';

export const useEditQuizHook = (questions: IQuestion[]): IEditQuizHook => {
  const [quizIds, setQuizQuestionsIds] = useState<number[]>([]);

  useEffect(() => {
    setQuizQuestionsIds(questions?.map((question) => question.id));
  }, [questions]);

  const updateQuizIds = useCallback(() => {
    setQuizQuestionsIds([...quizIds, getUniqueIdentifier()]);
  }, [quizIds]);

  return {
    quizIds,
    updateQuizIds
  };
};
