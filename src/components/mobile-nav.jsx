"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about1", label: "Why BrooksAccount" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  //{ href: "/contact", label: "Contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* Mobile Menu Trigger */}
      <SheetTrigger asChild>
        <Button
          className="bg-[#D4A5A5] hover:bg-[#3f3b3a] p-2 rounded-md"
          onClick={() => setOpen(true)}
        >
          <CiMenuFries className="text-[36px] text-white" />
        </Button>
      </SheetTrigger>

      {/* Mobile Menu Content */}
      <SheetContent
        side="right"
        className="flex flex-col bg-[#F5F0E8] p-6 shadow-lg h-full"
      >
        {/* Navigation Links */}
        <nav className="flex flex-col text-[#78706F] gap-6 py-16">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`capitalize font-bold transition-all  ${
                link.href === pathname
                  ? " border-b-2 pb-1 border-[#DBA56D]"
                  : "hover:text-[#D4A5A5]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className=" items-center space-x-2 text-gray-700">
          <Link onClick={() => setOpen(false)} href="/contact">
            <Button className="bg-[#D4A5A5]">Book a Consultation </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
