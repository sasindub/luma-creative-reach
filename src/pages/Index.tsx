import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Camera, Video, Megaphone, Palette, Users, Award, Star, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroImage from "@/assets/hero-image.jpg";
import videoProductionImg from "@/assets/video-production.jpg";
import photographyImg from "@/assets/photography-work.jpg";
import socialMediaImg from "@/assets/social-media-work.jpg";
import contentCreationImg from "@/assets/content-creation.jpg";
import companyLogos from "@/assets/Clients.jpg";
import portfolioShowcase from "@/assets/portfolio-showcase.jpg";
import logoRedWhite from "@/assets/logoRedWhite.png";
import logoBlackRed from "@/assets/logoBlackRed.png";

// Scroll Animation Component
const ScrollAnimatedSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Index = () => {
  const [isInHeroSection, setIsInHeroSection] = useState(true);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Close mobile menu on scroll
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
      
      // Check if in hero section
      const heroSection = document.getElementById('home');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = currentScrollY + 100;
        setIsInHeroSection(scrollPosition < heroBottom);
      }

      // Show/hide navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px
        setShowNavbar(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setShowNavbar(true);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  const handleWhatsAppClick = () => {
    const phoneNumber = '94766624637';
    const message = encodeURIComponent('Hi Luma, I want to know more details.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-hero-pattern">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/10 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src={isInHeroSection ? logoRedWhite : logoBlackRed} 
                alt="LUMA" 
                className="h-10 w-auto"
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className={`${isInHeroSection ? 'text-white hover:text-white/80' : 'text-foreground hover:text-luma-primary'} transition-smooth`}>Home</a>
              <a href="#about" className={`${isInHeroSection ? 'text-white hover:text-white/80' : 'text-foreground hover:text-luma-primary'} transition-smooth`}>About</a>
              <a href="#services" className={`${isInHeroSection ? 'text-white hover:text-white/80' : 'text-foreground hover:text-luma-primary'} transition-smooth`}>Services</a>
              <a href="#portfolio" className={`${isInHeroSection ? 'text-white hover:text-white/80' : 'text-foreground hover:text-luma-primary'} transition-smooth`}>Portfolio</a>
              <a href="#contact" className={`${isInHeroSection ? 'text-white hover:text-white/80' : 'text-foreground hover:text-luma-primary'} transition-smooth`}>Contact</a>
            </div>
            <div className="hidden md:flex gap-3">
              <Button variant="luma" size="sm">
                Book Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className={`${isInHeroSection ? 'bg-black border-black text-white hover:bg-black/80 hover:text-white' : 'border-foreground text-foreground hover:bg-foreground hover:text-white'}`}
              >
                LUMA Photography
              </Button>
            </div>

            {/* Mobile menu button - ONLY VISIBLE ON MOBILE */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden ${isInHeroSection ? 'text-white' : 'text-foreground'}`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile menu - ONLY VISIBLE ON MOBILE */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 px-4 space-y-3 bg-gray-900/95 backdrop-blur-md border-t border-white/20 shadow-lg">
              <a
                href="#home"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-white hover:text-luma-primary transition-smooth font-medium"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-white hover:text-luma-primary transition-smooth font-medium"
              >
                About
              </a>
              <a
                href="#services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-white hover:text-luma-primary transition-smooth font-medium"
              >
                Services
              </a>
              <a
                href="#portfolio"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-white hover:text-luma-primary transition-smooth font-medium"
              >
                Portfolio
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-white hover:text-luma-primary transition-smooth font-medium"
              >
                Contact
              </a>
              <div className="pt-3 space-y-2 border-t border-white/20">
                <Button variant="luma" size="sm" className="w-full">
                  Book Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full bg-transparent border-white text-white hover:bg-white hover:text-gray-900"
                >
                  LUMA Photography
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* WhatsApp Floating Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center group hover:scale-110 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <svg 
          className="w-7 h-7" 
          fill="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="absolute right-16 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat with us
        </span>
      </button>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-modern">
        {/* Animated Background Slides */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="flex w-[400%] h-full" style={{ animation: 'slide 20s infinite' }}>
            <div className="w-1/4 h-full relative">
              <img 
                src={videoProductionImg} 
                alt="Video production behind the scenes" 
                className="w-full h-full object-cover opacity-15"
              />
            </div>
            <div className="w-1/4 h-full relative">
              <img 
                src={photographyImg} 
                alt="Professional photography session" 
                className="w-full h-full object-cover opacity-15"
              />
            </div>
            <div className="w-1/4 h-full relative">
              <img 
                src={socialMediaImg} 
                alt="Social media content creation" 
                className="w-full h-full object-cover opacity-15"
              />
            </div>
            <div className="w-1/4 h-full relative">
              <img 
                src={contentCreationImg} 
                alt="Creative content design process" 
                className="w-full h-full object-cover opacity-15"
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        </div>

        {/* Modern Grid Pattern */}
        <div className="absolute inset-0 z-5 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle, hsl(var(--luma-primary)) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            
            {/* Left Content */}
            <div className="text-left" style={{ animation: 'slideUp 1s ease-out' }}>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-luma-primary/10 text-luma-primary rounded-full text-sm font-medium border border-luma-primary/20 mb-6">
                  Digital Creative Agency
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Bright Ideas,
                <br />
                <span className="text-gradient">Brilliant Results</span>
              </h1>
              
              <p className="text-xl text-white/90 mb-6 max-w-lg">
                Your Story. Our Creativity. Infinite Reach.
              </p>
              
              <p className="text-lg text-white/70 mb-8 max-w-lg">
                Next-generation creative powerhouse transforming ideas into visuals, and visuals into influence.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-luma-primary">2M+</div>
                  <div className="text-sm text-white/60">YouTube Subscribers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-luma-accent">5M+</div>
                  <div className="text-sm text-white/60">Facebook Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-luma-glow">500+</div>
                  <div className="text-sm text-white/60">Projects</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
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

            {/* Right Content - Work Showcase */}
            <div className="relative" style={{ animation: 'slideUp 1s ease-out 0.3s both' }}>
              <div className="relative">
                {/* Main showcase image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-smooth">
                  <img 
                    src={portfolioShowcase} 
                    alt="LUMA creative portfolio showcase" 
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-bold mb-1">Latest Campaign</h3>
                    <p className="text-white/80 text-sm">Award-winning creativity</p>
                  </div>
                </div>

                {/* Floating work samples */}
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-2xl overflow-hidden shadow-xl animate-float border-4 border-white/20">
                  <img 
                    src={videoProductionImg} 
                    alt="Video work sample" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-2xl overflow-hidden shadow-xl animate-float border-4 border-white/20" style={{ animationDelay: '1s' }}>
                  <img 
                    src={socialMediaImg} 
                    alt="Social media work sample" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modern floating elements */}
        <div className="absolute top-1/4 right-10 animate-float opacity-20">
          <div className="w-2 h-2 bg-luma-primary rounded-full"></div>
        </div>
        <div className="absolute bottom-1/4 left-20 animate-float opacity-30" style={{ animationDelay: '2s' }}>
          <div className="w-3 h-3 bg-luma-accent rounded-full"></div>
        </div>
        <div className="absolute top-1/2 right-1/4 animate-float opacity-25" style={{ animationDelay: '1s' }}>
          <div className="w-1 h-1 bg-luma-glow rounded-full"></div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our <span className="text-gradient">Creative</span> Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                From cinematic visuals to viral campaigns, we provide end-to-end digital solutions.
              </p>
            </div>
          </ScrollAnimatedSection>

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
              <ScrollAnimatedSection key={service.title} delay={index * 100}>
                <div className="group p-8 rounded-2xl bg-gradient-subtle border border-border hover:shadow-elegant transition-smooth cursor-pointer">
                  <service.icon className={`h-12 w-12 ${service.color} mb-6 group-hover:scale-110 transition-bounce`} />
                  <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio/Showcase Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our <span className="text-gradient">Creative</span> Work
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Showcasing our latest projects and creative campaigns that have delivered exceptional results.
              </p>
            </div>
          </ScrollAnimatedSection>

          {/* Featured Portfolio */}
          <ScrollAnimatedSection>
            <div className="mb-16">
              <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              <img 
                src={portfolioShowcase} 
                alt="LUMA creative portfolio showcase featuring multiple commercial videos and campaigns" 
                className="w-full h-96 md:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-bold mb-2">Commercial Video Production</h3>
                <p className="text-lg text-white/90">Award-winning campaigns for leading brands</p>
              </div>
              <Button variant="glass" className="absolute bottom-8 right-8">
                <Play className="mr-2 h-4 w-4" />
                Watch Showreel
              </Button>
              </div>
            </div>
          </ScrollAnimatedSection>

          {/* Service Showcases */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                image: videoProductionImg,
                title: "Video Production Excellence",
                description: "Behind-the-scenes of our professional video production process",
                stats: "50+ Videos Produced Monthly"
              },
              {
                image: photographyImg,
                title: "Professional Photography",
                description: "High-end commercial and portrait photography sessions",
                stats: "200+ Photo Shoots Completed"
              },
              {
                image: socialMediaImg,
                title: "Social Media Mastery",
                description: "Data-driven social media campaigns with proven ROI",
                stats: "7M+ Total Reach Achieved"
              },
              {
                image: contentCreationImg,
                title: "Creative Content Design",
                description: "Brand storytelling through innovative digital content",
                stats: "100+ Brands Served"
              }
            ].map((item, index) => (
              <ScrollAnimatedSection key={item.title} delay={index * 100}>
                <div className="group relative rounded-2xl overflow-hidden shadow-elegant hover:shadow-glow transition-smooth">
                  <img 
                    src={item.image} 
                    alt={item.description}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/90 mb-2">{item.description}</p>
                    <div className="flex items-center text-luma-accent font-medium">
                      <Star className="h-4 w-4 mr-1" />
                      {item.stats}
                    </div>
                  </div>
                </div>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Trusted by <span className="text-gradient">Leading</span> Brands
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We've collaborated with innovative companies across industries to create impactful digital experiences.
              </p>
            </div>
          </ScrollAnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimatedSection>
              <img 
                src={companyLogos} 
                alt="LUMA collaboration partners and client company logos" 
                className="w-full rounded-2xl shadow-elegant"
              />
            </ScrollAnimatedSection>
            
            <ScrollAnimatedSection delay={200}>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Partnership Excellence
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                From startups to Fortune 500 companies, we've partnered with diverse brands to deliver 
                exceptional creative solutions that drive real business results.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-luma-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-luma-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Global Reach</h4>
                    <p className="text-muted-foreground">Collaborated with brands across 15+ countries</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-luma-secondary/10 rounded-lg flex items-center justify-center mr-4">
                    <Award className="h-6 w-6 text-luma-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Award-Winning Work</h4>
                    <p className="text-muted-foreground">Recognized for creative excellence and innovation</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-luma-accent/10 rounded-lg flex items-center justify-center mr-4">
                    <Star className="h-6 w-6 text-luma-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Client Satisfaction</h4>
                    <p className="text-muted-foreground">98% client retention rate with 5-star reviews</p>
                  </div>
                </div>
              </div>
              
              <Button variant="luma" size="lg" className="mt-8">
                Become Our Partner
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </ScrollAnimatedSection>
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
            <ScrollAnimatedSection>
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
            </ScrollAnimatedSection>
            
            <ScrollAnimatedSection delay={200}>
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
            </ScrollAnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-foreground text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimatedSection>
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
          </ScrollAnimatedSection>
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