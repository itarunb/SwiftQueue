import { useState, useRef } from "react";
import "@/App.css";
import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { ClassesSection } from "@/components/landing/ClassesSection";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { SignupSection } from "@/components/landing/SignupSection";
import { RegisteredList } from "@/components/landing/RegisteredList";
import { Footer } from "@/components/landing/Footer";
import { Toaster } from "@/components/ui/sonner";

function App() {
  const [registrations, setRegistrations] = useState([]);
  const registeredRef = useRef(null);

  const handleRegister = (entry) => {
    setRegistrations((prev) => [entry, ...prev]);
    // Smooth scroll to the registered list
    setTimeout(() => {
      registeredRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ClassesSection />
        <HowItWorks />
        <SignupSection onRegister={handleRegister} />
        <div ref={registeredRef}>
          <RegisteredList registrations={registrations} />
        </div>
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
