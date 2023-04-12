import React from "react";
import Image from "next/image";
import pizzaCalabresa from "../../public/pizza.png";

const Pizza = () => {
  return (
    <div>
      <div className="w-3/4 mx-auto mt-40 mb-72">
        <div className="mt-20 flex flex-col sm:flex-row gap-10 items-start">
          <div className="w-full">
            <div className="border-[1px] w-full rounded-xl border-red-600 hover:border-red-200 border-opacity-40 group">
              <Image
                className="w-full h-full object-cover"
                src={pizzaCalabresa}
                alt="pizza"
              />
            </div>
          </div>
          <div className="w-full h-full flex flex-col gap-y-8">
            <h1 className="font-bold">PIZZA CALABRESA</h1>
            <p className="text-justify">
              Efficitur montes lobortis dui feugiat mi tincidunt tortor praesent
              pulvinar tristique ipsum. Sit fringilla nam a nascetur montes
              rhoncus egestas tincidunt sem curae in. Egestas sapien primis ad
              duis consequat sociosqu gravida. Faucibus habitant gravida vivamus
              feugiat himenaeos finibus.
            </p>
            <p className="font-bold">R$ 100,00</p>
            <div className="flex justify-between sm:w-1/2">
              <button className="text-sm p-2 bg-black text-white rounded-2xl hover:bg-gray-500">
                PEQUENA
              </button>
              <button className="text-sm p-2 bg-black text-white rounded-2xl hover:bg-gray-500">
                MÉDIA
              </button>
              <button className="text-sm p-2 bg-black text-white rounded-2xl hover:bg-gray-500">
                GRANDE
              </button>
            </div>
            <div className="flex gap-8">
              <select className="p-2 rounded-lg w-[100px] h-12 outline-none">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
              <button className="text-sm p-2 bg-red-500 rounded-2xl hover:bg-red-300">
                COMPRAR
              </button>
            </div>
          </div>
        </div>
        <div className="mt-72">
          <div className="flex justify-center text-center text-2xl text-red-500 font-extrabold">
            PRODUTOS PARECIDOS
          </div>
          <div className="flex flex-col sm:flex-row pt-16 gap-4 w-full">
            <div className="border-[1px] w-full rounded-xl border-red-600">
              <Image
                className="w-full h-full object-cover"
                src={pizzaCalabresa}
                alt="pizza"
              />
            </div>
            <div className="border-[1px] w-full rounded-xl border-red-600">
              <Image
                className="w-full h-full object-cover"
                src={pizzaCalabresa}
                alt="pizza"
              />
            </div>
            <div className="border-[1px] w-full rounded-xl border-red-600">
              <Image
                className="w-full h-full object-cover"
                src={pizzaCalabresa}
                alt="pizza"
              />
            </div>
            <div className="border-[1px] w-full rounded-xl border-red-600">
              <Image
                className="w-full h-full object-cover"
                src={pizzaCalabresa}
                alt="pizza"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
