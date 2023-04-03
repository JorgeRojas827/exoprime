import Image from 'next/image';
import React from 'react';

import { useWindowSize } from '../../hooks/useWindowSize';

export const Quotation = () => {
  const { width } = useWindowSize();

  return (
    <React.Fragment>
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          height: 310,
        }}
        id='quotation'
      >
        <Image
          width={width ? width : 0}
          height={300}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
          }}
          src='/images/background.png'
          alt='Image'
        />
        <div className='flex flex-col items-center justify-center xl:flex-row xl:space-x-16 2xl:space-x-80'>
          <div className='relative'>
            <h1 className='text-center text-3xl font-normal  md:text-5xl'>
              Get a <span className='font-bold'>free quotation!</span>
            </h1>
          </div>
          <a
            href='https://wa.me/+13854876109?text=Hello,%20I came from the web of Exoprime Services%20I%20would%20like%20to%20ask%20for%20a%20quote,%20my%20situation%20is:%20'
            target='_blank'
            className='z-10 mt-5 flex w-60 items-center justify-evenly rounded-xl bg-primary py-3 font-semibold text-white hover:translate-y-px md:py-4  md:text-base xl:mt-0'
          >
            <Image width={35} height={35} src='/images/send.png' alt='Image' />
            Send message
          </a>
        </div>
      </section>
    </React.Fragment>
  );
};
