import React from 'react';
import Image from "next/image";

function Card({picture, title, texte}) {
    return (
        <div className="">
            <div className="flex flex-col items-center justify-center bg-white md:h-[20em] p-6 md:rounded-2xl md:shadow-2xl">
                <span className="p-4 bg-[#EAEFFF] rounded-full">
                    <img className=" w-[2em]  " src ={picture} alt="" />
                </span>
                <h1 className=" md:text-black  text-[16px] text-primary font-bold mt-4">{title}</h1>
                <p className="mt-4 text-center  md:text-[0.5em] lg:text-[0.6em]  xl:text-[0.7em]  "> {texte}</p>
            </div>
        </div>
    );
}

export default Card;