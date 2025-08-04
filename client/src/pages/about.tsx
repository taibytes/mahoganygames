import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Heart, Users, Compass, Coffee, Code, Accessibility, Palette, Github, Mail, MessageCircle } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Cozy & Calm",
      description: "Creating spaces where players can unwind, relax, and find joy in simple moments."
    },
    {
      icon: Users,
      title: "Inclusive & Accessible",
      description: "Building games that welcome everyone, with accessibility-first design and thoughtful inclusive features."
    },
    {
      icon: Compass,
      title: "Grounded & Meaningful",
      description: "Every game element serves a purpose, creating experiences that resonate and inspire."
    }
  ];

  const skills = [
    { name: "Godot Engine", icon: Code },
    { name: "Accessibility Design", icon: Accessibility },
    { name: "UI/UX Design", icon: Palette }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="py-20 mahogany-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-mahogany-800 mb-6">
            About Mahogany Games
          </h1>
          <p className="text-xl text-mahogany-700 max-w-2xl mx-auto">
            Hi! I'm <span className="font-semibold text-mahogany-800">Tai</span>, 
            the solo developer behind Mahogany Games. I'm passionate about creating games that are cozy, inclusive, and meaningful.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* About Content */}
            <div className="space-y-8">
              {/* Studio Values */}
              <div className="space-y-6">
                <h2 className="font-playfair text-3xl font-semibold text-mahogany-800">Our Values</h2>
                
                <div className="space-y-6">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-mahogany-600 rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                        <value.icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-mahogany-800 mb-2 text-lg">{value.title}</h3>
                        <p className="text-mahogany-700 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Development Philosophy */}
              <div className="bg-mahogany-50 rounded-2xl p-8 cozy-shadow">
                <h3 className="font-playfair text-2xl font-semibold text-mahogany-800 mb-6">Development Philosophy</h3>
                <blockquote className="text-mahogany-700 leading-relaxed text-lg italic">
                  "I believe games should be a warm hug after a long day. Every interaction should feel intentional, 
                  every moment should spark joy, and every player should feel welcome in the worlds we create."
                </blockquote>
                <div className="flex items-center space-x-2 mt-6">
                  <span className="text-mahogany-600 font-medium">— Tai, Founder</span>
                </div>
              </div>

              {/* Contact Links */}
              <div className="space-y-4">
                <h3 className="font-playfair text-2xl font-semibold text-mahogany-800">Let's Connect</h3>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://github.com/taibytes"
                    className="flex items-center space-x-2 bg-white border border-mahogany-200 px-4 py-2 rounded-lg hover:bg-mahogany-50 transition-colors duration-200"
                  >
                    <Github size={20} className="text-mahogany-600" />
                    <span className="text-mahogany-700 font-medium">GitHub</span>
                  </a>
                  <Link href="/contact">
                    <a className="flex items-center space-x-2 bg-white border border-mahogany-200 px-4 py-2 rounded-lg hover:bg-mahogany-50 transition-colors duration-200">
                      <Mail size={20} className="text-mahogany-600" />
                      <span className="text-mahogany-700 font-medium">Email</span>
                    </a>
                  </Link>
                  <a 
                    href="#"
                    className="flex items-center space-x-2 bg-white border border-mahogany-200 px-4 py-2 rounded-lg hover:bg-mahogany-50 transition-colors duration-200"
                  >
                    <MessageCircle size={20} className="text-mahogany-600" />
                    <span className="text-mahogany-700 font-medium">Discord</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Developer Profile */}
            <div className="relative">
              <div className="relative bg-white rounded-2xl cozy-shadow p-8 max-w-md mx-auto">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-mahogany-500 to-mahogany-700 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                      <Coffee className="text-white" size={32} />
                    </div>
                    <h4 className="font-playfair text-2xl font-semibold text-mahogany-800">Solo Game Developer</h4>
                    <p className="text-mahogany-600 font-caveat text-lg">Crafting cozy experiences</p>
                  </div>
                  
                  {/* Skills/Tools */}
                  <div className="space-y-3">
                    <h5 className="font-semibold text-mahogany-800 text-center mb-4">Tools & Expertise</h5>
                    {skills.map((skill, index) => (
                      <div key={index} className="flex items-center justify-between bg-mahogany-50 p-4 rounded-xl">
                        <span className="text-mahogany-700 font-medium">{skill.name}</span>
                        <skill.icon className="text-mahogany-600" size={20} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Stats */}
      <section className="py-20 bg-mahogany-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-mahogany-800 mb-4">
              Studio Journey
            </h2>
            <p className="text-mahogany-600 max-w-2xl mx-auto">
              Every step of our journey is focused on creating meaningful, accessible gaming experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 text-center cozy-shadow">
              <div className="text-3xl font-bold text-mahogany-600 mb-2">1</div>
              <div className="text-mahogany-800 font-semibold mb-1">Games in Development</div>
              <div className="text-sm text-mahogany-600">Sip & Serve café sim</div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 text-center cozy-shadow">
              <div className="text-3xl font-bold text-mahogany-600 mb-2">65%</div>
              <div className="text-mahogany-800 font-semibold mb-1">Development Progress</div>
              <div className="text-sm text-mahogany-600">Core features complete</div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 text-center cozy-shadow">
              <div className="text-3xl font-bold text-mahogany-600 mb-2">100%</div>
              <div className="text-mahogany-800 font-semibold mb-1">Accessibility First</div>
              <div className="text-sm text-mahogany-600">Inclusive design priority</div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 text-center cozy-shadow">
              <div className="text-3xl font-bold text-mahogany-600 mb-2">∞</div>
              <div className="text-mahogany-800 font-semibold mb-1">Cozy Vibes</div>
              <div className="text-sm text-mahogany-600">Always warm & welcoming</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-mahogany-800 mb-6">
            Join Our Cozy Community
          </h2>
          <p className="text-xl text-mahogany-700 mb-8 max-w-2xl mx-auto">
            Follow our development journey, share feedback, and be part of creating games that prioritize kindness and inclusivity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/games">
              <Button size="lg" className="bg-mahogany-600 text-white hover:bg-mahogany-700 cozy-shadow">
                <span className="mr-2">🎮</span>
                Explore Our Games
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-mahogany-600 text-mahogany-600 hover:bg-mahogany-600 hover:text-white"
              >
                <span className="mr-2">💬</span>
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
