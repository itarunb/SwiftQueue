import { Separator } from "@/components/ui/separator";
import { ChefHat, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <ChefHat className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display text-lg font-semibold text-foreground">
                Culinary Canvas
              </span>
            </div>
            <p className="text-sm font-body text-muted-foreground leading-relaxed max-w-xs">
              Hands-on cooking classes in a warm, welcoming kitchen. Learn from
              the best, cook with confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-body font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {["Classes", "How It Works", "Register"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const id = link.toLowerCase().replace(/ /g, "-");
                      const map = { classes: "classes", "how-it-works": "how-it-works", register: "signup" };
                      const el = document.getElementById(map[id] || id);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-sm font-body text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-body font-semibold text-foreground mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm font-body text-muted-foreground">
              <li>hello@culinarycanvas.com</li>
              <li>+1 (555) 234-5678</li>
              <li>123 Kitchen Lane, San Francisco, CA</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs font-body text-muted-foreground">
            &copy; {currentYear} Culinary Canvas. All rights reserved.
          </p>
          <p className="text-xs font-body text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-primary" /> for food lovers
          </p>
        </div>
      </div>
    </footer>
  );
};
