import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Send, User, Mail } from "lucide-react";

export const SignupSection = ({ onRegister }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      toast.error("Please fill in both fields.");
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);

    // Simulate a brief processing delay
    setTimeout(() => {
      onRegister({
        name: name.trim(),
        email: email.trim(),
        timestamp: new Date().toLocaleString(),
      });

      toast.success(`Welcome, ${name.trim()}! You're registered.`);
      setName("");
      setEmail("");
      setSubmitting(false);
    }, 400);
  };

  return (
    <section id="signup" className="py-24 lg:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-body font-medium text-primary tracking-wide uppercase mb-3">
              Reserve Your Spot
            </p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground leading-tight">
              Ready to Start Cooking?
            </h2>
            <p className="mt-4 text-base md:text-lg font-body text-muted-foreground leading-relaxed">
              Leave your name and email and we will reach out with class details,
              schedules, and exclusive early-bird offers. No spam, ever.
            </p>

            {/* Image */}
            <div className="mt-8 rounded-xl overflow-hidden shadow-card-custom">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80&auto=format&fit=crop"
                alt="People cooking together"
                className="w-full h-56 lg:h-64 object-cover"
              />
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="border-border/60 shadow-elevated-custom bg-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                  Sign Up for a Class
                </h3>
                <p className="text-sm font-body text-muted-foreground mb-8">
                  Enter your details and we will get you started.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="font-body text-sm font-medium text-foreground"
                    >
                      Full Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="e.g. Julia Child"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="pl-10 h-12 bg-background font-body focus-visible:ring-primary/40"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="font-body text-sm font-medium text-foreground"
                    >
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="julia@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 h-12 bg-background font-body focus-visible:ring-primary/40"
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    variant="warm"
                    size="lg"
                    className="w-full font-body"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Registering...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Register Now
                      </span>
                    )}
                  </Button>
                </form>

                <p className="mt-5 text-xs font-body text-muted-foreground text-center">
                  By registering you agree to our Terms of Service. We respect your privacy.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
