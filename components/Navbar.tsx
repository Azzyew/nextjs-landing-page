import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-end pt-6 pr-28 pb-6 bg-pink-300">
      <Link href="/">
        <a className="pr-10 hover:text-gray-500 transition">Página Inicial</a>
      </Link>
      <Link href="/products">
        <a className="pr-10 hover:text-gray-500 transition">Produtos</a>
      </Link>
      <Link href="/info">
        <a className="pr-10 hover:text-gray-500 transition">Quem Somos</a>
      </Link>
      <Link href="/contact">
        <a className="pr-10 hover:text-gray-500 transition">Contato</a>
      </Link>
    </div>
  );
};

export default Navbar;
