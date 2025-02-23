import React from "react";

const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Den Fete Burmeser</h1>
        <ul className="hidden md:flex space-x-6">
          <li className="cursor-pointer" onClick={() => scrollToSection("hero")}>Home</li>
          <li className="cursor-pointer" onClick={() => scrollToSection("about")}>About</li>
          <li className="cursor-pointer" onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;