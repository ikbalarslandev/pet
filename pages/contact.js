import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import Cont from "../public/img/pets/contact.png";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-yellow">
      <Link
        href="/"
        className=" absolute top-0 py-5 text-3xl text-slate-800 bg-orange-600 w-full text-center"
      >
        Tiara Petsits
      </Link>
      <div className=" flex-1  w-full py-5 pt-20 flex flex-col items-center my-20 gap-10">
        <Link
          href="https://www.instagram.com/nerdwhogotghosted/"
          className="flex gap-1 items-center"
        >
          <FaInstagram size={32} />
          <p>@nerdwhogetghosted</p>
        </Link>
        <Link
          href="https://wa.me/905414680913?text=Hello%20I%20would%20like%20to%20know%20more%20about%20your%20services"
          target="_blank"
          className="flex gap-1 items-center"
        >
          <FaWhatsapp size={32} />
          <p>+90 541 468 09 13</p>
        </Link>
        <Link
          href="mailto:mutesmshop@gmail.com"
          className="flex gap-1 items-center"
        >
          <CgMail size={32} />
          <p>mutesmshop@gmail.com</p>
        </Link>
        <Image
          className="absolute right-0 -bottom-3 "
          src={Cont}
          alt="Nerd Who Got Ghosted"
          width={200}
          height={200}
        />
      </div>

      <Link className="absolute bottom-4 left-16" href="/">
        Home
      </Link>
    </div>
  );
};

export default Contact;
