import { Modal } from 'antd';
import { FC } from 'react';

import { IModal } from './modal/modal.props';

export const QBModal: FC<IModal> = ({ children, title, isModalOpen, onCancel, footer }) => {
  return (
    <Modal title={title} open={isModalOpen} onCancel={onCancel} footer={footer}>
      {children}
    </Modal>
  );
};
