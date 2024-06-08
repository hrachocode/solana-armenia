"use client";

import { FC } from "react";
import PrimaryButton from "@/components/UI/Buttons/PrimaryButton";
import SecondaryButton from "@/components/UI/Buttons/SecondaryButton";
import OutlinedButton from "../UI/Buttons/OutlinedButton";
import SliderButton from "../UI/Buttons/SliderButton";

const Header: FC = () => {
  return (
    <header>
      <PrimaryButton disabled onClick={() => alert("ok")}>
        Learn solana
      </PrimaryButton>
      <SecondaryButton onClick={() => alert("ok")}>Join us</SecondaryButton>
      <OutlinedButton onClick={() => alert("ok")}>Learn solana</OutlinedButton>
      <SliderButton onClick={() => alert("ok")} />
    </header>
  );
};

export default Header;
