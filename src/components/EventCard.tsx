import { motion } from "framer-motion";
import { Calendar, Clock, Users, MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface EventCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  capacity: string;
  category: string;
  registrationOpen: boolean;
  index?: number;
  featured?: boolean;
}

export function EventCard({
  id,
  title,
  description,
  date,
  time,
  location,
  image,
  capacity,
  category,
  registrationOpen,
  index = 0,
  featured = false,
}: EventCardProps) {
  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-white/10 shadow-xl card-hover",
        featured ? "md:col-span-2 row-span-2" : ""
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-10" />
      
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-purple-500/30 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative h-full">
        <img
          src={image}
          alt={title}
          className={cn(
            "h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105",
            featured ? "h-full max-h-96" : ""
          )}
        />
        
        <div className="absolute bottom-0 left-0 right-0 z-20 p-6 text-white">
          <div className="space-y-3">
            <Badge variant="secondary" className="gradient-bg text-white rounded-full px-3 shadow-md font-sans">
              {category}
            </Badge>
            
            <h3 className={cn(
              "font-heading font-bold tracking-tight text-white group-hover:gradient-text transition-all duration-300",
              featured ? "text-3xl" : "text-xl"
            )}>
              {title}
            </h3>
            
            <p className="line-clamp-2 text-sm text-gray-100 font-sans">
              {description}
            </p>
            
            <div className="pt-3 grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2 text-sm text-gray-200 font-sans">
                <Calendar size={14} className="text-primary" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-200 font-sans">
                <Clock size={14} className="text-primary" />
                <span>{time}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-200 font-sans">
                <MapPin size={14} className="text-primary" />
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-200 font-sans">
                <Users size={14} className="text-primary" />
                <span>{capacity}</span>
              </div>
            </div>
            
            <div className="pt-4 flex items-center justify-between gap-3">
              <Button asChild variant="default" className="rounded-full px-6 shadow-md w-full gradient-bg border-0 group-hover:shadow-primary/20 font-heading font-medium">
                <Link to={`/events/${id}`} className="flex items-center justify-center">
                  View Details
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </Button>
              
              {registrationOpen ? (
                <Button asChild variant="outline" className="rounded-full w-full bg-white/10 text-white hover:bg-white/20 border-white/10 shadow-md font-heading font-medium">
                  <Link to="/register">Register</Link>
                </Button>
              ) : (
                <Badge variant="secondary" className="py-2 px-3 rounded-full bg-gray-800/50 backdrop-blur-sm text-gray-200 border border-white/10 font-sans">
                  Coming Soon
                </Badge>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
