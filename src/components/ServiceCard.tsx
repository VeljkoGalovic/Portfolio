
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  className,
}) => {
  return (
    <div className={cn(
      "glass-card p-6 lg:p-8 transition-all duration-300 hover:shadow-xl group overflow-hidden relative",
      className
    )}>
      <div className="absolute top-0 right-0 -mt-8 -mr-8 w-24 h-24 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
      
      <div className="bg-primary/10 rounded-xl p-3 inline-flex mb-6 relative">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      
      <h3 className="text-xl font-display font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default ServiceCard;
