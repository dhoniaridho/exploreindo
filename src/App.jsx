import React from "react";
import * as Fa from "react-icons/fa";
import MainLayout from "./components/layouts/MainLayout";

function App() {
  return (
    <MainLayout>
      <section className="w-full relative z-10">
        <img
          className="w-full object-cover h-screen z-0"
          src="https://i.ibb.co/W2C4qqP/hero.png"
          alt=""
        />
        <div className="flex justify-center place-items-center h-[calc(100vh-4rem)] absolute top-32 inset-x-0 text-white">
          <div className="pt-20 text-3xl md:text-6xl -mt-80 tracking-wide text-center">
            <h1 className="font-bold">Discover</h1>
            <h1 className="font-light">Wonderful Indonesia</h1>
          </div>
          <div className="hidden md:flex-rotate-90 origin-center absolute -left-9 top-1/4 justify-center place-items-center">
            <h4>Follow Us</h4>
            <ul className="flex mx-2">
              <li className="mx-2">
                <Fa.FaFacebook />
              </li>
              <li className="mx-2">
                <Fa.FaInstagram />
              </li>
              <li className="mx-2">
                <Fa.FaTwitter />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-black text-white min-h-screen flex justify-between flex-col md:flex-row place-items-center px-5 md:px-20 py-20">
        <div className="md:w-1/2 p-5">
          <img src="https://i.ibb.co/LdtctMt/holiday.png" alt="" />
        </div>
        <div className="md:w-1/2 p-5">
          <h1 className="text-xl font-bold text-yellow-300 uppercase">
            EAST nUSA TENGGARA
          </h1>
          <h1 className="text-5xl xl font-bold w-3/4">
            Have you enjoyed your holiday?
          </h1>
          <p className="mt-5">
            You will be amazed if you take part in this sailing Komodo island
            tour package. So it is also mandatory for you, besides enjoying
            Komodo tourism on Komodo Island, you also have to taste the marine
            tourism. The beautiful waters of Komodo will make you meet many
            travelers from other countries.
          </p>
          <div className="mt-5">
            <a className="text-yellow-300 font-semibold" href="#">
              read more
            </a>
          </div>
        </div>
      </section>
      <section className="bg-black text-white min-h-screen px-5 md:px-20 py-10 relative">
        <img
          className="w-full"
          src="https://i.ibb.co/TK3CPY8/bromo.png"
          alt=""
        />
        <div className="mt-5 md:-mt-72">
          <div className="w-full flex justify-center text-center flex-col">
            <h1 className="text-4xl font-bold md:w-1/2 mx-auto">
              Steady your steps, we will climb together!
            </h1>
            <p className="mt-6 w-3/4 mx-auto font-semibold">
              Enjoying the vast expanse of the sea of ​​​​sand, witnessing the
              splendor of Mount Semeru that soars into the sky, and gazing at
              the beauty of the sun moving out of its bed or otherwise enjoying
              the dim twilight from the Bromo ridge is an unforgettable
              experience when visiting Bromo.
            </p>
            <div className="mt-2">
              <a className="text-yellow-300 font-semibold" href="#">
                read more
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black text-white min-h-screen flex flex-col md:flex-row justify-between place-items-center md:px-20 py-32">
        <div className="md:w-1/2 p-5">
          <h1 className="text-xl font-bold text-yellow-300 uppercase">
            INDONESIAN CULTURE
          </h1>
          <h1 className="text-5xl xl font-bold w-3/4">
            Our culture here is very friendly to people
          </h1>
          <p className="mt-5">
            known for his politeness, manners and gentleness. This becomes a
            characteristic when they mingle with other tribes and become basic
            traits that are passed down by their ancestors.
          </p>
          <div className="mt-5">
            <a className="text-yellow-300 font-semibold" href="#">
              read more
            </a>
          </div>
        </div>
        <div className="md:w-1/2 p-5">
          <img
            className="md:w-3/4 mx-auto"
            src="https://i.ibb.co/bbM8qML/01.png"
            alt=""
          />
        </div>
      </section>
    </MainLayout>
  );
}

export default App;
