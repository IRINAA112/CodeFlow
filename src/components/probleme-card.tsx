

export default function ClasaProbleme({titlu, children}:{titlu: string; children: React.ReactNode;}){
    return(
        <div className="w-1/4 bg-purple-950 rounded-lg h-fit pb-4 my-6">
             <h1 className="pl-10 m-2 text-xl">{titlu}</h1>
             {children}
        </div>
    );
}