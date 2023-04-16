import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, IconButton } from '@mui/material';
import { List, ListItem, ListItemButton } from '@mui/material';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Image from 'next/image';
import React from 'react';

import { NavbarItem } from '@/components/header/NavbarItem';

const drawerWidth = 240;

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = (
    event?: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (event) {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
    }

    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className='flex h-full flex-col justify-between'>
      <div>
        <div className='flex justify-between bg-primary text-white'>
          <h5 className='p-3'>Navigation bar</h5>
          <IconButton onClick={(e) => handleDrawerToggle(e)}>
            <CloseIcon sx={{ color: 'white' }} />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <NavbarItem border={false} href='#whoweare' title='About us' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <NavbarItem
                border={false}
                href='#cleaning'
                title='Cleaning Services'
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <NavbarItem
                border={false}
                href='#homemaintenance'
                title='Home Maintenance'
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <NavbarItem
                border={false}
                href='#quotation'
                title='Request a quote'
              />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </div>
      <header className=' flex-col items-center justify-start space-y-5 bg-primary px-2 py-10 text-white md:flex'>
        <div className='flex items-center space-x-2'>
          <Image width={20} height={20} src='/images/Pin.png' alt='Pin icon' />
          <p className='text-xs font-semibold'>
            2563 SOUTH 3425 WEST, WEST VALLEY CITY, SAL LAKE CITY, UTAH
          </p>
        </div>
        <div className='flex items-center space-x-2'>
          <Image
            width={20}
            height={20}
            src='/images/Whatsapp1.png'
            alt='Pin icon'
          />
          <div className='flex space-x-2'>
            <p className='text-xs font-semibold'>+1 385 487 6109 /</p>
            <p className='text-xs font-semibold'>+1 385 487 6423</p>
          </div>
        </div>
      </header>
    </div>
  );

  return (
    <nav className='grid grid-cols-12 items-center px-0  md:pr-10'>
      <Image
        className='col-span-10 md:col-span-3'
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
      <IconButton
        color='inherit'
        aria-label='open drawer'
        edge='start'
        onClick={(e) => handleDrawerToggle(e)}
        className='col-span-2'
        sx={{ mr: 2, display: { md: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        sx={{
          display: { md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
        anchor='right'
        open={mobileOpen}
        onClose={() => handleDrawerToggle()}
        onOpen={() => handleDrawerToggle()}
      >
        {drawer}
      </SwipeableDrawer>
    </nav>
  );
};
