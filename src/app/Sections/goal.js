import React from 'react';
import {appText} from "@/app/constants";
import Image from "next/image";
import {banner, goal} from "@/app/assets";
import "./goal.css"
import {CloudArrowUpIcon, LockClosedIcon, ServerIcon} from '@heroicons/react/20/solid'
import SectionTitle from "@/app/components/sectionTitle";

function Goal(props) {
    return (
         <div className=" flex flex-col h-screen p-6 items-center md:flex-row ">
            <div className=" h-full w-[50%] ">
                  <Image src={banner} alt="" className="flex md:h-auto w-auto object-bottom  "/>
             </div>
             <div className="flex flex-col items-center bg-primary h-[100%] text-white md:w-[50%] text-justify p-8 ">
                  <h1 className="md:text-3xl text-2xl p-4 md:px-[3em] bg-white text-primary">Qui sommes nous ? </h1>
                 <span className="py-[4em]">
          {appText.ourGoal}
        </span>
              </div>
           </div>


    )
}

export default Goal;