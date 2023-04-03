import Image from 'next/image';
import React from 'react';

export const Footer = () => {
  return (
    <section
      id='services'
      className='relative grid grid-cols-12 place-content-center gap-10 bg-primary py-20 pb-32  md:px-32 2xl:px-72'
    >
      <div className='col-span-12 grid grid-cols-12 gap-y-10 lg:col-span-8'>
        <div className='col-span-12 mx-20 grid place-content-center rounded-xl bg-white py-2 px-3 sm:mx-0 sm:place-content-start sm:py-3 '>
          <Image
            className='col-span-6 md:col-span-3'
            width={237}
            height={68}
            src='/images/logo.png'
            alt='logo'
          />
        </div>
        <div className='col-span-12 hidden rounded-xl bg-white p-10 lg:block'>
          <h2>Acerca de nosotros</h2>
          <p className='mt-2'>
            Exoprime ofrece servicios de limpieza comercial en Salt Lake City,
            UT y la comunidad circundante. Específicamente, nos complace servir
            a clientes en Draper, Salt Lake City, Sandy, South and West Jordan y
            West Valley City.{' '}
          </p>
        </div>
      </div>
      <div className='col-span-12 mx-20 rounded-xl bg-white p-8 sm:mx-0 lg:col-span-4'>
        <h2>Contáctanos</h2>
        <div className='flex flex-col space-y-5'>
          <div className='mt-10 flex space-x-3'>
            <Image
              width={30}
              height={30}
              src='/images/whatsappfooter.png'
              alt='logo'
            />
            <p>+1 385 487 6109</p>
            <p>+1 385 487 6423</p>
          </div>
          <div className='flex space-x-3'>
            <Image
              width={33}
              height={33}
              src='/images/placeImage.png'
              alt='logo'
            />
            <p className='text-xs'>
              2563 SOUTH 3425 WEST, WEST <br /> VALLEY CITY, SAL LAKE CITY, UTAH
            </p>
          </div>
          <div className='flex space-x-3'>
            <Image width={30} height={30} src='/images/email.png' alt='logo' />
            <p>exoprimeservices@gmail.com</p>
          </div>
        </div>
        <div className='mt-8 flex items-center justify-center space-x-3'>
          <Image width={33} height={33} src='/images/twitter.png' alt='logo' />
          <Image width={33} height={33} src='/images/facebook.png' alt='logo' />
          <Image
            width={33}
            height={33}
            src='/images/instagram.png'
            alt='logo'
          />
        </div>
      </div>
      <div className='absolute bottom-0 grid h-14 w-full place-content-center border-t border-white border-opacity-30 text-white '>
        © Copyright 2023. All Rights Reserved.
      </div>
    </section>
  );
};
