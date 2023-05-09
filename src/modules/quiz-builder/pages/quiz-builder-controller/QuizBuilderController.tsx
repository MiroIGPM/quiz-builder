import { FC } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import { QuizBuilderContextProvider } from '../../context';
import { QuizCreate } from '../quiz-create/QuizCreate';
import { QuizEdit } from '../quiz-edit/QuizEdit';
import { QuizLibrary } from '../quiz-library/QuizLibrary';
import { QuizView } from '../quiz-view/QuizView';

export const QuizBuilderController: FC = () => {
  const { path } = useRouteMatch();

  const quizLibraryPath = `${path}library`;
  const quizCreatePath = `${path}create`;
  const quizViewPath = `${path}view/:id`;
  const quizEditPath = `${path}edit/:id`;

  return (
    <Switch>
      <Route exact path={path}>
        <Redirect to={quizLibraryPath} />
      </Route>
      <Route exact path={quizLibraryPath}>
        <QuizBuilderContextProvider>
          <QuizLibrary />
        </QuizBuilderContextProvider>
      </Route>
      <Route exact path={quizCreatePath}>
        <QuizBuilderContextProvider>
          <QuizCreate />
        </QuizBuilderContextProvider>
      </Route>
      <Route exact path={quizViewPath}>
        <QuizBuilderContextProvider>
          <QuizView />
        </QuizBuilderContextProvider>
      </Route>
      <Route exact path={quizEditPath}>
        <QuizBuilderContextProvider>
          <QuizEdit />
        </QuizBuilderContextProvider>
      </Route>
    </Switch>
  );
};
