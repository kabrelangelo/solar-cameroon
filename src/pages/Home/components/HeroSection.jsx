import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  // Tableau des images de fond
  const bgImages = [
    'url("/images/bg1.jpg")',
    'url("/images/bg2.jpg")',
    'url("/images/bg3.jpg")',
    'url("/images/bg4.jpg")',

  ];

  // État pour stocker l'index de l'image actuelle
  const [currentBg, setCurrentBg] = useState(0);

  // useEffect pour changer l'image toutes les X secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 7000); // Changer l'image toutes les 5 secondes

    return () => clearInterval(interval); // Nettoyage de l'intervalle lors du démontage
  }, [bgImages.length]);

  return (
    <div>
   <div
  className="h-screen flex items-center justify-center bg-cover bg-center transition-all duration-1000"
  style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), ${bgImages[currentBg]}`
  }}
>
      <div className="text-center space-y-4 mx-5 lg:w-1/2">
        <h1 className="text-sm font-bold text-orange-400 uppercase">Installation et maintenance des panneaux solaires</h1>
        <h2 className="text-4xl font-bold text-white">Vous proposer des solutions sur mesure.</h2>
        <p className="text-md text-gray-200">
          Nous offrons à nos clients, professionnels ou particuliers, un gage de qualité correspondant à leurs attentes et dans les plus brefs délais à travers tout le Cameroun.
        </p>
      </div>
    </div>
        </div>
    );
};

export default HeroSection;