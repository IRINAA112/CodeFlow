'use client'
import React from "react";
import ClasaProbleme from "@default import route/components/probleme-card";
import NewProblema from "@default import route/components/input-pb";

export default function App() {
  return (
    <div className="justify-evenly h-screen" >
      <div className="justify-around flex" >
      <ClasaProbleme titlu="Algoritmi elementari">
        <NewProblema titlu="Sume, Produse, numărări" enunt="Apasă pentru a vedea problemele" pagina="pb1"></NewProblema>
        <NewProblema titlu="Maxime și minime" enunt="Apasă pentru a vedea problemele" pagina="/pb1.tsx"></NewProblema>
        <NewProblema titlu="Cifrele unui număr" enunt="Apasă pentru a vedea problemele" pagina="/pb1.tsx"></NewProblema>
      </ClasaProbleme>
      <ClasaProbleme titlu="Elemente de baza ale limbajului">
        <NewProblema titlu="Operatori și expresii" enunt="Apasă pentru a vedea problemele" pagina="/pb1.tsx"></NewProblema>
        <NewProblema titlu="Structura de decizie" enunt="SApasă pentru a vedea problemele" pagina="/pb1.tsx"></NewProblema>
        <NewProblema titlu="Structuri repetitive" enunt="Apasă pentru a vedea problemele" pagina="/pb1.tsx"></NewProblema>
      </ClasaProbleme>
      <ClasaProbleme titlu="Şiruri de caractere">
        <NewProblema titlu="Algoritm1" enunt="Apasă pentru a vedea problemele" pagina="/pb1.tsx"></NewProblema>
        <NewProblema titlu="Algoritm2" enunt="SApasă pentru a vedea problemele" pagina="/pb1.tsx"></NewProblema>
        <NewProblema titlu="Algoritm3" enunt="Apasă pentru a vedea problemele" pagina="/pb1.tsx"></NewProblema>
      </ClasaProbleme>
    </div>

      <div className="justify-around flex" >
      <ClasaProbleme titlu="Subprograme">
        <NewProblema titlu="Algoritm1" enunt="Apasă pentru a vedea problemele" pagina="/pb1.tsx"></NewProblema>
        <NewProblema titlu="Algoritm2" enunt="SApasă pentru a vedea problemele" pagina="/pb1.tsx"></NewProblema>
        <NewProblema titlu="Algoritm3" enunt="Apasă pentru a vedea problemele" pagina="/pb1.tsx"></NewProblema>
      </ClasaProbleme>
      <ClasaProbleme titlu="Programare orientată pe obiecte">
        <NewProblema titlu="Algoritm1" enunt="Apasă pentru a vedea problemele" pagina="/pb1.tsx"></NewProblema>
        <NewProblema titlu="Algoritm2" enunt="SApasă pentru a vedea problemele" pagina="/pb1.tsx"></NewProblema>
        <NewProblema titlu="Algoritm3" enunt="Apasă pentru a vedea problemele" pagina="/pb1.tsx"></NewProblema>
      </ClasaProbleme>
      <ClasaProbleme titlu="Programare dinamică">
        <NewProblema titlu="Algoritm1" enunt="Apasă pentru a vedea problemele" pagina="/pb1.tsx"></NewProblema>
        <NewProblema titlu="Algoritm2" enunt="SApasă pentru a vedea problemele" pagina="/pb1.tsx"></NewProblema>
        <NewProblema titlu="Algoritm3" enunt="Apasă pentru a vedea problemele" pagina="/pb1.tsx"></NewProblema>
      </ClasaProbleme>
    </div>
    </div>
    
  );
}
