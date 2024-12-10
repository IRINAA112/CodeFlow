export default function ClasaProbleme({
  titlu,
  children
}: {
  titlu: string;
  children: React.ReactNode;
}) {
  return (
    <div className='my-6 h-fit w-1/4 rounded-2xl bg-purple-950 pb-4'>
      <h1 className='m-2 pl-10 text-xl'>{titlu}</h1>
      {children}
    </div>
  );
}
