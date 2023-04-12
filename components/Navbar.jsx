import React from "react";
import { BsBag } from "react-icons/bs";
import pizzalogo from "../public/pizzaLogo.png";
import Image from "next/image";
import { FcMenu } from "react-icons/fc";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useState, useEffect } from "react";
import Link from "next/link";
import NavMobile from "./NavMobile";

const Navbar = () => {
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const navbarBackground = isTopOfPage ? "" : "bg-white";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${navbarBackground} py-6 fixed w-full top-0`}>
      <div className="mx-auto w-5/6">
        <div className="flex flex-row gap-4 lg:items-center justify-between">
          <div>
            <Link href="/">
              <Image width={80} height={80} src={pizzalogo} alt="logo" />
            </Link>
          </div>
          <div className="hidden sm:flex cursor-pointer hover:text-red-500">
            Menu
          </div>
          <div className="hidden sm:flex cursor-pointer hover:text-red-500">
            Sobre Nós
          </div>
          <div className="hidden sm:flex cursor-pointer hover:text-red-500">
            Contato
          </div>
          <div className="flex items-center gap-8">
            <HiOutlineUserCircle className="text-2xl sm:hidden" />
            <button className="hidden sm:flex text-sm p-2 bg-red-500 rounded-2xl hover:bg-red-300">
              ENTRAR
            </button>
            <BsBag className="sm:text-2xl cursor-pointer hover:text-red-500" />
            <div className="sm:hidden">
              <NavMobile />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
