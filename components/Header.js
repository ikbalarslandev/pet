import React from "react";

const Header = () => {
  return (
    <header className="py-6 lg:absolute lg:w-full lg:left-0">
      <div className="container mx-auto flex flex-col gap-y-6 lg:flex-row h-full justify-between items-center relative text-slate-300  md:text-primary">
        {/* logo */}
        <a href="#">Tiara Petsits</a>
        {/* nav */}
        <nav className="text-xl flex gap-x-4 lg:gap-x-12   md:mr-64">
          <a href="#">Services</a>
          <a href="#">Gallery</a>
          <a href="#">Reviews</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
