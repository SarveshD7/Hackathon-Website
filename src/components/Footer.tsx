import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Github, Mail, ExternalLink, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-muted/80 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 space-y-5">
            <h3 className="text-2xl font-heading font-bold">SPIT<span className="gradient-text font-extrabold">Hackathons</span></h3>
            <p className="text-muted-foreground font-sans">
              A premier platform for hackathons at Sardar Patel Institute of Technology, fostering innovation and collaboration.
            </p>

            {/* Newsletter */}
            <div className="pt-4">
              <h4 className="text-base font-heading font-semibold mb-3">Subscribe to our newsletter</h4>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="rounded-full bg-white/5 border-white/10 focus:border-primary font-sans"
                />
                <Button className="rounded-full gradient-bg border-0 shadow-md px-4 font-heading font-medium">
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Social links */}
            <div className="flex space-x-4 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300">
                <Facebook size={18} className="text-foreground/80 hover:text-primary transition-colors" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300">
                <Twitter size={18} className="text-foreground/80 hover:text-primary transition-colors" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300">
                <Instagram size={18} className="text-foreground/80 hover:text-primary transition-colors" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300">
                <Linkedin size={18} className="text-foreground/80 hover:text-primary transition-colors" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300">
                <Youtube size={18} className="text-foreground/80 hover:text-primary transition-colors" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-heading font-semibold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3.5 font-sans">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/events" className="text-muted-foreground hover:text-primary transition-colors">Events</Link>
              </li>
              <li>
                <Link to="/teams" className="text-muted-foreground hover:text-primary transition-colors">Teams</Link>
              </li>
              <li>
                <Link to="/submit" className="text-muted-foreground hover:text-primary transition-colors">Submit Project</Link>
              </li>
              <li>
                <Link to="/resources" className="text-muted-foreground hover:text-primary transition-colors">Resources</Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-heading font-semibold text-lg mb-5">Resources</h4>
            <ul className="space-y-3.5 font-sans">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5">
                  Guidelines <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5">
                  FAQs <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5">
                  Code of Conduct <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5">
                  Privacy Policy <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5">
                  Terms & Conditions <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-heading font-semibold text-lg mb-5">Contact Us</h4>
            <ul className="space-y-4 font-sans">
              <li className="flex items-start gap-2.5">
                <Mail size={18} className="mt-0.5 text-primary" />
                <span className="text-muted-foreground hover:text-foreground transition-colors">
                  hackathons@spit.ac.in
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={18} className="mt-0.5 text-primary" />
                <span className="text-muted-foreground hover:text-foreground transition-colors">
                  +91 22 2623 7454
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={18} className="mt-0.5 text-primary" />
                <span className="text-muted-foreground hover:text-foreground transition-colors">
                  Sardar Patel Institute of Technology,
                  <br />Bhavans Campus, Munshi Nagar,
                  <br />Andheri (West), Mumbai - 400058
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <Button asChild className="w-full rounded-full gradient-bg border-0 shadow-md font-heading font-medium">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left font-sans">
            © {new Date().getFullYear()} SPIT Hackathons. All rights reserved.
          </p>
          <div className="flex items-center gap-2 font-sans">
            <span className="text-sm text-muted-foreground">Powered by</span>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
