import React from 'react';
import Image from "next/image";
import {about, ecoCleaning} from "@/app/assets";

function AboutUs(props) {
    return (
        <div className="md:h-screen md:pt-[8%]  flex item-center " id="section1" >
            <div className="card md:ml-[10%] md:w-[90%] w-auto md:h-[80%] flex items-center bg-white md:border-2 border-primary rounded-t-[4em] md:shadow-2xl  flex flex-col md:flex-row">
                <div className="md:w-[60%] flex justify-center ">
                    <div className="md:w-[80%] px-4 flex flex-col pr-10 p-4 flex flex-col  leading-normal ">
                  <span className=" hidden flex w-[20em] flex-row">
                      <Image className="mr-2" src={about} alt="quote" />
                      </span>
                        <h1 className=" leading-normal text-center  py-4 text-primary text-[32px] md:text-[3em]" >
                            À Propos
                        </h1>
                        <h1 className="text-black py-2 text-justify md:text-l">
                            Chez Propre et Vert, nous croyons fermement en la responsabilité environnementale et sociale.
                            Fondée sur ces valeurs, notre entreprise s'est donné pour mission de fournir des services de
                            nettoyage écologique de la plus haute qualité tout en offrant des opportunités d'emploi et de
                            réinsertion sociale.</h1>
                    </div>
                </div>
                <div className=" md:w-[35%] flex flex-col justify-center items-center  ">
                    <Image src={about} class="md:w-[25em] rounded-2xl object-contain " alt="" />
                </div>
            </div>

        </div>
    );
}

export default AboutUs;
