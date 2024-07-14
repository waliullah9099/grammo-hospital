import Image from "next/image";

const Specialist = async () => {
  const res = await fetch("http://localhost:5000/api/v1/specialties", {
    next: {
      revalidate: 30,
    },
  });
  const { data: specialties } = await res.json();

  return (
    <div className="container px-3">
      <h1 className="text-2xl font-semibold">
        Explore Treatment Across Specialties
      </h1>
      <p className="text-xl pt-2">Experienced doctor across All Specialties</p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-12">
        {specialties?.map((speciality) => (
          <div
            key={speciality?.id}
            className="py-6 px-6 rounded-lg flex flex-col justify-center items-center bg-primary-muted shadow-md hover:shadow-xl border-[#dbeaea] border hover:border-primary-base duration-300"
          >
            <Image
              className="size-12"
              width={40}
              height={40}
              src={speciality?.icon}
              alt={speciality?.title || "speciality icon"}
            />
            <h2 className="text-2xl font-medium mt-2">{speciality?.title}</h2>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <button className="ml-5 py-3 px-8 rounded-md border border-primary-base text-primary-base text-xl font-semibold shadow-lg hover:bg-primary-base hover:text-white duration-300">
          View All
        </button>
      </div>
    </div>
  );
};

export default Specialist;
