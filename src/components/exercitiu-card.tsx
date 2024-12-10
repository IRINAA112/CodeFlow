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

export default function Problema({
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
        <div className='flex flex-col'>
          <p className='text-md'>{titlu}</p>
          <p className='text-small text-default-500'>{autor}</p>
        </div>
      </CardHeader>
      <Divider className='bg-purple-900' />
      <CardBody>
        <p>{cerinta}</p>
      </CardBody>
      <Divider className='bg-purple-900' />
      <CardFooter>
        <div className='flex gap-4'>
          <p className='self-center rounded-xl border-1 border-purple-600 p-2 text-center'>
            #{cod}
          </p>
          <Button as={Link} href={link} variant='solid' color='secondary'>
            Rezolvă
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
