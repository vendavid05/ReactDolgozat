import React from 'react';

interface GombProps {
    ertek:number;
    onClick: () => void ;

}

export const Gomb = ({ertek , onClick}: GombProps) =>{



return (
    <button
    className= {`gomb ${ertek === 0 ? 'ures':''}`}
    onClick={onClick}
    >
        {ertek  !== 0 ? ertek : ''} 
        


    </button>
);
};