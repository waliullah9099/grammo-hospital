import Hero from "@/components/UI/Homepage/Hero";
import Specialist from "@/components/UI/Homepage/Specialist/Specialist";
import TopRatedDoctor from "@/components/UI/Homepage/TopRatedDoctor/TopRatedDoctor";
import WhyUs from "@/components/UI/Homepage/WhyUs/WhyUs";

const page = () => {
  return (
    <div>
      <Hero />
      <Specialist />
      <TopRatedDoctor />
      <WhyUs />
    </div>
  );
};

export default page;
