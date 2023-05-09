import { FC } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { LtPage } from './modules/layout';
import { QuizBuilderController } from './modules/quiz-builder/pages/quiz-builder-controller/QuizBuilderController';

export const App: FC = () => {
  const rootPath = '/';

  return (
    <BrowserRouter>
      <LtPage>
        <Route path={rootPath}>
          <QuizBuilderController />
        </Route>
      </LtPage>
    </BrowserRouter>
  );
};

export default App;
