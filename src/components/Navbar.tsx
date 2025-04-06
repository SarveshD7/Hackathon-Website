import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Events", path: "/events" },
  { name: "Teams", path: "/teams" },
  { name: "Submit", path: "/submit" },
  { name: "Resources", path: "/resources" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled 
          ? "py-3 glass shadow-md" 
          : isHomePage 
            ? "py-5 bg-transparent" 
            : "py-5 bg-background shadow-sm border-b border-border/40"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <motion.div
            className="text-2xl font-heading font-bold tracking-tight flex items-center"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <span className={cn(
              isHomePage ? "text-white text-shadow-sm" : "text-foreground",
              scrolled && isHomePage ? "text-foreground" : ""
            )}>SPIT</span>
            <span className="gradient-text font-extrabold">Hackathons</span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          <ul className="flex items-center gap-7">
            {navItems.map((item, index) => (
              <motion.li
                key={item.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <Link
                  to={item.path}
                  className={cn(
                    "text-base font-medium relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-primary before:scale-x-0 before:origin-right before:transition-transform before:duration-300 hover:before:scale-x-100 hover:before:origin-left hover:text-primary transition-colors",
                    location.pathname === item.path
                      ? "text-primary font-semibold before:scale-x-100"
                      : scrolled 
                        ? "text-foreground" 
                        : isHomePage 
                          ? "text-white text-shadow-sm" 
                          : "text-foreground"
                  )}
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button asChild className="rounded-full px-6 gradient-bg shadow-md hover:shadow-primary/20 border-0 font-heading font-medium">
              <Link to="/register">Register</Link>
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className={`md:hidden ${
            scrolled 
              ? "text-foreground" 
              : isHomePage 
                ? "text-white" 
                : "text-foreground"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          className="absolute top-full left-0 w-full md:hidden card-gradient-dark shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-6 py-6">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={cn(
                      "block py-2.5 text-lg font-medium transition-colors",
                      location.pathname === item.path
                        ? "gradient-text font-heading font-semibold"
                        : "text-white text-shadow-sm"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="mt-4">
                <Button asChild className="w-full rounded-full gradient-bg border-0 py-6 font-heading font-medium">
                  <Link to="/register" onClick={() => setIsOpen(false)}>
                    Register
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
