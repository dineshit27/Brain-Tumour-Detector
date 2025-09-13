import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare,
  HeadphonesIcon,
  Building
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
    inquiryType: "general"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours."
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      organization: "",
      subject: "",
      message: "",
      inquiryType: "general"
    });

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Support",
      details: "support@braintumordetector.com",
      description: "Get technical support and general inquiries"
    },
    {
      icon: Phone,
      title: "Phone Support",
      details: "+1 (555) 123-4567",
      description: "Available 24/7 for urgent medical consultations"
    },
    {
      icon: MapPin,
      title: "Headquarters",
      details: "123 Medical Innovation Drive, San Francisco, CA 94158",
      description: "Visit our research and development center"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 8AM-6PM PST",
      description: "Extended hours for medical emergencies"
    }
  ];

  const inquiryTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "technical", label: "Technical Support" },
    { value: "medical", label: "Medical Questions" },
    { value: "partnership", label: "Partnership Opportunities" },
    { value: "research", label: "Research Collaboration" },
    { value: "enterprise", label: "Enterprise Solutions" }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-24 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-medical-dark mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about our AI brain tumor detection platform? Our team of medical 
            professionals and technical experts is here to help.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-gradient-card border-0 shadow-card">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-medical-dark mb-2 flex items-center">
                  <MessageSquare className="mr-3 h-6 w-6 text-primary" />
                  Send us a Message
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll respond within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Dr. John Smith"
                      className="border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="john.smith@hospital.com"
                      className="border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organization">Organization</Label>
                  <Input
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    placeholder="Metropolitan Medical Center"
                    className="border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiryType">Inquiry Type *</Label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    {inquiryTypes.map(type => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Integration with existing PACS system"
                    className="border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Please provide details about your inquiry, including any specific requirements or questions..."
                    className="border-border focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:shadow-medical text-lg py-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6 bg-gradient-card border-0 shadow-card">
              <h3 className="text-xl font-semibold text-medical-dark mb-6 flex items-center">
                <HeadphonesIcon className="mr-3 h-5 w-5 text-primary" />
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-medical-dark">{info.title}</h4>
                      <p className="text-sm text-primary font-medium">{info.details}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-medical-light border-0">
              <h3 className="text-xl font-semibold text-medical-dark mb-4 flex items-center">
                <Building className="mr-3 h-5 w-5 text-primary" />
                Enterprise Solutions
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Looking to integrate our AI platform into your healthcare system? 
                Our enterprise team provides custom solutions, training, and ongoing support.
              </p>
              <Button variant="outline" className="w-full">
                Learn About Enterprise
              </Button>
            </Card>

            <Card className="p-6 bg-primary text-white border-0">
              <h3 className="text-xl font-semibold mb-4">Emergency Support</h3>
              <p className="text-sm text-white/90 mb-4">
                For urgent medical consultations or critical technical issues, 
                our 24/7 emergency support line is available.
              </p>
              <div className="space-y-2">
                <p className="font-semibold">Emergency Line: +1 (555) 911-HELP</p>
                <p className="text-sm text-white/80">Available 24/7/365</p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-medical-dark mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Quick answers to common questions about our platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "How accurate is the AI detection?",
                answer: "Our platform achieves 95% accuracy rate, validated through extensive clinical trials with leading medical institutions."
              },
              {
                question: "Is my patient data secure?",
                answer: "Yes, we're HIPAA compliant with enterprise-grade encryption and never store patient data longer than necessary for analysis."
              },
              {
                question: "Can this replace radiologist review?",
                answer: "Our tool is designed to assist, not replace medical professionals. It provides additional insights to support clinical decision-making."
              },
              {
                question: "What file formats are supported?",
                answer: "We support DICOM, JPEG, PNG, and other standard medical imaging formats commonly used in radiology departments."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6 bg-card border-border">
                <h4 className="font-semibold text-medical-dark mb-3">{faq.question}</h4>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;