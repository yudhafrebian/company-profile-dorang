"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "../ui/button";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="px-4 md:px-20 bg-white/60 absolute w-full z-50">
        <nav className="h-16 md:h-20 px-6 flex items-center justify-between">
            <div className="md:w-24 md:h-20 relative w-20 h-12">
              <Image src={"/asset/dorang-1.png"} fill objectFit="contain" alt={"logo"} />
            </div>
            <div className="hidden md:flex gap-8 text-slate-600 font-medium">
              <Link className={pathname === "/" ? "text-primary" : ""} href={"/"}>Home</Link>
              <Link className={pathname === "/about" ? "text-primary" : ""} href={"/about"}>About</Link>
              <Link className={pathname === "/product" ? "text-primary" : ""} href={"/product"}>Product</Link>
              <Link className={pathname === "/team" ? "text-primary" : ""} href={"/team"}>Team</Link>
            </div>
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button type="button" variant={"ghost"}>
                    <GiHamburgerMenu size={24} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href={"/"}>Home</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href={"/about"}>About</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href={"/product"}>Product</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href={"/team"}>Team</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

            </div>
        </nav>
    </header>
  )
};

export default Navbar;
