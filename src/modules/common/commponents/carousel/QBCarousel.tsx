import { Carousel } from 'antd';
import { FC } from 'react';

import { IQBCarousel } from './models/carousel.props';

export const QBCarousel: FC<IQBCarousel> = ({ children, onChange, effect }) => {
  return (
    <Carousel afterChange={onChange} effect={effect}>
      {children}
    </Carousel>
  );
};
