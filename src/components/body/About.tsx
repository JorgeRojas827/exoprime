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
          height: 310,
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
            <h1 className='text-3xl md:text-5xl'>Acerca de nosotros</h1>
            <div className='absolute left-0 mt-2 h-0.5 w-20 bg-primary md:w-32'></div>
          </div>
          <h6 className='font-base mt-10 px-10 text-sm sm:px-0 md:text-xl md:font-medium xl:mt-0'>
            Exoprime ofrece servicios de limpieza comercial en Salt Lake City,{' '}
            {width ? width > 400 && <br /> : null}
            UT y la comunidad circundante. Específicamente, nos complace servir{' '}
            {width ? width > 400 && <br /> : null}
            City, Sandy, South and West Jordan y{' '}
            {width ? width > 400 && <br /> : null}
            West Valley City.{' '}
          </h6>
        </div>
      </section>
    </React.Fragment>
  );
};
