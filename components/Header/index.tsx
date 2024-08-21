"use client";

import { FC, useState } from "react";
import PrimaryButton from "@/components/UI/Buttons/PrimaryButton";
import SecondaryButton from "@/components/UI/Buttons/SecondaryButton";
import OutlinedButton from "../UI/Buttons/OutlinedButton";
import SliderButton from "../UI/Buttons/SliderButton";
import { LogoIcon, XIcon } from "@/components/UI/Icons";
import Link from "next/link";
import cn from "classnames";
import Image from "next/image";
import Burger from "../../assets/Burger.svg";
import Close from "../../assets/close.svg";
import IconButton from "../UI/Buttons/IconButton";
import {
  InstagramIcon,
  LinkedinIcon,
  TelegramIcon,
} from "@/components/UI/Icons";

const Header: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickOnJoin = () => {};

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const linkItems = [
    {
      text: "Solana Advantages",
      href: "#advantages",
      className: "text-xs lg:text-[16px]",
    },
    {
      text: "News and Events",
      href: "#news",
      className: "text-xs lg:text-[16px] ml-[20px] lg:ml-36",
    },
    {
      text: "Projects",
      href: "#projects",
      className: "text-xs lg:text-[16px] ml-[20px] lg:ml-36",
    },
    {
      text: "Community",
      href: "#community",
      className: "text-xs lg:text-[16px] ml-[20px] lg:ml-36",
    },
    {
      text: "Contacts",
      href: "#contact",
      className: "text-xs lg:text-[16px] ml-[20px] lg:ml-36",
    },
  ];

  return (
    <>
      <header
        className={cn(
          "flex justify-between items-center pt-[23px] lg:pt-46 px-20 md:px-41 lg:px-70"
        )}
      >
        <Link href="/" className="cursor-pointer">
          <LogoIcon />
        </Link>
        <div className=" hidden md:block">
          {linkItems.map((item, key) => (
            <Link key={key} className={item.className} href={item.href}>
              {item.text}
            </Link>
          ))}
        </div>
        <Link className="hidden md:block" href="#join-us">
          <SecondaryButton onClick={handleClickOnJoin}>Join us</SecondaryButton>
        </Link>
        {isModalOpen ? (
          <Image
            className="md:hidden cursor-pointer"
            src={Close}
            width={18}
            height={18}
            alt="close"
            onClick={toggleModal}
            style={{ zIndex: 555 }}
          />
        ) : (
          <Image
            className="md:hidden cursor-pointer"
            src={Burger}
            width={26}
            height={17}
            alt="burger"
            onClick={toggleModal}
          />
        )}
      </header>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 p-18   flex items-center justify-center z-[1]">
          <div className="bg-[#0D061B] w-full h-[80%] p-6  rounded-[10px]">
            <div className="flex flex-col items-center">
              {linkItems.map((item, key) => (
                <Link
                  className="mt-14 text-[14px]"
                  onClick={toggleModal}
                  key={key}
                  href={item.href}
                >
                  {item.text}
                </Link>
              ))}
              <Link className="my-22" href="#join-us">
                <PrimaryButton onClick={handleClickOnJoin}>
                  Join us
                </PrimaryButton>
              </Link>
            </div>
            <div className="flex justify-center">
              <a href="https://x.com" target="_blank">
                <IconButton onClick={() => {}}>
                  <XIcon />
                </IconButton>
              </a>
              <div className="ml-20">
                <a href="https://instagram.com" target="_blank">
                  <IconButton onClick={() => {}}>
                    <InstagramIcon />
                  </IconButton>
                </a>
              </div>
              <div className="ml-20">
                <a href="https://linkedin.com" target="_blank">
                  <IconButton onClick={() => {}}>
                    <LinkedinIcon />
                  </IconButton>
                </a>
              </div>
              <div className="ml-20">
                <a href="https://telegram.com" target="_blank">
                  <IconButton onClick={() => {}}>
                    <TelegramIcon />
                  </IconButton>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
