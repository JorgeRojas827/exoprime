import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { useWindowSize } from '../../hooks/useWindowSize';

interface IProps {
  href: string;
  title: string;
  border?: boolean;
}

export const NavbarItem = ({ href, title, border = true }: IProps) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const { width } = useWindowSize();
  const router = useRouter();

  const handleClick = () => {
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <Link
      href={href}
      className={`flex flex-col font-medium text-title-primary  md:text-base ${
        width ? (width < 1000 ? 'text-xs' : 'text-base') : null
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
    >
      <p>{title}</p>
      {(router.asPath === '/' + href || hovered) && border && (
        <div
          style={{ height: 2 }}
          className='w-16 self-center bg-primary'
        ></div>
      )}
    </Link>
  );
};
