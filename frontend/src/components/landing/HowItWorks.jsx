import { motion } from "framer-motion";
import { ClipboardList, UtensilsCrossed, Award } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Register Online",
    description:
      "Fill out the quick registration form below with your name and email. Pick your class and we'll save you a spot.",
  },
  {
    step: "02",
    icon: UtensilsCrossed,
    title: "Join the Kitchen",
    description:
      "Show up with an appetite to learn. All ingredients, tools, and aprons are provided — just bring your curiosity.",
  },
  {
    step: "03",
    icon: Award,
    title: "Cook & Celebrate",
    description:
      "Create stunning dishes alongside fellow food lovers. Take home recipes, skills, and memories that last.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 lg:py-32">
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
            Getting Started
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground leading-tight">
            Three Simple Steps
          </h2>
          <p className="mt-4 text-base md:text-lg font-body text-muted-foreground leading-relaxed">
            From registration to celebration — here is how your culinary journey begins.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                variants={itemVariants}
                className="relative text-center"
              >
                {/* Connector line (hidden on mobile, shown between steps) */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-border" />
                )}

                <div className="inline-flex flex-col items-center">
                  {/* Step number + icon */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-primary/8 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-body font-semibold flex items-center justify-center">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
