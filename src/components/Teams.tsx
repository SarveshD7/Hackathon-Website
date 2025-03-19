
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { SlideTransition } from "@/components/AnimatedTransition";
import { cn } from "@/lib/utils";
import { forwardRef, useState } from "react";
// Replace External with ExternalLink from lucide-react
import { User, Users, UserPlus, ExternalLink } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  title: string;
  avatarUrl: string;
  githubUrl: string;
  linkedinUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "John Doe",
    title: "Software Engineer",
    avatarUrl: "https://avatars.githubusercontent.com/u/8440983?v=4",
    githubUrl: "https://github.com/shadcn",
    linkedinUrl: "https://linkedin.com/in/shadcn",
  },
  {
    id: "2",
    name: "Jane Smith",
    title: "UI/UX Designer",
    avatarUrl: "https://avatars.githubusercontent.com/u/1391434?v=4",
    githubUrl: "https://github.com/leerob",
    linkedinUrl: "https://linkedin.com/in/leerob",
  },
  {
    id: "3",
    name: "Alice Johnson",
    title: "Data Scientist",
    avatarUrl: "https://avatars.githubusercontent.com/u/6043416?v=4",
    githubUrl: "https://github.com/rauchg",
    linkedinUrl: "https://linkedin.com/in/rauchg",
  },
  {
    id: "4",
    name: "Bob Williams",
    title: "Project Manager",
    avatarUrl: "https://avatars.githubusercontent.com/u/139885?v=4",
    githubUrl: "https://github.com/jaredpalmer",
    linkedinUrl: "https://linkedin.com/in/jaredpalmer",
  },
  {
    id: "5",
    name: "Charlie Brown",
    title: "Frontend Developer",
    avatarUrl: "https://avatars.githubusercontent.com/u/4060187?v=4",
    githubUrl: "https://github.com/pacocoursey",
    linkedinUrl: "https://linkedin.com/in/pacocoursey",
  },
  {
    id: "6",
    name: "Diana Miller",
    title: "Backend Developer",
    avatarUrl: "https://avatars.githubusercontent.com/u/14985020?v=4",
    githubUrl: "https://github.com/ztomczak",
    linkedinUrl: "https://linkedin.com/in/ztomczak",
  },
];

const Teams = () => {
  const [open, setOpen] = useState(false);
  return (
    <SlideTransition>
      <div className="container pt-32 pb-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our <span className="text-primary">Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a group of passionate individuals dedicated to making a difference in the world through technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <Card key={member.id} className="card-hover">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{member.name}</CardTitle>
                  <Avatar>
                    <AvatarImage src={member.avatarUrl} alt={member.name} />
                    <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{member.title}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" size="sm" asChild>
                  <a href={member.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    GitHub
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    LinkedIn
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="mx-auto mt-8 w-fit">
              <UserPlus className="w-4 h-4 mr-2" />
              Join Our Team
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Join Our Team</DialogTitle>
              <DialogDescription>
                We are always looking for talented individuals to join our team. If you are passionate about technology and
                making a difference, we would love to hear from you.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value="John Doe" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input id="email" value="john.doe@example.com" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Apply</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </SlideTransition>
  );
};

export default Teams;
