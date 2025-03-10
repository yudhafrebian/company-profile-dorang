import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardFooter } from "../../ui/card";
import { IoIosArrowRoundForward } from "react-icons/io";

const OurProductsSection = () => {
  return (
    <section className="p-5 md:p-20">
      <div>
        <div className="flex flex-col items-center gap-3 mb-16">
          <h1 className="text-xl md:text-3xl font-extrabold">Our Products</h1>
          <p className="md:w-1/2 text-sm md:text-base text-center text-slate-600">
            Discover our premium cooking oils crafted from the finest natural
            ingredients.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-20">
          <Card className="pt-0 md:w-[390px] border-none shadow-lg">
            <CardHeader className="p-0">
              <div className="relative w-full h-[120px] md:h-[200px]">
                <Image
                  src={"/asset/id_spesial.png"}
                  alt="dorang special"
                  fill
                  objectFit="cover"
                  objectPosition="center"
                  className="rounded-t-lg"
                />
              </div>
            </CardHeader>
            <CardContent>
              <h5 className="md:text-xl font-bold mb-3">Ikan Dorang Special</h5>
              <p className="text-xs md:text-base text-slate-600">
                Premium coconut cooking oil with a clear color from high-quality
                copra.
              </p>
            </CardContent>
            <CardFooter>
              <Link
                className="text-primary text-sm md:text-base flex items-center font-medium"
                href={"/product/#dorang-special"}
              >
                Learn More
                <IoIosArrowRoundForward size={20} />
              </Link>
            </CardFooter>
          </Card>
          <Card className="pt-0 md:w-[390px] border-none shadow-lg">
            <CardHeader className="p-0">
              <div className="relative w-full h-[120px] md:h-[200px]">
                <Image
                  src={"/asset/id_mas.png"}
                  alt="dorang mas"
                  fill
                  objectFit="cover"
                  objectPosition="center"
                  className="rounded-t-lg"
                />
              </div>
            </CardHeader>
            <CardContent>
              <h5 className="md:text-xl font-bold mb-3">Ikan Dorang Mas</h5>
              <p className="text-xs md:text-base text-slate-600">
                High-quality palm cooking oil rich in beta-carotene ideal for
                everyday cooking
              </p>
            </CardContent>
            <CardFooter>
              <Link
                className="text-primary text-sm md:text-base flex items-center font-medium"
                href={"/product/#dorangmas"}
              >
                Learn More
                <IoIosArrowRoundForward size={20} />
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OurProductsSection;
