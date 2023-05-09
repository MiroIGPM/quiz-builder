import { ReactNode } from 'react';

export interface IQBListProps {
  className?: string;
  dataSource: any;
  itemLayout: ILayout;
  bordered: boolean;
  actions?: ReactNode[];
  itemRender?: (item: any) => ReactNode;
}

export enum ILayout {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical'
}
