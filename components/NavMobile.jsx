import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };

  return (
    <nav className="relative">
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer text-black">
        <AiOutlineMenu className="w-8 h-8" />
      </div>

      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className="w-4 h-4 rounded-full bg-red-500 fixed top-0 right-0"></motion.div>

      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate={isOpen ? "visible" : ""}
        className={`${
          isOpen ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 w-full flex flex-col gap-y-10 text-white justify-center items-center transition-all duration-300 overflow-hidden`}>
        <div
          onClick={() => setIsOpen(false)}
          className="cursor-pointer absolute top-8 right-8">
          <AiOutlineClose className="text-white" />
        </div>
        <li>Menu</li>
        <li>Sobre Nós</li>
        <li>Contato</li>
      </motion.ul>
    </nav>
  );
};

export default NavMobile;
