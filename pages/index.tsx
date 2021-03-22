import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-beans h-screen px-12 py-14 z-0 tracking-wider">
      <Image
        className="opacity-70"
        src="/colored-bg.jpg"
        alt="Cup of coffee"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <Head>
        <title>Soleil Café</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative h-full bg-baby-powder text-slate-gray font-body py-10 px-40 z-100 rounded-md">
        <Navbar />
        <div className="flex items-center justify-between -mt-10">
          <div className="-mt-8">
            <h1 className="text-9xl text-gunmetal font-bold justify-center pt-10">
              CAFÉ <br /> SOLEIL
            </h1>
            <h4 className="text-3xl pt-6 text-copper">
              Um bom dia começa com um bom café.
            </h4>
          </div>
          <Image src="/cup.png" alt="Cup of coffee" width={700} height={700} />
        </div>
        <div className="flex justify-center -mt-10">
          <div className="bg-gunmetal flex items-center justify-evenly py-2 px-4 max-w-sm rounded-full">
            <Image src="/search.svg" alt="Search icon" width={35} height={35} />
            <input
              placeholder="Pesquisar"
              className="bg-gunmetal text-xl text-baby-powder text-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
