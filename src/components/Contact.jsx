import React from "react";
import { useStore } from "../store";

const Contact = () => {
  const {
    handleOpen,

    handleRegulaminOpen,
  } = useStore();

  return (
    <section className="py-6 bg-slate-100">
      <div className="container flex gap-4 items-center justify-center">
        {/* p Polityka prywatności i Regulamin serwisu */}
        <p
          className="text-sm text-left cursor-pointer hover:text-amber-500"
          onClick={handleOpen}
        >
          Polityka prywatności
        </p>
        <p
          className="text-sm text-left cursor-pointer hover:text-amber-500"
          onClick={handleRegulaminOpen}
        >
          Regulamin serwisu
        </p>
        {/* p 2021 © All rights reserved. */}
      </div>
    </section>
  );
};

export default Contact;
