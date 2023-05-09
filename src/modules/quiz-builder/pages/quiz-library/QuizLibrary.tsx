import { FC } from 'react';
import { ILayout, QBList } from 'src/modules/common/commponents';

import { useQuizBuilderContext } from '../../context';
import { QuizLibraryItem } from './commponents/quiz-library-item/QuizLibraryItem';

export const QuizLibrary: FC = () => {
  const { quizzes, deleteQuiz, getActiveQuiz } = useQuizBuilderContext();

  const renderQuizLibraryItem = (item: { name: string; id: string }) => {
    return <QuizLibraryItem name={item.name} id={item.id} deleteQuiz={deleteQuiz} getActiveQuiz={getActiveQuiz} />;
  };

  return (
    <div className="quiz-library">
      <QBList
        className="quiz-list"
        dataSource={quizzes as any}
        itemLayout={ILayout.HORIZONTAL}
        bordered={true}
        itemRender={renderQuizLibraryItem}
      />
    </div>
  );
};
