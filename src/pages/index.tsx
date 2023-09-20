import Head from "next/head";
import { useState } from "react";
import { myColors } from "./utils/colors";

export default function Home() {
  const [selectedColor, setSelectedColor] = useState<string>("amber");

  return (
    <>
      <Head>
        <title>Dan is Cool</title>
        <meta name="description" content="Dan's in way over his head again!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-6 px-4 py-16 ">

          {selectedColor &&
            <p className="flex flex-col items-center justify-center text-stone-700">
              You&apos;ve selected: <br />
              <span className={`text-stone-950 rounded-tl-xl rounded-bl-md rounded-tr-md rounded-br-2xl px-2 ${myColors[selectedColor]?.highlight ?? ''}`}>
                {selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)}
              </span>
            </p>
          }

          <hr className="w-full md:max-w-sm border-stone-200" />

          <div className="flex space-x-4">
            {Object.entries(myColors).map(([label, colorDef], index) => (
              <button
                key={index}
                className={`w-8 h-8 rounded-full ${colorDef.base} ${colorDef.hover} ${selectedColor === label ? colorDef.active : ''}`}
                onClick={() => setSelectedColor(label)}
              />
            ))}
          </div>

        </div>
      </main>
    </>
  );
}