import React from "react";
import OtherNav from "../Components/Header/Nav/OtherNav/OtherNav";

const Error = () => {
  return (
    <>
      <OtherNav></OtherNav>
      <div className="flex h-[70vh] items-center justify-center text-3xl">Opps No Page Found</div>
    </>
  );
};

export default Error;
