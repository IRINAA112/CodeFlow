import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button} from "@nextui-org/react";


export default function Problema({titlu, cerinta, autor, cod, link}:{titlu: string; cerinta:string; autor:string; cod:number; link:string}){
    return(
        <Card className="max-w-[600px] m-2 bg-[#271838]">
            <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                    <p className="text-md">{titlu}</p>
                    <p className="text-small text-default-500">{autor}</p>
                </div>
            </CardHeader>
            <Divider className="bg-purple-900" />
                <CardBody>
                    <p>{cerinta}</p>
                </CardBody>
            <Divider className="bg-purple-900"/>
            <CardFooter>
                <div className="flex gap-4 ">
                    <p className="border-1 rounded-xl text-center self-center p-2 border-purple-600">#{cod}</p>
                    <Button as={Link} href={link} variant="solid" color="secondary">Rezolvă</Button>
                </div>
            </CardFooter>
      </Card>
    );
}