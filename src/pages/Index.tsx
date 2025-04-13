
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
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a" 
                  alt="Alex Johnson - DevOps Engineer" 
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
                  <h4 className="text-lg font-medium">Senior DevOps Engineer</h4>
                  <span className="text-sm text-muted-foreground">2021 - Present</span>
                </div>
                <h5 className="text-primary mb-2">TechFusion Inc.</h5>
                <p className="text-muted-foreground">
                  Lead cloud infrastructure and CI/CD initiatives, manage Kubernetes clusters, 
                  implement security best practices, and mentor junior engineers on DevOps methodologies.
                </p>
              </div>
              
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-medium">Cloud Infrastructure Engineer</h4>
                  <span className="text-sm text-muted-foreground">2018 - 2021</span>
                </div>
                <h5 className="text-primary mb-2">CloudScale Systems</h5>
                <p className="text-muted-foreground">
                  Designed and maintained AWS infrastructure using Terraform, implemented 
                  containerization strategies, and automated deployment pipelines for microservices architectures.
                </p>
              </div>
              
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-medium">Systems Administrator</h4>
                  <span className="text-sm text-muted-foreground">2016 - 2018</span>
                </div>
                <h5 className="text-primary mb-2">DataSphere Solutions</h5>
                <p className="text-muted-foreground">
                  Managed on-premise infrastructure, virtualized environments, and began 
                  early DevOps initiatives by implementing configuration management with Ansible.
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
