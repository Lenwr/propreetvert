import React from 'react';

function SectionTitle({text}) {
    return (
        <div className="flex justify-center">
           <h1 className="text-2xl md:text-3xl font-bold text-center p-4 rounded bg-accent text-white md:w-1/3">{text}</h1>
        </div>
    );
}

export default SectionTitle;