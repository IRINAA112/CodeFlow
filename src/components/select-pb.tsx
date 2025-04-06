import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button
} from '@nextui-org/react';

export default function Selectpb({
  titlu,
  cerinta,
  autor,
  cod,
  link
}: {
  titlu: string;
  cerinta: string;
  autor: string;
  cod: number;
  link: string;
}) {
  return (
    <Card className='m-2 max-w-[600px] bg-[#271838]'>
      <CardHeader className='flex gap-3'>
        <div className='flex gap-4 justify-center'>
          <div className='flex flex-col'>
            <p className='text-md'>{titlu}</p>
            <p className='text-small text-default-500'>{autor}</p>
          </div>
          <p className='self-center rounded-xl border-1 border-purple-600 p-2 text-center'>
            #{cod}
          </p>
        </div>
      </CardHeader>
      <Divider className='bg-purple-900' />
      <CardBody>
        <p>{cerinta}</p>
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
}
