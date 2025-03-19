
import { motion } from "framer-motion";
import { Calendar, Clock, Users, MapPin } from "lucide-react";
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
        "group relative overflow-hidden rounded-2xl transition-all duration-300",
        featured ? "md:col-span-2 row-span-2" : ""
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />
      
      <div className="relative h-full">
        <img
          src={image}
          alt={title}
          className={cn(
            "h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105",
            featured ? "h-full" : ""
          )}
        />
        
        <div className="absolute bottom-0 left-0 right-0 z-20 p-6 text-white">
          <div className="space-y-3">
            <Badge variant="secondary" className="bg-primary/90 hover:bg-primary text-white">
              {category}
            </Badge>
            
            <h3 className={cn(
              "font-semibold tracking-tight text-white group-hover:text-primary transition-colors",
              featured ? "text-3xl" : "text-xl"
            )}>
              {title}
            </h3>
            
            <p className="line-clamp-2 text-sm text-gray-200">
              {description}
            </p>
            
            <div className="pt-3 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm text-gray-200">
                <Calendar size={14} className="text-primary" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-200">
                <Clock size={14} className="text-primary" />
                <span>{time}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-200">
                <MapPin size={14} className="text-primary" />
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-200">
                <Users size={14} className="text-primary" />
                <span>{capacity}</span>
              </div>
            </div>
            
            <div className="pt-4 flex items-center justify-between">
              <Button asChild variant="default" className="rounded-full px-6">
                <Link to={`/events/${id}`}>View Details</Link>
              </Button>
              
              {registrationOpen ? (
                <Button asChild variant="outline" className="bg-white/10 text-white hover:bg-white/20 border-0">
                  <Link to="/register">Register</Link>
                </Button>
              ) : (
                <Badge variant="secondary" className="bg-gray-700 hover:bg-gray-600">
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
