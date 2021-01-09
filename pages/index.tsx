import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Gi Artes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen">
        <h1 className="text-4xl font-semibold flex justify-center pt-8">
          Gi Artes
        </h1>
      </main>
    </div>
  );
}
