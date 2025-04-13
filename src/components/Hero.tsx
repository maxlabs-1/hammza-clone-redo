
import React from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16">
      <div className="container-custom">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Alex Johnson</span>. 
            <br />
            A DevOps Engineer based in Seattle.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            I specialize in automating infrastructure, optimizing CI/CD pipelines,
            and implementing cloud-native solutions to help businesses scale reliably
            and securely.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#work" 
              className="px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              View my projects
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border border-input rounded-md font-medium hover:bg-secondary transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
          <a href="#work" className="flex items-center gap-2 text-sm font-medium">
            Scroll down <ArrowDown size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
