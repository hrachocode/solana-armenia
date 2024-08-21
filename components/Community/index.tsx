"use client";
import React, { FC } from "react";

import communityPicture from "@/assets/community-bg.png";
import logoPicture from "@/assets/logo-bg.png";
import person1Picture from "@/assets/community/person-1.png";
import person2Picture from "@/assets/community/person-2.png";
import person3Picture from "@/assets/community/person-3.png";
import person4Picture from "@/assets/community/person-4.png";
import person5Picture from "@/assets/community/person-5.png";
import { LogoIcon } from "../UI/Icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Community: FC = () => {
  return (
    <div
      id="community"
      className="min-h-300 pt-[60px] lg:pt-96  pb-100 rounded-lg"
      style={{ backgroundImage: `url(${communityPicture.src})` }}
    >
      <div className="p-[14px] md:p-41 lg:p-70">
        <h4 className="uppercase text-[14px] lg:text-heading font-medium tracking-wide">
          learn about us
        </h4>
        <p className="text-[36px] flex flex-col md:block lg:text-[70px] xl:text-huge uppercase font-round max-w-1000  mt-26 md:mt-18 lg:mt-36">
          Armenian
          <span className="font-round text-[36px] lg:text-[70px] xl:text-huge bg-white-1 text-purple-2 rounded-xs md:ml-10 p-6 md:p-12 max-w-[250px] md:max-w-0">
            Community
          </span>
        </p>
      </div>
      <div className="mt-[60px] lg:mt-83 flex">
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            768: {
              slidesPerView: 3, // 3 slides when width >= 768px
            },
          }}
        >
          <SwiperSlide>
            <img src={person1Picture.src} alt="person" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" src={person2Picture.src} alt="person" />
            <div className="bg-white-1 rounded-special2 pt-12 px-6 pb-6 w-full max-h-[200px]">
              <p className="text-black-1 text-medium font-semibold">
                Solana brings people{" "}
                <span className="text-purple-1 font-bold text-medium">
                  together.
                </span>
              </p>
              <div className="flex justify-end mt-61">
                <LogoIcon />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img className="w-530" src={person3Picture.src} alt="person" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-355" src={person4Picture.src} alt="person" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-between mt-63 px-15 md:px-30 lg:px-[70px]">
        <div className="-mt-31">
          <p className="text-huge2 font-round">{">"}50</p>
          <p className="text-heading -mt-14">community members</p>
        </div>
        <p className="text-[16px] lg:text-26 lg:w-793 font-extralight md:ml-106 mt-48 md:mt-0">
          <span className="text-[16px] lg:text-26 md:ml-133 font-extralight">
            The arrival of Solana in Armenia has sparked significant
          </span>{" "}
          enthusiasm and discussion within the nation's tech community.As a
          high-performance blockchain solution, Solana has managedto garner
          considerable{" "}
          <span className="text-[16px] lg:text-26 opacity-6 text-white-4 font-extralight">
            interest and acclaim since becomingavailable in the country two
            years ago.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Community;
