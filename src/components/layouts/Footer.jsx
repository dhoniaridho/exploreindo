import React from "react";
import * as Fa from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="px-5  md:px-20 bg-black text-white">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <h1 className="text-4xl font-bold">QWERy</h1>
        </div>
        <div className="flex flex-col md:flex-row">
          <a className="mt-3" href="#">Ready to explore?</a>
          <a
            className="py-3 px-5 mt-4 bg-yellow-300 text-black rounded-sm md:mx-4 font-semibold"
            href="#"
          >
            Get started
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row my-28">
        <div className="md:w-1/4 p-3">
          <h1 className="text-3xl font-bold">Let's go on vacation, Make your day</h1>
        </div>
        <div className="md:w-1/4 flex justify-center flex-col p-3">
          <h1 className="font-bold text-yellow-300">Services</h1>
          <ul className="mt-1">
            <li className="my-2">Campaigns</li>
            <li className="my-2">Email Marketing</li>
            <li className="my-2">Branding</li>
            <li className="my-2">Branding</li>
          </ul>
        </div>
        <div className="md:w-1/4 flex justify-center flex-col p-3">
          <h1 className="font-bold text-yellow-300">About</h1>
          <ul className="mt-1">
            <li className="my-2">Campaigns</li>
            <li className="my-2">Email Marketing</li>
            <li className="my-2">Branding</li>
            <li className="my-2">Branding</li>
          </ul>
        </div>
        <div className="md:w-1/4 flex justify-center flex-col p-3">
          <h1 className="font-bold text-yellow-300">Help</h1>
          <ul className="mt-1">
            <li className="my-2">Campaigns</li>
            <li className="my-2">Email Marketing</li>
            <li className="my-2">Branding</li>
            <li className="my-2">Branding</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between place-items-center flex-col md:flex-row my-20">
        <div>
          <a className="mx-2" href="#">
            Terms & Conditions
          </a>
          <a className="mx-2" href="#">
            Privacy Policy
          </a>
        </div>
        <div>
          <ul className="flex mx-2 text-2xl mt-5">
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
      <div className="h-32 flex justify-center place-items-center">
        <p>Copyright 2021 QWERy</p>
      </div>
    </footer>
  );
}
