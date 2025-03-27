
import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Laptop, Layout, ShoppingBag, ExternalLink, Zap, BarChart, Search, Globe, Server, PenTool } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';
import ServiceCard from '@/components/ServiceCard';

const Services: React.FC = () => {
  // Main services
  const mainServices = [
    {
      title: "Custom Website Development",
      description: "We design and develop bespoke websites tailored to your specific requirements, ensuring they align perfectly with your brand and business goals.",
      icon: Code
    },
    {
      title: "E-commerce Solutions",
      description: "Create a seamless online shopping experience with our custom e-commerce development, including secure payment gateways and inventory management.",
      icon: ShoppingBag
    },
    {
      title: "Website Redesign",
      description: "Transform your outdated website into a modern, responsive, and user-friendly digital platform that converts visitors into customers.",
      icon: Layout
    },
    {
      title: "Performance Optimization",
      description: "Improve your website's speed, responsiveness, and overall performance to enhance user experience and boost search engine rankings.",
      icon: Zap
    },
    {
      title: "SEO Implementation",
      description: "Implement best SEO practices to improve your website's visibility in search engines and drive more organic traffic to your business.",
      icon: Search
    },
    {
      title: "Analytics & Reporting",
      description: "Set up comprehensive analytics to track user behavior, conversions, and other key metrics to make data-driven decisions for your website.",
      icon: BarChart
    }
  ];

  // Technologies
  const technologies = [
    {
      name: "WordPress",
      icon: Globe,
      description: "Custom WordPress development for content-managed websites with powerful plugins and tailored themes."
    },
    {
      name: "Shopify",
      icon: ShoppingBag,
      description: "Professional Shopify store setup and customization for seamless e-commerce experiences."
    },
    {
      name: "Wix",
      icon: PenTool,
      description: "Creative Wix website development with custom animations and unique design elements."
    },
    {
      name: "Custom Solutions",
      icon: Code,
      description: "Bespoke web applications using modern frameworks like React, Vue, and Next.js."
    },
    {
      name: "Backend Systems",
      icon: Server,
      description: "Robust server-side solutions with Node.js, Python, PHP, and database integration."
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
                Our Services
              </span>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight">
                Web Development <span className="heading-gradient">Services</span> Tailored to Your Needs
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <p className="text-xl text-muted-foreground mb-8">
                We offer a comprehensive range of web development services to help your business thrive in the digital landscape.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 md:py-32">
        <div className="section-container">
          <AnimatedSection className="text-center mb-16">
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle mx-auto">
              From concept to deployment, we provide end-to-end web development services to bring your ideas to life.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <AnimatedSection key={service.title} delay={100 * (index % 3)}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="section-container">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block py-1 px-3 mb-4 bg-primary/10 rounded-full text-sm font-medium text-primary">
              Our Expertise
            </span>
            <h2 className="section-title">Technologies We Specialize In</h2>
            <p className="section-subtitle mx-auto">
              We leverage the latest technologies and platforms to deliver high-quality web solutions.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <AnimatedSection key={tech.name} delay={100 * (index % 3)}>
                <div className="glass-card p-6 flex flex-col items-center text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <tech.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                  <p className="text-muted-foreground">{tech.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32">
        <div className="section-container">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block py-1 px-3 mb-4 bg-primary/10 rounded-full text-sm font-medium text-primary">
              Our Process
            </span>
            <h2 className="section-title">How We Work</h2>
            <p className="section-subtitle mx-auto">
              Our streamlined development process ensures efficient delivery of high-quality projects.
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 rounded"></div>
              
              <AnimatedSection className="relative z-10 mb-12">
                <div className="flex items-center ml-12 md:ml-0">
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center">1</div>
                  </div>
                  <div className="ml-12 md:ml-0 md:ml-[calc(50%+2rem)] glass-card p-6 md:w-1/2">
                    <h3 className="text-xl font-bold mb-2">Discovery & Planning</h3>
                    <p className="text-muted-foreground">We start by understanding your business, target audience, and project goals to create a comprehensive strategy.</p>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={100} className="relative z-10 mb-12">
                <div className="flex items-center mr-12 md:mr-0">
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center">2</div>
                  </div>
                  <div className="md:ml-0 md:mr-[calc(50%+2rem)] md:text-right glass-card p-6 md:w-1/2">
                    <h3 className="text-xl font-bold mb-2">Design & Prototyping</h3>
                    <p className="text-muted-foreground">We create wireframes and design mockups to visualize the final product before moving to development.</p>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={200} className="relative z-10 mb-12">
                <div className="flex items-center ml-12 md:ml-0">
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center">3</div>
                  </div>
                  <div className="ml-12 md:ml-0 md:ml-[calc(50%+2rem)] glass-card p-6 md:w-1/2">
                    <h3 className="text-xl font-bold mb-2">Development</h3>
                    <p className="text-muted-foreground">Our developers bring the designs to life using the latest technologies and following best practices.</p>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={300} className="relative z-10 mb-12">
                <div className="flex items-center mr-12 md:mr-0">
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center">4</div>
                  </div>
                  <div className="md:ml-0 md:mr-[calc(50%+2rem)] md:text-right glass-card p-6 md:w-1/2">
                    <h3 className="text-xl font-bold mb-2">Testing & Quality Assurance</h3>
                    <p className="text-muted-foreground">We thoroughly test the website for functionality, compatibility, and performance across devices.</p>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={400} className="relative z-10">
                <div className="flex items-center ml-12 md:ml-0">
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center">5</div>
                  </div>
                  <div className="ml-12 md:ml-0 md:ml-[calc(50%+2rem)] glass-card p-6 md:w-1/2">
                    <h3 className="text-xl font-bold mb-2">Launch & Support</h3>
                    <p className="text-muted-foreground">We deploy your website and provide ongoing support to ensure everything runs smoothly.</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
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
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Discuss Your Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today to schedule a consultation and learn how we can help bring your web project to life.
            </p>
            <Button asChild size="lg" className="button-glow">
              <Link to="/contact">
                Contact Us <ExternalLink size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
};

export default Services;
