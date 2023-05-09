import { Input } from 'antd';
import { FC } from 'react';

import { IInputProps } from './models/input.props';

export const QBInput: FC<IInputProps> = ({ valid, validationMessage, ...args }) => {
  return (
    <>
      <Input {...args} />
    </>
  );
};
