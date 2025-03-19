
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const backgroundImages = [
  "/images/hero-bg-1.jpg",
  "/images/hero-bg-2.jpg",
  "/images/hero-bg-3.jpg"
];

// Placeholder images until real ones are uploaded
const placeholderImages = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2070&q=80"
];

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % placeholderImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const backgroundVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background images with fade transition */}
      {placeholderImages.map((image, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 z-0"
          initial="initial"
          animate={index === currentImageIndex ? "animate" : "exit"}
          variants={backgroundVariants}
          transition={{ duration: 1.5 }}
          style={{ display: index === currentImageIndex ? "block" : "none" }}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src={image}
            alt="Hero background"
            className="h-full w-full object-cover object-center"
          />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block px-3 py-1 mb-6 text-sm font-medium bg-primary/20 text-primary rounded-full">
            SPIT Hackathons Platform
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-balance mb-6">
            Where Innovation <span className="text-primary">Meets</span> Opportunity
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Join the premier hackathon community at Sardar Patel Institute of Technology and bring your ideas to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-base rounded-full px-8 py-6 bg-primary hover:bg-primary/90">
              <Link to="/events">
                Explore Events <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base rounded-full px-8 py-6 text-white border-white hover:bg-white/10">
              <Link to="/register">
                Register Now
              </Link>
            </Button>
          </div>
        </motion.div>
        
        {/* Stats */}
        <motion.div 
          className="absolute bottom-16 left-0 right-0 mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="glass p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-primary mb-1">30+</div>
            <div className="text-sm font-medium text-gray-200">Hackathons</div>
          </div>
          <div className="glass p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-primary mb-1">5,000+</div>
            <div className="text-sm font-medium text-gray-200">Participants</div>
          </div>
          <div className="glass p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-primary mb-1">₹10L+</div>
            <div className="text-sm font-medium text-gray-200">Prize Pool</div>
          </div>
          <div className="glass p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-primary mb-1">150+</div>
            <div className="text-sm font-medium text-gray-200">Projects</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
