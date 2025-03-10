import Link from "next/link";
import { IoMdMail } from "react-icons/io";
import { FaPhone, FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-5 px-6 md:py-12 md:px-20 bg-[#1F2937]">
      <div>
        <div className="flex flex-col gap-4 md:flex-row md:gap-0 justify-between">
          <div className="w-72 ">
            <div className="w-24 h-12 relative">
              <Image
                src={"/asset/dorang-2.png"}
                fill
                objectFit="contain"
                alt={"logo"}
              />
            </div>
            <p className="text-xs md:text-sm font-light text-[#9CA3AF]">
              Delivering premium coconut & palm cooking oil with quality and
              sustainability.
            </p>
          </div>
          <div className="w-72">
            <h4 className="text-white md:text-lg mb-2 md:mb-4">Quick Links</h4>
            <ul className="flex flex-row gap-4 md:flex-col md:gap-0 text-sm font-light text-[#9CA3AF]">
              <li className="mb-2">
                <Link className="hover:text-primary" href={"/"}>
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link className="hover:text-primary" href={"/about"}>
                  About
                </Link>
              </li>
              <li className="mb-2 ">
                <Link className="hover:text-primary" href={"/product"}>
                  Product
                </Link>
              </li>
              <li className="mb-2">
                <Link className="hover:text-primary" href={"/team"}>
                  Team
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-72">
            <h4 className="text-white md:text-lg mb-2 md:mb-4">Contact</h4>
            <div className="text-[#9CA3AF] flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <IoMdMail />
                <p className="text-xs md:text-sm font-light">
                  info@ptikandorang.com
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <FaPhone />
                <p className="text-xs md:text-sm font-light">+6231 353 8685</p>
              </div>
              <div className="flex gap-3 items-center">
                <FaLocationDot />
                <p className="text-xs md:text-sm font-light">
                  Jl. Ikan Dorang No. 2 Surabaya 60177 Jawa Timur - Indonesia
                </p>
              </div>
            </div>
          </div>
          <div className="w-72">
            <h4 className="text-white md:text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <FaFacebook
                className="hover:scale-105 cursor-pointer"
                size={24}
                color="#9CA3AF"
              />
              <FaXTwitter
                className="hover:scale-105 cursor-pointer"
                size={24}
                color="#9CA3AF"
              />
              <FaLinkedin
                className="hover:scale-105 cursor-pointer"
                size={24}
                color="#9CA3AF"
              />
              <FaInstagram
                className="hover:scale-105 cursor-pointer"
                size={24}
                color="#9CA3AF"
              />
            </div>
          </div>
        </div>
        <Separator className="my-4 md:my-8 bg-[#9CA3AF]" />
        <div>
          <p className="text-xs md:text-sm font-light text-[#9CA3AF] text-center">
            Copyright &copy; 2025 PT. Ikan Dorang. Website Developed By Yudha
            Frebian
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
