"use client";

import { FC } from "react";

import mapPicture from "@/assets/map.svg";
import PrimaryButton from "@/components/UI/Buttons/PrimaryButton";
import OutlinedButton from "@/components/UI/Buttons/OutlinedButton";

const Hero: FC = () => {
  const handleClickOnLearn = () => {};

  const handleClickOnCommunity = () => {};

  return (
    <div className="pt-46 pb-108 px-70">
      <p className="w-426 mt-74 select-none">
        The Armenian community of Solana Blockchain supporters and enthusiasts
        is meant to guide, help, and mentor people who build for or with the
        Solana blockchain.
      </p>
      <div className="absolute top-16 right-16 ">
        <img src={mapPicture.src} alt="map" />
      </div>

      <div className="mt-160 z-4">
        <h1 className="font-round text-el select-none">Solana Armenia</h1>
        <div className="mt-46 flex">
          <PrimaryButton onClick={handleClickOnLearn}>
            Learn solana
          </PrimaryButton>
          <div className="ml-10">
            <OutlinedButton onClick={handleClickOnCommunity}>
              community
            </OutlinedButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
