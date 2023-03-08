import Image from 'next/image';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { ICarousel } from './resources';
import { carouselImages } from '../carousel/resources';

export const CarouselComponent = () => {
  return (
    <Carousel>
      {carouselImages.map((e: ICarousel, i: number) => {
        return (
          <div key={i}>
            <div className='h-full w-full bg-black opacity-10 '></div>
            <Image width={500} height={500} src={e.path} alt='CarouselItem' />
          </div>
        );
      })}
    </Carousel>
  );
};
