'use client';

import { Button, Card, CardBody, Divider, Input, Select, SelectItem, Textarea } from '@nextui-org/react';

export default function App() {
  const limbaje = [
    { key: 'c', label: 'C' },
    { key: 'c++', label: 'C++' },
    { key: 'python', label: 'Python' }
  ];
  return (
    <div className='gap-6'>
      <div className='flex items-center gap-4 pt-5'>
        <h1 className='min-w-fit indent-20 text-3xl font-semibold'>
          Suma Gauss
        </h1>
        <p className='self-center rounded-xl border-1 border-purple-600 p-2 text-center'>
          #12345
        </p>
        <div className='flex w-full flex-wrap gap-4 md:flex-nowrap'>
          <Select
            className='max-w-xs bg-black'
            label='Alege un limbaj'
            color='secondary'
          >
            {limbaje.map((limbaj) => (
              <SelectItem key={limbaj.key}>{limbaj.label}</SelectItem>
            ))}
          </Select>
        </div>
      </div>
      <div className='px-10 pt-4'>
        <div className='gap-2 border-b-1 border-b-purple-700 pt-2'>
          <h1 className='text-3xl text-purple-200'>Cerința</h1>
          <p className='text-lg'>
            Se citește n număr natural. Calculați suma tuturor numerelor
            naturale mai mici sau egale cu n.
          </p>
        </div>
        <div className='gap-2 border-b-1 border-b-purple-700 pt-4'>
          <h1 className='text-3xl text-purple-200'>Date de intrare</h1>
          <p className='text-lg'>
            Programul citește de la tastatură numărul n, număr natural.
          </p>
        </div>
        <div className='gap-2 border-b-1 border-b-purple-700 pt-4'>
          <h1 className='text-3xl text-purple-200'>Date de ieșire</h1>
          <p className='text-lg'>
            Programul va afișa pe ecran numărul S, reprezentând suma numerelor
            mai mici sau egale cu n.
          </p>
        </div>
        <div className='gap-2 border-b-1 border-b-purple-700 pt-4'>
          <h1 className='text-3xl text-purple-200'>Restricții și precizări</h1>
          <p className='text-lg'>n ≤ 1.000.000</p>
        </div>

        <div className='gap-2 border-b-1 border-b-purple-700 pt-4'>
          <h1 className='pb-2 text-3xl text-purple-200'>Exemplu</h1>
          <Card>
            <CardBody className='bg-purple-300'>
              <p className='text-lg font-semibold text-black'>Intrare</p>
              <p className='px-2 text-black'>7</p>
              <Divider className='bg-purple-950' />
              <p className='text-lg font-semibold text-black'>Ieșire</p>
              <p className='px-2 text-black'>28</p>
            </CardBody>
          </Card>
        </div>
        <div className='gap-2 border-b-1 border-b-purple-700 pt-4'>
          <h1 className='text-3xl text-purple-200'>Explicație</h1>
          <p className='text-lg'>1+2+3+4+5+6+7=28</p>
        </div>

        <div className='gap-2 pt-4'>
          <h1 className='text-3xl text-purple-200'>Încearcă să rezolvi!</h1>
        <Textarea
          className="text-black pb-5 w-full h-full"
          placeholder="Introdu rezolvarea"
          variant="faded"
        />
        <Button color='secondary' className='w-full'>Verifică</Button>

        </div>
      </div>
    </div>
  );
}
