import React from "react";
import { FaGithub, FaInstalod, FaLinkedin} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <footer className="text-gray-300 bg-gray-900 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-cente justify-center items-center text-white mb-4 md:mb-0">
            <span className="w-10 h-10 rounded-full flex items-center justify-center bg-white">
              <FaInstalod className="text-3xl rotate[90%] text-black" />
            </span>
            <span className="ml-3 text-xl font-bold">
              M.SaadAhmed Portfolio
            </span>
          </a>
          <p className="text-sm text-gray-300 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
            © 2024 Muhammad SaadAhmed Portfolio
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              className="text-gray-300"
              href="https://www.facebook.com/profile.php?id=100070238826369"
              target="_blank"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a
              className="ml-3 text-gray-300"
              href="https://github.com/saadahmedacademy"
              target="_blank"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-8 h-8"
                viewBox="0 0 24 24"
              >
                <FaGithub />
              </svg>
            </a>
            <a
              className="ml-3 text-gray-300"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=saadqurashiazeemqurashi@gmail.com"
              target="_blank"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-8 h-8"
                viewBox="0 0 24 24"
              >
                <SiGmail />
              </svg>
            </a>
            <a
              className="ml-3 text-gray-300"
              href="https://www.linkedin.com/in/saad-azeem-a74a04273/"
              target="_blank"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="w-8 h-8"
                viewBox="0 0 24 24"
              >
                <FaLinkedin />
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
