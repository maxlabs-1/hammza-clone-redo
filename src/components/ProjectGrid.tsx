
import React from "react";
import ProjectCard from "./ProjectCard";
import { Card } from "./ui/card";
import { FileText, Server, GitBranch, BarChart } from "lucide-react";

// DevOps Engineer project data
const projects = [
  {
    id: 1,
    title: "Cloud Migration & Modernization",
    description: "Led the migration of legacy on-premise infrastructure to AWS cloud with containerized microservices",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    tags: ["AWS", "Docker", "Kubernetes", "Terraform"],
    link: "#"
  },
  {
    id: 2,
    title: "CI/CD Pipeline Automation",
    description: "Designed and implemented a fully automated CI/CD pipeline reducing deployment time by 70%",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    tags: ["Jenkins", "GitHub Actions", "ArgoCD", "GitOps"],
    link: "#"
  },
  {
    id: 3,
    title: "Infrastructure as Code Implementation",
    description: "Developed IaC templates for consistent and repeatable infrastructure provisioning across environments",
    imageUrl: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3",
    tags: ["Terraform", "CloudFormation", "Ansible", "Packer"],
    link: "#"
  },
  {
    id: 4,
    title: "Monitoring & Observability Platform",
    description: "Built a comprehensive monitoring solution for microservices architecture with real-time alerts",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    tags: ["Prometheus", "Grafana", "ELK Stack", "SRE"],
    link: "#"
  }
];

const ProjectGrid = () => {
  return (
    <section id="work" className="py-24">
      <div className="container-custom">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore a selection of my recent DevOps and cloud infrastructure projects
            that demonstrate my expertise in automation, reliability, and scalability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              tags={project.tags}
              link={project.link}
              className={`animation-delay-${index * 100}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
