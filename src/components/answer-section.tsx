'use client';

import { Textarea, Button } from '@nextui-org/react';

export function AnswerSection() {
  return (
    <div className='flex flex-col gap-2 pt-4'>
      <h1 className='text-3xl text-purple-200'>Încearcă să rezolvi!</h1>
      <Textarea
        disableAutosize
        classNames={{
          input: '!h-full',
          inputWrapper: '!h-[40rem]'
        }}
        className='!h-[40rem] text-white'
        placeholder='Introdu rezolvarea'
        variant='faded'
      />
      <Button color='secondary' className='w-full mb-10'>
        Verifică
      </Button>
    </div>
  );
}
