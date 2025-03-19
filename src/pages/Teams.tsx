
import { useState } from "react";
import { AnimatedTransition } from "@/components/AnimatedTransition";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Users, PlusCircle, ExternalLink, Mail, MessageSquare } from "lucide-react";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Sample data for teams
const teamsData = [
  {
    id: "team-1",
    name: "CodeCrafters",
    members: [
      { id: "user-1", name: "Alex Johnson", role: "Team Leader", avatar: "https://i.pravatar.cc/150?img=1", skills: ["Frontend", "UI/UX"] },
      { id: "user-2", name: "Priya Sharma", role: "Backend Developer", avatar: "https://i.pravatar.cc/150?img=5", skills: ["Backend", "API"] },
      { id: "user-3", name: "Michael Chen", role: "Data Scientist", avatar: "https://i.pravatar.cc/150?img=3", skills: ["AI/ML", "Python"] }
    ],
    openPositions: ["Full Stack Developer", "UI/UX Designer"],
    description: "We're building an AI-powered platform to help students find and collaborate on projects that align with their interests and skills.",
    lookingFor: "Looking for passionate developers and designers who are interested in AI and education technology.",
    hackathon: "SPIT Hackathon 2023"
  },
  {
    id: "team-2",
    name: "Blockchain Pioneers",
    members: [
      { id: "user-4", name: "Ravi Patel", role: "Team Leader", avatar: "https://i.pravatar.cc/150?img=4", skills: ["Blockchain", "Solidity"] },
      { id: "user-5", name: "Emma Wilson", role: "Frontend Developer", avatar: "https://i.pravatar.cc/150?img=5", skills: ["React", "Web3.js"] }
    ],
    openPositions: ["Backend Developer", "Smart Contract Developer", "UI Designer"],
    description: "We're developing a decentralized application for secure and transparent academic credential verification using blockchain technology.",
    lookingFor: "Seeking individuals with blockchain knowledge, backend development skills, or UI design experience.",
    hackathon: "Blockchain Developer Hackathon"
  },
  {
    id: "team-3",
    name: "HealthTech Innovators",
    members: [
      { id: "user-6", name: "Sarah Kim", role: "Team Leader", avatar: "https://i.pravatar.cc/150?img=6", skills: ["Project Management", "Healthcare"] },
      { id: "user-7", name: "David Rodriguez", role: "Mobile Developer", avatar: "https://i.pravatar.cc/150?img=7", skills: ["React Native", "Flutter"] },
      { id: "user-8", name: "Ananya Gupta", role: "Backend Developer", avatar: "https://i.pravatar.cc/150?img=8", skills: ["Node.js", "MongoDB"] },
      { id: "user-9", name: "James Wilson", role: "UI/UX Designer", avatar: "https://i.pravatar.cc/150?img=9", skills: ["Figma", "Adobe XD"] }
    ],
    openPositions: ["ML Engineer"],
    description: "Our team is creating a mobile application that uses machine learning to predict and prevent health issues based on user-provided data.",
    lookingFor: "Looking for an ML engineer with experience in health data analysis and prediction models.",
    hackathon: "AI Innovation Summit"
  }
];

