import React from "react";
import Logo from "./Logo";
import HeroButton from "./HeroButton";
const Navbar = () => {
  return (
    <nav className="py-4 px-6 md:px-12 flex justify-between items-center border-b border-lightgray">
      <Logo />

      <div className="hidden md:flex space-x-8">
        <a href="#" className="text-black hover:text-primary transition-colors">
          Home
        </a>
        <a
          href="#features"
          className="text-black hover:text-primary transition-colors"
        >
          Features
        </a>
        <a
          href="#pricing"
          className="text-black hover:text-primary transition-colors"
        >
          Pricing
        </a>
        <a
          href="#testimonials"
          className="text-black hover:text-primary transition-colors"
        >
          Testimonials
        </a>
      </div>

      <HeroButton
        label="Talk to us"
        href="https://calendly.com/miteshmaity280603/30min"
        bgColor="bg-black"
        spanBgColor="bg-[#FFD700]"
      />
    </nav>
  );
};

export default Navbar;
