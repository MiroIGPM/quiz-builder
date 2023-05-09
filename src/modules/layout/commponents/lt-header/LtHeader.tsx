import { FC } from 'react';
import { QBButton } from 'src/modules/common/commponents';
import { Locations, useNavigationHook } from 'src/modules/common/hooks';

export const LtHeader: FC = () => {
  const { navigateTo } = useNavigationHook();

  const goToQuizLibrary = (): void => {
    navigateTo(Locations.LIBRARY);
  };

  const goToCreateNewQuiz = (): void => {
    navigateTo(Locations.CREATE);
  };

  return (
    <div className="lt-header">
      <div className="lt-header-buttons">
        <div className="lt-header-button">
          <QBButton onClick={goToQuizLibrary} type="primary">
            Quiz library
          </QBButton>
        </div>
        <div className="lt-header-button">
          <QBButton onClick={goToCreateNewQuiz} type="primary">
            Create new quiz
          </QBButton>
        </div>
      </div>
    </div>
  );
};
