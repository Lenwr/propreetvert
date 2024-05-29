import Image from "next/image";
import {logo, goal, bannerPicture} from "@/app/assets";
import {Poppins} from 'next/font/google'


import "./banner.css"
import {appText} from "../constants/index";

function Banner(props) {
    return (
        <div id="banner" className=" px-[10%]   flex md:items-center ">
            <div className=" w-full md:h-auto flex md:flex-row flex-col-reverse
        justify-around

        md:px-4
         ">
                <div className="md:w-[50%] px-4 flex flex-col pr-10 p-4 flex flex-col justify-center leading-normal ">
                  <span className="leading-0 pb-8"> <p
                      className="text-accent font-light md:text-4xl">POUR <br/>UN AVENIR </p>
                      <span className="flex flex-row">
                      <p className="text-accent drop-shadow-lg font-bold md:text-5xl">PROPRE</p>
                          <p className="text-accent drop-shadow-lg font-light md:text-5xl"> &</p>
                      <p className="text-accent drop-shadow-lg text-primary font-bold md:text-5xl"> VERT </p>
                          </span>
                      </span>
                    <h1 className="text-accent text-justify md:text-l">
                        Bienvenue chez Propre et Vert ! Nous sommes une entreprise de nettoyage écologique engagée à
                        faire une différence positive pour notre planète et notre société. Notre mission est de fournir des
                        services de nettoyage de haute qualité tout en contribuant à la réinsertion sociale des personnes
                        éloignées du marché du travail via des partenariats avec les acteurs de l’IAE .
                    </h1>
                    <span className="flex flex-row pt-10 items-center justify-around">
                         <button className=" bg-half_primary rounded w-[40%] text-[0.8em] text-white px-8 p-4 hover:scale-110"> Nous contacter
                    </button>
                        <p className="w-[40%] text-accent underline  text-[0.8em] ">voir tous nos services </p>
                    </span>

                </div>

                <Image className="md:w-[55%] w-[100%] border-primary rounded " src={bannerPicture} alt=""/>

            </div>
        </div>
    );
}

export default Banner;