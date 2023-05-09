import { Button, ButtonProps } from 'antd';
import { FC } from 'react';

export const QBButton: FC<ButtonProps> = ({ children, ...args }) => {
  return <Button {...args}>{children}</Button>;
};
