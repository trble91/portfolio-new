import React from "react";
import Image from "next/image";

function Experiences() {
  return (
      <div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[600px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center snap-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          Experiences
        </h3>
        <div className="flex absolute flex-row top-18 items-center max-w-600px]">
          <a href="https://github.com/cindywongdev/pets-frontend">
            <Image
              src="/assets/fetch-pet-resource.png"
              alt=""
              width={300}
              height={300}
            />
          </a>
          <a href="https://github.com/sydney-rd/PawMeets-react-frontend">
            <Image
              src="/assets/PawMeets2.png"
              alt=""
              width={300}
              height={300}
            />
          </a>
        </div>
      </div>
  );
}

export default Experiences;
