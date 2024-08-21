"use client";
import { FC } from "react";

import joinUsPicture from "@/assets/join-us-bg.png";
import personPicture from "@/assets/person.png";
import EmailInput from "@/components/UI/Inputs/EmailInput";
import PrimaryButton from "@/components/UI/Buttons/PrimaryButton";

const JoinUs: FC = () => {
  return (
    <div
      className="pt-165 pb-170 p-20 flex flex-col items-center justify-center min-h-300"
      id="join-us"
      style={{ backgroundImage: `url(${joinUsPicture.src})` }}
    >
      <div className="flex items-center justify-center">
        <div className="h-60 w-60 bg-purple-1 rounded-full flex items-center justify-center">
          <img className="w-32" src={personPicture.src} alt="person" />
        </div>
        <div className="h-60 w-60 bg-green-1 rounded-full flex items-center justify-center -m-10">
          <img className="w-32" src={personPicture.src} alt="person" />
        </div>
        <div className="h-60 w-60 bg-purple-1 rounded-full flex items-center justify-center">
          <img className="w-32" src={personPicture.src} alt="person" />
        </div>
        <div className="h-60 w-60 bg-green-1 rounded-full flex items-center justify-center -ml-10">
          <img className="w-32" src={personPicture.src} alt="person" />
        </div>
      </div>
      <div className="mt-31 md:mt-22 lg:mt-46 ">
        <h4 className="text-[16px] lg:text-medium font-medium uppercase text-center tracking-wide">
          Web3 innovation on Solana’s blockchain
        </h4>
        <p className="text-[40px] md:text-[48px] lg:text-huge uppercase font-round max-w-1000 text-center mt-46">
          join the community{" "}
          <span className="font-round text-[40px] md:text-[48px] lg:text-huge bg-pink-2 text-purple-1 rounded-xs p-8">
            of the future
          </span>
        </p>
      </div>
      <div className="mt-48">
        <div className="w-482 flex items-center bg-white-2 rounded-sm pr-6">
          <div className="w-298">
            <EmailInput isTransparent isFullWidth placeholder="Email" />
          </div>
          <div className="hidden md:block">
            <PrimaryButton onClick={() => {}}>Subscribe</PrimaryButton>
          </div>
        </div>
        <div className="md:hidden block mt-5">
          <PrimaryButton isFullWidth onClick={() => {}}>
            Subscribe
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
