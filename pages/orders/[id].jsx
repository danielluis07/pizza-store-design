import React from "react";
import oven from "../../public/stone-oven.png";
import money from "../../public/money.png";
import moto from "../../public/delivery.png";
import delivery from "../../public/delivery-man.png";
import mainBanner from "../../public/banner.jpg";
import Image from "next/image";

const Pizza = () => {
  return (
    <div>
      <div className="w-3/4 mx-auto flex flex-col sm:flex-row justify-between gap-x-14 gap-y-14 mt-64 mb-80">
        <div className="w-3/4 flex flex-col gap-y-16 justify-between">
          <div className="flex flex-col sm:flex-row w-full">
            <div className="flex flex-col gap-4 p-6 border-[1px] border-red-500">
              <h1 className="font-bold">ID do Pedido</h1>
              <p>3521789541</p>
            </div>
            <div className="flex flex-col gap-4 p-6 border-[1px] border-red-500">
              <h1 className="font-bold">Cliente</h1>
              <p>John Doe</p>
            </div>
            <div className="flex flex-col gap-4 p-6 border-[1px] border-red-500">
              <h1 className="font-bold">Endereço</h1>
              <p>Rua etc etc etc</p>
            </div>
            <div className="flex flex-col gap-4 p-6 border-[1px] border-red-500">
              <h1 className="font-bold">Total</h1>
              <p>R$ 100,00</p>
            </div>
          </div>
          <div className="flex flex-row gap-8 justify-between">
            <div className="flex flex-col gap-4">
              <Image
                className="mx-auto w-[50px] h-[50px]"
                src={money}
                alt="oven"
              />
              <p>some text</p>
            </div>
            <div className="flex flex-col gap-4">
              <Image
                className="mx-auto w-[50px] h-[50px]"
                src={oven}
                alt="oven"
              />
              <p>some text</p>
            </div>
            <div className="flex flex-col gap-4">
              <Image
                className="mx-auto w-[50px] h-[50px]"
                src={moto}
                alt="oven"
              />
              <p>some text</p>
            </div>
            <div className="flex flex-col gap-4">
              <Image
                className="mx-auto w-[50px] h-[50px]"
                src={delivery}
                alt="oven"
              />
              <p>some text</p>
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

export default Pizza;
