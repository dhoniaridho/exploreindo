import React from "react";
import * as Fa from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="px-20 bg-black text-white">
      <div className="flex justify-between">
        <div>
          <h1 className="text-4xl font-bold">QWERy</h1>
        </div>
        <div>
          <a href="#">Ready to explore?</a>
          <a
            className="py-3 px-5 bg-yellow-300 text-black rounded-sm mx-4 font-semibold"
            href="#"
          >
            Get started
          </a>
        </div>
      </div>
      <div className="flex my-28">
        <div className="w-1/4 p-3">
          <h1 className="text-3xl font-bold">Let's go on vacation, Make your day</h1>
        </div>
        <div className="w-1/4 flex justify-center flex-col p-3">
          <h1 className="font-bold text-yellow-300">Services</h1>
          <ul className="mt-1">
            <li className="my-2">Campaigns</li>
            <li className="my-2">Email Marketing</li>
            <li className="my-2">Branding</li>
            <li className="my-2">Branding</li>
          </ul>
        </div>
        <div className="w-1/4 flex justify-center flex-col p-3">
          <h1 className="font-bold text-yellow-300">About</h1>
          <ul className="mt-1">
            <li className="my-2">Campaigns</li>
            <li className="my-2">Email Marketing</li>
            <li className="my-2">Branding</li>
            <li className="my-2">Branding</li>
          </ul>
        </div>
        <div className="w-1/4 flex justify-center flex-col p-3">
          <h1 className="font-bold text-yellow-300">Help</h1>
          <ul className="mt-1">
            <li className="my-2">Campaigns</li>
            <li className="my-2">Email Marketing</li>
            <li className="my-2">Branding</li>
            <li className="my-2">Branding</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between place-items-center my-20">
        <div>
          <a className="mx-2" href="#">
            Terms & Conditions
          </a>
          <a className="mx-2" href="#">
            Privacy Policy
          </a>
        </div>
        <div>
          <ul className="flex mx-2 text-2xl">
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
