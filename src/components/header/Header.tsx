import Image from 'next/image';
import React from 'react';

export const Header = () => {
  return (
    <header className='hidden h-14 items-center justify-end space-x-10 bg-primary px-10 text-white md:flex'>
      <div className='flex items-center space-x-5'>
        <Image width={24} height={24} src='/images/Pin.png' alt='Pin icon' />
        <p className='text-xs font-semibold'>
          2563 SOUTH 3425 WEST, WEST VALLEY CITY, SAL LAKE CITY, UTAH
        </p>
      </div>
      <div className='flex items-center space-x-5'>
        <Image
          width={24}
          height={24}
          src='/images/Whatsapp1.png'
          alt='Pin icon'
        />
        <div className='flex space-x-2'>
          <p className='text-xs font-semibold'>+1 385 487 6109 /</p>
          <p className='text-xs font-semibold'>+1 385 487 6423</p>
        </div>
      </div>
    </header>
  );
};
