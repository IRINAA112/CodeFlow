'use client';
import Problema from '@default import route/components/exercitiu-card';

export default function App() {
  return (
    <div className='flex flex-col items-center justify-evenly'>
      <div>
        <h1 className='border-b-1 border-b-purple-900 pt-4 text-center text-3xl font-semibold'>
          Sume, Produse, numărări
        </h1>
      </div>
      <div className='my-6 h-fit content-center gap-4 rounded-lg pb-4'>
        <Problema
          titlu='Suma Gauss'
          cod={12345}
          link='/rezolvare/12345'
          autor='cinevaidk'
          cerinta='Se citește n număr natural. Calculați suma numerelor naturale mai mici sau egale cu n.'
        />
        <Problema
          titlu='Suma nr Pare'
          cod={76545}
          link='rezolvare'
          autor='cinevaidk'
          cerinta='Să se scrie un program care citește numărul natural n și determină suma 2+4+..+(2n).'
        />
        <Problema
          titlu='Factorial'
          cod={29674}
          link='rezolvare'
          autor='cinevaidk'
          cerinta='Să se scrie un program care citește numărul natural n și determină valoarea lui n!=1*2*3*...*n.'
        />
      </div>
    </div>
  );
}
