import React from "react";
import Image from "next/image";
import pizzaCalabresa from "../../public/pizza.png";
import Link from "next/link";

const PizzaCards = () => {
  return (
    <div className="mt-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 py-6 px-4">
      <div className="mt-8 border-[1px] rounded-3xl border-red-600 hover:border-red-200 border-opacity-40 group">
        <div>
          <Link href="/">
            <Image
              className="w-full h-full object-cover"
              src={pizzaCalabresa}
              alt="pizza"
            />
          </Link>
        </div>
        <div className="flex flex-col pl-8 pb-4 pt-8 gap-4">
          <p className="font-bold text-red-500">Pizza Calabresa</p>
          <p>Ingredientes: Calabresa, queijo, orégano...</p>
          <p className="font-bold">R$ 100,00</p>
        </div>
      </div>
      <div className="mt-8 border-[1px] rounded-3xl border-red-600 hover:border-red-200 border-opacity-40 group">
        <div>
          <Image
            className="w-full h-full object-cover"
            src={pizzaCalabresa}
            alt="pizza"
          />
        </div>
        <div className="flex flex-col pl-8 pb-4 pt-8 gap-4">
          <p className="font-bold text-red-500">Pizza Calabresa</p>
          <p>Ingredientes: Calabresa, queijo, orégano...</p>
          <p className="font-bold">R$ 100,00</p>
        </div>
      </div>
      <div className="mt-8 border-[1px] rounded-3xl border-red-600 hover:border-red-200 border-opacity-40 group">
        <div>
          <Image
            className="w-full h-full object-cover"
            src={pizzaCalabresa}
            alt="pizza"
          />
        </div>
        <div className="flex flex-col pl-8 pb-4 pt-8 gap-4">
          <p className="font-bold text-red-500">Pizza Calabresa</p>
          <p>Ingredientes: Calabresa, queijo, orégano...</p>
          <p className="font-bold">R$ 100,00</p>
        </div>
      </div>
      <div className="mt-8 border-[1px] rounded-3xl border-red-600 hover:border-red-200 border-opacity-40 group">
        <div>
          <Image
            className="w-full h-full object-cover"
            src={pizzaCalabresa}
            alt="pizza"
          />
        </div>
        <div className="flex flex-col pl-8 pb-4 pt-8 gap-4">
          <p className="font-bold text-red-500">Pizza Calabresa</p>
          <p>Ingredientes: Calabresa, queijo, orégano...</p>
          <p className="font-bold">R$ 100,00</p>
        </div>
      </div>
      <div className="mt-8 border-[1px] rounded-3xl border-red-600 hover:border-red-200 border-opacity-40 group">
        <div>
          <Image
            className="w-full h-full object-cover"
            src={pizzaCalabresa}
            alt="pizza"
          />
        </div>
        <div className="flex flex-col pl-8 pb-4 pt-8 gap-4">
          <p className="font-bold text-red-500">Pizza Calabresa</p>
          <p>Ingredientes: Calabresa, queijo, orégano...</p>
          <p className="font-bold">R$ 100,00</p>
        </div>
      </div>
      <div className="mt-8 border-[1px] rounded-3xl border-red-600 hover:border-red-200 border-opacity-40 group">
        <div>
          <Image
            className="w-full h-full object-cover"
            src={pizzaCalabresa}
            alt="pizza"
          />
        </div>
        <div className="flex flex-col pl-8 pb-4 pt-8 gap-4">
          <p className="font-bold text-red-500">Pizza Calabresa</p>
          <p>Ingredientes: Calabresa, queijo, orégano...</p>
          <p className="font-bold">R$ 100,00</p>
        </div>
      </div>
    </div>
  );
};
500;
6;

export default PizzaCards;
