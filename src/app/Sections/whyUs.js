import React from 'react';
import Image from "next/image";
import {aboutUs, logo} from "../../../public";
import {appText, whyUs} from "@/app/constants";
import Card2 from "@/app/components/card2";
import './card2.css'
import Link from 'next/link';
import NousContacter from "@/app/Sections/nousContacter";
import Owner from "@/app/Sections/owner";

function WhyUs(props) {
    return ( <div className="mx-8  py-8 ">
            <span className="flex flex-col items-center md:pt-[10%] pb-4 md:pb-[6%]">
                <h1 className="text-2xl md:text-3xl md:py-8 font-bold text-accent">POURQUOI CHOISIR</h1>
                <img className="w-20 md:w-1/6" src="/logo.png" alt="logo propre et vert" />
            </span>
            <div className="flex flex-col md:flex-wrap md:flex-row justify-center">
                {whyUs.map((item, index) => (
                    <div key={index} className="w-full md:w-2/5 px-4 mb-8">
                        <Card2 titleNumber={index + 1} title={item.title} texte={item.texte} />
                    </div>
                ))}
            </div>
            <div className="">
                <Owner/>
            </div>
            <div className=" mb-8">
                <NousContacter />
            </div>

            <span className="flex justify-end mr-8">
                 <Link href="" >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="rounded-full bg-primary p-1 border-2 w-10 h-10"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white p-1"
                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                </svg>
                           </Link>
            </span>
        </div>
    );
}

export default WhyUs;