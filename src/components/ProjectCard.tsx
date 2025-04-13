
import React from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link?: string;
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  imageUrl,
  tags,
  link = "#",
  className,
}: ProjectCardProps) => {
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-xl border bg-white/60 backdrop-blur-sm transition-all hover:shadow-xl animate-fade-up hover:-translate-y-1 duration-300",
        className
      )}
    >
      <a href={link} className="block">
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        <div className="p-5">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold gradient-text">{title}</h3>
            <span className="text-foreground/70 group-hover:text-primary transition-colors bg-white/80 p-1.5 rounded-full group-hover:bg-primary/10">
              <ArrowUpRight size={18} />
            </span>
          </div>
          <p className="text-muted-foreground text-sm mb-4">{description}</p>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs px-2.5 py-0.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-800 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
