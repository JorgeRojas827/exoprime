import Image from 'next/image';
import React from 'react';

import { useWindowSize } from '../../hooks/useWindowSize';

export const About = () => {
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
          height: 350,
        }}
        id='whoweare'
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
            <h1 className='text-3xl md:text-5xl'>About us</h1>
            <div className='absolute left-0 mt-2 h-0.5 w-20 bg-primary md:w-32'></div>
          </div>
          <h6 className='font-base mt-10 w-96 px-10 text-sm sm:px-0 md:w-[550px] md:text-xl md:font-medium lg:w-[700px] xl:mt-0'>
            Exoprime Services LLC is a company specializing in cleaning homes,{' '}
            cleaning commercial, industrial, institutional and recreational
            facilities throughout Salt Lake City County.
            <br />
            <br />
            We also offer Post Construction Cleaning services, in order to
            eliminate all the remains of excess materials, as well as the
            cleaning of paints, stains and remains of silicone and cement.
          </h6>
        </div>
      </section>
    </React.Fragment>
  );
};
