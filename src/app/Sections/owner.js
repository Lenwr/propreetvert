import React from 'react';
import Image from "next/image";
import {aicha, quote} from "@/app/assets";
import './owner.css'
import '../globals.css'

function Owner(props) {
    return (
        <div className="md:h-screen mt-8 md:mt-0 md:pt-[8%]  flex item-center">
            <div
                className="card md:w-[90%] w-auto md:h-[40%] md:h-[30%] xl:h-[70%] flex items-center rounded bg-primary md:rounded-b-[4em] shadow-2xl p-4  flex flex-col md:flex-row">
                <div className="md:w-[60%] flex justify-center ">
                    <div className="md:w-[80%] px-4 flex flex-col pr-10 p-4 flex flex-col  leading-normal ">
                  <span className=" flex w-[57px] flex-row">
                      <Image className="mr-2" src={quote} alt="quote"/>
                        <Image src={quote} alt="quote"/>
                      </span>
                        <h1 className="text-black pt-4 text-justify md:text-l">
                            "C'est la force de la passion qui crée la force de la règle" cette citation est ce qui
                            s'approche du mieux
                            de la passion que j'ai de l'écologie et du green business. Par ce que je crois que tous
                            ensemble, on
                            peut changer les règles. Je m'appelle Aicha Sylla, je suis une jeune diplômée passionnée par
                            le
                            marketing digital, l'entrepreneuriat et les valeurs écologiques et solidaires. Je suis
                            convaincu
                            que l'alliance entre ces domaines peut créer un impact positif sur la société et
                            l'environnement.</h1>
                        <div className="flex justify-end">
                            <span className=" flex w-[57px] flex-row">
                            <Image
                            className="mr-2" src={quote} alt="quote"/>      <Image src={quote} alt="quote"/>    </span>
                        </div>
                    </div>
                </div>
                <div className="aicha md:w-[35%]  flex flex-col justify-center items-center  ">
                    <Image src={aicha} class="md:w-[10em] lg:w-[8em] xl:w-[12em]  rounded-2xl object-contain shadow-2xl " alt=""/>
                    <div
                        className="h-[25%]  text-center py-4  ">
                        <span className="drop-shadow-2xl font-bold w-full py-4 text-secondary text-[1.5em] content-end md:text-[2em]">
                            Aicha Sylla
                        </span>
                        <p className=" text-black">Fondatrice de Propre et Vert</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Owner;