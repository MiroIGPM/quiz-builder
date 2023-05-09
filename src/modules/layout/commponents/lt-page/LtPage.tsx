import { FC } from 'react';

import { LtHeader } from '../lt-header/LtHeader';
import { ILtPage } from './models/lt-page';

export const LtPage: FC<ILtPage> = ({ children }) => {
  return (
    <>
      <div>
        <LtHeader />
      </div>
      <div className="lt-page">{children}</div>
    </>
  );
};
