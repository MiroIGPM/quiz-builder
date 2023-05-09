import { List } from 'antd';
import { FC } from 'react';
import { QBButton } from 'src/modules/common/commponents';

import { IAllQuestionListItem } from '../../models/all-question-list-item.props';

export const AllQuestionListItem: FC<IAllQuestionListItem> = ({ item, addExistingQuestion }) => {
  const addQustion = () => {
    addExistingQuestion(item.id, item.question, item.answer);
  };

  return (
    <List.Item
      actions={[
        <QBButton type="primary" onClick={addQustion} key="add">
          Add Question
        </QBButton>
      ]}
    >
      <div>{item.question}</div>
    </List.Item>
  );
};
