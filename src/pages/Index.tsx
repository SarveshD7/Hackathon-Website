
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { EventCard } from "@/components/EventCard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Sample data for the upcoming events section
const upcomingEvents = [
  {
    id: "hackathon-2023",
    title: "SPIT Hackathon 2023",
    description: "Our flagship 48-hour coding marathon with exciting challenges across AI, IoT, and Blockchain domains.",
    date: "December 15-17, 2023",
    time: "9:00 AM - 9:00 AM",
    location: "SPIT Campus, Mumbai",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1170&q=80",
    capacity: "500 Participants",
    category: "Flagship",
    registrationOpen: true
  },
  {
    id: "webdev-challenge",
    title: "Web Development Challenge",
    description: "Design and develop responsive web solutions for real-world problems in this 24-hour challenge.",
    date: "November 25, 2023",
    time: "10:00 AM - 10:00 AM",
    location: "Online",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1169&q=80",
    capacity: "300 Participants",
    category: "Web",
    registrationOpen: true
  },
  {
    id: "ai-summit",
    title: "AI Innovation Summit",
    description: "Explore the cutting edge of artificial intelligence and machine learning in this collaborative hackathon.",
    date: "January 10-12, 2024",
    time: "9:00 AM - 6:00 PM",
    location: "SPIT Campus, Mumbai",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1965&q=80",
    capacity: "250 Participants",
    category: "AI/ML",
    registrationOpen: false
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* Upcoming Events Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 mb-2 text-sm font-medium bg-primary/10 text-primary rounded-full">
                What's Next
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Upcoming Hackathons
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button asChild variant="outline" className="group">
                <Link to="/events">
                  View All Events
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <EventCard
                key={event.id}
                id={event.id}
                title={event.title}
                description={event.description}
                date={event.date}
                time={event.time}
                location={event.location}
                image={event.image}
                capacity={event.capacity}
                category={event.category}
                registrationOpen={event.registrationOpen}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Ready to Showcase Your Skills?
              </h2>
              <p className="text-xl text-muted-foreground">
                Join our vibrant community of innovators and problem solvers. Register for upcoming hackathons and turn your ideas into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg" className="rounded-full px-8">
                  <Link to="/register">
                    Register Now
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-8">
                  <Link to="/teams">
                    Find a Team
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
