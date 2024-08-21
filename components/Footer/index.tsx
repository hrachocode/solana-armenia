"use client";

import { FC } from "react";
import {
  InstagramIcon,
  LinkedinIcon,
  LogoIcon,
  TelegramIcon,
} from "@/components/UI/Icons";
import Link from "next/link";
import IconButton from "@/components/UI/Buttons/IconButton";
import { XIcon } from "@/components/UI/Icons";

const Footer: FC = () => {
  return (
    <footer className="md:px-46 lg:px-80  pt-110 pb-88 flex  flex-col md:flex-row items-center justify-between">
      <div>
        <div className="flex items-center">
          <LogoIcon width={20} height={18} />
          <span className="text-[20px] md:text-l font-round ml-10">
            Solana Armenia
          </span>
        </div>
        <span className="text-[14px] md:text-base mt-20 mb-36 md:mb-0 block">
          © Copyright 2024, All Rights Reserved
        </span>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col text-center md:text-left">
          <Link className="text-sm font-medium" href="">
            Solana Advantages
          </Link>
          <Link className="mt-14 text-sm font-medium" href="">
            News and Events
          </Link>
          <Link className="mt-14 text-sm font-medium" href="">
            Community
          </Link>
          <div className="lg:hidden flex flex-col  text-center md:text-left mt-14 ">
            <Link className="text-sm font-medium" href="">
              Project
            </Link>
            <Link className="mt-14 text-sm font-medium" href="">
              Contacts
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex flex-col md:ml-86 text-center md:text-left mt-14 md:mt-0">
          <Link className="text-sm font-medium" href="">
            Project
          </Link>
          <Link className="mt-14 text-sm font-medium" href="">
            Contacts
          </Link>
        </div>
      </div>
      <div className="flex mt-26 md:mt-0">
        <a href="https://x.com" target="_blank">
          <IconButton onClick={() => {}}>
            <XIcon />
          </IconButton>
        </a>
        <div className="ml-10">
          <a href="https://instagram.com" target="_blank">
            <IconButton onClick={() => {}}>
              <InstagramIcon />
            </IconButton>
          </a>
        </div>
        <div className="ml-10">
          <a href="https://linkedin.com" target="_blank">
            <IconButton onClick={() => {}}>
              <LinkedinIcon />
            </IconButton>
          </a>
        </div>
        <div className="ml-10">
          <a href="https://telegram.com" target="_blank">
            <IconButton onClick={() => {}}>
              <TelegramIcon />
            </IconButton>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
