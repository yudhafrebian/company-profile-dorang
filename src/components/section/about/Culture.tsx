import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BsStars } from "react-icons/bs";
import { BiHappyBeaming } from "react-icons/bi";
import { GiPalmTree } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";


const CultureSection = () => {
  return (
    <section className="p-5 md:p-20">
    <div className="px-6">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-xl md:text-3xl font-extrabold">Our Culture & Values</h1>
        <p className="md:w-1/2 text-sm md:text-base text-center">
          At PT. Ikan Dorang, we uphold a strong corporate culture built on
          excellence, integrity, and innovation. Our values define who we
          are:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center">
              <h3 className="md:text-xl font-bold mr-8">
                Commitment to Quality
              </h3>
              <BsStars color="#FFD700" size={32} />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 text-xs md:text-base">
              We ensure that every product meets the highest purity and
              safety standards.
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center">
              <h3 className="md:text-xl font-bold mr-8">Sustainability </h3>
              <GiPalmTree color="#2563EB" size={32} />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 text-xs md:text-base">
              We adopt environmentally responsible production methods to
              protect natural resources.
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center">
              <h3 className="md:text-xl font-bold mr-8">Integrity & Trust</h3>
              <FaHandsHelping color="#22C55E" size={32} />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 text-xs md:text-base">
              We build long-lasting relationships with our customers,
              partners, and stakeholders.
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center">
              <h3 className="md:text-xl md:w-full w-1/2 font-bold mr-8">
                Customer Satisfaction
              </h3>
              <BiHappyBeaming color="#22C55E" size={32} />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 text-xs md:text-base">
              Our customers’ needs drive everything we do.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
  )
};

export default CultureSection;
