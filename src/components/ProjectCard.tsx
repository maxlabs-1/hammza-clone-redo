
import React from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight, ExternalLink } from "lucide-react";

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
        "group relative overflow-hidden rounded-xl border bg-secondary/30 backdrop-blur-sm transition-all hover:shadow-xl animate-fade-up hover:-translate-y-1 duration-300",
        className
      )}
    >
      <a href={link} className="block h-full flex flex-col">
        <div className="relative aspect-[16/10] overflow-hidden">
          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 right-4 text-foreground/70 group-hover:text-primary transition-colors bg-black/40 p-1.5 rounded-full group-hover:bg-primary/20 backdrop-blur-sm z-20">
            <ExternalLink size={18} />
          </div>
        </div>
        
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold gradient-text mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm mb-4 flex-grow">{description}</p>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs px-2.5 py-0.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-400 rounded-full hover:from-blue-500/20 hover:to-purple-500/20 transition-colors"
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
