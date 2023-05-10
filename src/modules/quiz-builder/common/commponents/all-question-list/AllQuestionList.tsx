import { FC } from 'react';
import { ILayout, QBList } from 'src/modules/common/commponents';

import { AllQuestionListItem } from './commponents/all-question-list-item/AllQuestionListItem';
import { IAllQuestionList } from './models/all-question-lits.prop';

export const AllQuestionList: FC<IAllQuestionList> = ({ questions, addExistingQuestion }) => {
  const renderAllQuestionListItem = (item: { id: number; question: string; answer: string }) => {
    return <AllQuestionListItem item={item} addExistingQuestion={addExistingQuestion} />;
  };

  return (
    <div className="quiz-library">
      <QBList
        className="quiz-list"
        dataSource={questions}
        itemLayout={ILayout.HORIZONTAL}
        bordered={true}
        itemRender={renderAllQuestionListItem}
      />
    </div>
  );
};
