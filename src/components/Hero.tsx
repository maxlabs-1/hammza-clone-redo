
import React from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 bg-gradient-to-b from-background to-background/50">
      <div className="container-custom">
        <div className="max-w-3xl animate-fade-in">
          <div className="mb-2 inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
            DevOps Engineer
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Mujtaba Ahmad</span>. 
            <br />
            A DevOps Engineer based in Lahore.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            I specialize in automating infrastructure, optimizing CI/CD pipelines,
            and implementing cloud-native solutions to help businesses scale reliably
            and securely.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#work" 
              className="px-6 py-3 bg-gradient-to-r from-primary to-blue-600 text-white rounded-md font-medium hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              View my projects
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border border-input rounded-md font-medium hover:bg-primary/5 transition-all shadow hover:shadow-md hover:-translate-y-0.5"
            >
              Get in touch
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
          <a href="#work" className="flex items-center gap-2 text-sm font-medium glass-card px-4 py-2 rounded-full shadow-lg hover:shadow-xl hover:bg-accent/20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/20">
            Scroll down <ArrowDown size={16} className="text-primary" />
          </a>
        </div>
      </div>
      
      {/* Abstract shapes */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Hero;
