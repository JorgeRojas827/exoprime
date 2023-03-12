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
        <div className='flex items-center justify-center space-x-80'>
          <div className='relative'>
            <h1 className='text-5xl '>Acerca de nosotros</h1>
            <div className='absolute left-0 mt-2 h-0.5 w-32 bg-primary'></div>
          </div>
          <h6 className='text-xl font-medium'>
            Exoprime ofrece servicios de limpieza comercial en Salt Lake City,{' '}
            <br />
            UT y la comunidad circundante. Específicamente, nos complace servir{' '}
            <br />a clientes en Draper, Salt Lake City, Sandy, South and West
            Jordan y <br />
            West Valley City.{' '}
          </h6>
        </div>
      </section>
    </React.Fragment>
  );
};
