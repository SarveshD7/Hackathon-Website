
import { useState } from "react";
import { AnimatedTransition } from "@/components/AnimatedTransition";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { motion } from "framer-motion";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const [step, setStep] = useState(1);
  const [tabValue, setTabValue] = useState("individual");
  const [teamType, setTeamType] = useState("create");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration submitted",
      description: "We've received your registration and will contact you soon.",
    });
  };

  return (
    <AnimatedTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <div className="pt-32 pb-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Register for <span className="text-primary">SPIT Hackathon 2023</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Complete the registration form below to secure your spot in our flagship hackathon.
              </p>
            </motion.div>
            
            <Card className="border-0 shadow-lg bg-card">
              <CardHeader>
                <CardTitle>Registration Form</CardTitle>
                <CardDescription>
                  Fill in your details to register for the hackathon.
                </CardDescription>
              </CardHeader>
              
              <Tabs value={tabValue} onValueChange={setTabValue} className="w-full">
                <TabsList className="w-full grid grid-cols-2">
                  <TabsTrigger value="individual">Individual Registration</TabsTrigger>
                  <TabsTrigger value="team">Team Registration</TabsTrigger>
                </TabsList>
                
                <TabsContent value="individual">
                  <div className="p-6 pt-4">
                    <form onSubmit={handleSubmit}>
                      <div className="space-y-6">
                        {step === 1 && (
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-4"
                          >
                            <h3 className="text-lg font-semibold">Personal Information</h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="firstName">First Name</Label>
                                <Input id="firstName" placeholder="Enter your first name" required />
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input id="lastName" placeholder="Enter your last name" required />
                              </div>
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="email">Email Address</Label>
                              <Input id="email" type="email" placeholder="you@example.com" required />
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="phone">Phone Number</Label>
                              <Input id="phone" placeholder="+91 98765 43210" required />
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="institution">Institution/Organization</Label>
                              <Input id="institution" placeholder="Enter your institution or organization" required />
                            </div>
                            
                            <div className="pt-2">
                              <Button type="button" className="w-full" onClick={() => setStep(2)}>
                                Next Step
                              </Button>
                            </div>
                          </motion.div>
                        )}
                        
                        {step === 2 && (
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-4"
                          >
                            <h3 className="text-lg font-semibold">Skills & Experience</h3>
                            
                            <div className="space-y-2">
                              <Label htmlFor="skills">Your Skills</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your primary skill" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="frontend">Frontend Development</SelectItem>
                                  <SelectItem value="backend">Backend Development</SelectItem>
                                  <SelectItem value="fullstack">Full Stack Development</SelectItem>
                                  <SelectItem value="mobile">Mobile Development</SelectItem>
                                  <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                                  <SelectItem value="data-science">Data Science</SelectItem>
                                  <SelectItem value="ai-ml">AI/ML</SelectItem>
                                  <SelectItem value="devops">DevOps</SelectItem>
                                  <SelectItem value="blockchain">Blockchain</SelectItem>
                                  <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="experience">Experience Level</Label>
                              <RadioGroup defaultValue="intermediate">
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="beginner" id="beginner" />
                                  <Label htmlFor="beginner">Beginner</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="intermediate" id="intermediate" />
                                  <Label htmlFor="intermediate">Intermediate</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="expert" id="expert" />
                                  <Label htmlFor="expert">Expert</Label>
                                </div>
                              </RadioGroup>
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="portfolio">Portfolio URL (Optional)</Label>
                              <Input id="portfolio" placeholder="https://your-portfolio.com" />
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="github">GitHub URL (Optional)</Label>
                              <Input id="github" placeholder="https://github.com/yourusername" />
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="bio">Short Bio</Label>
                              <Textarea
                                id="bio"
                                placeholder="Tell us a bit about yourself and your interests"
                                className="min-h-[100px]"
                              />
                            </div>
                            
                            <div className="flex justify-between pt-2 gap-4">
                              <Button type="button" variant="outline" onClick={() => setStep(1)}>
                                Previous Step
                              </Button>
                              <Button type="button" onClick={() => setStep(3)}>
                                Next Step
                              </Button>
                            </div>
                          </motion.div>
                        )}
                        
                        {step === 3 && (
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-4"
                          >
                            <h3 className="text-lg font-semibold">Hackathon Preferences</h3>
                            
                            <div className="space-y-2">
                              <Label htmlFor="tracks">Preferred Tracks</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a track" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="ai">Artificial Intelligence</SelectItem>
                                  <SelectItem value="blockchain">Blockchain</SelectItem>
                                  <SelectItem value="iot">Internet of Things</SelectItem>
                                  <SelectItem value="web3">Web 3.0</SelectItem>
                                  <SelectItem value="gaming">Game Development</SelectItem>
                                  <SelectItem value="fintech">FinTech</SelectItem>
                                  <SelectItem value="healthcare">Healthcare</SelectItem>
                                  <SelectItem value="sustainability">Sustainability</SelectItem>
                                  <SelectItem value="edtech">EdTech</SelectItem>
                                  <SelectItem value="open">Open Innovation</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            
                            <div className="space-y-4">
                              <Label>Team Preference</Label>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="border p-4 rounded-md flex items-start space-x-3">
                                  <RadioGroup defaultValue="find-team">
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem value="find-team" id="find-team" />
                                      <Label htmlFor="find-team">
                                        <div>
                                          <p className="font-medium">Find a Team</p>
                                          <p className="text-sm text-muted-foreground">
                                            We'll help match you with other participants
                                          </p>
                                        </div>
                                      </Label>
                                    </div>
                                  </RadioGroup>
                                </div>
                                
                                <div className="border p-4 rounded-md flex items-start space-x-3">
                                  <RadioGroup defaultValue="solo">
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem value="solo" id="solo" />
                                      <Label htmlFor="solo">
                                        <div>
                                          <p className="font-medium">Participate Solo</p>
                                          <p className="text-sm text-muted-foreground">
                                            I prefer to work independently
                                          </p>
                                        </div>
                                      </Label>
                                    </div>
                                  </RadioGroup>
                                </div>
                              </div>
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="dietary">Dietary Restrictions (if any)</Label>
                              <Input id="dietary" placeholder="E.g., Vegetarian, Vegan, Allergies, etc." />
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="tshirt">T-shirt Size</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select size" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="xs">XS</SelectItem>
                                  <SelectItem value="s">S</SelectItem>
                                  <SelectItem value="m">M</SelectItem>
                                  <SelectItem value="l">L</SelectItem>
                                  <SelectItem value="xl">XL</SelectItem>
                                  <SelectItem value="xxl">XXL</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            
                            <div className="flex items-start space-x-3 pt-3">
                              <Checkbox id="terms" />
                              <div>
                                <Label htmlFor="terms" className="text-sm font-normal">
                                  I agree to the{" "}
                                  <a href="#" className="text-primary hover:underline">
                                    Terms and Conditions
                                  </a>{" "}
                                  and{" "}
                                  <a href="#" className="text-primary hover:underline">
                                    Code of Conduct
                                  </a>
                                </Label>
                              </div>
                            </div>
                            
                            <div className="flex justify-between pt-2 gap-4">
                              <Button type="button" variant="outline" onClick={() => setStep(2)}>
                                Previous Step
                              </Button>
                              <Button type="submit">
                                Complete Registration
                              </Button>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </form>
                  </div>
                </TabsContent>
                
                <TabsContent value="team">
                  <div className="p-6 pt-4">
                    <div className="space-y-6">
                      <div className="flex flex-col md:flex-row gap-4">
                        <Button
                          variant={teamType === "create" ? "default" : "outline"}
                          className="flex-1"
                          onClick={() => setTeamType("create")}
                        >
                          Create a New Team
                        </Button>
                        <Button
                          variant={teamType === "join" ? "default" : "outline"}
                          className="flex-1"
                          onClick={() => setTeamType("join")}
                        >
                          Join an Existing Team
                        </Button>
                      </div>
                      
                      <Separator />
                      
                      {teamType === "create" ? (
                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Team Information</h3>
                            
                            <div className="space-y-2">
                              <Label htmlFor="teamName">Team Name</Label>
                              <Input id="teamName" placeholder="Enter your team name" required />
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="teamDescription">Team Description</Label>
                              <Textarea
                                id="teamDescription"
                                placeholder="Describe your team and project idea briefly"
                                className="min-h-[100px]"
                              />
                            </div>
                            
                            <div className="space-y-2">
                              <Label>Team Size</Label>
                              <Select defaultValue="4">
                                <SelectTrigger>
                                  <SelectValue placeholder="Select team size" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="2">2 Members</SelectItem>
                                  <SelectItem value="3">3 Members</SelectItem>
                                  <SelectItem value="4">4 Members</SelectItem>
                                  <SelectItem value="5">5 Members</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Team Leader Information</h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="leaderFirstName">First Name</Label>
                                <Input id="leaderFirstName" placeholder="Enter your first name" required />
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor="leaderLastName">Last Name</Label>
                                <Input id="leaderLastName" placeholder="Enter your last name" required />
                              </div>
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="leaderEmail">Email Address</Label>
                              <Input id="leaderEmail" type="email" placeholder="you@example.com" required />
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="leaderPhone">Phone Number</Label>
                              <Input id="leaderPhone" placeholder="+91 98765 43210" required />
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="leaderInstitution">Institution/Organization</Label>
                              <Input id="leaderInstitution" placeholder="Enter your institution or organization" required />
                            </div>
                          </div>
                          
                          <div className="pt-3">
                            <Button type="submit" className="w-full">
                              Create Team & Continue
                            </Button>
                            <p className="text-sm text-muted-foreground text-center mt-2">
                              You'll be able to invite team members after creating the team.
                            </p>
                          </div>
                        </form>
                      ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Join an Existing Team</h3>
                            
                            <div className="space-y-2">
                              <Label htmlFor="teamCode">Team Code</Label>
                              <Input id="teamCode" placeholder="Enter the team invitation code" required />
                              <p className="text-sm text-muted-foreground mt-1">
                                Ask your team leader for the invitation code.
                              </p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="firstName">First Name</Label>
                                <Input id="firstName" placeholder="Enter your first name" required />
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input id="lastName" placeholder="Enter your last name" required />
                              </div>
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="email">Email Address</Label>
                              <Input id="email" type="email" placeholder="you@example.com" required />
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="phone">Phone Number</Label>
                              <Input id="phone" placeholder="+91 98765 43210" required />
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="institution">Institution/Organization</Label>
                              <Input id="institution" placeholder="Enter your institution or organization" required />
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="skills">Your Skills</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your primary skill" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="frontend">Frontend Development</SelectItem>
                                  <SelectItem value="backend">Backend Development</SelectItem>
                                  <SelectItem value="fullstack">Full Stack Development</SelectItem>
                                  <SelectItem value="mobile">Mobile Development</SelectItem>
                                  <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                                  <SelectItem value="data-science">Data Science</SelectItem>
                                  <SelectItem value="ai-ml">AI/ML</SelectItem>
                                  <SelectItem value="devops">DevOps</SelectItem>
                                  <SelectItem value="blockchain">Blockchain</SelectItem>
                                  <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            
                            <div className="flex items-start space-x-3 pt-3">
                              <Checkbox id="terms" />
                              <div>
                                <Label htmlFor="terms" className="text-sm font-normal">
                                  I agree to the{" "}
                                  <a href="#" className="text-primary hover:underline">
                                    Terms and Conditions
                                  </a>{" "}
                                  and{" "}
                                  <a href="#" className="text-primary hover:underline">
                                    Code of Conduct
                                  </a>
                                </Label>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <Button type="submit" className="w-full">
                              Join Team
                            </Button>
                          </div>
                        </form>
                      )}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              
              <CardFooter className="flex justify-between border-t p-6">
                <div className="text-sm text-muted-foreground">
                  Having trouble? <a href="#" className="text-primary hover:underline">Contact Support</a>
                </div>
                
                {tabValue === "individual" && (
                  <div className="flex items-center gap-1.5">
                    <span className={`w-2.5 h-2.5 rounded-full ${step >= 1 ? "bg-primary" : "bg-muted"}`}></span>
                    <span className={`w-2.5 h-2.5 rounded-full ${step >= 2 ? "bg-primary" : "bg-muted"}`}></span>
                    <span className={`w-2.5 h-2.5 rounded-full ${step >= 3 ? "bg-primary" : "bg-muted"}`}></span>
                  </div>
                )}
              </CardFooter>
            </Card>
          </div>
        </div>
        
        <Footer />
      </div>
    </AnimatedTransition>
  );
};

export default Register;
