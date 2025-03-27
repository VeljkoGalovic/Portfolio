
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  repoUrl,
  className,
}) => {
  return (
    <div className={cn("glass-card overflow-hidden group", className)}>
      <div className="relative overflow-hidden h-52">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-full p-2 transform hover:scale-110 transition-transform"
            >
              <ExternalLink size={20} className="text-primary" />
            </a>
          )}
          {repoUrl && (
            <a 
              href={repoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-full p-2 transform hover:scale-110 transition-transform"
            >
              <Github size={20} className="text-primary" />
            </a>
          )}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-display font-bold text-xl mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 bg-primary/10 text-primary-foreground rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-3 mt-4">
          {liveUrl && (
            <Button
              asChild
              variant="default"
              size="sm"
              className="flex-1"
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                Live Demo
                <ExternalLink size={14} className="ml-2" />
              </a>
            </Button>
          )}
          {repoUrl && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="flex-1"
            >
              <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                GitHub
                <Github size={14} className="ml-2" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
