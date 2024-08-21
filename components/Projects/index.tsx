import { FC } from "react";

import projectsPicture from "@/assets/projects-bg.png";
import project1Picture from "@/assets/projects/project-1.png";
import project2Picture from "@/assets/projects/project-2.png";
import project3Picture from "@/assets/projects/project-3.png";

const Projects: FC = () => {
  return (
    <div
      id="projects"
      className="rounded-lg py-96 px-18 md:px-40 lg:px-70"
      style={{ backgroundImage: `url(${projectsPicture.src})` }}
    >
      <div>
        <h4 className="text-black-1 text-[14px] lg:text-heading tracking-wide uppercase font-medium">
          best cases
        </h4>
        <p className="text-[36px] flex flex-col md:block lg:text-[70px] xl:text-huge uppercase text-black-2 font-round mt-26 md:mt-36">
          featured
          <span className="font-round text-[36px] lg:text-[70px] xl:text-huge bg-pink-2 text-purple-1 rounded-xs md:ml-10 p-6 md:p-12 max-w-[210px] md:max-w-0">
            projects
          </span>
        </p>
      </div>
      <div className="mt-48 md:mt-96">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-598">
            <img className="w-full" src={project1Picture.src} alt="project" />
            <div className="p-18 bg-white-1 w-full rounded-special">
              <span className="uppercase bg-green-1 py-3 px-6 rounded-4 text-black-4 font-semibold">
                crowdfunding
              </span>
              <div className="mt-22">
                <h4 className="uppercase text-26 text-black-4 font-round">
                  Tokenvest
                </h4>
                <p className="text-20 text-black-4 mt-31">
                  Tokenvest is a blockchain-powered Web3 crowdfunding platform
                  that provides an opportunity to fund different projects
                  through tokens. Investors can earn NFTs or tokens as a gift
                  payback.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-674 ml-5 mt-22 md:mt-46">
            <img className="w-full" src={project2Picture.src} alt="project" />
            <div className="p-18 bg-white-1 w-full rounded-special">
              <span className="uppercase bg-green-1 py-3 px-6 rounded-4 text-black-4 font-semibold">
                cultural heritage protection
              </span>
              <div className="mt-22">
                <h4 className="uppercase text-26 text-black-4 font-round">
                  realm of historia
                </h4>
                <p className="text-20 text-black-4 mt-31">
                  Realm of Historia is a blockchain-based and Web3-powered
                  sustainable ecosystem for cultural heritage preservation. It
                  utilizes digital assets to fund real-world initiatives and
                  offers an immersive virtual experience.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="md:w-674 mt-22 md:mt-5">
            <img className="w-full" src={project3Picture.src} alt="project" />
            <div className="p-18 bg-white-1 w-full rounded-special">
              <span className="uppercase bg-green-1 py-3 px-6 rounded-4 text-black-4 font-semibold">
                On-ramp solution for DApps
              </span>
              <div className="mt-22">
                <h4 className="uppercase text-26 text-black-4 font-round">
                  peer pay
                </h4>
                <p className="text-20 text-black-4 mt-31">
                  Peer Pay is a fiat payment connector to Solana that allows
                  userto interact with Web3 protocols and on chain programs by
                  paying with modern payment systems such as Stripe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
