import assets from "@/assets";
import Button from "../Button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="container h-[680px] flex items-center gap-8 px-3 pt-28">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">
          Healther Hearts Come From <br />
          <span className="text-primary-base">Presentive Care</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sint
          atque dicta temporibus debitis autem facere voluptates possimus ea
          reiciendis, quam optio adipisci nemo quis recusandae laborum! Nemo,
          ea. Velit.
        </p>
        <Button>Make Appoinment</Button>
        <button className="ml-5 py-2.5 px-6 rounded-md border border-primary-base text-primary-base text-xl font-semibold shadow-lg">
          Contuct Us
        </button>
      </div>
      <div className="w-full relative flex gap-4 justify-center">
        <div className="absolute left-[230px] -top-16">
          <Image
            width={120}
            height={100}
            src={assets.svgs.arrow}
            alt="arrow icon"
          />
        </div>
        <div className="mt-5">
          <Image
            width={220}
            height={380}
            src={assets.images.doctor1}
            alt="doctor image"
          />
        </div>
        <div>
          <Image
            className=""
            width={220}
            height={350}
            src={assets.images.doctor2}
            alt="doctor image"
          />
        </div>
        <div className="absolute -bottom-8 right-[240px]">
          <Image
            width={210}
            height={210}
            src={assets.images.doctor3}
            alt="doctor image"
          />
        </div>
        <div className="absolute -bottom-16 right-2 -z-10">
          <Image
            width={210}
            height={330}
            src={assets.images.stethoscope}
            alt="stethoscope icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
