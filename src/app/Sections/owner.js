import React from 'react';
import Image from "next/image";
import {aicha, quote} from "@/app/assets";
import './owner.css'
import '../globals.css'

function Owner(props) {
    return (
        <div className="md:h-screen md:pt-[8%]  flex item-center">
          <div className="card md:w-[90%] w-auto md:h-[80%] flex items-center bg-gradient-to-r from-primary to-green-400 rounded-b-[4em] shadow-2xl  flex flex-col md:flex-row">
              <div className="md:w-[60%] flex justify-center ">
                  <div className="md:w-[80%] px-4 flex flex-col pr-10 p-4 flex flex-col  leading-normal ">
                  <span className=" flex w-[57px] flex-row">
                      <Image className="mr-2" src={quote} alt="quote" />
                        <Image src={quote} alt="quote" />
                      </span>
                        <h1 className=" berkshire-swash-regular leading-normal  py-4 text-secondary text-[32px] md:text-l" >
                              C'est la force de la passion qui crée la force de la règle
                          </h1>
                      <h1 className="text-black py-2 text-justify md:text-l">
                          Chez Propre et Vert, nous croyons fermement en la responsabilité environnementale et sociale. Fondée sur ces valeurs, notre entreprise s'est donné pour mission de fournir des services de nettoyage écologique de la plus haute qualité tout en offrant des opportunités d'emploi et de réinsertion sociale.
                      </h1>

                  </div>
              </div>
              <div className="aicha md:w-[35%] flex flex-col justify-center items-center  ">
                  <Image src={aicha} class="md: w-[15em] rounded-2xl object-contain shadow-2xl " alt="" />
                  <div className="h-[25%] drop-shadow-2xl font-bold w-full py-4 text-secondary text-center content-end md:text-[3em]">
                      Aicha Sylla
                  </div>
              </div>
          </div>

        </div>
    );
}

export default Owner;