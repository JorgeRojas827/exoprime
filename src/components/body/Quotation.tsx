import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import React, { useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { object, string, TypeOf } from 'zod';

import { useWindowSize } from '../../hooks/useWindowSize';

const validationSchema = object({
  name: string().min(1, 'Name is required.'),
  message: string()
    .min(1, 'Message is required.')
    .max(500, 'Message is too long.'),
  number: string()
    .min(1, 'Phone Number is required.')
    .refine(
      (value) => /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/.test(value),
      'Phone Number format must be correct. (123) 123-1234'
    ),
  email: string()
    .min(1, 'Email is required.')
    .email('Email invalid. example@example.com'),
});

type TEmailForm = TypeOf<typeof validationSchema>;

export const Quotation = () => {
  const { width } = useWindowSize();
  const { register, handleSubmit, formState } = useForm<TEmailForm>({
    resolver: zodResolver(validationSchema),
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const form = useRef<any>();

  const onSubmitHandler: SubmitHandler<TEmailForm> = () => {
    emailjs
      .sendForm(
        'service_0nqk65l',
        'template_0j3pc9s',
        form.current,
        '3LHpLM91wGMgBPGTo'
      )
      .then(
        () => {
          toast.success('Email sent successfully!');
        },
        () => {
          toast.error('A problem occurred, please try again.');
        }
      );
  };

  return (
    <React.Fragment>
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          height: 620,
        }}
        id='quotation'
      >
        <div className='relative mb-8'>
          <h1 className='text-2xl md:text-3xl'>Get a free quotation</h1>
          <div className='absolute left-0 mt-2 h-0.5 w-20 bg-primary md:w-24'></div>
        </div>
        <Image
          width={width ? width : 0}
          height={300}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: -10,
          }}
          src='/images/background.png'
          alt='Image'
        />
        <Image
          width={width ? width : 0}
          height={300}
          style={{
            position: 'absolute',
            top: 312,
            left: 0,
            width: '100%',
            zIndex: -10,
          }}
          src='/images/background.png'
          alt='Image'
        />
        <form
          ref={form}
          className='flex w-3/4 flex-col space-y-4 lg:w-1/4'
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <div className='flex flex-col'>
            <label htmlFor='name'>Name</label>
            <input
              placeholder='Insert name'
              {...register('name')}
              className='rounded-md outline-none ring-0 focus:border-transparent focus:outline-none focus:ring-primary'
              autoComplete='off'
              type='text'
            />
            {formState.errors.name && (
              <span className='mt-0 block text-xs text-red-500'>
                {formState.errors.name?.message as string}
              </span>
            )}
          </div>
          <div className='flex flex-col'>
            <label htmlFor='number'>Phone Number</label>
            <input
              placeholder='Insert phone number'
              {...register('number')}
              className='rounded-md outline-none ring-0 focus:border-transparent focus:outline-none focus:ring-primary'
              autoComplete='off'
              type='text'
            />
            {formState.errors.number && (
              <span className='mt-0 block text-xs text-red-500'>
                {formState.errors.number?.message as string}
              </span>
            )}
          </div>
          <div className='flex flex-col'>
            <label htmlFor='email'>Email</label>

            <input
              placeholder='Insert email'
              {...register('email')}
              className='rounded-md outline-none ring-0 focus:border-transparent focus:outline-none focus:ring-primary'
              autoComplete='off'
              type='text'
            />
            {formState.errors.email && (
              <span className='mt-0 block text-xs text-red-500'>
                {formState.errors.email?.message as string}
              </span>
            )}
          </div>
          <div className='flex flex-col'>
            <label htmlFor='message'>Message</label>

            <textarea
              placeholder='Insert message'
              style={{ resize: 'none' }}
              {...register('message')}
              className='h-20 rounded-md outline-none ring-0 focus:border-transparent focus:outline-none focus:ring-primary'
              autoComplete='off'
            />
            {formState.errors.message && (
              <span className='mt-0 block text-xs text-red-500'>
                {formState.errors.message?.message as string}
              </span>
            )}
          </div>
          <button
            className=' rounded-md bg-primary p-3 text-white'
            type='submit'
          >
            Send
          </button>
        </form>
      </section>
    </React.Fragment>
  );
};
