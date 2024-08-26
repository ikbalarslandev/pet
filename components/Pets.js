import React, { useState } from "react";
import Image from "next/image";
import Pet1Img from "../public/img/pets/1.jpg";
import Pet2Img from "../public/img/pets/2.jpg";
import Pet3Img from "../public/img/pets/3.jpg";
import Pet4Img from "../public/img/pets/4.jpg";
import Pet5Img from "../public/img/pets/5.jpg";
import Pet6Img from "../public/img/pets/6.jpg";
import Pet7Img from "../public/img/pets/7.jpg";
import Pet8Img from "../public/img/pets/8.jpg";

const pets = [
  {
    id: 1,
    category: "Jamie",
    image: Pet1Img,
  },
  {
    id: 2,
    category: "Daphne",
    image: Pet2Img,
  },
  {
    id: 3,
    category: "Dolma",
    image: Pet3Img,
  },
  {
    id: 4,
    category: "Fifi",
    image: Pet4Img,
  },
  {
    id: 5,
    category: "Tobey",
    image: Pet5Img,
  },
  {
    id: 6,
    category: "Milky",
    image: Pet6Img,
  },
  {
    id: 7,
    category: "Soda",
    image: Pet7Img,
  },
  {
    id: 8,
    category: "Bean",
    image: Pet8Img,
  },
];

const Pets = () => {
  const [petDetails, setPetDetails] = useState(pets[0]);
  const [petIndex, setPetIndex] = useState(0);

  const getPetDetails = (id) => {
    const pet = pets.find((pet) => pet.id === id);
    setPetDetails(pet);
  };

  return (
    <section className="bg-pets bg-center py-6 overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* pets */}
        <div className="flex-1 flex flex-col lg:flex-row">
          {/* pet detail */}
          <div className="lg:w-[30%] flex flex-col justify-center items-end pb-6 lg:py-2 mx-auto md:mr-10">
            <div className="text-center text-white">
              {/* category */}
              <div className="text-[32px] capitalize">
                {petDetails?.category}
              </div>
              {/* image */}
              <Image
                src={petDetails?.image}
                alt={petDetails?.category}
                className="rounded-full aspect-square bg-cover w-40 border border-white"
              />
            </div>
          </div>
          {/* pet list */}
          <div className="relative lg:w-[60%] flex-1 flex flex-wrap items-center">
            <div className="flex flex-wrap gap-4 justify-center lg:justify-end lg:-mr-6">
              {pets.map((pet, index) => (
                <div
                  onClick={() => {
                    getPetDetails(pet.id);
                    setPetIndex(index);
                  }}
                  className="cursor-pointer relative"
                  key={index}
                >
                  {/* overlay */}
                  <div
                    className={`w-full h-full absolute rounded-full ${
                      petIndex === index
                        ? "border-2 border-white"
                        : "bg-black/40"
                    }`}
                  ></div>
                  <Image
                    src={pet.image}
                    alt={pet.category}
                    className="rounded-full aspect-square bg-cover w-24"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pets;
