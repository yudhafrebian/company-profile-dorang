import Image from "next/image";
import * as React from "react";
import { Card, CardContent, CardHeader } from "../../ui/card";

const AboutUs = () => {
  return (
    <section className="p-5 md:p-20 bg-[#F9FAFB]">
      <div className="px-6">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-xl md:text-3xl font-extrabold">About Us</h1>
          <p className="md:w-1/2 text-sm md:text-base text-center">
            Delivering premium coconut and palm cooking oil for over 60 years.
          </p>
        </div>
        <div className="flex flex-col-reverse md:flex-row md:justify-between items-center gap-4 md:gap-0 mt-8 md:mt-12">
          <div className="flex flex-col gap-5 md:w-1/2">
            <div>
              <h2 className="text-xl font-bold mb-3">Our Story</h2>
              <p className="text-sm md:text-base">
                Founded in 1950, PT. Ikan Dorang has crafted premium coconut and
                palm cooking oil through innovation for over 60 years.
              </p>
            </div>
            <Card>
              <CardHeader>
                <h3 className="font-bold">Vision</h3>
              </CardHeader>
              <CardContent>
                <p className="text-xs md:text-sm text-slate-600">
                  To be the best coconut and palm cooking oil manufacturer in
                  its class.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <h3 className="font-bold">Mission</h3>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-xs md:text-sm text-slate-600">
                  <li>
                    To provide quality edible cooking oil to our customers.
                  </li>
                  <li>
                    To improve quality of our products through research and
                    innovation.
                  </li>
                  <li>
                    To grow our employees’ creativities and competencies in
                    order to achieve efficient and effective internal
                    performance.
                  </li>
                  <li>
                    To create a team synergy operation to improve customer
                    satisfaction.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="w-[300px] h-[200px] md:w-[568px] md:h-[300px] relative">
            <Image
              src={
                "https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15861.jpg?t=st=1741320504~exp=1741324104~hmac=00fa7f01fa48fb8bd660b70de72fed8ec7bf12a8ef7240a335621c19e95f9418&w=1380"
              }
              alt="team picture"
              fill
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
