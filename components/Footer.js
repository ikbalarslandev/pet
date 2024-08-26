import React from "react";

import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

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
            <ul className="flex flex-col gap-y-6 items-center lg:flex-row lg:gap-x-4 text-base font-semibold mb-8">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  scrollToServices();
                }}
              >
                Services
              </a>
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToAbout();
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a href="/gallery">Gallery</a>
              </li>
              <li>
                <a href="/review">Reviews</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
            {/* socials */}
            <div className="flex justify-center lg:justify-start">
              <ul className="flex gap-x-4 items-center">
                <li>
                  <a href="https://www.instagram.com/nerdwhogotghosted/">
                    <BsInstagram size={24} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/905414680913?text=Hello%20I%20would%20like%20to%20know%20more%20about%20your%20services"
                    target="_blank"
                  >
                    <FaWhatsapp size={26} />
                  </a>
                </li>
                <li>
                  <a href="mailto:mutesmshop@gmail.com">
                    <CgMail size={32} />
                  </a>
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
