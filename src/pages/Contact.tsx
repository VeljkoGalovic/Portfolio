
import React, { useState } from 'react';
import { Mail, MapPin, MessageSquare, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/components/ui/use-toast";
import AnimatedSection from '@/components/AnimatedSection';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

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
                Get In Touch
              </span>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight">
                Let's <span className="heading-gradient">Connect</span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <p className="text-xl text-muted-foreground mb-8">
                Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you as soon as possible.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 md:py-32">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <AnimatedSection>
              <div className="glass-card p-8">
                <h2 className="text-2xl font-display font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      required
                      className="w-full min-h-[150px]"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full button-glow" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Send Message
                        <Send size={16} className="ml-2" />
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Information */}
            <AnimatedSection delay={100}>
              <div className="space-y-8">
                <div className="glass-card p-8">
                  <h2 className="text-2xl font-display font-bold mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="text-primary mt-1" />
                      <div>
                        <h3 className="font-medium mb-1">Email Us</h3>
                        <a href="mail:veljkogalovic@gmail.com" className = "block">
                          veljkogalovic@gmail.com
                          </a>

                          <a href="mutkevuk@gmail.com" className = "block">
                          mutkevuk@gmail.com
                          </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Phone className="text-primary mt-1" />
                      <div>
                        <h3 className="font-medium mb-1">Call Us</h3>
                        <a href="tel:+381665700379" className="block">
                            +381665700379
                          </a>
                          <a href="tel:+381658960803" className="block">
                            +381658960803
                          </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <MapPin className="text-primary mt-1" />
                      <div>
                        <h3 className="font-medium mb-1">Location</h3>
                        <p className="text-muted-foreground">
                          Sombor, Serbia
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-8">
                  <h2 className="text-2xl font-display font-bold mb-6">Connect With Us</h2>
                  <div className="flex space-x-4">
                    <a 
                      href="mailto:veljkogalovic@gmail.com" 
                      className="bg-primary/10 hover:bg-primary/20 p-3 rounded-full transition-colors"
                      aria-label="Email"
                    >
                      <Mail size={24} className="text-primary" />
                    </a>
                    <a 
                      href="tel:+665700379" 
                      className="bg-primary/10 hover:bg-primary/20 p-3 rounded-full transition-colors"
                      aria-label="Phone"
                    >
                      <Phone size={24} className="text-primary" />
                    </a>
                  </div>
                </div>

                <div className="glass-card p-8">
                  <h2 className="text-2xl font-display font-bold mb-6">Project Inquiry</h2>
                  <p className="text-muted-foreground mb-4">
                    Looking for a custom quote? Fill out our project brief form for a tailored proposal.
                  </p>
                  <div className="flex items-center space-x-2 text-primary">
                    <MessageSquare size={18} />
                    <span className="font-medium">Quick response within 24 hours</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
