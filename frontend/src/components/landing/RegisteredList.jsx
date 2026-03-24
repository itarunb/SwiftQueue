import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { User, Mail, Clock, CheckCircle2 } from "lucide-react";

export const RegisteredList = ({ registrations }) => {
  if (registrations.length === 0) return null;

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge className="bg-success/10 text-success border-success/20 font-body text-xs mb-4">
            <CheckCircle2 className="w-3 h-3 mr-1" />
            Registrations Received
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground leading-tight">
            Welcome Aboard!
          </h2>
          <p className="mt-3 text-sm font-body text-muted-foreground">
            {registrations.length} {registrations.length === 1 ? "person has" : "people have"} registered so far.
          </p>
        </motion.div>

        {/* Registrations */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {registrations.map((reg, idx) => (
              <motion.div
                key={`${reg.email}-${reg.timestamp}`}
                initial={{ opacity: 0, y: 16, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx === 0 ? 0.15 : 0 }}
                layout
              >
                <Card className="border-border/60 bg-card shadow-card-custom hover:shadow-elevated-custom transition-shadow duration-300">
                  <CardContent className="p-5 sm:p-6">
                    <div className="flex items-start gap-4">
                      {/* Avatar */}
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
                        <User className="w-4.5 h-4.5 text-primary" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="text-base font-display font-semibold text-foreground truncate">
                            {reg.name}
                          </h4>
                          {idx === 0 && registrations.length > 1 && (
                            <Badge variant="secondary" className="text-xs font-body">
                              Latest
                            </Badge>
                          )}
                        </div>

                        <div className="flex items-center gap-1.5 mt-1">
                          <Mail className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
                          <span className="text-sm font-body text-muted-foreground truncate">
                            {reg.email}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 mt-1.5">
                          <Clock className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
                          <span className="text-xs font-body text-muted-foreground">
                            Registered {reg.timestamp}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
