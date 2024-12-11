'use client';

import { Card, CardBody } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';

export function ExampleCard({
  intrare,
  iesire
}: {
  intrare: string;
  iesire: string;
}) {
  return (
    <Card>
      <CardBody className='bg-purple-300'>
        <p className='text-lg font-semibold text-black'>Intrare</p>
        <p className='px-2 text-black'>{intrare}</p>
        <Divider className='bg-purple-950' />
        <p className='text-lg font-semibold text-black'>Ieșire</p>
        <p className='px-2 text-black'>{iesire}</p>
      </CardBody>
    </Card>
  );
}
