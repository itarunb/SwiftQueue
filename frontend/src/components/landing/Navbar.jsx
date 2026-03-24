import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChefHat, Menu, X } from "lucide-react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
              <ChefHat className="w-5 h-5 text-primary-foreground" />
            </div>
            <span
              className={`font-display text-xl font-semibold transition-colors duration-300 ${
                scrolled ? "text-foreground" : "text-card"
              }`}
            >
              Culinary Canvas
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "Classes", id: "classes" },
              { label: "How It Works", id: "how-it-works" },
              { label: "Register", id: "signup" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`font-body text-sm font-medium transition-colors duration-200 hover:text-primary ${
                  scrolled ? "text-foreground" : "text-card/90"
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="warm"
              size="sm"
              onClick={() => scrollTo("signup")}
            >
              Join a Class
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
              scrolled ? "text-foreground" : "text-card"
            }`}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-card/98 backdrop-blur-lg border-b border-border animate-fade-in">
          <div className="px-6 py-4 space-y-3">
            {[
              { label: "Classes", id: "classes" },
              { label: "How It Works", id: "how-it-works" },
              { label: "Register", id: "signup" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left font-body text-sm font-medium text-foreground py-2 hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="warm"
              className="w-full mt-2"
              onClick={() => scrollTo("signup")}
            >
              Join a Class
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
