import { BsStars } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";

const WhyChooseUsSection = () => {
  return (
    <section className="p-5 md:p-20">
      <div className="px-6">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-xl md:text-3xl font-extrabold">Why Choose Us</h1>
          <p className="md:w-1/2 text-sm md:text-base text-center">
            We are committed to delivering high-quality, healthy, and
            sustainable cooking oil for families and businesses.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 md:mt-16">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <h3 className="md:text-xl font-bold mr-8">Premium Quality</h3>
                <BsStars color="#FFD700" size={32} />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 text-xs md:text-base">
                Finest ingredients & advanced processing for pure, high-quality
                oil, ensuring great taste and health benefits in every drop.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <h3 className="md:text-xl font-bold mr-8">Expert Team</h3>
                <FaUsers color="#2563EB" size={32} />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 text-xs md:text-base">
                Produced with modern technology & strict quality standards,
                guaranteeing purity, consistency, and superior performance.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <h3 className="md:text-xl font-bold mr-8">
                  Health & Sustainability
                </h3>
                <MdHealthAndSafety color="#22C55E" size={32} />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 text-xs md:text-base">
                Healthy, additive-free, and sourced responsibly for
                sustainability also free from harmful additives.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
