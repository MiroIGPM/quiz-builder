import { FC, useState } from 'react';
import { QBButton } from 'src/modules/common/commponents';

import { ISolveQuizFormItem } from '../../models/solve-quiz-form-item.prop';

export const SolveQuizFormItem: FC<ISolveQuizFormItem> = ({ formItem, questionNumber }) => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  const { question, answer } = formItem;

  const showCurrentAnswer = (): void => {
    setShowAnswer(true);
  };

  return (
    <div className="quiz-view-carousel-item">
      <div>{`Question ${questionNumber}:`}</div>
      <div>{question}</div>
      <div>{showAnswer && answer}</div>
      {!showAnswer && (
        <QBButton type="primary" onClick={showCurrentAnswer}>
          Show answer
        </QBButton>
      )}
    </div>
  );
};
