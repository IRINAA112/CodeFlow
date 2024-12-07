'use client'
import Link from "next/link";

export default function Home() {
  return (
    <div className=" pt-8 text-center" >
      <h1 className="font-semibold text-3xl mb-1 border-b-1 border-b-purple-800 pb-2 pl-2 flex-wrap">Explorează limbajele acceptate de platforma noastră</h1>
      <p className="pt-4"> Fiecare limbaj de programare are specificul său și este potrivit pentru diferite tipuri de probleme. Află mai jos cum te poți antrena și perfecționa folosind C, C++ și Python.</p>
      <div className="flex flex-row items-center justify-center pt-4 border-dashed border-b-1 border-b-purple-800 gap-1">
        <p className="fa-regular fa-file-code"/>
        <h2 className="font-semibold text-2xl "><span className="text-purple-300">C</span> – Fundamentul programării eficiente</h2>
      </div>
      <p className="indent-2 pt-2">Limbaj cunoscut pentru:</p>
      <ul className="pt-2 indent-4">
        <li>• Simplitate și performanță ridicată.</li>
        <li>• Control direct asupra memoriei.</li>
        <li>• Ideal pentru probleme care necesită optimizări fine sau manipulare avansată a resurselor.</li>
      </ul>
      <p className="text-xl pt-2">Ce oferim pentru C?</p>
      <ul className="pt-2 indent-4">
        <li>• Probleme care te ajută să înțelegi pointeri, structuri și alocarea dinamică a memoriei.</li>
        <li>• Verificare automată a codului pentru a-ți evalua soluțiile imediat.</li>
        <li>• Feedback detaliat privind utilizarea resurselor și eficiența soluției.</li>
      </ul>

      <div className="flex flex-row items-center justify-center pt-4 border-dashed border-b-1 border-b-purple-800 gap-1">
        <p className="fa-regular fa-file-code"/>
        <h2 className="font-semibold text-2xl "><span className="text-purple-300">C++</span> – Puterea OOP și flexibilitatea</h2>
      </div>
      <p className="indent-2 pt-2">Extensia naturală a limbajului C, care introduce:</p>
      <ul className="pt-2 indent-4">
        <li>• Programare orientată pe obiecte (OOP).</li>
        <li>• Biblioteci bogate și STL (Standard Template Library) pentru a rezolva probleme rapid și eficient.</li>
      </ul>
      <p className="text-xl pt-2">Ce oferim pentru C++?</p>
      <ul className="pt-2 indent-4">
        <li>• Probleme care te provoacă să folosești clase, șabloane (templates) și STL.</li>
        <li>• Suport pentru algoritmi avansați și structuri de date complexe.</li>
        <li>• Evaluare automată care analizează atât corectitudinea, cât și eficiența algoritmului.</li>
      </ul>

      <div className="flex flex-row items-center justify-center pt-4 border-dashed border-b-1 border-b-purple-800 gap-1">
        <p className="fa-regular fa-file-code "/>
        <h2 className="font-semibold text-2xl "><span className="text-purple-300">Python</span> – Simplitate și versatilitate</h2>
      </div>
      <p className="indent-2 pt-2">Un limbaj popular datorită:</p>
      <ul className="pt-2 indent-4">
        <li>• Sintaxei clare și ușor de învățat.</li>
        <li>• Bibliotecilor puternice pentru matematică, știință și prelucrare de date.</li>
        <li>• Potrivit pentru prototipare rapidă și probleme care necesită rezolvări concise.</li>
      </ul>
      <p className="text-xl pt-2">Ce oferim pentru Python?</p>
      <ul className="pt-2 indent-4">
        <li>• Probleme care te învață să scrii cod elegant și optimizat.</li>
        <li>• Utilizare practică a bibliotecilor standard și abordarea rapidă a algoritmilor.</li>
        <li>• Evaluare instantă, inclusiv pentru soluții care implică parsing de date sau manipulări complexe de text.
        </li>
      </ul>

      <div className="flex flex-row items-center justify-center pt-4 border-dashed border-b-1 border-b-purple-800 gap-1">
        <p className="fa-regular fa-wrench "/>
        <h2 className="font-semibold text-2xl "> Funcții oferite pentru toate limbajele:</h2>
      </div>
      <ul className="pt-2 indent-4">
        <li>• Compilare și rulare automată: Poți testa codul în timp real.</li>
        <li>• Feedback detaliat: Află unde ai greșit și cum poți îmbunătăți soluția.</li>
        <li>• Teste cronometrate: Exersează sub presiune și îmbunătățește-ți viteza de rezolvare.
        </li>
      </ul>

      <p className="pt-6 pb-10">Alege limbajul potrivit pentru tine și începe să rezolvi probleme chiar acum!
      Indiferent dacă vrei să stăpânești conceptele de bază sau să devii un expert în algoritmi, platforma noastră îți oferă tot ce ai nevoie.</p>
    </div>
  );
}
