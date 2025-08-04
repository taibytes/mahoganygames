import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { trackEvent } from "@/lib/analytics";
import { Mail, Github, MessageCircle, Clock, Send } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: ""
  });
  
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24-48 hours.",
      });
      
      // Track successful contact form submission
      trackEvent('contact_form_submit', 'engagement', 'success');
      
      // Reset form
      setFormData({ name: "", email: "", subject: "General Inquiry", message: "" });
    },
    onError: (error: any) => {
      const message = error.message || "Failed to send message. Please try again.";
      toast({
        title: "Failed to send message",
        description: message,
        variant: "destructive",
      });
      
      // Track failed contact form submission
      trackEvent('contact_form_submit', 'engagement', 'error');
    },
  });

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    contactMutation.mutate(formData);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="py-20 mahogany-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-mahogany-800 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-mahogany-700 max-w-2xl mx-auto">
            Have questions, suggestions, or just want to chat about cozy games? I'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-mahogany-600 rounded-lg flex items-center justify-center shadow-md flex-shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-mahogany-800 mb-2">Email</h3>
                    <p className="text-mahogany-700">hello@mahoganygames.com</p>
                    <p className="text-sm text-mahogany-600">For general inquiries and collaboration</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-mahogany-600 rounded-lg flex items-center justify-center shadow-md flex-shrink-0">
                    <Github className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-mahogany-800 mb-2">GitHub</h3>
                    <a 
                      href="https://github.com/taibytes" 
                      className="text-mahogany-600 hover:text-mahogany-800 transition-colors duration-200"
                      onClick={() => trackEvent('external_link_click', 'engagement', 'github')}
                    >
                      @taibytes
                    </a>
                    <p className="text-sm text-mahogany-600">Follow development progress and contribute</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-mahogany-600 rounded-lg flex items-center justify-center shadow-md flex-shrink-0">
                    <MessageCircle className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-mahogany-800 mb-2">Community</h3>
                    <p className="text-mahogany-700">Join our Discord server</p>
                    <p className="text-sm text-mahogany-600">Connect with fellow cozy game enthusiasts</p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-mahogany-50 p-6 rounded-2xl">
                <h3 className="font-playfair text-lg font-semibold text-mahogany-800 mb-3">
                  <Clock className="inline mr-2 text-mahogany-600" size={20} />
                  Response Time
                </h3>
                <p className="text-mahogany-700 text-sm leading-relaxed">
                  I typically respond within 24-48 hours. During development sprints, 
                  it might take a bit longer, but I'll always get back to you!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-mahogany-50 rounded-2xl p-8 cozy-shadow">
              <h3 className="font-playfair text-2xl font-semibold text-mahogany-800 mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-mahogany-700">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="border-mahogany-200 focus:ring-mahogany-500 focus:border-mahogany-500 bg-white"
                      required
                      disabled={contactMutation.isPending}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-mahogany-700">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="border-mahogany-200 focus:ring-mahogany-500 focus:border-mahogany-500 bg-white"
                      required
                      disabled={contactMutation.isPending}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-medium text-mahogany-700">
                    Subject
                  </Label>
                  <Select 
                    value={formData.subject} 
                    onValueChange={(value) => handleInputChange('subject', value)}
                    disabled={contactMutation.isPending}
                  >
                    <SelectTrigger className="border-mahogany-200 focus:ring-mahogany-500 focus:border-mahogany-500 bg-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                      <SelectItem value="Game Feedback">Game Feedback</SelectItem>
                      <SelectItem value="Collaboration">Collaboration</SelectItem>
                      <SelectItem value="Media/Press">Media/Press</SelectItem>
                      <SelectItem value="Bug Report">Bug Report</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-mahogany-700">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={4}
                    className="border-mahogany-200 focus:ring-mahogany-500 focus:border-mahogany-500 bg-white resize-none"
                    placeholder="Tell me about your thoughts, ideas, or questions..."
                    required
                    disabled={contactMutation.isPending}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-mahogany-600 text-white hover:bg-mahogany-700 cozy-shadow"
                >
                  {contactMutation.isPending ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={16} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
