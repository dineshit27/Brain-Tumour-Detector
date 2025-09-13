import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Quote, ArrowRight, Users, Award, CheckCircle } from "lucide-react";

const Reviews = () => {
  const testimonials = [
    {
      name: "Dr. Maria Rodriguez",
      role: "Chief of Neurosurgery",
      hospital: "Metropolitan Medical Center",
      rating: 5,
      review: "This AI platform has revolutionized our diagnostic workflow. The accuracy is remarkable, and it's helped us catch early-stage tumors that might have been missed. It's become an essential tool in our practice.",
      verified: true,
      location: "New York, NY"
    },
    {
      name: "Dr. James Chen",
      role: "Radiologist",
      hospital: "St. Mary's Hospital",
      rating: 5,
      review: "As a radiologist reviewing hundreds of scans weekly, this tool has dramatically improved my efficiency while maintaining diagnostic accuracy. The AI insights are consistently reliable.",
      verified: true,
      location: "Los Angeles, CA"
    },
    {
      name: "Dr. Sarah Johnson",
      role: "Neurology Specialist",
      hospital: "University Medical Center",
      rating: 5,
      review: "The speed and precision of this platform are outstanding. It's particularly valuable for urgent cases where time is critical. Our patients receive faster, more accurate diagnoses.",
      verified: true,
      location: "Chicago, IL"
    },
    {
      name: "Dr. Michael Thompson",
      role: "Emergency Medicine",
      hospital: "City General Hospital",
      rating: 5,
      review: "In emergency situations, this tool provides immediate insights that help us make critical decisions quickly. The confidence scores give us valuable guidance for patient care.",
      verified: true,
      location: "Houston, TX"
    },
    {
      name: "Dr. Lisa Park",
      role: "Oncologist",
      hospital: "Cancer Treatment Center",
      rating: 5,
      review: "The detailed analysis and recommendations have enhanced our treatment planning process. It's reassuring to have AI validation of our diagnostic decisions.",
      verified: true,
      location: "Miami, FL"
    },
    {
      name: "Dr. Robert Wilson",
      role: "Chief Medical Officer",
      hospital: "Regional Health System",
      rating: 5,
      review: "We've implemented this across our entire health system. The consistency and reliability have improved patient outcomes and reduced diagnostic variability.",
      verified: true,
      location: "Seattle, WA"
    }
  ];

  const stats = [
    { value: "500+", label: "Healthcare Professionals", icon: Users },
    { value: "50,000+", label: "Scans Analyzed", icon: CheckCircle },
    { value: "4.9/5", label: "Average Rating", icon: Star },
    { value: "95%", label: "Accuracy Rate", icon: Award }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-warning fill-warning' : 'text-muted-foreground'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-medical-dark mb-6">
            Trusted by Healthcare Professionals
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            See what medical professionals are saying about our AI-powered brain tumor detection platform. 
            Join thousands of healthcare providers who trust our technology.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="p-3 bg-primary/10 rounded-xl w-fit mx-auto mb-3">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-medical-dark mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-elevated transition-all duration-300">
                <div className="space-y-4">
                  {/* Quote Icon */}
                  <Quote className="h-8 w-8 text-primary/30" />
                  
                  {/* Rating */}
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  {/* Review Text */}
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.review}"
                  </p>
                  
                  {/* Author Info */}
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-medical-dark">{testimonial.name}</h4>
                        <p className="text-sm text-primary">{testimonial.role}</p>
                      </div>
                      {testimonial.verified && (
                        <CheckCircle className="h-5 w-5 text-success" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{testimonial.hospital}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Average Rating Section */}
      <section className="py-16 bg-medical-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-card rounded-2xl p-12 shadow-card">
            <div className="mb-6">
              <div className="text-6xl font-bold text-primary mb-2">4.9</div>
              <div className="flex justify-center space-x-1 mb-2">
                {renderStars(5)}
              </div>
              <p className="text-muted-foreground">Based on 500+ verified reviews</p>
            </div>
            
            <div className="grid grid-cols-5 gap-2 max-w-md mx-auto mb-8">
              {[5, 4, 3, 2, 1].map((stars) => (
                <div key={stars} className="text-center">
                  <div className="text-sm text-muted-foreground mb-1">{stars}★</div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-warning rounded-full"
                      style={{ width: stars === 5 ? '95%' : stars === 4 ? '5%' : '0%' }}
                    ></div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {stars === 5 ? '95%' : stars === 4 ? '5%' : '0%'}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground mb-6">
              Our platform consistently delivers exceptional results, earning the trust of healthcare 
              professionals worldwide. Join the community of medical experts advancing diagnostic accuracy.
            </p>
            
            <Button asChild className="bg-gradient-primary hover:shadow-medical">
              <Link to="/try-now">
                Experience the Platform
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Experience the platform that's transforming brain tumor detection. 
            Join thousands of healthcare professionals who trust our AI technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 hover:shadow-elevated text-lg px-8"
            >
              <Link to="/try-now">Start Free Trial</Link>
            </Button>
            <Button 
              asChild 
              variant="hero" 
              size="lg"
              className="text-white text-lg px-8"
            >
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;