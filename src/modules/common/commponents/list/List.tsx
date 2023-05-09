import { List } from 'antd';
import { FC, ReactNode } from 'react';

import { IQBListProps } from './models/list.props';

export const QBList: FC<IQBListProps> = ({ className, dataSource, itemLayout, bordered, actions, itemRender }) => {
  const renderItem = (item: any): ReactNode => {
    if (itemRender) {
      return itemRender(item);
    }
    return (
      <List.Item actions={actions}>
        <div>{item.name}</div>
      </List.Item>
    );
  };

  return (
    <List
      className={className}
      dataSource={dataSource}
      itemLayout={itemLayout}
      bordered={bordered}
      renderItem={(item) => renderItem(item)}
    />
  );
};
