
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Layout, ShoppingBag, Zap, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';
import ProjectCard from '@/components/ProjectCard';
import ServiceCard from '@/components/ServiceCard';

const Index: React.FC = () => {
  // Featured projects data
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
                Web Development Duo
              </span>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight">
                Crafting <span className="heading-gradient">Beautiful</span> Digital Experiences
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <p className="text-xl text-muted-foreground mb-8">
                We design and develop exceptional websites that help businesses grow, engage customers, and achieve their digital goals.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={300} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="button-glow">
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-primary/5">
        <div className="section-container">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block py-1 px-3 mb-4 bg-primary/10 rounded-full text-sm font-medium text-primary">
              What We Do
            </span>
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle mx-auto">
              We offer a range of web development services to help businesses establish a strong online presence.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={100}>
              <ServiceCard
                title="Custom Website Development"
                description="We build tailor-made websites that perfectly align with your brand identity and business goals."
                icon={Code}
              />
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <ServiceCard
                title="E-commerce Solutions"
                description="Turn your products into profits with our custom e-commerce websites designed for seamless shopping experiences."
                icon={ShoppingBag}
              />
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <ServiceCard
                title="Website Redesign & Optimization"
                description="Transform your outdated website into a modern, high-performing digital asset that converts visitors into customers."
                icon={Layout}
              />
            </AnimatedSection>
          </div>

          <AnimatedSection delay={400} className="text-center mt-12">
            <Button asChild variant="outline" className="button-glow">
              <Link to="/services">
                View All Services <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary/5 relative overflow-hidden">
        <div className="blob w-96 h-96 top-20 left-10 opacity-20" />
        <div className="blob w-80 h-80 bottom-10 right-10 opacity-10" />
        
        <AnimatedSection className="section-container relative z-10">
          <div className="glass-card p-12 md:p-16 text-center max-w-4xl mx-auto">
            <span className="inline-block py-1 px-3 mb-4 bg-primary/10 rounded-full text-sm font-medium text-primary">
              Let's Collaborate
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're excited to learn about your project. Contact us today and let's create something amazing together.
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

export default Index;
