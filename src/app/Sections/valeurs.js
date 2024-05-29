import React from 'react';
import {services, valeurs} from "@/app/constants";
import Card from "@/app/components/card";

function Valeurs(props) {
    return (
        <div className="  flex flex-col items-center h-auto ">
            <div className="flex flex-col md:flex-row mt-10 md:mt-20 justify-center">
                {valeurs.map((item, index) => (
                    <div key={index} className="w-full md:w-[30%] px-8 mb-8 md:mb-0">
                        <Card title={item.title} picture={item.icon} texte={item.texte} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Valeurs;