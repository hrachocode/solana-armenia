import { FC } from "react";
import Hero from "@/components/Hero";
import Header from "@/components/Header";

import heroPicture from "@/assets/hero-bg.png";

import "./styles.scss";
import * as url from "node:url";
import cn from "classnames";
import JoinUs from "@/components/JoinUs";
import Contact from "@/components/Contact";

const Home: FC = () => {
  return (
    <div>
      <div
        className={cn("bg-no-repeat bg-cover bg-center rounded-lg relative")}
        style={{
          backgroundImage: `url(${heroPicture.src})`,
        }}
      >
        <Header />
        <Hero />
      </div>
      <JoinUs />
      <Contact />
    </div>
  );
};

export default Home;
