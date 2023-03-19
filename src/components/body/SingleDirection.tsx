import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useMediaQuery, useTheme } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Image from 'next/image';
import React, { SyntheticEvent } from 'react';

import { IValues } from './resources';

interface IProps {
  value: IValues;
  expanded: string | false;
  handleChange: (
    panel: string
  ) =>
    | ((event: SyntheticEvent<Element, Event>, expanded: boolean) => void)
    | undefined;
}

export const SingleDirection = ({ value, expanded, handleChange }: IProps) => {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <React.Fragment>
      {isMdUp ? (
        <div className='mb-8 grid grid-cols-12 rounded-3xl bg-white p-6 py-10'>
          <div className='col-span-3 flex items-center space-x-5'>
            <div className='grid place-content-center'>
              <Image
                width={24}
                height={24}
                src='/images/Checkmark.png'
                alt='Checkmark icon'
              />
            </div>
            <h6 className='border-b-2 border-primary text-lg font-bold  sm:text-2xl'>
              {value.title}
            </h6>
          </div>
          <div className='col-span-9'>{value.description}</div>
        </div>
      ) : (
        <Accordion
          expanded={expanded === value.title}
          onChange={handleChange(value.title)}
          sx={{
            background: 'white',
            boxShadow: 'none',
            '&:before': {
              backgroundColor: 'transparent !important',
            },
            marginBottom: isSmUp ? 3 : 1,
            borderRadius: '20px !important',
            padding: '15px',
          }}
          elevation={0}
        >
          <AccordionSummary
            sx={{
              borderBottom: 0,
            }}
            aria-controls={`${value.title}bh-content`}
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  width: '35px',
                  height: '35px',
                }}
              />
            }
            id={`${value.title}bh-header`}
          >
            <div className='flex items-center space-x-5'>
              <div className='grid place-content-center'>
                <Image
                  width={24}
                  height={24}
                  src='/images/Checkmark.png'
                  alt='Checkmark icon'
                />
              </div>
              <h6 className='border-b-2 border-primary text-lg font-bold  sm:text-2xl'>
                {value.title}
              </h6>
            </div>
          </AccordionSummary>
          <AccordionDetails>{value.description}</AccordionDetails>
        </Accordion>
      )}
    </React.Fragment>
  );
};
