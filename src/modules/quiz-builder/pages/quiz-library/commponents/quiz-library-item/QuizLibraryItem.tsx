import { List } from 'antd';
import { FC, MouseEventHandler } from 'react';
import { QBButton } from 'src/modules/common/commponents';
import { Locations, useNavigationHook } from 'src/modules/common/hooks';

import { IQuizLibraryItemProps } from '../../models/quiz-library.props';

export const QuizLibraryItem: FC<IQuizLibraryItemProps> = ({ name, id, deleteQuiz }) => {
  const { navigateTo } = useNavigationHook();

  const startQuiz: MouseEventHandler = (event) => {
    event.stopPropagation();
    navigateTo(`${Locations.VIEW}/${id}`);
  };

  const deleteSelected: MouseEventHandler = (event) => {
    event.stopPropagation();
    deleteQuiz(id);
  };

  const editSelected: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
    navigateTo(`${Locations.EDIT}/${id}`);
  };

  return (
    <List.Item
      actions={[
        <QBButton type="primary" onClick={startQuiz} key="start">
          start
        </QBButton>,
        <QBButton danger onClick={deleteSelected} key="delete">
          delete
        </QBButton>
      ]}
      onClick={editSelected}
    >
      <div>{name}</div>
    </List.Item>
  );
};
