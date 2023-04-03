import Image from 'next/image';
import React from 'react';

export const Certified = () => {
  return (
    <section className='flex flex-col items-center space-y-16 bg-[#F4F6F9] py-20  md:px-32 2xl:px-96'>
      <div className='relative'>
        <h1 className='text-3xl md:text-5xl'>Certificates and licensed</h1>
        <div className='absolute left-0 mt-2 h-0.5 w-20 bg-primary md:w-32'></div>
      </div>
      <div className='flex flex-col space-y-5 px-10 lg:flex-row lg:space-y-0 lg:space-x-10'>
        <div className='rounded-md bg-white p-5'>
          <Image
            width={500}
            height={300}
            src='/images/insurance.png'
            alt='Image'
          />
        </div>
        <div className='rounded-md bg-white p-5'>
          <Image
            width={500}
            height={300}
            src='/images/licensed.png'
            alt='Image'
          />
        </div>
      </div>
    </section>
  );
};
