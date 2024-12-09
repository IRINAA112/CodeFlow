'use client'
import Problema from "@default import route/components/exercitiu-card";


export default function App(){
    return(
        <div className="flex items-center flex-col justify-evenly">
            <div >
                <h1 className="text-3xl font-semibold pt-4 text-center border-b-1 border-b-purple-900">Sume, Produse, numărări</h1>
            </div>
            <div className=" rounded-lg h-fit pb-4 my-6 content-center gap-4">
                <Problema titlu="Suma Gauss" cod={12345} link="rezolvare" autor="cinevaidk" cerinta="Se citește n număr natural. Calculați suma numerelor naturale mai mici sau egale cu n."/>
                <Problema titlu="Suma nr Pare" cod={76545} link="rezolvare" autor="cinevaidk" cerinta="Să se scrie un program care citește numărul natural n și determină suma 2+4+..+(2n)."/>
                <Problema titlu="Factorial" cod={29674} link="rezolvare" autor="cinevaidk" cerinta="Să se scrie un program care citește numărul natural n și determină valoarea lui n!=1*2*3*...*n."/>
            </div>
        </div>
    );
}