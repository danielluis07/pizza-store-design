import React from "react";

const Hero = () => {
  return (
    <div className="mt-20">
      <div className="mx-auto sm:bg-[url('../public/pizzaPhotoRoom.png')] sm:bg-contain sm:bg-right sm:bg-no-repeat sm:w-[1500px] sm:h-[600px]">
        <div className="mx-auto mt-28 w-3/4 text-2xl sm:w-1/2 sm:text-5xl sm:py-20 sm:ml-60">
          <div className="text-center">
            NÃO É SÓ UMA PIZZA. É UMA EXPERIÊNCIA ÚNICA DE SABOR
          </div>
          <div className="flex flex-row justify-center items-center gap-5">
            <button className="mt-8 text-sm p-4 bg-red-500 rounded-2xl hover:bg-red-300">
              VER MENU
            </button>
            <button className="mt-8 text-sm p-4 bg-red-500 rounded-2xl hover:bg-red-300">
              RESERVAR MESA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
