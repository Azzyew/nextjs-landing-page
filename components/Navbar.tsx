import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-between pb-4">
      <Link href="/">
        <a className="hover:text-copper transition">PÁGINA INICIAL</a>
      </Link>
      <Link href="/products">
        <a className="hover:text-copper transition">PRODUTOS</a>
      </Link>
      <Link href="/info">
        <a className="hover:text-copper transition">QUEM SOMOS</a>
      </Link>
      <Link href="/contact">
        <a className="hover:text-copper transition">CONTATO</a>
      </Link>
    </div>
  );
};

export default Navbar;
