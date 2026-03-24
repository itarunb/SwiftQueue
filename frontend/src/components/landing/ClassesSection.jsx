import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ChefHat } from "lucide-react";

const classes = [
  {
    title: "Italian Essentials",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80&auto=format&fit=crop",
    level: "Beginner",
    duration: "3 hours",
    schedule: "Saturdays",
    chef: "Chef Marco",
    description:
      "Learn the fundamentals of Italian cuisine — from handmade pasta to classic sauces and rustic breads.",
  },
  {
    title: "Asian Fusion Workshop",
    image:
      "https://images.pexels.com/photos/8511864/pexels-photo-8511864.jpeg?w=600&auto=compress&cs=tinysrgb",
    level: "Intermediate",
    duration: "4 hours",
    schedule: "Sundays",
    chef: "Chef Yuki",
    description:
      "Explore bold flavours from across Asia. Wok techniques, dim sum, and the art of balancing umami.",
  },
  {
    title: "Patisserie Masterclass",
    image:
      "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=600&q=80&auto=format&fit=crop",
    level: "Advanced",
    duration: "5 hours",
    schedule: "Fridays",
    chef: "Chef Elise",
    description:
      "Elevate your baking with French pastry techniques — croissants, tarts, soufflés, and plated desserts.",
  },
];

const levelColor = {
  Beginner: "bg-success/10 text-success border-success/20",
  Intermediate: "bg-primary/10 text-primary border-primary/20",
  Advanced: "bg-accent/10 text-accent border-accent/20",
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export const ClassesSection = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="classes" className="py-24 lg:py-32 bg-secondary/50">
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
            Our Classes
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground leading-tight">
            Find Your Perfect Class
          </h2>
          <p className="mt-4 text-base md:text-lg font-body text-muted-foreground leading-relaxed">
            From rustic Italian to delicate French pastry — we have a class for
            every palate and skill level.
          </p>
        </motion.div>

        {/* Class Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {classes.map((cls) => (
            <motion.div key={cls.title} variants={itemVariants}>
              <Card className="group h-full overflow-hidden border-border/60 bg-card flex flex-col shadow-card-custom hover:shadow-elevated-custom transition-shadow duration-300">
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={cls.image}
                    alt={cls.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge
                      className={`${levelColor[cls.level]} font-body text-xs border`}
                    >
                      {cls.level}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                    {cls.title}
                  </h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed mb-5">
                    {cls.description}
                  </p>

                  {/* Meta */}
                  <div className="mt-auto space-y-2.5">
                    <div className="flex items-center gap-5 text-sm font-body text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {cls.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {cls.schedule}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm font-body text-muted-foreground">
                      <ChefHat className="w-3.5 h-3.5" />
                      {cls.chef}
                    </div>
                    <Button
                      variant="warm"
                      className="w-full mt-3 font-body"
                      onClick={() => scrollTo("signup")}
                    >
                      Enroll Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
