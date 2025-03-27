
import React from 'react';
import { Link } from 'react-router-dom';
import { Award, BookOpen, Code, ExternalLink, Heart, Laptop, PenTool, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';

const About: React.FC = () => {
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
                About Us
              </span>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight">
                Meet the <span className="heading-gradient">Team</span> Behind the Code
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <p className="text-xl text-muted-foreground mb-8">
                We're a passionate duo of web developers dedicated to creating exceptional digital experiences.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Veljko */}
            <AnimatedSection>
              <div className="glass-card p-8 relative overflow-hidden">
                <div className="blob w-64 h-64 top-0 right-0 opacity-20" />
                <div className="relative z-10">
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                    <Code size={32} className="text-primary" />
                  </div>
                  
                  <h2 className="text-3xl font-display font-bold mb-4">Veljko</h2>
                  <p className="text-muted-foreground mb-6">
                    With 7 years of programming experience, including 3 years focused on web development, 
                    Veljko brings a wealth of knowledge and expertise to every project. 
                    His passion for clean code and innovative solutions has earned him recognition 
                    with 4 country-wide competition awards and 1 international award.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Award className="text-primary mt-1" size={18} />
                      <p><span className="font-medium">7 years</span> of programming experience</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Laptop className="text-primary mt-1" size={18} />
                      <p><span className="font-medium">3 years</span> of web development experience</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <BookOpen className="text-primary mt-1" size={18} />
                      <p><span className="font-medium">5 awards</span> including 1 international recognition</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Vuk */}
            <AnimatedSection delay={100}>
              <div className="glass-card p-8 relative overflow-hidden">
                <div className="blob w-64 h-64 top-0 right-0 opacity-20" />
                <div className="relative z-10">
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                    <PenTool size={32} className="text-primary" />
                  </div>
                  
                  <h2 className="text-3xl font-display font-bold mb-4">Vuk</h2>
                  <p className="text-muted-foreground mb-6">
                    With 2 years of programming experience, Vuk is driven by a strong passion for coding and 
                    an enthusiasm for learning new technologies. His fresh perspective and dedication to 
                    staying current with industry trends make him a valuable asset to the team.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Zap className="text-primary mt-1" size={18} />
                      <p><span className="font-medium">2 years</span> of programming experience</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Heart className="text-primary mt-1" size={18} />
                      <p><span className="font-medium">Passionate</span> about learning and growth</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Code className="text-primary mt-1" size={18} />
                      <p><span className="font-medium">Dedicated</span> to modern development practices</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={200} className="mt-20 text-center">
            <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-6">Our Story</h3>
              <p className="text-muted-foreground mb-6">
                United by a shared passion for web development, we formed a dynamic partnership aimed at delivering top-tier digital solutions. Our complementary skills and diverse experiences allow us to approach each project with a unique perspective, combining technical expertise with creative problem-solving.
              </p>
              <p className="text-muted-foreground">
                We believe in creating websites that not only look stunning but also deliver exceptional performance and user experience. Our commitment to quality, attention to detail, and dedication to meeting client needs sets us apart in the digital landscape.
              </p>
            </div>
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
              Work With Us
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Let's Bring Your Ideas to Life
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to start your next web project? We're here to help turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="button-glow">
                <Link to="/contact">
                  Get in Touch <ExternalLink size={16} className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
};

export default About;
