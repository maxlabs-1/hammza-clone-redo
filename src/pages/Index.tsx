
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import Footer from "@/components/Footer";
import MousePointer from "@/components/MousePointer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <MousePointer />
      <Navbar />
      <Hero />
      <ProjectGrid />
      
      {/* About Section */}
      <section id="about" className="py-24 bg-secondary">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">About Me</h2>
              <div className="space-y-4 text-lg">
                <p>
                  I'm a DevOps Engineer with 6+ years of experience building scalable, 
                  resilient infrastructure and automating development workflows for 
                  companies ranging from startups to large enterprises.
                </p>
                <p>
                  My approach combines deep technical knowledge with a focus on business 
                  outcomes, ensuring that infrastructure decisions align with organizational 
                  goals while maintaining reliability and security.
                </p>
                <p>
                  I'm passionate about cloud-native technologies, infrastructure as code, 
                  and creating a culture of DevOps that enables teams to deliver value 
                  faster and more reliably.
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-3">Skills & Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "AWS", "Azure", "Docker", "Kubernetes",
                    "Terraform", "Ansible", "Jenkins", "GitHub Actions",
                    "Python", "Bash", "Prometheus", "Grafana",
                    "ELK Stack", "CI/CD", "Infrastructure as Code", "SRE"
                  ].map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm shadow-sm hover:shadow-md transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="aspect-square rounded-lg overflow-hidden shadow-xl transform hover:scale-[1.01] transition-transform duration-300 border-4 border-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a" 
                  alt="Alex Johnson - DevOps Engineer" 
                  className="w-full h-full object-cover"
                />
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
