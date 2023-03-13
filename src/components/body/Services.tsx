import Image from 'next/image';
import React from 'react';

import { _services, IServices } from '@/components/body/resources';
import { SingleService } from '@/components/body/SingleService';

export const Services = () => {
  const [expanded, setExpanded] = React.useState<string | false>('oficinas');
  const [selectedImage, setSelected] = React.useState<string>(
    '/images/oficinas.png'
  );

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <section
      id='services'
      className='grid grid-cols-12 place-content-center gap-10 bg-primary py-32 text-white md:px-32 2xl:px-96'
    >
      <div className='col-span-12 px-16 sm:px-0 xl:col-span-6'>
        <div className='mb-10'>
          <h2 className='mb-3 text-3xl sm:text-4xl'>Brindamos servicios a</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            hendrerit et risus eu tempor.
          </p>
        </div>
        <div>
          {_services.map((service: IServices, index: number) => {
            return (
              <SingleService
                key={index}
                title={service.title}
                content={service.content}
                image={service.image}
                selectedImage={selectedImage}
                order={index + 1}
                handleChange={handleChange}
                setSelected={setSelected}
                tag={service.tag}
                expanded={expanded}
              />
            );
          })}
        </div>
      </div>
      <div className='col-span-6 hidden xl:block'>
        <Image
          width={583}
          height={726}
          src={selectedImage}
          alt='serviceImage'
        />
      </div>
    </section>
  );
};
