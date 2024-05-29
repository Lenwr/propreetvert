import React from 'react';
import {appText} from "@/app/constants";
import Image from "next/image";
import {logo} from "@/app/assets";
import Map from "@/app/components/map";
import Head from 'next/head';
import dynamic from 'next/dynamic';

function Footer(props) {
    const Map = dynamic(() => import('../components/map'), { ssr: false });
    return (
        <div className="mb-10 flex flex-col md:flex-row md:justify-between items-center px-10">
            <div className="logo mb-8 md:mb-0">
                <Image className="w-32" src={logo} alt="logo noir" />
            </div>
            <div className="address mb-8 md:mb-0 text-center md:text-left">
                <p>{appText.adresse}</p>
            </div>
            <div className="contact mb-8 md:mb-0 text-center md:text-left">
                <p>{appText.contact}</p>
                <p>{appText.mail}</p>
                <p>{appText.siteweb}</p>
            </div>
            <div className="map">
                <Head>
                    <link href="https://api.mapbox.com/mapbox-gl-js/v2.9.1/mapbox-gl.css" rel="stylesheet" />
                </Head>
                <main className=" w-[22em] h-[18em]">
                    <Map />
                </main>
            </div>
        </div>
   );
}

export default Footer;