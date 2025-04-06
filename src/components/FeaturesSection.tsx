import { motion } from "framer-motion";
import { 
  Users, CalendarCheck, Award, MessageCircle, Upload, 
  Bell, Tablet, Bot 
} from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

function Feature({ icon, title, description, delay = 0 }: FeatureProps) {
  return (
    <motion.div
      className="p-6 rounded-xl border border-white/10 hover:border-primary/20 shadow-lg card-gradient backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-primary/5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-5 shadow-md">
        {icon}
      </div>
      <h3 className="text-xl font-heading font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground font-sans">{description}</p>
    </motion.div>
  );
}

export function FeaturesSection() {
  const features = [
    {
      icon: <CalendarCheck className="h-6 w-6 text-white" />,
      title: "Event Registration & Dashboard",
      description: "Seamlessly register for hackathons and manage your participation from a personalized dashboard."
    },
    {
      icon: <Bell className="h-6 w-6 text-white" />,
      title: "Live Updates & Notifications",
      description: "Stay informed with real-time announcements, schedule changes, and important reminders."
    },
    {
      icon: <Upload className="h-6 w-6 text-white" />,
      title: "Project Submission",
      description: "Submit your projects with ease, including code repositories, demos, and documentation."
    },
    {
      icon: <Award className="h-6 w-6 text-white" />,
      title: "Judging & Scoring System",
      description: "Transparent evaluation with detailed feedback and real-time leaderboards."
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-white" />,
      title: "Mentor Interaction",
      description: "Connect with industry experts and mentors for guidance and support during hackathons."
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Team Formation",
      description: "Find teammates or create your dream team with our intelligent team matching system."
    },
    {
      icon: <Tablet className="h-6 w-6 text-white" />,
      title: "Responsive Design",
      description: "Access the platform from any device with our mobile-friendly, adaptive interface."
    },
    {
      icon: <Bot className="h-6 w-6 text-white" />,
      title: "AI-Powered Assistance",
      description: "Get instant answers to your questions with our intelligent virtual assistant."
    }
  ];

  return (
    <section className="py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-primary/10 border border-primary/20 text-primary rounded-full">
            Platform Features
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-6 section-title">
            Everything You Need <span className="gradient-text">in One Place</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-sans">
            Our comprehensive platform provides all the tools and resources for a seamless hackathon experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
