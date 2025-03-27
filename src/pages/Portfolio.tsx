
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';
import ProjectCard from '@/components/ProjectCard';

const Portfolio: React.FC = () => {
  // Portfolio projects data
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A fully responsive e-commerce solution with a sleek user interface and secure payment integration.",
      image: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      title: "Portfolio Website",
      description: "A minimalist portfolio website showcasing a photographer's work with elegant transitions.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      technologies: ["React", "Framer Motion", "Tailwind CSS"],
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      title: "Real Estate App",
      description: "A property listing website with advanced filtering, map integration, and virtual tours.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1373&q=80",
      technologies: ["Next.js", "TypeScript", "Google Maps API"],
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      title: "Restaurant Website",
      description: "An elegant website for a fine dining restaurant featuring online reservations and menu display.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      technologies: ["WordPress", "PHP", "JavaScript", "Custom Theme"],
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      title: "Fitness Tracker App",
      description: "A mobile-first web application for tracking workouts, nutrition, and fitness progress.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: ["React Native", "Firebase", "Chart.js"],
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      title: "Travel Blog",
      description: "A content-focused blog with interactive maps and photo galleries for travel enthusiasts.",
      image: "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      technologies: ["Gatsby", "GraphQL", "Contentful CMS"],
      liveUrl: "#",
      repoUrl: "#"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="blob w-96 h-96 top-10 right-0 opacity-30" />
        <div className="blob w-80 h-80 bottom-20 left-10 opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <AnimatedSection>
              <span className="inline-block py-1 px-3 mb-4 bg-primary/10 rounded-full text-sm font-medium text-primary">
                Our Portfolio
              </span>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight">
                Our <span className="heading-gradient">Work</span> Speaks For Itself
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <p className="text-xl text-muted-foreground mb-8">
                Browse through our portfolio of projects that showcase our expertise in creating exceptional websites and applications.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 md:py-32">
        <div className="section-container">
          <div className="project-grid">
            {projects.map((project, index) => (
              <AnimatedSection key={project.title} delay={100 * (index % 3)}>
                <ProjectCard {...project} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary/5 relative overflow-hidden">
        <div className="blob w-96 h-96 top-20 left-10 opacity-20" />
        <div className="blob w-80 h-80 bottom-10 right-10 opacity-10" />
        
        <AnimatedSection className="section-container relative z-10">
          <div className="glass-card p-12 md:p-16 text-center max-w-4xl mx-auto">
            <span className="inline-block py-1 px-3 mb-4 bg-primary/10 rounded-full text-sm font-medium text-primary">
              Start Your Project
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Create Your Next Digital Experience?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's collaborate to create a website that perfectly represents your brand and meets your business objectives.
            </p>
            <Button asChild size="lg" className="button-glow">
              <Link to="/contact">
                Get in Touch <ExternalLink size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
};

export default Portfolio;
