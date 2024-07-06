"use client";

import { FC, useState } from "react";
import PrimaryButton from "@/components/UI/Buttons/PrimaryButton";
import SecondaryButton from "@/components/UI/Buttons/SecondaryButton";
import OutlinedButton from "../UI/Buttons/OutlinedButton";
import SliderButton from "../UI/Buttons/SliderButton";
import { LogoIcon } from "@/components/UI/Icons";
import Link from "next/link";
import cn from "classnames";

const Header: FC = () => {
  const handleClickOnJoin = () => { };

  return (
    <header
      className={cn(
        "flex justify-between items-center pt-46 px-70",
      )}
    >
      <Link href="/" className="cursor-pointer">
        <LogoIcon />
      </Link>
      <div>
        <Link className="" href="#advantages">
          Solana Advantages
        </Link>
        <Link className="ml-36" href="#news">
          News and Events
        </Link>
        <Link className="ml-36" href="#projects">
          Projects
        </Link>
        <Link className="ml-36" href="#community">
          Community
        </Link>
        <Link className="ml-36" href="#contact">
          Contacts
        </Link>
      </div>
      <Link href="#join-us">
        <SecondaryButton onClick={handleClickOnJoin}>Join us</SecondaryButton>

      </Link>
    </header>
  );
};

export default Header;
