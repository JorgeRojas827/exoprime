import Image from 'next/image';
import React from 'react';

import { _attributes, IAttributes } from './resources';

export const Attributes = () => {
  return (
    <section className='grid grid-cols-12 place-content-center gap-10 py-32 md:px-32 2xl:px-96'>
      {_attributes.map((e: IAttributes, index: number) => {
        return (
          <div
            className='col-span-12 flex flex-col items-center justify-center space-y-3 px-16 text-center sm:px-0 md:col-span-6'
            key={index}
          >
            <Image width={32} height={32} src={e.icon} alt='icon' />
            <h2>{e.title}</h2>
            <p>{e.content}</p>
          </div>
        );
      })}
    </section>
  );
};
