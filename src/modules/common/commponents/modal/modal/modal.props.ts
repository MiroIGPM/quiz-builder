import { ReactNode } from 'react';

export interface IModal {
  title: string;
  isModalOpen: boolean;
  onCancel: () => void;
  children: ReactNode;
  footer: ReactNode | null;
}
