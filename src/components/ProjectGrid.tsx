
import React from "react";
import ProjectCard from "./ProjectCard";

// Sample project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: "E-commerce Website Redesign",
    description: "Complete redesign of an online retail platform focused on user experience",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    tags: ["Web Design", "UI/UX", "E-commerce"],
    link: "#"
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "A secure and intuitive mobile application for online banking services",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    tags: ["Mobile App", "UI/UX", "Fintech"],
    link: "#"
  },
  {
    id: 3,
    title: "Restaurant Booking System",
    description: "Online reservation platform with integrated payment processing",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    tags: ["Web App", "Full Stack", "Business"],
    link: "#"
  },
  {
    id: 4,
    title: "Personal Portfolio Theme",
    description: "Minimalist portfolio theme for creative professionals",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["Web Design", "Theme", "Portfolio"],
    link: "#"
  }
];

const ProjectGrid = () => {
  return (
    <section id="work" className="py-24">
      <div className="container-custom">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Selected Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore a collection of my recent projects spanning web design, development,
            and digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
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
