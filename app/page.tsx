import { FC } from "react";
import cn from "classnames";

import Hero from "@/components/Hero";
import Header from "@/components/Header";
import JoinUs from "@/components/JoinUs";
import Contact from "@/components/Contact";
import heroPicture from "@/assets/hero-bg.png";
import Community from "@/components/Community";
import Projects from "@/components/Projects";

const Home: FC = () => {
  return (
    <div>
      <div
        className={cn(
          "bg-no-repeat bg-cover bg-center rounded-[20px] md:rounded-lg  relative"
        )}
        style={{
          backgroundImage: `url(${heroPicture.src})`,
        }}
      >
        <Header />
        <Hero />
      </div>
      <Projects />
      <Community />
      <JoinUs />
      <Contact />
    </div>
  );
};

Home.displayName = "Home";

export default Home;
