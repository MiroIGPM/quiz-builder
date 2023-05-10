import { useCallback, useState } from 'react';
import { getUniqueIdentifier } from 'src/modules/common/helpers/identifier-helper';

import { INewQuizHook } from '../models/new-quiz-hook';

export const useNewQuizFormHook = (): INewQuizHook => {
  const [questionsIds, setQuestionsIds] = useState<number[]>([getUniqueIdentifier()]);

  const updateQuestionIds = useCallback(() => {
    setQuestionsIds([...questionsIds, getUniqueIdentifier()]);
  }, [questionsIds]);

  return {
    questionsIds,
    updateQuestionIds
  };
};