// Sample data for individuals looking for teams
const individualsData = [
  {
    id: "ind-1",
    name: "Tanvi Mehta",
    avatar: "https://i.pravatar.cc/150?img=10",
    skills: ["Frontend", "React", "TypeScript"],
    experience: "3 years in web development",
    interests: "AI, Web3, Education",
    bio: "Frontend developer with experience in building responsive and accessible web applications. Looking to join a team focused on innovative solutions.",
    lookingFor: "A team working on AI or education technology projects."
  },
  {
    id: "ind-2",
    name: "Rahul Kumar",
    avatar: "https://i.pravatar.cc/150?img=11",
    skills: ["Backend", "Python", "Django", "Flask"],
    experience: "2 years in backend development",
    interests: "Machine Learning, Data Science",
    bio: "Backend developer specializing in Python-based web services and APIs. Interested in applying machine learning to solve real-world problems.",
    lookingFor: "A team that needs backend expertise or is working on data-focused projects."
  },
  {
    id: "ind-3",
    name: "Sophia Zhang",
    avatar: "https://i.pravatar.cc/150?img=12",
    skills: ["UI/UX Design", "Figma", "Adobe XD"],
    experience: "4 years in design",
    interests: "User Research, Accessibility, Mobile Design",
    bio: "UI/UX designer passionate about creating intuitive and accessible interfaces. Experienced in design systems and user research methodologies.",
    lookingFor: "A team that values good design and user experience in their project."
  },
  {
    id: "ind-4",
    name: "Arjun Nair",
    avatar: "https://i.pravatar.cc/150?img=13",
    skills: ["Blockchain", "Solidity", "Ethereum", "Web3.js"],
    experience: "2 years in blockchain development",
    interests: "DeFi, NFTs, Smart Contracts",
    bio: "Blockchain developer with experience in Ethereum-based applications. Passionate about decentralized technologies and their potential applications.",
    lookingFor: "A team working on blockchain projects or willing to incorporate blockchain elements."
  }
];

