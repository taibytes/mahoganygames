import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Github, Twitter, Instagram, MessageCircle } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const subscribeMutation = useMutation({
    mutationFn: async (email: string) => {
      return apiRequest("POST", "/api/newsletter/subscribe", { email });
    },
    onSuccess: () => {
      toast({
        title: "Successfully subscribed!",
        description: "Welcome to the Mahogany Games community. We'll keep you updated on our cozy game development journey.",
      });
      setEmail("");
    },
    onError: (error: any) => {
      const message = error.message || "Failed to subscribe. Please try again.";
      toast({
        title: "Subscription failed",
        description: message,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      subscribeMutation.mutate(email.trim());
    }
  };

  return (
    <section className="py-20 bg-mahogany-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="font-playfair text-4xl font-bold">
              Stay in the Loop
            </h2>
            <p className="text-xl text-mahogany-200 max-w-2xl mx-auto">
              Get the latest updates on Sip & Serve development, behind-the-scenes insights, and early access to new releases.
            </p>
          </div>

          {/* Newsletter Signup Form */}
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder-mahogany-200 focus:ring-accent focus:border-transparent"
                  required
                  disabled={subscribeMutation.isPending}
                />
                <Button
                  type="submit"
                  disabled={subscribeMutation.isPending}
                  className="bg-accent text-mahogany-800 hover:bg-accent/90 font-semibold cozy-shadow"
                >
                  {subscribeMutation.isPending ? "Subscribing..." : "Subscribe"}
                </Button>
              </div>
              <p className="text-xs text-mahogany-300">
                No spam, just cozy game updates. Unsubscribe anytime.
              </p>
            </form>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a 
              href="https://github.com/taibytes" 
              className="text-mahogany-200 hover:text-white text-2xl transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="#" 
              className="text-mahogany-200 hover:text-white text-2xl transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a 
              href="#" 
              className="text-mahogany-200 hover:text-white text-2xl transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="#" 
              className="text-mahogany-200 hover:text-white text-2xl transition-colors duration-200"
              aria-label="Discord"
            >
              <MessageCircle size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
