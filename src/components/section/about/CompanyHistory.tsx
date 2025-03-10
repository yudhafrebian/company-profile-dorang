import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const CompanyHistorySection = () => {
  const companyHistory = [
    {
      year: "1965",
      title: "Expansion of Production Capacity",
      description:
        "Expanded production capacity to meet the growing national demand for high-quality cooking oil.",
      image: "/asset/old-factory.png",
    },
    {
      year: "1980",
      title: "Modern Refining Technology",
      description:
        "Introduced advanced refining techniques, including Degumming, Bleaching, and Deodorization, ensuring higher purity, stability, and enhanced product quality.",
      image:
        "https://img.freepik.com/free-photo/backyard-winery-sunset-with-metal-wine-storage-tanks_1268-15699.jpg?t=st=1741513306~exp=1741516906~hmac=b1240632dafb0f5f05a99762b00c0903b935247c39c93c1f96aaac2a62def994&w=1380",
    },
    {
      year: "1995",
      title: "Entry into the Palm Oil Market",
      description:
        "Launched 'Ikan Dorang Mas', our first premium palm cooking oil brand, marking a significant expansion in our product line.",
      image: "https://ptikandorang.com/sites/default/files/14.jpg",
    },
    {
      year: "2008",
      title: "Award-Winning Brand Recognition",
      description:
        "Recognized as the Winner of the Surabaya Champion Brands Award in the Local Brand Award category, solidifying PT. Ikan Dorang’s reputation as a trusted and leading brand in Indonesia.",
      image:
        "https://ptikandorang.com/sites/default/files/Local-Brand-Award-2008.jpg",
    },
    {
      year: "2015",
      title: "Global Market Expansion",
      description:
        "Strengthened our international export strategy, establishing partnerships across Asia, the Middle East, and other emerging markets.",
      image:
        "https://img.freepik.com/free-photo/container-operation-port-series_1150-8332.jpg?t=st=1741513602~exp=1741517202~hmac=0eea1c2289e82e0bfff0f32ce06efec43d660d92a8eaf88311cd6675ebefa120&w=1380",
    },
    {
      year: "2025 & Beyond",
      title: "Continued Innovation & Sustainability",
      description:
        "Continuing to innovate, expand, and uphold our commitment to sustainability, ensuring high-quality, eco-friendly, and nutritious cooking oil products for future generations.",
      image:
        "https://img.freepik.com/free-photo/factory-worker-white-gown-rubber-gloves-screwing-bottle-caps_273609-13371.jpg?t=st=1741513696~exp=1741517296~hmac=8cfddcb166273095b8eac557dc19bdbfa9a425146d8d79e24440b07e533f78bd&w=1380",
    },
  ];

  return (
    <section className="p-5 pt-20 md:p-20">
      <div>
        <div className="flex flex-col items-center gap-2 md:gap-4">
          <h1 className="text-xl md:text-3xl font-extrabold">
            Company History
          </h1>
          <p className="md:w-1/2 text-sm md:text-base text-center">
            Let's explore the journey of PT. Ikan Dorang through time.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4 md:gap-0 mt-8 md:mt-16">
          <div className="w-[300px] h-[200px] md:w-[550px] md:h-[300px] relative">
            <Image
              src={
                "https://img.freepik.com/free-photo/industrial-park-factory-building-warehouse_1417-1940.jpg?t=st=1741511543~exp=1741515143~hmac=f20915325cbb162207a2292897a8dfa493ea2f7e7fc83393da3089b61701679e&w=1380"
              }
              alt="company pic"
              fill
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className="flex flex-col gap-2 md:gap-4 w-[90%] md:w-1/2">
            <h2 className="text-lg md:text-2xl font-bold">Our Beginnings</h2>
            <p className="text-sm md:text-base text-slate-600">
              Established in 1950, PT. Ikan Dorang started as a small-scale
              manufacturer specializing in coconut cooking oil production. With
              a strong commitment to quality and innovation, we continuously
              improved our processes, ensuring that every drop of our oil met
              the highest industry standards. Recognizing the growing demand for
              high-quality edible oils, we expanded our expertise through
              research and technological advancements, allowing us to extend our
              production line to include palm cooking oil under the brand names
              Ikan Dorang Special and Ikan Dorang Mas
            </p>
          </div>
        </div>
        <Separator className="my-8" />
        <div>
          <div className="w-[90%] md:w-full">
            <h2 className="text-lg md:text-2xl font-bold">Company Milestones</h2>
            <p className="text-sm md:text-base text-slate-600">
              Over the years, our company has made significant milestones{" "}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {companyHistory.map((history, index) => (
              <Card key={index} className="pt-0 border-none shadow-lg">
                <CardHeader className="p-0">
                  <div className="relative w-full h-[200px]">
                    <Image
                      src={history.image}
                      alt="history pic"
                      fill
                      objectFit="cover"
                      objectPosition="center"
                      className="rounded-t-lg"
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <h5 className="md:text-lg font-bold">{history.title}</h5>
                  <p className="text-sm md:text-base text-slate-600 font-bold mb-2">
                    {history.year}
                  </p>
                  <p className="text-slate-600 text-xs md:text-sm font-light">
                    {history.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyHistorySection;
