import React from 'react';
import Image from "next/image";

function Card({picture, title, texte}) {
    console.log(picture)
    return (
        <div>
            <div className="flex flex-col items-center justify-center bg-white h-[18em] px-8 md:rounded-2xl md:shadow-2xl">
                <span className="p-4 bg-[#EAEFFF] rounded-full">
                    <Image className=" w-[2em]  " src={picture} alt="" />
                </span>
                <h1 className=" text-black  text-[16px] font-bold mt-4">{title}</h1>
                <p className="mt-4 text-center text-[12px] "> {texte}</p>
            </div>
        </div>
    );
}

export default Card;