import React from 'react';
import {services} from "@/app/constants";
import Card from "@/app/components/card";
function NosServices(props) {
    return (
        <div id="section2" className=" mt-6 md:mt-0 flex flex-col items-center  ">
            <h1 className="text-2xl md:text-3xl font-bold text-accent">NOS SERVICES</h1>
            <div className="flex flex-col md:flex-row mt-10 md:mt-20 justify-center">
                {services.map((item, index) => (
                    <div key={index} className="w-full md:w-[30%] px-8 mb-8 md:mb-0">
                        <Card title={item.title} picture={item.icon} texte={item.texte} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NosServices;