const Teams = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("all");
  const [filteredTeams, setFilteredTeams] = useState(teamsData);
  const [filteredIndividuals, setFilteredIndividuals] = useState(individualsData);

  // Filter teams and individuals based on search term and selected skill
  const filterItems = () => {
    const teamResults = teamsData.filter(team => {
      const matchesSearch = team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        team.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesSkill = selectedSkill === "all" || team.members.some(member => 
        member.skills.some(skill => skill.toLowerCase() === selectedSkill.toLowerCase())
      );
      
      return matchesSearch && matchesSkill;
    });
    
    const individualResults = individualsData.filter(individual => {
      const matchesSearch = individual.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        individual.bio.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesSkill = selectedSkill === "all" || individual.skills.some(skill => 
        skill.toLowerCase() === selectedSkill.toLowerCase()
      );
      
      return matchesSearch && matchesSkill;
    });
    
    setFilteredTeams(teamResults);
    setFilteredIndividuals(individualResults);
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    filterItems();
  };

  // Handle skill filter change
  const handleSkillChange = (value: string) => {
    setSelectedSkill(value);
    filterItems();
  };

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
                Find Your <span className="text-primary">Dream Team</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Connect with talented individuals or join an existing team for your next hackathon.
              </p>
            </motion.div>
            
            {/* Search and filters */}
            <div className="mb-8 space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search teams or individuals..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                </div>
                
                <div className="w-full md:w-64">
                  <Select value={selectedSkill} onValueChange={handleSkillChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Filter by skills" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Skills</SelectItem>
                      <SelectItem value="Frontend">Frontend</SelectItem>
                      <SelectItem value="Backend">Backend</SelectItem>
                      <SelectItem value="UI/UX">UI/UX Design</SelectItem>
                      <SelectItem value="Blockchain">Blockchain</SelectItem>
                      <SelectItem value="AI/ML">AI/ML</SelectItem>
                      <SelectItem value="Mobile">Mobile Development</SelectItem>
                      <SelectItem value="DevOps">DevOps</SelectItem>
                      <SelectItem value="Data Science">Data Science</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button asChild className="md:w-auto">
                  <Link to="/register">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Create a Team
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Tabs for teams and individuals */}
            <Tabs defaultValue="teams" className="w-full">
              <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-8">
                <TabsTrigger value="teams" className="text-base">Teams Looking for Members</TabsTrigger>
                <TabsTrigger value="individuals" className="text-base">Individuals Looking for Teams</TabsTrigger>
              </TabsList>
              
              <TabsContent value="teams">
                {filteredTeams.length > 0 ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {filteredTeams.map((team, index) => (
                      <motion.div
                        key={team.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                      >
                        <Card className="h-full hover:shadow-md transition-shadow duration-300 border border-border/50">
                          <CardHeader>
                            <div className="flex justify-between items-start">
                              <div>
                                <CardTitle className="text-xl">{team.name}</CardTitle>
                                <CardDescription className="mt-1">
                                  For: {team.hackathon}
                                </CardDescription>
                              </div>
                              <Badge variant="outline" className="bg-primary/10 text-primary border-0">
                                {team.openPositions.length} Open {team.openPositions.length === 1 ? "Position" : "Positions"}
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">{team.description}</p>
                            
                            <div>
                              <h4 className="text-sm font-medium mb-2">Team Members</h4>
                              <div className="flex -space-x-2 overflow-hidden">
                                {team.members.map((member) => (
                                  <Avatar key={member.id} className="border-2 border-background inline-block">
                                    <AvatarImage src={member.avatar} alt={member.name} />
                                    <AvatarFallback>{member.name.slice(0, 2)}</AvatarFallback>
                                  </Avatar>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="text-sm font-medium mb-2">Looking for</h4>
                              <div className="flex flex-wrap gap-2">
                                {team.openPositions.map((position, i) => (
                                  <Badge key={i} variant="secondary" className="bg-secondary/50">
                                    {position}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="text-sm font-medium mb-2">Requirements</h4>
                              <p className="text-sm text-muted-foreground">{team.lookingFor}</p>
                            </div>
                          </CardContent>
                          <CardFooter className="border-t pt-4 flex justify-between">
                            <Button variant="outline" size="sm" className="gap-1">
                              <MessageSquare className="h-4 w-4" />
                              Message
                            </Button>
                            <Button size="sm" className="gap-1">
                              Request to Join
                            </Button>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No teams found</h3>
                    <p className="text-muted-foreground">
                      Try adjusting your search criteria or create a new team.
                    </p>
                    <Button asChild className="mt-4">
                      <Link to="/register">Create a Team</Link>
                    </Button>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="individuals">
                {filteredIndividuals.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredIndividuals.map((individual, index) => (
                      <motion.div
                        key={individual.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                      >
                        <Card className="h-full hover:shadow-md transition-shadow duration-300 border border-border/50">
                          <CardHeader className="pb-2">
                            <div className="flex items-center gap-4">
                              <Avatar className="h-14 w-14 border-2 border-primary/10">
                                <AvatarImage src={individual.avatar} alt={individual.name} />
                                <AvatarFallback>{individual.name.slice(0, 2)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <CardTitle className="text-lg">{individual.name}</CardTitle>
                                <CardDescription className="mt-0.5">
                                  {individual.experience}
                                </CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div>
                              <h4 className="text-sm font-medium mb-2">Skills</h4>
                              <div className="flex flex-wrap gap-2">
                                {individual.skills.map((skill, i) => (
                                  <Badge key={i} variant="secondary" className="bg-secondary/50">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="text-sm font-medium mb-1">Interests</h4>
                              <p className="text-sm text-muted-foreground">{individual.interests}</p>
                            </div>
                            
                            <div>
                              <h4 className="text-sm font-medium mb-1">About</h4>
                              <p className="text-sm text-muted-foreground">{individual.bio}</p>
                            </div>
                            
                            <div>
                              <h4 className="text-sm font-medium mb-1">Looking For</h4>
                              <p className="text-sm text-muted-foreground">{individual.lookingFor}</p>
                            </div>
                          </CardContent>
                          <CardFooter className="border-t pt-4">
                            <div className="w-full grid grid-cols-2 gap-3">
                              <Button variant="outline" size="sm" className="w-full gap-1">
                                <Mail className="h-4 w-4" />
                                Contact
                              </Button>
                              <Button size="sm" className="w-full gap-1">
                                Invite to Team
                              </Button>
                            </div>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No individuals found</h3>
                    <p className="text-muted-foreground">
                      Try adjusting your search criteria or check back later.
                    </p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        <Footer />
      </div>
    </AnimatedTransition>
  );
};

export default Teams;
