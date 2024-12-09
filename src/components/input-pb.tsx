import {Accordion, AccordionItem} from "@nextui-org/react";
import Link from "next/link";

export default function NewProblema({titlu, enunt, pagina}:{titlu: string; enunt: string; pagina:string}){
    return(
        <div className="w-96 p-1 items-center pl-5">
                    <Accordion variant="splitted">
                        
                    <AccordionItem className="w-80 bg-purple-900" aria-label="Accordion 1" title={titlu}>
                        <Link href={pagina}>{enunt}</Link>
                    </AccordionItem>
                    </Accordion>
        </div>
    );
}