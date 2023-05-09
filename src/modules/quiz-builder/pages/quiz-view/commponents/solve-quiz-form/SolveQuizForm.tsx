import { FC } from 'react';
import { QBCarousel } from 'src/modules/common/commponents/carousel/QBCarousel';

import { ISolveQuizForm } from '../models/solve-quiz-form.props';
import { SolveQuizFormItem } from './solve-quiz-form-item/SolveQuizFormItem';

export const SolveQuizForm: FC<ISolveQuizForm> = ({ quizQuestions }) => {
  return (
    <QBCarousel>
      {quizQuestions?.map((question, index) => (
        <SolveQuizFormItem formItem={question} questionNumber={index + 1} key={question.id} />
      ))}
    </QBCarousel>
  );
};
