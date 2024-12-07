'use client'
import Link from "next/link";

export default function Home() {
  return (
    <div className=" pt-8 px-8 text-center" >
      <h1 className="font-semibold text-3xl mb-1 border-b-1 border-b-purple-800 pb-2 pl-2 flex-wrap"><span className="text-purple-300">Rezolvă</span> probleme. <span className="text-purple-300">Verifică</span> soluții. <span className="text-purple-300">Testează</span>-ți abilitățile!</h1>
      <p className="pt-4"> Bine ai venit pe platforma care îți duce abilitățile de programare la următorul nivel! Indiferent dacă ești elev, student sau profesor, aici găsești un mediu complet pentru învățare, practică și evaluare!</p>
      <div className="flex flex-row items-center justify-center pt-4 border-dashed border-b-1 border-b-purple-800 gap-1">
        <p className="fa-solid fa-check-double "/>
        <h2 className="font-semibold text-2xl ">Ce poți face pe platforma noastră?</h2>
      </div>
      <div className="pt-4">
        <p className="text-lg">• Rezolvă probleme de informatică
        </p>
        <p className="">Explorează o gamă largă de probleme structurate pe niveluri de dificultate:</p>
      </div>
      <ul className="pt-2">
        <li>Începători – Noțiuni de bază și algoritmi simpli.</li>
        <li>Intermediari – Structuri de date și algoritmi mai complecși.</li>
        <li>Avansați – Probleme de concurs și optimizare.</li>
      </ul>
      <div className="pt-4">
        <p className="text-lg">• Verifică-ți soluțiile în timp real
        </p>
        <p className="pt-2"> Codul tău este evaluat instant! Primești feedback detaliat pentru fiecare problemă, astfel încât să știi exact unde poți îmbunătăți.</p>
      </div>
      <div className="pt-4">
        <p className="text-lg">• Testează-te sub presiune
        </p>
        <p className="">Funcția noastră unică de teste pe cronometru îți permite să:</p>
      </div>
      <ul className="pt-2">
        <li>Simulezi concursuri de informatică.</li>
        <li>Antrenezi viteza de rezolvare pentru examene.</li>
        <li>Organizezi evaluări cronometrate pentru profesori care doresc să susțină teste rapide și eficiente în clasă.</li>
      </ul>
      <div className="flex flex-row items-center justify-center pt-4 border-dashed border-b-1 border-b-purple-800 gap-1">
        <p className="fa-regular fa-graduation-cap"/>
        <h2 className="font-semibold text-2xl ">De ce este ideal pentru profesori?</h2>
      </div>
      <ul className="pt-2">
        <li>Organizare ușoară a testelor: Creează teste pe cronometru pentru clase întregi.</li>
        <li>Evaluare automată: Economisește timp cu verificarea automată a soluțiilor.</li>
        <li>Monitorizare performanță: Analizează rezultatele elevilor și oferă feedback personalizat.</li>
      </ul>
      <div className="flex flex-row items-center justify-center pt-4 border-dashed border-b-1 border-b-purple-800 gap-1">
        <p className="fa-regular fa-rocket"/>
        <h2 className="font-semibold text-2xl ">Limbaje de programare acceptate:</h2>
      </div>
      <p className="pt-2">Explorează și perfecționează-ți abilitățile în limbajele disponibile pe platforma noastră: C, C++ și Python – fundamentale pentru algoritmi și rezolvarea problemelor.</p>
      <div className="flex gap-1 justify-center pb-10">
        <p>Află mai multe despre limbajele acceptate și caracteristicile fiecăruia pe </p>
        <Link className="underline" href="/limbaje">pagina dedicată.</Link>
      </div>
      <div className="flex gap-2 items-center justify-center">
        <p className="fa-regular fa-hand-point-right"/>
        <Link href="/register" className="text-xl underline">Fă-ți un cont gratuit și începe să rezolvi probleme astăzi!</Link>
        <p className="fa-regular fa-hand-point-left" />
      </div>
      <p className="pb-10">Indiferent dacă înveți pentru concursuri, pentru examene sau vrei doar să îți perfecționezi abilitățile, această platformă îți oferă toate resursele necesare.</p>
    </div>
  );
}
