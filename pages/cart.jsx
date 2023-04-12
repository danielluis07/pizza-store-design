import React from "react";
import Image from "next/image";
import pizzaCalabresa from "../public/pizza.png";
import mainBanner from "../public/banner.jpg";

const cart = () => {
  return (
    <div>
      <div className="w-3/4 mx-auto mt-40 mb-72 flex gap-8 items-center">
        <div className="w-3/4 flex flex-col gap-y-16 justify-between">
          <div className="flex flex-col sm:flex-row w-full justify-between">
            <div className="flex flex-col gap-6">
              <h1 className="flex justify-center font-bold text-red-500">
                Produto
              </h1>
              <Image
                width={100}
                height={100}
                src={pizzaCalabresa}
                alt="produto"
              />
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="flex justify-center font-bold text-red-500">
                NOME
              </h1>
              <p className="flex justify-center font-bold">CALABRESA</p>
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="flex justify-center font-bold text-red-500">
                PREÇO
              </h1>
              <p className="flex justify-center font-bold">R$100,00</p>
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="flex justify-center font-bold text-red-500">
                QUANTIDADE
              </h1>
              <p className="flex justify-center font-bold">1</p>
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="flex justify-center font-bold text-red-500">
                TOTAL
              </h1>
              <p className="flex justify-center font-bold">R$100,00</p>
            </div>
          </div>
        </div>
        <div className="w-[250px] sm:w-[400px] bg-white">
          <div className="p-8">
            <div className="pt-4 pb-8">
              <h1 className="text-2xl font-bold">Carrinho</h1>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold">Subtotal: R$100,00</p>
              <p className="font-bold">Desconto: R$0,00</p>
              <p className="font-bold">Total: R$100,00</p>
            </div>
            <div className="flex justify-center pt-8">
              <button className="text-sm text-white w-1/2 p-2 bg-black rounded-2xl hover:bg-gray-500">
                PAGAR
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Image
          className="h-[300px] object-cover"
          src={mainBanner}
          alt="banner"
        />
      </div>
    </div>
  );
};

export default cart;
