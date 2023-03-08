import Link from 'next/link';
import React, { useState } from 'react';

interface IProps {
  href: string;
  title: string;
}

export const NavbarItem = ({ href, title }: IProps) => {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <Link
      href={href}
      className='flex flex-col text-base font-medium  text-title-primary'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p>{title}</p>
      {(location.href.slice(
        location.href.indexOf('#'),
        location.href.length
      ) === href ||
        hovered) && (
        <div
          style={{ height: 2 }}
          className='w-16 self-center bg-primary'
        ></div>
      )}
    </Link>
  );
};
