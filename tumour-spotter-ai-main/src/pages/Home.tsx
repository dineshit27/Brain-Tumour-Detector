import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Brain, Shield, Zap, Users, ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-brain-scan.jpg";

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Analysis",
      description: "Cutting-edge machine learning algorithms analyze MRI scans with medical-grade precision."
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Get comprehensive analysis results within seconds of uploading your scan."
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your medical data is protected with enterprise-level security and privacy."
    },
    {
      icon: Users,
      title: "Expert Validated",
      description: "Our AI models are trained and validated by leading neurosurgeons and radiologists."
    }
  ];

  const stats = [
    { number: "95%", label: "Accuracy Rate" },
    { number: "50K+", label: "Scans Analyzed" },
    { number: "24/7", label: "Available" },
    { number: "2s", label: "Average Processing" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Early Detection
                  <span className="block text-primary-glow">Saves Lives</span>
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  Advanced AI-powered brain tumor detection from MRI scans. 
                  Get accurate, fast results to support your healthcare decisions.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 hover:shadow-elevated text-lg px-8"
                >
                  <Link to="/try-now">
                    Try Detection Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="hero" 
                  size="lg"
                  className="text-lg px-8"
                >
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center space-x-6 text-sm text-white/80">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>FDA Validated</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>ISO Certified</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={heroImage} 
                alt="Brain MRI Analysis" 
                className="rounded-2xl shadow-elevated"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Detection Platform?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our advanced AI technology combines cutting-edge machine learning with medical expertise 
              to provide accurate, reliable brain tumor detection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-elevated transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="p-3 bg-primary/10 rounded-xl w-fit group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Upload your MRI scan and get instant analysis results. Join thousands of healthcare 
            professionals who trust our platform.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 hover:shadow-elevated text-lg px-12"
          >
            <Link to="/try-now">
              Start Analysis Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;