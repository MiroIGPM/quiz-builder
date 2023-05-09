import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { INavigationHook, Locations } from './models/navigation-hook';

export const useNavigationHook = (): INavigationHook => {
  const history = useHistory();

  const navigateTo = useCallback(
    (path: string | Locations): void => {
      history.push(path);
    },
    [history]
  );

  return {
    navigateTo
  };
};
