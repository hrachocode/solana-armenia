"use client";

import { FC } from "react";
import NameInput from "@/components/UI/Inputs/NameInput";
import EmailInput from "@/components/UI/Inputs/EmailInput";
import MessageInput from "@/components/UI/Inputs/MessageInput";
import PrimaryButton from "@/components/UI/Buttons/PrimaryButton";

const Form: FC = () => {
  return (
    <form className="w-496 pt-143 pb-80">
      <NameInput isFullWidth placeholder="Name" />
      <div className="mt-5">
        <EmailInput isFullWidth placeholder="Email" />
      </div>
      <div className="mt-5">
        <MessageInput isFullWidth placeholder="Message (optional)" />
      </div>
      <div className="mt-5">
        <PrimaryButton isFullWidth onClick={() => { }}>
          Submit
        </PrimaryButton>
      </div>
    </form>
  );
};

export default Form;
