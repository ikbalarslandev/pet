import React from "react";

import Image from "next/image";

import Img1 from "../public/img/about/1.jpeg";

const About = () => {
  return (
    <section className="bg-adoption bg-cover bg-center bg-no-repeat min-h-[760px] py-8 flex">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-x-16">
        {/* image */}
        <div className="flex-1 mb-6 lg:mb-0">
          <Image
            src={Img1}
            width={400}
            height={560}
            className="rounded-3xl md:ml-8"
            alt=""
          />
        </div>
        {/* text */}
        <div className="flex-1 text-cream text-center max-w-md lg:text-left lg:max-w-none">
          <h2 className="h2 mb-6">About Me</h2>
          <p className="mb-6 text-md">
            Hello, I'm Tiara, a passionate pet sitter with a love for animals
            and a global perspective on pet care. With experience pet sitting in
            Turkey, Indonesia, and the UAE, I bring a diverse background and a
            deep understanding of different pet needs to my services. My goal is
            to combine my love for animals with my desire to travel, offering
            reliable and attentive care for your pets wherever I go. I proudly
            own a cat named Tobey, whom I adopted from an animal shelter in
            Istanbul, Turkey. This experience has strengthened my commitment to
            compassionate pet care. Whether you're traveling or need support
            with your pet, I'm dedicated to providing a safe and nurturing
            environment tailored to your pet’s needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
