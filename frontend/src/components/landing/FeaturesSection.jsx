import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Flame, Leaf, Users, Clock } from "lucide-react";

const features = [
  {
    icon: Flame,
    title: "Live Fire Cooking",
    description:
      "Master heat control and flame techniques with professional-grade equipment and guided instruction.",
  },
  {
    icon: Leaf,
    title: "Farm-to-Table Focus",
    description:
      "Sourced locally, cooked thoughtfully. Learn to prepare seasonal dishes with the freshest ingredients.",
  },
  {
    icon: Users,
    title: "Small Group Sessions",
    description:
      "Intimate classes of 8-12 students ensure personalized attention from our expert chef instructors.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description:
      "Morning, evening, and weekend sessions available. Find a class that fits your lifestyle.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-body font-medium text-primary tracking-wide uppercase mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground leading-tight">
            A Kitchen Built for Learning
          </h2>
          <p className="mt-4 text-base md:text-lg font-body text-muted-foreground leading-relaxed">
            Every detail of our program is designed to build your confidence and
            skills in the kitchen.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.title} variants={itemVariants}>
                <Card className="group h-full border-border/60 bg-card hover:border-primary/30 transition-colors duration-300 shadow-card-custom hover:shadow-elevated-custom">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm font-body text-muted-foreground leading-relaxed mt-auto">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
