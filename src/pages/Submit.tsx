
import { AnimatedTransition } from "@/components/AnimatedTransition";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Check, Copy, File, FileText, Upload, Github, ExternalLink, Link as LinkIcon, X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface FileUploadProps {
  label: string;
  description?: string;
  onChange?: (file: File | null) => void;
  accept?: string;
  multiple?: boolean;
}

function FileUpload({ label, description, onChange, accept, multiple = false }: FileUploadProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [dragging, setDragging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      const filesArray = Array.from(selectedFiles);
      setFiles(filesArray);
      if (onChange) {
        onChange(filesArray[0] || null);
      }
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    
    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles) {
      const filesArray = Array.from(droppedFiles);
      setFiles(filesArray);
      if (onChange) {
        onChange(filesArray[0] || null);
      }
    }
  };

  const removeFile = (index: number) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
    if (onChange && newFiles.length === 0) {
      onChange(null);
    }
  };

  return (
    <div className="space-y-2">
      <Label htmlFor="file-upload">{label}</Label>
      
      <div
        className={cn(
          "border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors",
          dragging ? "border-primary bg-primary/5" : "border-muted",
          files.length > 0 && "bg-muted/5"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <label htmlFor="file-upload" className="cursor-pointer block">
          <div className="space-y-2 py-4">
            <Upload className="h-10 w-10 mx-auto text-muted-foreground" />
            <div className="font-medium">
              <span className="text-primary">Click to upload</span> or drag and drop
            </div>
            {description && <p className="text-sm text-muted-foreground">{description}</p>}
          </div>
          <input
            id="file-upload"
            type="file"
            className="hidden"
            onChange={handleFileChange}
            accept={accept}
            multiple={multiple}
          />
        </label>
      </div>
      
      {files.length > 0 && (
        <ScrollArea className="max-h-32">
          <div className="space-y-2 mt-2">
            {files.map((file, index) => (
              <div key={index} className="flex items-center justify-between gap-2 p-2 rounded-md bg-muted/30">
                <div className="flex items-center gap-2 overflow-hidden">
                  <File className="h-4 w-4 text-primary" />
                  <span className="text-sm truncate">{file.name}</span>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-muted-foreground"
                  onClick={() => removeFile(index)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </ScrollArea>
      )}
    </div>
  );
}

const Submit = () => {
  const [submitType, setSubmitType] = useState<"repository" | "assets" | "demo">("repository");
  const [teamCode, setTeamCode] = useState("");
  const [isValidTeamCode, setIsValidTeamCode] = useState(false);
  const { toast } = useToast();

  const handleTeamCodeCheck = () => {
    // Mock validation - in a real app this would check against a database
    if (teamCode.length > 3) {
      setIsValidTeamCode(true);
      toast({
        title: "Team found",
        description: "Team 'CodeCrafters' has been verified.",
      });
    } else {
      setIsValidTeamCode(false);
      toast({
        title: "Invalid team code",
        description: "Please enter a valid team code.",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Project submitted successfully",
      description: "Your project has been submitted for evaluation. You will receive feedback soon.",
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
                Submit Your <span className="text-primary">Project</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Upload your project files, share your repository, or submit a demo for evaluation.
              </p>
            </motion.div>
            
            <Card className="border-0 shadow-lg bg-card">
              <CardHeader>
                <CardTitle>Project Submission</CardTitle>
                <CardDescription>
                  Complete the form below to submit your project for the hackathon.
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Team Verification */}
                  <div className="space-y-2">
                    <Label htmlFor="team-code">Team Code</Label>
                    <div className="flex gap-2">
                      <Input
                        id="team-code"
                        placeholder="Enter your team code"
                        value={teamCode}
                        onChange={(e) => setTeamCode(e.target.value)}
                      />
                      <Button
                        type="button"
                        onClick={handleTeamCodeCheck}
                        variant="outline"
                      >
                        Verify
                      </Button>
                    </div>
                    {isValidTeamCode && (
                      <div className="flex items-center gap-2 text-sm text-green-600 mt-1">
                        <Check className="h-4 w-4" />
                        <span>Team CodeCrafters verified</span>
                      </div>
                    )}
                  </div>
                  
                  <Separator />
                  
                  {/* Project Information */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold">Project Information</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="project-name">Project Name</Label>
                      <Input id="project-name" placeholder="Enter your project name" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="project-description">Project Description</Label>
                      <Textarea
                        id="project-description"
                        placeholder="Describe your project, including the problem it solves and its key features"
                        className="min-h-[120px]"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="project-category">Category</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select project category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ai">AI/Machine Learning</SelectItem>
                          <SelectItem value="blockchain">Blockchain</SelectItem>
                          <SelectItem value="web">Web Application</SelectItem>
                          <SelectItem value="mobile">Mobile Application</SelectItem>
                          <SelectItem value="iot">IoT</SelectItem>
                          <SelectItem value="game">Game Development</SelectItem>
                          <SelectItem value="ar-vr">AR/VR</SelectItem>
                          <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="technologies">Technologies Used</Label>
                      <Input id="technologies" placeholder="E.g., React, Node.js, MongoDB, etc." required />
                    </div>
                  </div>
                  
                  <Separator />
                  
                  {/* Submission Type */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold">Submission Type</h3>
                    
                    <RadioGroup
                      defaultValue="repository"
                      className="grid grid-cols-1 md:grid-cols-3 gap-4"
                      onValueChange={(value) => setSubmitType(value as "repository" | "assets" | "demo")}
                    >
                      <div className="border rounded-md p-4 cursor-pointer hover:border-primary transition-colors">
                        <RadioGroupItem value="repository" id="repository" className="sr-only" />
                        <Label htmlFor="repository" className="cursor-pointer">
                          <div className="flex flex-col items-center gap-2 text-center">
                            <Github className="h-8 w-8 text-foreground" />
                            <div className="font-medium">Code Repository</div>
                            <p className="text-sm text-muted-foreground">
                              Submit your GitHub, GitLab, or Bitbucket repository link
                            </p>
                          </div>
                        </Label>
                      </div>
                      
                      <div className="border rounded-md p-4 cursor-pointer hover:border-primary transition-colors">
                        <RadioGroupItem value="assets" id="assets" className="sr-only" />
                        <Label htmlFor="assets" className="cursor-pointer">
                          <div className="flex flex-col items-center gap-2 text-center">
                            <Upload className="h-8 w-8 text-foreground" />
                            <div className="font-medium">Project Assets</div>
                            <p className="text-sm text-muted-foreground">
                              Upload your project files, documentation, and presentation
                            </p>
                          </div>
                        </Label>
                      </div>
                      
                      <div className="border rounded-md p-4 cursor-pointer hover:border-primary transition-colors">
                        <RadioGroupItem value="demo" id="demo" className="sr-only" />
                        <Label htmlFor="demo" className="cursor-pointer">
                          <div className="flex flex-col items-center gap-2 text-center">
                            <ExternalLink className="h-8 w-8 text-foreground" />
                            <div className="font-medium">Live Demo</div>
                            <p className="text-sm text-muted-foreground">
                              Provide links to your deployed application or demo video
                            </p>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <Separator />
                  
                  {/* Repository Section */}
                  {submitType === "repository" && (
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold">Repository Information</h3>
                      
                      <div className="space-y-2">
                        <Label htmlFor="repo-url">Repository URL</Label>
                        <div className="flex items-center gap-2">
                          <LinkIcon className="h-4 w-4 text-muted-foreground" />
                          <Input id="repo-url" placeholder="https://github.com/username/repository" required />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="branch">Main Branch</Label>
                        <Input id="branch" placeholder="main" defaultValue="main" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="setup-instructions">Setup Instructions</Label>
                        <Textarea
                          id="setup-instructions"
                          placeholder="Provide instructions on how to set up and run your project locally"
                          className="min-h-[100px]"
                        />
                      </div>
                    </div>
                  )}
                  
                  {/* Assets Section */}
                  {submitType === "assets" && (
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold">Project Assets</h3>
                      
                      <FileUpload
                        label="Project Files (ZIP/RAR)"
                        description="Upload a ZIP or RAR file containing your project (Max: 100MB)"
                        accept=".zip,.rar"
                      />
                      
                      <FileUpload
                        label="Project Documentation"
                        description="Upload your documentation in PDF format (Max: 20MB)"
                        accept=".pdf"
                      />
                      
                      <FileUpload
                        label="Presentation Slides"
                        description="Upload your presentation in PDF or PPTX format (Max: 50MB)"
                        accept=".pdf,.pptx,.ppt"
                      />
                      
                      <FileUpload
                        label="Demo Screenshots"
                        description="Upload images showcasing your project (Max: 5 images, 10MB each)"
                        accept="image/*"
                        multiple
                      />
                    </div>
                  )}
                  
                  {/* Demo Section */}
                  {submitType === "demo" && (
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold">Demo Information</h3>
                      
                      <div className="space-y-2">
                        <Label htmlFor="demo-url">Live Demo URL</Label>
                        <div className="flex items-center gap-2">
                          <ExternalLink className="h-4 w-4 text-muted-foreground" />
                          <Input id="demo-url" placeholder="https://your-demo-url.com" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="video-url">Demo Video URL</Label>
                        <div className="flex items-center gap-2">
                          <ExternalLink className="h-4 w-4 text-muted-foreground" />
                          <Input id="video-url" placeholder="https://youtube.com/watch?v=..." />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="credentials">Test Credentials (if required)</Label>
                        <Textarea
                          id="credentials"
                          placeholder="Username: demo@example.com&#10;Password: demo123"
                          className="min-h-[80px]"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="usage-instructions">Usage Instructions</Label>
                        <Textarea
                          id="usage-instructions"
                          placeholder="Provide instructions on how to use your application"
                          className="min-h-[100px]"
                        />
                      </div>
                    </div>
                  )}
                  
                  <Button type="submit" className="w-full">
                    Submit Project
                  </Button>
                </form>
              </CardContent>
              
              <CardFooter className="flex justify-between border-t p-6">
                <div className="text-sm text-muted-foreground">
                  Need help? <a href="#" className="text-primary hover:underline">Contact the organizers</a>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
        
        <Footer />
      </div>
    </AnimatedTransition>
  );
};

export default Submit;
