import React from 'react';
import Image from "next/image";

function Card({picture, title, texte}) {
    console.log(picture)
    return (
        <div>
            <div className="flex flex-col items-center justify-center bg-white md:h-[20em] px-8 md:rounded-2xl md:shadow-2xl">
                <span className="p-4 bg-[#EAEFFF] rounded-full">
                    <Image className=" w-[2em]  " src={picture} alt="" />
                </span>
                <h1 className=" md:text-black  text-[16px] text-primary font-bold mt-4">{title}</h1>
                <p className="mt-4 text-justify md:text-center md:text-[12px]  "> {texte}</p>
            </div>
        </div>
    );
}

export default Card;