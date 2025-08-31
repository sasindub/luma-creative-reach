import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Camera, Video, Megaphone, Palette } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-hero-pattern">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gradient">LUMA</h1>
              <span className="ml-2 text-sm text-muted-foreground">(PVT) LTD</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-foreground hover:text-luma-primary transition-smooth">Home</a>
              <a href="#about" className="text-foreground hover:text-luma-primary transition-smooth">About</a>
              <a href="#services" className="text-foreground hover:text-luma-primary transition-smooth">Services</a>
              <a href="#portfolio" className="text-foreground hover:text-luma-primary transition-smooth">Portfolio</a>
              <a href="#contact" className="text-foreground hover:text-luma-primary transition-smooth">Contact</a>
            </div>
            <Button variant="luma" size="sm" className="hidden md:flex">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Creative digital agency workspace" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 gradient-hero opacity-90"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
              Bright Ideas,
              <br />
              <span className="text-gradient bg-white text-transparent bg-clip-text">Brilliant Results</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Your Story. Our Creativity. Infinite Reach.
            </p>
            <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
              Next-generation creative powerhouse with 2M+ YouTube subscribers and 5M+ Facebook followers. 
              We transform ideas into visuals, and visuals into influence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                <Play className="mr-2 h-5 w-5" />
                Watch Our Reel
              </Button>
              <Button variant="glass" size="lg" className="text-lg px-8 py-4">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <Camera className="h-12 w-12 text-white/30" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '2s' }}>
          <Video className="h-16 w-16 text-white/30" />
        </div>
        <div className="absolute top-1/2 left-5 animate-float" style={{ animationDelay: '1s' }}>
          <Megaphone className="h-10 w-10 text-white/30" />
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-gradient">Creative</span> Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From cinematic visuals to viral campaigns, we provide end-to-end digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Video,
                title: "Video Production",
                description: "Cinematic storytelling that captivates and converts",
                color: "text-luma-primary"
              },
              {
                icon: Camera,
                title: "Photography", 
                description: "Professional imagery that speaks louder than words",
                color: "text-luma-secondary"
              },
              {
                icon: Megaphone,
                title: "Social Media Marketing",
                description: "Viral campaigns with proven engagement strategies",
                color: "text-luma-accent"
              },
              {
                icon: Palette,
                title: "Content Creation",
                description: "Digital experiences that inspire and influence",
                color: "text-luma-glow"
              }
            ].map((service, index) => (
              <div 
                key={service.title}
                className="group p-8 rounded-2xl bg-gradient-subtle border border-border hover:shadow-elegant transition-smooth cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <service.icon className={`h-12 w-12 ${service.color} mb-6 group-hover:scale-110 transition-bounce`} />
                <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: "2M+", label: "YouTube Subscribers" },
              { number: "5M+", label: "Facebook Followers" },
              { number: "500+", label: "Projects Completed" }
            ].map((stat, index) => (
              <div key={stat.label} className="animate-bounce-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-xl text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Where <span className="text-gradient">Creativity</span> Meets Strategy
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Luma (Pvt) Ltd is a next-generation creative powerhouse specializing in video production, 
                photography, social media marketing, web design, and digital content creation.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We don't just create content; we craft digital experiences that inspire, engage, and deliver 
                measurable impact. Our mission is simple: to turn ideas into visuals, and visuals into influence.
              </p>
              <Button variant="luma" size="lg">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="bg-gradient-subtle rounded-3xl p-8 shadow-elegant">
                <h3 className="text-2xl font-bold text-foreground mb-6">Our Vision</h3>
                <p className="text-muted-foreground mb-6">
                  To be the leading creative agency that transforms digital landscapes through innovative 
                  storytelling and strategic content creation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-luma-primary rounded-full mr-3"></div>
                    <span className="text-foreground">Innovative Content Strategy</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-luma-secondary rounded-full mr-3"></div>
                    <span className="text-foreground">Data-Driven Results</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-luma-accent rounded-full mr-3"></div>
                    <span className="text-foreground">Creative Excellence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-foreground text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Create <span className="text-gradient bg-white text-transparent bg-clip-text">Magic</span>?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Let's transform your vision into compelling digital experiences that resonate with your audience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-foreground">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gradient mb-4">LUMA</h3>
              <p className="text-muted-foreground">
                Bright Ideas, Brilliant Results
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Video Production</li>
                <li>Photography</li>
                <li>Social Media Marketing</li>
                <li>Content Creation</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>About Us</li>
                <li>Portfolio</li>
                <li>Our Team</li>
                <li>Careers</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Connect</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>YouTube (2M+ Subscribers)</li>
                <li>Facebook (5M+ Followers)</li>
                <li>Instagram</li>
                <li>LinkedIn</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 LUMA (PVT) LTD. All rights reserved. | www.luma.lk</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;