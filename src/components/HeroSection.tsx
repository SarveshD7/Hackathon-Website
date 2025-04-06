import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Placeholder images until real ones are uploaded
const placeholderImages = [
  "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=2070&q=80"
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
          <div className="absolute inset-0 bg-black/70 z-10" />
          <img
            src={image}
            alt="Hero background"
            className="h-full w-full object-cover object-center"
          />
        </motion.div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-primary/10 z-10" />
      
      {/* Animated particles effect */}
      <div className="absolute inset-0 z-10 opacity-40">
        <div className="absolute w-32 h-32 rounded-full bg-primary/20 blur-3xl -top-10 left-1/4 animate-pulse"></div>
        <div className="absolute w-40 h-40 rounded-full bg-purple-500/20 blur-3xl top-1/3 -right-10 animate-pulse"></div>
        <div className="absolute w-36 h-36 rounded-full bg-blue-500/20 blur-3xl -bottom-10 left-1/3 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-4xl mx-auto mb-28 md:mb-8"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-white/10 border border-white/20 backdrop-blur-sm rounded-full text-shadow-sm">
            SPIT Hackathons Platform
          </span>
          <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight tracking-tight text-balance mb-8 hero-title text-shadow">
            Where Innovation <span className="gradient-text">Meets</span> Opportunity
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto font-sans text-shadow-sm">
            Join our vibrant community of innovators and problem solvers. Register for upcoming hackathons and turn your ideas into reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button asChild size="lg" className="text-base rounded-full px-8 py-6 gradient-bg shadow-lg hover:shadow-primary/20 border-0 font-heading font-medium">
              <Link to="/events" className="flex items-center">
                Explore Events <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base rounded-full px-8 py-6 text-white border-white/30 backdrop-blur-sm hover:bg-white/10 shadow-lg font-heading font-medium">
              <Link to="/register">
                Register Now
              </Link>
            </Button>
          </div>
        </motion.div>
        
        {/* Stats */}
        <motion.div 
          className="relative w-full mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl px-4 z-30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="card-gradient p-4 md:p-6 rounded-xl text-center shadow-lg">
            <div className="text-2xl md:text-3xl font-heading font-bold gradient-text mb-1">30+</div>
            <div className="text-xs md:text-sm font-medium text-gray-200 text-shadow-sm">Hackathons</div>
          </div>
          <div className="card-gradient p-4 md:p-6 rounded-xl text-center shadow-lg">
            <div className="text-2xl md:text-3xl font-heading font-bold gradient-text mb-1">5,000+</div>
            <div className="text-xs md:text-sm font-medium text-gray-200 text-shadow-sm">Participants</div>
          </div>
          <div className="card-gradient p-4 md:p-6 rounded-xl text-center shadow-lg">
            <div className="text-2xl md:text-3xl font-heading font-bold gradient-text mb-1">₹10L+</div>
            <div className="text-xs md:text-sm font-medium text-gray-200 text-shadow-sm">Prize Pool</div>
          </div>
          <div className="card-gradient p-4 md:p-6 rounded-xl text-center shadow-lg">
            <div className="text-2xl md:text-3xl font-heading font-bold gradient-text mb-1">150+</div>
            <div className="text-xs md:text-sm font-medium text-gray-200 text-shadow-sm">Projects</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
