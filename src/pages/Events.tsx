import { useState, useEffect } from "react";
import { AnimatedTransition } from "@/components/AnimatedTransition";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EventCard } from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, CalendarIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

// Sample data for the events
const allEvents = [
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
    registrationOpen: true,
    featured: true
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
  },
  {
    id: "cybersecurity-hack",
    title: "Cybersecurity Hackathon",
    description: "Put your security skills to the test in this intense hackathon focused on identifying and fixing vulnerabilities.",
    date: "February 5-6, 2024",
    time: "9:00 AM - 9:00 PM",
    location: "SPIT Campus, Mumbai",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1170&q=80",
    capacity: "200 Participants",
    category: "Security",
    registrationOpen: false
  },
  {
    id: "mobile-app-challenge",
    title: "Mobile App Innovation Challenge",
    description: "Create innovative mobile applications that solve real-world problems or enhance daily life experiences.",
    date: "March 15-16, 2024",
    time: "9:00 AM - 6:00 PM",
    location: "Online",
    image: "https://images.unsplash.com/photo-1551650992-ee4fd47df41f?auto=format&fit=crop&w=1974&q=80",
    capacity: "350 Participants",
    category: "Mobile",
    registrationOpen: false
  },
  {
    id: "blockchain-hackathon",
    title: "Blockchain Developer Hackathon",
    description: "Dive into the world of blockchain and develop decentralized applications with real-world impact.",
    date: "April 20-22, 2024",
    time: "9:00 AM - 6:00 PM",
    location: "SPIT Campus, Mumbai",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1932&q=80",
    capacity: "200 Participants",
    category: "Blockchain",
    registrationOpen: false
  }
];

const categories = ["All", "Flagship", "Web", "AI/ML", "Security", "Mobile", "Blockchain"];

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [filteredEvents, setFilteredEvents] = useState(allEvents);

  useEffect(() => {
    let results = allEvents;
    
    // Filter by search term
    if (searchTerm) {
      results = results.filter(event => 
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by category
    if (selectedCategory !== "All") {
      results = results.filter(event => event.category === selectedCategory);
    }
    
    // Filter by date (this is simplified - would need proper date parsing)
    if (date) {
      const formattedSelectedDate = format(date, "MMMM d, yyyy").toLowerCase();
      results = results.filter(event => 
        event.date.toLowerCase().includes(formattedSelectedDate)
      );
    }
    
    setFilteredEvents(results);
  }, [searchTerm, selectedCategory, date]);

  return (
    <AnimatedTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <div className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Upcoming <span className="text-primary">Hackathons</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover and register for our upcoming hackathons, competitions, and tech events.
              </p>
            </motion.div>
            
            {/* Search and filters */}
            <div className="mb-8 space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search events..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <div className="flex gap-3">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="flex gap-2">
                        <Filter className="h-4 w-4" />
                        <span>Filter</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80 p-4">
                      <div className="space-y-4">
                        <h4 className="font-medium">Filter Events</h4>
                        <div>
                          <h5 className="text-sm font-medium mb-2">Location</h5>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-white">
                              All
                            </Badge>
                            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-white">
                              On Campus
                            </Badge>
                            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-white">
                              Online
                            </Badge>
                          </div>
                        </div>
                        <div>
                          <h5 className="text-sm font-medium mb-2">Status</h5>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-white">
                              All
                            </Badge>
                            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-white">
                              Registration Open
                            </Badge>
                            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-white">
                              Coming Soon
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                  
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className={cn(
                        "flex gap-2",
                        date && "text-primary"
                      )}>
                        <CalendarIcon className="h-4 w-4" />
                        {date ? format(date, "MMM dd, yyyy") : "Date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                      {date && (
                        <div className="p-3 border-t">
                          <Button 
                            variant="ghost" 
                            className="w-full justify-start text-muted-foreground"
                            onClick={() => setDate(undefined)}
                          >
                            Clear date
                          </Button>
                        </div>
                      )}
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className="cursor-pointer transition-colors"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Events grid */}
            {filteredEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event, index) => (
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
                    featured={event.featured}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <CalendarIcon className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-2xl font-semibold mb-2">No events found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>
        </div>
        
        <Footer />
      </div>
    </AnimatedTransition>
  );
};

export default Events;
