import React from 'react';

import { SingleDirection } from '@/components/body/SingleDirection';

import { _values, IValues } from './resources';

export const Direction = () => {
  const [expanded, setExpanded] = React.useState<string | false>('');
  const handleChange =
    (title: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? title : false);
    };
  return (
    <section
      id='wherego'
      className='flex flex-col bg-[#F4F6F9] py-20  md:px-32 2xl:px-96'
    >
      {_values.map((value: IValues, index: number) => {
        return (
          <React.Fragment key={index}>
            <SingleDirection
              handleChange={handleChange}
              expanded={expanded}
              value={value}
            />
          </React.Fragment>
        );
      })}
    </section>
  );
};
