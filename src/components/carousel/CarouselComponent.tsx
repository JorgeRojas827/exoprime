import Image from 'next/image';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { ICarousel } from './resources';
import { carouselImages } from '../carousel/resources';
import { useWindowSize } from '../../hooks/useWindowSize';

export const CarouselComponent = () => {
  const { width, height } = useWindowSize();

  return (
    <Carousel
      interval={5000}
      autoPlay={true}
      showStatus={false}
      showThumbs={false}
      renderArrowPrev={(clickHandler, hasPrev) => {
        return (
          <div className='hidden md:block'>
            <div
              className={`${
                hasPrev ? 'absolute' : 'hidden'
              } top-0 bottom-0 left-0 z-20  flex cursor-pointer items-center justify-center p-3 pl-10`}
              onClick={clickHandler}
            >
              <Image
                width={24}
                height={41}
                src='/images/LeftArrow.png'
                alt='CarouselItem'
              />
            </div>
          </div>
        );
      }}
      renderArrowNext={(clickHandler, hasNext) => {
        return (
          <div className='hidden md:block'>
            <div
              className={`${
                hasNext ? 'absolute' : 'hidden'
              } top-0 bottom-0 right-0 z-20  flex cursor-pointer items-center justify-center p-3 pr-10`}
              onClick={clickHandler}
            >
              <Image
                width={24}
                height={41}
                src='/images/RightArrow.png'
                alt='CarouselItem'
              />
            </div>
          </div>
        );
      }}
    >
      {carouselImages.map((e: ICarousel, i: number) => {
        return (
          <div className='relative h-full w-full ' key={i}>
            <div
              className='absolute left-0 top-0 h-full w-full'
              style={{
                backgroundColor: ' rgba(60, 60, 60, 0.79)',
              }}
            ></div>
            <div className='absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center space-y-3 text-white'>
              <h1 className='px-6 text-4xl font-extrabold md:px-0 md:text-5xl'>
                Servicios más allá de las expectativas
              </h1>
              <h6 className='text-base md:text-xl'>
                Creando soluciones, un cliente a la vez
              </h6>
              <button className='w-60 rounded-xl bg-primary py-3 font-semibold hover:translate-y-px  md:w-96 md:py-4 md:text-base'>
                ¡Obten una cotización gratuita!
              </button>
            </div>
            <Image
              width={width ? width : 0}
              height={height ? height : 0}
              style={{
                width: width,
                height: width
                  ? width < 1000
                    ? height
                      ? height - 300
                      : 0
                    : height
                    ? height - 150
                    : 0
                  : 0,
              }}
              src={e.path}
              alt='CarouselItem'
            />
          </div>
        );
      })}
    </Carousel>
  );
};
