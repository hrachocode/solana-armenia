import { FC } from "react";

import contactPicture from "@/assets/contact-bg.png";
import Form from "@/components/Contact/Form";

const Contact: FC = () => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center min-h-300 rounded-lg px-80"
      style={{ backgroundImage: `url(${contactPicture.src})` }}
    >
      <div className="flex justify-between">
        <div className="pt-96">
          <h4 className="text-heading uppercase font-medium tracking-wide">
            contact us
          </h4>
          <p className="text-special uppercase font-round mt-14">
            let's keep
            <span className="font-round text-special bg-pink-2 text-purple-1 rounded-xs p-8 ml-10">
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
