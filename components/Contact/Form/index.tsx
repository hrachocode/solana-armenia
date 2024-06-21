"use client";

import { FC } from "react";
import NameInput from "@/components/UI/Inputs/NameInput";
import EmailInput from "@/components/UI/Inputs/EmailInput";
import MessageInput from "@/components/UI/Inputs/MessageInput";

const Form: FC = () => {
  return (
    <form>
      <NameInput placeholder="Name" />
      <div className="mt-5">
        <EmailInput placeholder="Email" />
      </div>
      <div className="mt-5">
        <MessageInput placeholder="Message (optional)" />
      </div>
    </form>
  );
};

export default Form;
