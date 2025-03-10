import Image from "next/image";
import { Button } from "../../ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="flex items-center relative h-[500px] md:h-screen">
      <div className="w-full h-full">
        <Image
          src={
            "https://img.freepik.com/free-photo/transparent-plastic-bottles-filled-with-yellow-substance_273609-13399.jpg?t=st=1741278673~exp=1741282273~hmac=09e15170aa66e306edf8f9822e371494bb8fb6023046e99da39fdc693df7d7df&w=1380"
          }
          alt="hero pic"
          fill
          objectFit="cover"
          objectPosition="center"
          className=" brightness-50"
        />
      </div>
      <div className="w-[768px] absolute z-10 px-4 md:px-10 flex flex-col gap-4 md:gap-10">
        <h1 className="text-xl w-1/3 md:w-full md:text-5xl font-bold text-white">
          Harnessing Nature’s Goodness with Modern Technology.
        </h1>
        <p className="text-white text-sm w-[45%] md:text-xl md:w-full">
          We are committed to providing high-quality and healthy cooking oil for
          households and industries.
        </p>
        <div className="flex gap-4">
          <Link href={"/product"}>
            <Button className="text-sm md:text-base cursor-pointer" size={"lg"}>
              Our Product
            </Button>
          </Link>
          <Link href={"/about"}>
            <Button
              className="text-sm md:text-base text-white cursor-pointer"
              size={"lg"}
              variant={"outline"}
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
