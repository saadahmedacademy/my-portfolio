import React from "react";
import {FaWhatsapp } from 'react-icons/fa'
import { IoMdMail } from "react-icons/io";
import { FaAddressBook } from "react-icons/fa";


export const Contact = () => {
  return (
    <>
      <section id="contect" className="text-white bg-gray-900 body-font relative">
        <div className="container px-6 py-24 mx-auto flex md:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex flex-col items-center gap-3 bg-black border-2 border-yellow-500">
          <div className="bg-black text-white relative flex flex-wrap py-2 bottom-1 right-3 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font flex items-center gap-1 font-semibold text-white tracking-widest text-xs">
                <FaAddressBook />
                <p> Address </p>
                </h2>
                <p className="mt-1">
                  Main Share-Faisal Karachi Airport Karachi Pakistan
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 text-white lg:mt-0">
                <h2 className="title-font flex gap-1 items-center font-semibold tracking-widest text-xs">
                <IoMdMail /> <p>Email</p>
                </h2>
                <a className="text-white leading-relaxed"
                href="mailto:saadqurashiazeemqurashi@email.com"
                target="_blank">
                  saadqurashiazeemqurashi@email.com
                </a>
                <h2 className="title-font flex items-center gap-1 font-semibold tracking-widest text-xs mt-4">
                <FaWhatsapp/>  <p> phone</p>
                </h2>
                <a href="https://api.whatsapp.com/send?phone=+923053431527" target="_blank">
                0305-3431527
                </a>
              </div>
            </div>

            <iframe
              className=" rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6265.323214605559!2d67.161638983398!3d24.88675493375645!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1730987778693!5m2!1sen!2sus"
              width="100%"
              height="80%"
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="lg:w-1/3 md:w-1/2 border-yellow-500 shadow-orange-400 border-2 rounded-lg bg-black flex flex-col items-center md:ml-auto w-full py-3 md:py-8 mt-8 md:mt-0">
            <h2 className="text-white font-bold text-lg mb-1 title-font">
              Contact Me
            </h2>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
              />
            </div>
            <button className="text-white bg-indigo-600 border-0 py-2 px-9 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Sent
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
