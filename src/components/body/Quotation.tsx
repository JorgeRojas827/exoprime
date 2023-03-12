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
              ¡Obtén una cotización <span className='font-bold'>gratuita!</span>
            </h1>
          </div>
          <button className='z-10 mt-5 flex w-60 items-center justify-evenly rounded-xl bg-primary py-3 font-semibold text-white hover:translate-y-px md:py-4  md:text-base xl:mt-0'>
            <Image width={35} height={35} src='/images/send.png' alt='Image' />
            Enviar mensaje
          </button>
        </div>
      </section>
    </React.Fragment>
  );
};
