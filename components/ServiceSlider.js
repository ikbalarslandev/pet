import React from "react";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper";

import "swiper/css/navigation";
import "swiper/css";

import Service1Icon from "../public/img/services/service-icon1.svg";
import Service2Icon from "../public/img/services/service-icon2.svg";
import Service3Icon from "../public/img/services/service-icon3.svg";

import { FaHouse } from "react-icons/fa6";
import { FaPaw } from "react-icons/fa";
import { FaShieldCat } from "react-icons/fa6";
import { FaHouseChimneyUser } from "react-icons/fa6";

const services = [
  {
    icon: <FaHouse size={100} className="mb-6  bg-yellow p-5 rounded-full" />,
    name: "Pet/House Sitting",
    description:
      "As a dedicated pet and house sitter, I offer a reliable and attentive service tailored to the needs of your home and beloved pets. My approach ensures that your pets receive personalized care, including feeding, exercise, and companionship, while your home remains secure and well-maintained. I am committed to upholding your routines and addressing any specific requirements, such as medication administration or special dietary needs. My goal is to provide peace of mind and a safe environment for your pets and home during your absence. With a focus on trustworthiness and responsibility, I strive to deliver exceptional care and attention, making your time away stress-free.",
  },
  {
    icon: <FaPaw size={100} className="mb-6  bg-yellow p-5 rounded-full" />,
    name: "Dog Walking",
    description:
      "My dog walking services are designed to offer your canine companion both physical exercise and mental stimulation in a safe, enjoyable manner. I tailor each walk to your dog's specific needs, ensuring they receive the appropriate level of activity and engagement. From energetic play sessions to leisurely strolls, I prioritize your dog's well-being and safety. My approach includes adhering to your dog's routine, monitoring their behavior, and addressing any special requirements or preferences. With a focus on reliability and attentiveness, I aim to provide a positive experience for your dog, making each walk a rewarding part of their day.",
  },
  {
    icon: (
      <FaShieldCat size={100} className="mb-6  bg-yellow p-5 rounded-full" />
    ),
    name: "Drop-In Pet Visits",
    description:
      "My drop-in pet sitting visits are designed to provide attentive care and reassurance for your pets while you're away. Each visit includes feeding, refreshing water, and administering any necessary medications. I also take time to engage with your pets through play and companionship, ensuring they receive the attention they need. Additionally, I check the general condition of your home, handle minor tasks such as bringing in mail or watering plants, and maintain security by keeping a watchful eye. My goal is to offer peace of mind by delivering consistent, reliable care tailored to your pets' routines and preferences.",
  },
  {
    icon: (
      <FaHouseChimneyUser
        size={100}
        className="mb-6  bg-yellow p-5 rounded-full"
      />
    ),
    name: "Pet Boarding",
    description:
      "I offer tailored pet boarding services that provide a secure and comfortable environment for your pets while you're away. My boarding services include personalized care based on your pet's individual needs, such as regular feeding, exercise, and playtime. Depending on my travel schedule and available space, I ensure that each pet receives dedicated attention and a stress-free stay. Whether you're traveling locally or abroad, I adapt my services to accommodate your pet’s routines and special requirements, including medical needs and dietary restrictions. With a focus on creating a home-like atmosphere, I aim to offer peace of ",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      navigation={true}
      modules={[Navigation]}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
      }}
      className="serviceSlider min-h-[680px]"
    >
      {services.map((service, index) => {
        return (
          <>
            <SwiperSlide
              className="border border-primary/20 bg-cream  rounded-[66px] py-12 px-8"
              key={index}
            >
              <div key={index}>
                <div className="flex items-center"> {service.icon}</div>
                <div className="text-[26px] font-medium mb-4">
                  {service.name}
                </div>
                <div className="text-[20px]  max-h-80 overflow-hidden overflow-y-auto">
                  {service.description}
                </div>
              </div>
            </SwiperSlide>
          </>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
