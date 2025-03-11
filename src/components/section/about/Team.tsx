"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
interface TeamMember {
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

const TeamSection = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const roles = [
    "Founder",
    "Operations Manager",
    "Marketing Manager",
    "Quality Manager",
  ];

  const fetchTeam = async () => {
    try {
      const response = await fetch(
        "https://randomuser.me/api/?results=4&nat=us"
      );
      const data = await response.json();
      setTeam(data.results);
    } catch (error) {
      console.error("Failed to fetch team:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeam();
  }, []);
  return (
    <section className="p-5 md:p-20 bg-[#F9FAFB]">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl md:text-3xl font-extrabold mb-3 md:mb-6">
            Meet Our Team
          </h2>
          <p className="md:w-1/2 text-sm md:text-base text-center mb-8">
            The people behind PT. Ikan Dorang&apos;s success.
          </p>
        </div>

        {loading ? (
          <p className="text-gray-500">Loading team members...</p>
        ) : error ? (
          <p className="text-red-500">Failed to load team data.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
                <h3 className="md:text-lg font-semibold mb-3">
                  {roles[index]}
                </h3>
                <Image
                  src={member.picture.large}
                  alt={`${member.name.first} ${member.name.last} - ${roles[index]}`}
                  width={128}
                  height={128}
                  className="rounded-full mx-auto"
                />
                <h3 className="mt-4 md:text-xl font-semibold">
                  {member.name.first} {member.name.last}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 my-2">
                  {roles[index] === "Founder"
                    ? "Leading the company with decades of expertise in food manufacturing and innovation."
                    : roles[index] === "Operations Manager"
                    ? "Overseeing production processes to ensure efficiency and quality control."
                    : roles[index] === "Marketing Manager"
                    ? "Expanding market reach and fostering relationships with distributors and customers."
                    : "Ensuring that every product meets the highest quality and safety standards."}
                </p>
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

export default TeamSection;
