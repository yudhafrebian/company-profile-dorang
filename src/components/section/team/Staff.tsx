"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
interface StaffMember {
  name: {
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  picture: {
    large: string;
  };
  location: {
    country: string;
  };
}

const StaffSection = () => {
  const [team, setTeam] = useState<StaffMember[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTeam = async () => {
    try {
      const response = await fetch(
        "https://randomuser.me/api/?results=12&nat=us"
      );
      const data = await response.json();
      setTeam(data.results);
    } catch (error) {
      console.error("Failed to fetch team:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeam();
  }, []);

  return (
    <section className="p-5 md:p-20 ">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl md:text-3xl font-extrabold">Staff Team</h2>
          <p className="md:w-1/2 text-sm md:text-base flex  mb-8">
            Our staff team is dedicated to providing the best service to our
            customers.
          </p>
        </div>
        {loading ? (
          <p>Loading team members...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
                <Image
                  src={member.picture.large}
                  alt={`${member.name.first} ${member.name.last}`}
                  width={128}
                  height={128}
                  className="rounded-full mx-auto"
                />
                <h3 className="mt-4 md:text-xl font-semibold">
                  {member.name.first} {member.name.last}
                </h3>
                <p className="text-xs text-gray-400">{member.email}</p>
                <p className="text-xs text-gray-400">{member.phone}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default StaffSection;
