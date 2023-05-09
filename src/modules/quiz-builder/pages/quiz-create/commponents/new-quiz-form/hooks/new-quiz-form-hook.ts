import { useCallback, useState } from 'react';
import uuid from 'react-uuid';

import { INewQuizHook } from '../models/new-quiz-hook';

export const useNewQuizFormHook = (): INewQuizHook => {
  const [questionsIds, setQuestionsIds] = useState<string[]>([uuid()]);

  const updateQuestionIds = useCallback(() => {
    setQuestionsIds([...questionsIds, uuid()]);
  }, [questionsIds]);

  return {
    questionsIds,
    updateQuestionIds
  };
};
