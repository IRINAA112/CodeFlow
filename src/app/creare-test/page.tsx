'use client'
import { Autocomplete, AutocompleteItem, Button } from "@nextui-org/react";


export default function App(){
    const probleme=[{
        key:"1",
        label:"Suma Gauss"
    },{
        key:"2",
        label:"Suma numrelor pare"
    },{
        key:"3",
        label:"Factorial"
    }]


    return(
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 h-screen justify-center py-10">
      <Autocomplete
        className="max-w-xs "
        defaultItems={probleme}
        placeholder="Caută o problemă"

      >
        {(item) => <AutocompleteItem key={item.key}>{item.label}</AutocompleteItem>}
      </Autocomplete>
      <Button color="secondary"> Adaugă problema în test</Button>
    </div>
    );
}