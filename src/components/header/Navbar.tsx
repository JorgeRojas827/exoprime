import Image from 'next/image';
import React from 'react';

import { NavbarItem } from '@/components/header/NavbarItem';

export const Navbar = () => {
  return (
    <nav className='grid grid-cols-12 items-center px-0  md:pr-10'>
      <Image
        className='col-span-6 md:col-span-3'
        width={237}
        height={68}
        src='/images/logo.png'
        alt='logo'
      />
      <div className='col-span-9 hidden items-center justify-between md:flex'>
        <NavbarItem href='#whoweare' title='About us' />
        <NavbarItem href='#cleaning' title='Cleaning Services' />
        <NavbarItem href='#homemaintenance' title='Home Maintenance' />
        <NavbarItem href='#quotation' title='Request a quote' />
      </div>
    </nav>
  );
};
