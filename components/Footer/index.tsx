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
    <footer className="px-80 pt-110 pb-88 flex justify-between">
      <div>
        <div className="flex items-center">
          <LogoIcon />
          <span className="text-l font-round ml-10">Solana Armenia</span>
        </div>
        <span className="text-base mt-20 block">
          © Copyright 2024, All Rights Reserved
        </span>
      </div>
      <div className="flex ">
        <div className="flex flex-col">
          <Link className="text-sm font-medium" href="">
            Solana Advantages
          </Link>
          <Link className="mt-14 text-sm font-medium" href="">
            News and Events
          </Link>
          <Link className="mt-14 text-sm font-medium" href="">
            Community
          </Link>
        </div>
        <div className="flex flex-col ml-86">
          <Link className="text-sm font-medium" href="">
            Project
          </Link>
          <Link className="mt-14 text-sm font-medium" href="">
            Contacts
          </Link>
        </div>
      </div>
      <div className="flex">
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
