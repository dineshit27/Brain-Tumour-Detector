import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Heart, Shield, Award, Users, Microscope } from "lucide-react";
import medicalTeamImage from "@/assets/medical-team.jpg";

const About = () => {
  const mission = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To democratize access to advanced brain tumor detection technology, enabling early diagnosis and better patient outcomes worldwide."
    },
    {
      icon: Heart,
      title: "Our Vision",
      description: "A world where brain tumors are detected early, treated effectively, and where patients have the best possible chance of recovery."
    },
    {
      icon: Shield,
      title: "Our Values",
      description: "Integrity, innovation, and patient-first approach guide everything we do. We're committed to the highest standards of medical AI."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Medical Officer",
      expertise: "Neurosurgery & AI Medical Applications",
      bio: "15+ years in neurosurgery with expertise in brain tumor treatment and AI integration in medical diagnostics."
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Lead AI Scientist",
      expertise: "Machine Learning & Medical Imaging",
      bio: "PhD in Computer Science with specialized focus on medical image analysis and deep learning algorithms."
    },
    {
      name: "Dr. Emily Johnson",
      role: "Clinical Research Director",
      expertise: "Radiology & Clinical Validation",
      bio: "Board-certified radiologist with extensive experience in brain imaging and clinical trial management."
    },
    {
      name: "Prof. David Kim",
      role: "Scientific Advisor",
      expertise: "Oncology & Research",
      bio: "Renowned oncologist and researcher with 20+ years in brain cancer research and treatment protocols."
    }
  ];

  const achievements = [
    { icon: Award, title: "FDA Breakthrough Device", description: "Recognized for innovative AI diagnostic technology" },
    { icon: Users, title: "50,000+ Scans Analyzed", description: "Trusted by healthcare professionals worldwide" },
    { icon: Microscope, title: "95% Accuracy Rate", description: "Validated through extensive clinical trials" },
    { icon: Shield, title: "HIPAA Compliant", description: "Highest standards of patient data protection" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-medical-dark mb-6">
              Revolutionizing Brain Tumor Detection
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We're a team of world-class medical professionals, AI researchers, and healthcare innovators 
              dedicated to advancing early detection of brain tumors through cutting-edge artificial intelligence.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {mission.map((item, index) => (
              <Card key={index} className="p-8 bg-card border-0 shadow-card hover:shadow-elevated transition-all duration-300">
                <div className="space-y-4">
                  <div className="p-3 bg-primary/10 rounded-xl w-fit">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-medical-dark">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-medical-dark">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2020 by a team of neurosurgeons and AI researchers, Brain Tumour Detector emerged 
                  from a shared vision to tackle one of medicine's most challenging diagnostic problems.
                </p>
                <p>
                  After witnessing firsthand how early detection dramatically improves patient outcomes, 
                  our founders combined their expertise in neurosurgery, radiology, and artificial intelligence 
                  to create a platform that could democratize access to advanced diagnostic capabilities.
                </p>
                <p>
                  Today, our platform has analyzed over 50,000 brain scans, helping healthcare professionals 
                  worldwide make faster, more accurate diagnoses. We continue to push the boundaries of 
                  what's possible in medical AI while maintaining the highest standards of safety and reliability.
                </p>
              </div>
              <Button asChild className="bg-gradient-primary hover:shadow-medical">
                <Link to="/try-now">Experience Our Technology</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={medicalTeamImage} 
                alt="Medical Research Team" 
                className="rounded-2xl shadow-elevated"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-medical-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-medical-dark mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our multidisciplinary team brings together decades of experience in neurosurgery, 
              radiology, AI research, and clinical medicine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-6 bg-card border-0 shadow-card hover:shadow-elevated transition-all duration-300 text-center">
                <div className="space-y-4">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-medical-dark mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-3">{member.expertise}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-medical-dark mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Recognition and milestones that validate our commitment to excellence in medical AI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-elevated transition-all duration-300 text-center">
                <div className="space-y-4">
                  <div className="p-3 bg-primary/10 rounded-xl w-fit mx-auto">
                    <achievement.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-medical-dark">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {achievement.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Join Us in Advancing Medical AI
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Whether you're a healthcare professional, researcher, or someone who believes in the power 
            of technology to save lives, we'd love to connect with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 hover:shadow-elevated"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button 
              asChild 
              variant="hero" 
              size="lg"
              className="text-white"
            >
              <Link to="/try-now">Try Our Platform</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;