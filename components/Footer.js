import React from "react";

import { BsInstagram } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import Link from "next/link";

const Footer = ({ scrollToServices, scrollToAbout }) => {
  return (
    <footer className="bg-footer bg-cover bg-center bg-no-repeat min-h-[263px] flex items-center py-8">
      <div className="container mx-auto">
        <div className="coflex flex-col lg:flex-row">
          {/* logo */}
          <div className="flex-1 text-orange text-4xl text-center lg:text-left flex items-center justify-center lg:justify-start mb-6">
            Tiara Petsits
          </div>
          <div className="text-white flex-1">
            {/* links */}
            <ul className="flex flex-col gap-y-6 items-center lg:flex-row lg:gap-x-4 text-base font-semibold mb-8 cursor-pointer">
              <li>
                <p
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToAbout();
                  }}
                >
                  About
                </p>
              </li>
              <li>
                <p
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToServices();
                  }}
                >
                  Services
                </p>
              </li>
              <li>
                <Link href="/gallery">Gallery</Link>
              </li>
              <li>
                <Link href="/review">Reviews</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
            {/* socials */}
            <div className="flex justify-center lg:justify-start">
              <ul className="flex gap-x-4 items-center">
                <li>
                  <Link href="https://www.instagram.com/nerdwhogotghosted/">
                    <BsInstagram size={24} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://wa.me/905414680913?text=Hello%20I%20would%20like%20to%20know%20more%20about%20your%20services"
                    target="_blank"
                  >
                    <FaWhatsapp size={26} />
                  </Link>
                </li>
                <li>
                  <Link href="mailto:mutesmshop@gmail.com">
                    <CgMail size={32} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
