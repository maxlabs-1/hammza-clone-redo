import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-3 bg-background/95 backdrop-blur-sm border-b border-white/10" : "py-5"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="/" className="text-xl font-bold tracking-tight">Mujtaba Ahmad</a>
        
        <button
          className="lg:hidden p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <nav className="hidden lg:flex items-center gap-6">
          <a href="#work" className="text-sm font-medium hover:text-primary/80 transition-colors">
            Projects
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary/80 transition-colors">
            About
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary/80 transition-colors">
            Contact
          </a>
        </nav>
        
        {isOpen && (
          <div className="fixed inset-0 bg-white z-40 lg:hidden pt-20">
            <nav className="flex flex-col items-center gap-8 p-10">
              <a 
                href="#work" 
                className="text-xl font-medium"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#about" 
                className="text-xl font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-xl font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
