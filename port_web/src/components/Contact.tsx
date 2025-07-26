
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Home } from "lucide-react";
import { IconBrandGithub, IconBrandX, IconBrandLinkedin, IconHome, IconMail } from "@tabler/icons-react";
import { toast } from "sonner";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { FloatingDock } from "@/components/ui/floating-dock";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const words = [
    {
      text: "Let's",
      className: "text-white",
    },
    {
      text: "Connect",
      className: "text-white",
    },
    {
      text: "&",
      className: "text-white",
    },
    {
      text: "Build",
      className: "text-white",
    },
    {
      text: "Something",
      className: "text-white",
    },
    {
      text: "Amazing",
      className: "text-white",
    },
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "hello@example.com",
      href: "mailto:hello@example.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone", 
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      name: "GitHub",
      href: "#",
      color: "hover:text-primary"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn", 
      href: "#",
      color: "hover:text-blue-400"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      name: "Twitter",
      href: "#",
      color: "hover:text-accent"
    }
  ];

  const FloatingDockComponent = () => {
    const dockLinks = [
      {
        title: "Home",
        icon: <IconHome className="h-full w-full" />,
        href: "#",
      },
      {
        title: "GitHub",
        icon: <IconBrandGithub className="h-full w-full" />,
        href: "#",
      },
      {
        title: "LinkedIn",
        icon: <IconBrandLinkedin className="h-full w-full" />,
        href: "#",
      },
      {
        title: "Twitter",
        icon: <IconBrandX className="h-full w-full" />,
        href: "#",
      },
      {
        title: "Email",
        icon: <IconMail className="h-full w-full" />,
        href: "mailto:hello@example.com",
      },
    ];

    return <FloatingDock items={dockLinks} />;
  };

  return (
    <section className="py-20 relative z-10 bg-background text-foreground" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <TypewriterEffect words={words} className="mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Ready to collaborate? Let's discuss your next project and bring your ideas to life.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Form - Centered */}
          <Card className="bg-card/60 backdrop-blur-lg border-border shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl font-heading font-bold text-foreground text-center">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2 font-body">
                      Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="bg-background/50 border-border focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2 font-body">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-background/50 border-border focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2 font-body">
                    Subject
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    className="bg-background/50 border-border focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2 font-body">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or just say hello!"
                    rows={6}
                    required
                    className="bg-background/50 border-border focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 font-heading font-semibold"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Social Links with Floating Dock - Below Form */}
          <div className="pt-12 flex justify-center">
            <div className="text-center">
              <h4 className="font-heading font-semibold text-foreground mb-6">Follow me</h4>
              <FloatingDockComponent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
