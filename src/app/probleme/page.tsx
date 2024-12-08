'use client'
import React from "react";
import ClasaProbleme from "@default import route/components/probleme-card";
import NewProblema from "@default import route/components/input-pb";

export default function App() {
  return (
    <div className="justify-evenly h-screen" >
      <div className="justify-around flex" >
      <ClasaProbleme titlu="Algoritmi elementari">
        <NewProblema titlu="Algoritm1" enunt="Scrie algoritmul 1"></NewProblema>
        <NewProblema titlu="Algoritm2" enunt="Scrie algoritmul 2"></NewProblema>
        <NewProblema titlu="Algoritm3" enunt="Scrie algoritmul 3"></NewProblema>
      </ClasaProbleme>
      <ClasaProbleme titlu="Algoritmi elementari">
        <NewProblema titlu="Algoritm1" enunt="Scrie algoritmul 1"></NewProblema>
        <NewProblema titlu="Algoritm2" enunt="Scrie algoritmul 2"></NewProblema>
        <NewProblema titlu="Algoritm3" enunt="Scrie algoritmul 3"></NewProblema>
      </ClasaProbleme>
      <ClasaProbleme titlu="Algoritmi elementari">
        <NewProblema titlu="Algoritm1" enunt="Scrie algoritmul 1"></NewProblema>
        <NewProblema titlu="Algoritm2" enunt="Scrie algoritmul 2"></NewProblema>
        <NewProblema titlu="Algoritm3" enunt="Scrie algoritmul 3"></NewProblema>
      </ClasaProbleme>
    </div>

      <div className="justify-around flex" >
      <ClasaProbleme titlu="Algoritmi elementari">
        <NewProblema titlu="Algoritm1" enunt="Scrie algoritmul 1"></NewProblema>
        <NewProblema titlu="Algoritm2" enunt="Scrie algoritmul 2"></NewProblema>
        <NewProblema titlu="Algoritm3" enunt="Scrie algoritmul 3"></NewProblema>
      </ClasaProbleme>
      <ClasaProbleme titlu="Algoritmi elementari">
        <NewProblema titlu="Algoritm1" enunt="Scrie algoritmul 1"></NewProblema>
        <NewProblema titlu="Algoritm2" enunt="Scrie algoritmul 2"></NewProblema>
        <NewProblema titlu="Algoritm3" enunt="Scrie algoritmul 3"></NewProblema>
      </ClasaProbleme>
      <ClasaProbleme titlu="Algoritmi elementari">
        <NewProblema titlu="Algoritm1" enunt="Scrie algoritmul 1"></NewProblema>
        <NewProblema titlu="Algoritm2" enunt="Scrie algoritmul 2"></NewProblema>
        <NewProblema titlu="Algoritm3" enunt="Scrie algoritmul 3"></NewProblema>
      </ClasaProbleme>
    </div>
    </div>
    
  );
}
