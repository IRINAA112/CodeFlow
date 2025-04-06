'use client';
import Problema from '@default import route/components/exercitiu-card';
import Selectpb from '@default import route/components/select-pb';
import { Autocomplete, AutocompleteItem, Button, TimeInput } from '@nextui-org/react';
import { Key, useState } from 'react';
import {Time} from "@internationalized/date";

export default function App() {
  const probleme = [
    {
      key: '12345',
      label: 'Suma Gauss',
      cerinta: "Se citește n număr natural. Calculați suma numerelor naturale mai mici sau egale cu n.",
      autor: "autorproblema"
    },
    {
      key: '76545',
      label: 'Suma numrelor pare',
      cerinta: "Să se scrie un program care citește numărul natural n și determină suma 2+4+..+(2n).",
      autor: "auroeproblema"
    },
    {
      key: '329674',
      label: 'Factorial',
      cerinta: "SSă se scrie un program care citește numărul natural n și determină valoarea lui n!=1*2*3*...*n.",
      autor: "auroeproblema"
    }
  ];

  const [state, setState] = useState<Key[]>([]);
  const [selected, setSelected] = useState<Key | null>(null);

  return (
    <div className='flex h-screen w-full flex-col flex-wrap items-center gap-4 py-10 md:flex-nowrap'>
      <div className='flex justify-center gap-4'>
        <Autocomplete
          className='max-w-xs'
          defaultItems={probleme}
          placeholder='Caută o problemă'
          onSelectionChange={(key) => {
            setSelected(key);
          }}
        >
          {(item) => (
            <AutocompleteItem key={item.key}>{item.label}</AutocompleteItem>
          )}
        </Autocomplete>
        <Button className='w-full'
          onPress={() => {
            if (selected && !state.includes(selected)) {
              setState([...state, selected]);
            }
          }}
          color='secondary'
        >
          Adaugă problema în test
        </Button>
      </div>
      <div className='flex flex-col justify-center'>
        {probleme
          .filter((pb) => state.includes(pb.key))
          .map((pb) => (
            <Selectpb
              autor={pb.autor}
              cerinta={pb.cerinta}
              cod={+pb.key}
              link='/'
              titlu={pb.label}
              key={pb.key}
            />
          ))}
      </div>
      <div className='flex w-96 gap-2'>
        <TimeInput className='w-full' isRequired label="Începe testul la:" />
        <TimeInput className='w-full' isRequired label="Încheie testul la:" />
      </div>
      <Button color='secondary' className='w-96'>Creează test</Button>
    </div>
  );
}
