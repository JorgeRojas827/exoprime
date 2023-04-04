import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import React, { SyntheticEvent } from 'react';

import { IServices } from './resources';

interface IProps extends IServices {
  expanded: string | false;
  handleChange: (
    panel: string
  ) =>
    | ((event: SyntheticEvent<Element, Event>, expanded: boolean) => void)
    | undefined;
  order: number;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  selectedImage: string;
}

export const SingleService = ({
  expanded,
  handleChange,
  title,
  content,
  order,
  tag,
  image,
  list,
  setSelected,
  selectedImage,
}: IProps) => {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Accordion
      expanded={expanded === tag}
      onChange={handleChange(tag)}
      sx={{
        background: 'transparent',
        boxShadow: 'none',
        color: 'white',
        borderBottom: 0,
        '&:before': {
          backgroundColor: 'transparent !important',
        },
        marginBottom: isSmUp ? 3 : 1,
      }}
      elevation={0}
      onClick={() => setSelected(image)}
      id={tag}
    >
      <AccordionSummary
        sx={{
          borderBottom: 0,
        }}
        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
        aria-controls={`${tag}bh-content`}
        id={`${tag}bh-header`}
      >
        <div className='flex items-center space-x-5'>
          <div
            className='grid h-10 w-10 place-content-center rounded-full'
            style={{
              backgroundColor:
                expanded === tag || selectedImage === image
                  ? 'white'
                  : 'transparent',
              border:
                expanded === tag || selectedImage === image
                  ? 'none'
                  : '2px solid white',
            }}
          >
            <p
              className='text-lg font-bold text-primary'
              style={{
                color:
                  expanded === tag || selectedImage === image
                    ? 'rgb(252, 46, 46)'
                    : 'white',
              }}
            >
              {order}
            </p>
          </div>
          <h6 className='text-2xl font-bold sm:text-4xl'>{title}</h6>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <p>{content}</p>
        {list && (
          <ul>
            {list.map((item, index: number) => {
              return (
                <li className='mt-5' key={index}>
                  • {item}
                </li>
              );
            })}
          </ul>
        )}
      </AccordionDetails>
    </Accordion>
  );
};
