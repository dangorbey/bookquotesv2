import Head from "next/head";
import { useState } from "react";
// import { myColors } from "../../config/colors";

interface ColorDefinition {
  highlight: string;
  base: string;
  hover: string;
  active: string;
}

const myColors: Record<string, ColorDefinition> = {
  amber: {
    highlight: "bg-gradient-to-r from-amber-200 from-10% via-amber-100 via-30% to-amber-300 to-90%",
    base: "bg-amber-200",
    hover: "hover:bg-amber-300",
    active: "border-2 border-amber-400",
  },
  orange: {
    highlight: "bg-gradient-to-r from-orange-200 from-10% via-orange-100 via-30% to-orange-300 to-90%",
    base: "bg-orange-200",
    hover: "hover:bg-orange-300",
    active: "border-2 border-orange-400",
  },
  lime: {
    highlight: "bg-gradient-to-r from-lime-200 from-10% via-lime-100 via-30% to-lime-300 to-90%",
    base: "bg-lime-200",
    hover: "hover:bg-lime-300",
    active: "border-2 border-lime-400",
  },
  cyan: {
    highlight: "bg-gradient-to-r from-cyan-200 from-10% via-cyan-100 via-30% to-cyan-300 to-90%",
    base: "bg-cyan-200",
    hover: "hover:bg-cyan-300",
    active: "border-2 border-cyan-400",
  },
  purple: {
    highlight: "bg-gradient-to-r from-purple-200 from-10% via-purple-100 via-30% to-purple-300 to-90%",
    base: "bg-purple-200",
    hover: "hover:bg-purple-300",
    active: "border-2 border-purple-400",
  },
  pink: {
    highlight: "bg-gradient-to-r from-pink-200 from-10% via-pink-100 via-30% to-pink-300 to-90%",
    base: "bg-pink-200",
    hover: "hover:bg-pink-300",
    active: "border-2 border-pink-400",
  },
};

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