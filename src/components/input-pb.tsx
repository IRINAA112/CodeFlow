import {Accordion, AccordionItem} from "@nextui-org/react";

export default function NewProblema({titlu, enunt}:{titlu: string; enunt: string}){
    return(
        <div className="w-96 p-1 items-center pl-5">
                <Accordion variant="splitted">
                <AccordionItem className="w-80 bg-purple-600" aria-label="Accordion 1" title={titlu}>
                    {enunt}
                </AccordionItem>
                </Accordion>
        </div>
    );
}