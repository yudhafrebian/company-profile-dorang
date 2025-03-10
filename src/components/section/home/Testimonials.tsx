import { AvatarImage } from "@radix-ui/react-avatar";
import { Avatar } from "../../ui/avatar";
import { Card, CardContent, CardHeader } from "../../ui/card";
const TestimonySection = () => {
  return (
    <section className="p-5 md:p-20 bg-[#F9FAFB]">
      <div>
        <div className="flex flex-col items-center gap-3 mb-8 md:mb-16">
          <h2 className="text-xl md:text-3xl font-extrabold">What Our Customers Say</h2>
          <p className="md:w-1/2 text-sm md:text-base text-center text-slate-600">
            Hear from businesses and households that trust PT. Ikan Dorang for
            premium cooking oil.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <Card className="md:w-[600px]">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar className="md:w-12 md:h-12">
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
                <div>
                  <h5 className="font-bold">Sarah Johnson</h5>
                  <p className="text-sm md:text-base text-slate-600">Owner, Jhonson's Restaurant</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-xs md:text-base text-slate-600">
                "Ikan Dorang’s coconut oil has elevated the quality of our
                dishes. It stays clear, lasts longer, and brings out the best
                flavors! So happy to using this product."
              </p>
            </CardContent>
          </Card>
          <Card className="md:w-[600px]">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar className="md:w-12 md:h-12">
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
                <div>
                  <h5 className="font-bold">Michael Chen</h5>
                  <p className="text-sm md:text-base text-slate-600">
                    Distributor, Global Food Supplies
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-xs md:text-base text-slate-600">
                "We rely on Ikan Dorang Mas for consistent quality and
                reliability. Their palm oil meets industry standards and keeps
                our customers satisfied."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonySection;
