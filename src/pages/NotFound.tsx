
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-primary/5 px-4">
      <div className="glass-card p-12 md:p-16 max-w-xl w-full text-center">
        <AnimatedSection>
          <span className="inline-block py-1 px-3 mb-4 bg-primary/10 rounded-full text-sm font-medium text-primary">
            404 Error
          </span>
        </AnimatedSection>
        
        <AnimatedSection delay={100}>
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">4<span className="heading-gradient">0</span>4</h1>
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
          <p className="text-xl text-muted-foreground mb-8">
            Oops! The page you're looking for doesn't seem to exist.
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={300}>
          <Button asChild size="lg" className="button-glow">
            <Link to="/">
              <Home size={18} className="mr-2" />
              Return to Home
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default NotFound;
