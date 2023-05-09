import { ReactNode } from 'react';

import { CarouselEffect } from 'antd/es/carousel';

export interface IQBCarousel {
    children: ReactNode;
    onChange?: () => any;
    effect?: CarouselEffect;
}
