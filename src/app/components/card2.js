import React from 'react';

function Card2({title, titleNumber, texte}) {
    return (
        <div className="p-4 ">
            <div className=" card2 flex  items-center justify-center border-2 border-primary bg-white ">
               <span className="section1  flex flex-col w-[30%] h-[8em] items-center justify-center text-white bg-primary  ">
                   <h1 className="md:text-[2em] text-[1.5em] font-bold">{titleNumber}</h1>
                   <h1 className=" text-center text-[0.5em] md:text-[0.6em] font-bold ">{title}</h1>
               </span>
                <span className="w-[70%] px-4">
                         <p className="mt-4 text-[0.6em] md:text-[0.7em] "> {texte}</p>
                </span>

            </div>
        </div>
    );
}


export default Card2;