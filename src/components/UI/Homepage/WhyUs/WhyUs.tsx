import assets from "@/assets";
import Image from "next/image";
import whyUs from "@/assets/choose-us.png";

const WhyUs = () => {
  const services = [
    {
      imgsrc: assets.svgs.award,
      title: "Award Wining Service",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, doloribus nobis nemo repudiandae minus aut similique dolore odit. Qui, suscipit!",
    },
    {
      imgsrc: assets.svgs.award,
      title: "Award Wining Service",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, doloribus nobis nemo repudiandae minus aut similique dolore odit. Qui, suscipit!",
    },
    {
      imgsrc: assets.svgs.award,
      title: "Award Wining Service",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, doloribus nobis nemo repudiandae minus aut similique dolore odit. Qui, suscipit!",
    },
    {
      imgsrc: assets.svgs.award,
      title: "Award Wining Service",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, doloribus nobis nemo repudiandae minus aut similique dolore odit. Qui, suscipit!",
    },
  ];
  return (
    <div className="container py-20 text-center">
      <h4 className="text-lg text-primary-base">Why Us</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laudantium
        quas similique velit facere autem consequuntur ut quia aspernatur
        ducimus.
      </p>
      <div className="flex  items-center justify-between gap-10 mt-6">
        <div className="w-1/2 flex flex-col gap-5">
          <div className="flex items-center gap-3.5 p-5 bg-[#cacaca] rounded-lg rounded-br-full">
            <Image
              className="p-2.5 bg-white rounded-lg"
              src={services[0].imgsrc}
              width={60}
              height={60}
              alt="award icon"
            />
            <div className="w-4/5 text-start">
              <h1 className="text-xl font-semibold">{services[0].title}</h1>
              <p>{services[0].description}</p>
            </div>
          </div>
          <div className="flex items-center gap-3.5 p-5 bg-[#cacaca] rounded-lg rounded-tr-full">
            <Image
              className="p-2.5 bg-white rounded-lg"
              src={services[0].imgsrc}
              width={60}
              height={60}
              alt="award icon"
            />
            <div className="w-4/5 text-start">
              <h1 className="text-xl font-semibold">{services[0].title}</h1>
              <p>{services[0].description}</p>
            </div>
          </div>
          <div className="flex items-center gap-3.5 p-5 bg-[#cacaca] rounded-lg rounded-br-full">
            <Image
              className="p-2.5 bg-white rounded-lg"
              src={services[0].imgsrc}
              width={60}
              height={60}
              alt="award icon"
            />
            <div className="w-4/5 text-start">
              <h1 className="text-xl font-semibold">{services[0].title}</h1>
              <p>{services[0].description}</p>
            </div>
          </div>
          <div className="flex items-center gap-3.5 p-5 bg-[#cacaca] rounded-lg rounded-tr-full">
            <Image
              className="p-2.5 bg-white rounded-lg"
              src={services[0].imgsrc}
              width={60}
              height={60}
              alt="award icon"
            />
            <div className="w-4/5 text-start">
              <h1 className="text-xl font-semibold">{services[0].title}</h1>
              <p>{services[0].description}</p>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <Image
            className="w-[500px] text-end"
            src={whyUs}
            width={350}
            height={250}
            alt="why us"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
