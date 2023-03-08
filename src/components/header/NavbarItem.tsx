import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

interface IProps {
  href: string;
  title: string;
}

export const NavbarItem = ({ href, title }: IProps) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const router = useRouter();

  return (
    <Link
      href={href}
      className='flex flex-col text-base font-medium  text-title-primary'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p>{title}</p>
      {(router.asPath === '/' + href || hovered) && (
        <div
          style={{ height: 2 }}
          className='w-16 self-center bg-primary'
        ></div>
      )}
    </Link>
  );
};
