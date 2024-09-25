import React from 'react';

const SectionFirst = () => {
    return (
        <div className='lg:my-32 lg:mx-20 my-10 mx-10'>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                <div className="rounded-lg">
                    <h5 className='uppercase text-gray-500 text-sm '>
                    Solar Cameroon, travaux et maintenance au Cameroun
                    </h5>
                    <h2 className='text-gray-900 text-4xl my-10'>
                        Qui sommes-nous ?
                    </h2>
                    <p className='text-sm text-gray-600 text-justify'>
                    Solar Cameroon s'anime d'une équipe compétente et d'un savoir-faire 
                    acquis au fil des années. Nous mettons un point d'honneur à construire 
                    un lien de confiance avec nos clients.<br/><br />

Nous réalisons des installations et maintenance de panneaux solaires photovoltaiques 
pour entreprises et particuliers. Avec nous, plus de problèmes d'électricité.
                    </p>
                    
                </div>
                <div className="rounded-lg">
                    <img src="/images/section1.webp" alt="" 
                    className='rounded-lg  w-full ' />
                </div>
            </div>
        </div>
    );
};

export default SectionFirst;