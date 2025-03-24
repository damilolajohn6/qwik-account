import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./nav";
import MobileNav from "./mobile-nav";

const Header = () => {
  return (
    <div className="w-full">
      <header className="fixed top-0 left-0 w-full bg-[#2C3E50] shadow-md z-50 py-4 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <h1 className="text-4xl font-bold text-white md:block">
            Qwik <span className="text-[#8AB399]">Acounting</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6">
          <Nav />
        </nav>

        {/* Mobile Navigation */}
        <div className="block lg:hidden">
          <MobileNav />
        </div>

        {/* Contact Button */}
        <div className="hidden md:flex items-center space-x-2 text-gray-700">
          <Link href="/contact">
            <Button className="bg-[#D4A5A5]">Book a Consultation </Button>
          </Link>
        </div>
      </header>

      {/* Add spacing to avoid content being hidden under the sticky header */}
      <div className="h-20"></div>
    </div>
  );
};

export default Header;
