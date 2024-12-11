'use client';

import { Textarea, Button } from '@nextui-org/react';

export function AnswerSection() {
  return (
    <div className='gap-2 pt-4'>
      <h1 className='text-3xl text-purple-200'>Încearcă să rezolvi!</h1>
      <Textarea
        disableAutosize
        classNames={{
          input: '!h-full',
          inputWrapper: '!h-[40rem]'
        }}
        className='!h-[40rem] text-black'
        placeholder='Introdu rezolvarea'
        variant='faded'
      />
      <Button color='secondary' className='w-full'>
        Verifică
      </Button>
    </div>
  );
}
