import { FC } from "react";

import contactPicture from "@/assets/contact-bg.png";
import Form from "@/components/Contact/Form";

const Contact: FC = () => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center min-h-300 rounded-lg px-22 md:px-80"
      id="contact"
      style={{ backgroundImage: `url(${contactPicture.src})` }}
    >
      <div className="lg:flex justify-between">
        <div className="pt-[64px] md:pt-96">
          <h4 className="text-[14px] md:text-heading uppercase font-medium tracking-wide">
            contact us
          </h4>
          <p className="text-[40px] md:text-special uppercase font-round mt-26 md:mt-36">
            let's keep
            <span className="font-round text-[40px] md:text-special bg-pink-2 text-purple-1 rounded-xs p-8 ml-10">
              in touch
            </span>
          </p>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
