
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProjectGrid />
      
      {/* About Section */}
      <section id="about" className="py-24 bg-secondary">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <div className="space-y-4 text-lg">
                <p>
                  I'm a multidisciplinary designer and developer with over X years of 
                  experience creating digital products that are both functional and beautiful.
                </p>
                <p>
                  My approach combines aesthetic sensibility with technical expertise, 
                  ensuring that the end result not only looks good but performs excellently.
                </p>
                <p>
                  When I'm not designing or coding, you can find me exploring new technologies,
                  contributing to open source projects, or enjoying outdoor activities.
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-3">Skills & Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Web Design", "UI/UX", "Frontend Development",
                    "React", "TypeScript", "Tailwind CSS",
                    "Figma", "User Research", "Responsive Design"
                  ].map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-background rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1438886183900-e79ec0057170" 
                  alt="Your Name" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-border/40">
            <h3 className="text-xl font-semibold mb-4">Experience</h3>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-medium">Senior Designer</h4>
                  <span className="text-sm text-muted-foreground">2020 - Present</span>
                </div>
                <h5 className="text-primary mb-2">Company Name</h5>
                <p className="text-muted-foreground">
                  Led design initiatives for various client projects, collaborated with 
                  development teams, and established design systems and guidelines.
                </p>
              </div>
              
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-medium">UI/UX Designer</h4>
                  <span className="text-sm text-muted-foreground">2018 - 2020</span>
                </div>
                <h5 className="text-primary mb-2">Previous Company</h5>
                <p className="text-muted-foreground">
                  Created user interfaces for web and mobile applications, conducted 
                  user research, and developed interactive prototypes.
                </p>
              </div>
              
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-medium">Junior Web Developer</h4>
                  <span className="text-sm text-muted-foreground">2016 - 2018</span>
                </div>
                <h5 className="text-primary mb-2">First Company</h5>
                <p className="text-muted-foreground">
                  Developed responsive websites, implemented front-end designs, and 
                  collaborated with design and marketing teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
