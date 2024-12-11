import { AnswerSection } from '@default import route/components/answer-section';
import { ExampleCard } from '@default import route/components/exaple-card';
import { LanguageDropdown } from '@default import route/components/language-dropdown';

export default async function App({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className='gap-6'>
      <div className='flex items-center gap-4 pt-5'>
        <h1 className='min-w-fit indent-20 text-3xl font-semibold'>
          Suma Gauss
        </h1>
        <p className='self-center rounded-xl border-1 border-purple-600 p-2 text-center'>
          #{id}
        </p>
        <div className='flex w-full flex-wrap gap-4 md:flex-nowrap'>
          <LanguageDropdown />
        </div>
      </div>
      <div className='px-10 pt-4'>
        <div className='gap-2 border-b-1 border-b-purple-700 pt-2'>
          <h1 className='text-3xl text-purple-200'>Cerința</h1>
          <p className='text-lg'>
            Se citește n număr natural. Calculați suma tuturor numerelor
            naturale mai mici sau egale cu n.
          </p>
        </div>
        <div className='gap-2 border-b-1 border-b-purple-700 pt-4'>
          <h1 className='text-3xl text-purple-200'>Date de intrare</h1>
          <p className='text-lg'>
            Programul citește de la tastatură numărul n, număr natural.
          </p>
        </div>
        <div className='gap-2 border-b-1 border-b-purple-700 pt-4'>
          <h1 className='text-3xl text-purple-200'>Date de ieșire</h1>
          <p className='text-lg'>
            Programul va afișa pe ecran numărul S, reprezentând suma numerelor
            mai mici sau egale cu n.
          </p>
        </div>
        <div className='gap-2 border-b-1 border-b-purple-700 pt-4'>
          <h1 className='text-3xl text-purple-200'>Restricții și precizări</h1>
          <p className='text-lg'>n ≤ 1.000.000</p>
        </div>

        <div className='gap-2 border-b-1 border-b-purple-700 pt-4'>
          <h1 className='pb-2 text-3xl text-purple-200'>Exemplu</h1>
          <ExampleCard intrare={'7'} iesire={'28'}  />
        </div>
        <div className='gap-2 border-b-1 border-b-purple-700 pt-4'>
          <h1 className='text-3xl text-purple-200'>Explicație</h1>
          <p className='text-lg'>1+2+3+4+5+6+7=28</p>
        </div>
        <AnswerSection />
      </div>
    </div>
  );
}
