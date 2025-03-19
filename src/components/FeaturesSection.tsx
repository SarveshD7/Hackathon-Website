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
      className="p-6 rounded-2xl hover:bg-secondary/50 transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}

export function FeaturesSection() {
  const features = [
    {
      icon: <CalendarCheck className="h-6 w-6" />,
      title: "Event Registration & Dashboard",
      description: "Seamlessly register for hackathons and manage your participation from a personalized dashboard."
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: "Live Updates & Notifications",
      description: "Stay informed with real-time announcements, schedule changes, and important reminders."
    },
    {
      icon: <Upload className="h-6 w-6" />,
      title: "Project Submission",
      description: "Submit your projects with ease, including code repositories, demos, and documentation."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Judging & Scoring System",
      description: "Transparent evaluation with detailed feedback and real-time leaderboards."
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Mentor Interaction",
      description: "Connect with industry experts and mentors for guidance and support during hackathons."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Formation",
      description: "Find teammates or create your dream team with our intelligent team matching system."
    },
    {
      icon: <Tablet className="h-6 w-6" />,
      title: "Responsive Design",
      description: "Access the platform from any device with our mobile-friendly, adaptive interface."
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: "AI-Powered Assistance",
      description: "Get instant answers to your questions with our intelligent virtual assistant."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Platform Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Everything You Need in One Place
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and resources for a seamless hackathon experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
