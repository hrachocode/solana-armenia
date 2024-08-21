"use client";
import { FC, useEffect, useState } from "react";
import mapPicture from "@/assets/map.svg";
import PrimaryButton from "@/components/UI/Buttons/PrimaryButton";
import OutlinedButton from "@/components/UI/Buttons/OutlinedButton";
import Image from "next/image";
import Solana from "../../assets/solana.svg";
import Armenia from "../../assets/armenia.svg";

const Hero: FC = () => {
  const [matches, setMatches] = useState(false);
  const handleClickOnLearn = () => {};

  const handleClickOnCommunity = () => {};

  useEffect(() => {
    const handleResize = () => {
      setMatches(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="pt-78 md:pt-46 pb-108 px-20 md:px-41 lg:px-70">
      <p className="w-full md:w-355 lg:w-426 lg:mt-74 select-none">
        The Armenian community of Solana Blockchain supportersand enthusiasts is
        meant to guide, help, and mentor peoplewho build for or with the Solana
        blockchain.
      </p>
      <div className="absolute top-[30%] md:top-[20%] md:right-[2%] lg:top-16 lg:right-16 ">
        <img src={mapPicture.src} alt="map" />
      </div>

      <div className="pt-[268px] lg:mt-160 z-4">
        <div className="lg:hidden">
          <div className="lg:w-full sm:w-1/2 md:w-1">
            <Image
              className="w-full pb-12"
              src={Solana}
              width={580}
              height={87}
              alt="solana"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="lg:w-full sm:w-1/2 md:w-[600px]  ">
            <Image
              className="w-full"
              src={Armenia}
              width={580}
              height={87}
              alt="armenia"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
        <h1 className="hidden lg:block font-round text-el select-none relative">
          Solana Armenia
        </h1>
        <div className="mt-46 md:flex">
          <PrimaryButton isFullWidth={matches} onClick={handleClickOnLearn}>
            Learn solana
          </PrimaryButton>
          <div className="md:ml-10 mt-5 md:mt-0">
            <OutlinedButton
              isFullWidth={matches}
              onClick={handleClickOnCommunity}
            >
              community
            </OutlinedButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
