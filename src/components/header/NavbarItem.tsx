import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { useWindowSize } from '../../hooks/useWindowSize';

interface IProps {
  href: string;
  title: string;
}

export const NavbarItem = ({ href, title }: IProps) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const { width } = useWindowSize();
  const router = useRouter();

  return (
    <Link
      href={href}
      className={`flex flex-col font-medium text-title-primary  md:text-base ${
        width ? (width < 1000 ? 'text-xs' : 'text-base') : null
      }`}
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
