"use client";

import { JSX, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Smartphone,
  Cloud,
  BarChart3,
  Zap,
  ArrowRight,
  Star,
  Download,
  ExternalLink,
  Layers,
  Database,
  Users,
  Target,
  Award,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function LightWebxProducts() {
  const heroRef = useRef<HTMLElement>(null);
  const productsRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Navbar animations
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
      );

      // Navbar glow animation
      gsap.to(".navbar-glow", {
        boxShadow: "0 0 20px 2px rgba(59, 130, 246, 0.3)",
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
      });

      // Navbar logo pulse
      gsap.to(".navbar-logo", {
        scale: 1.05,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
      });

      // Hero animations
      gsap.fromTo(
        ".hero-title",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      );
      gsap.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" }
      );
      gsap.fromTo(
        ".hero-stats",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 0.6,
          ease: "back.out(1.7)",
        }
      );

      // Floating animation
      gsap.to(".floating", {
        y: -20,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Grid lines animation
      gsap.fromTo(
        ".grid-line-x",
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1,
          opacity: 0.2,
          duration: 1.5,
          stagger: 0.1,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".grid-line-y",
        { scaleY: 0, opacity: 0 },
        {
          scaleY: 1,
          opacity: 0.2,
          duration: 1.5,
          stagger: 0.1,
          ease: "power3.out",
        }
      );

      // Animate the hero glow
      gsap.to(".hero-glow", {
        opacity: 0.7,
        scale: 1.2,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // About section animations
      gsap.fromTo(
        ".about-card",
        { opacity: 0, y: 80, rotationY: 45 },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-grid",
            start: "top 80%",
            end: "bottom 20%",
          },
        }
      );

      gsap.fromTo(
        ".about-text",
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-content",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".about-stats",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".about-stats-grid",
            start: "top 80%",
          },
        }
      );

      // Product cards animation
      gsap.fromTo(
        ".product-card",
        { opacity: 0, y: 100, rotationX: 45 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".products-grid",
            start: "top 80%",
            end: "bottom 20%",
          },
        }
      );

      // Feature items animation
      gsap.fromTo(
        ".feature-item",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".features-list",
            start: "top 85%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const [particles, setParticles] = useState<JSX.Element[]>([]);

  // Separate useEffect for particles to ensure they animate after being created
  useEffect(() => {
    // Generate particles on client side to avoid hydration mismatch
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        const size = Math.random() * 6 + 2;
        const initialX = Math.random() * 100;
        const initialY = Math.random() * 100;
        const opacity = Math.random() * 0.5 + 0.1;

        newParticles.push(
          <div
            key={i}
            className="hero-particle absolute rounded-full bg-blue-500"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${initialX}%`,
              top: `${initialY}%`,
              opacity: opacity,
              filter: `blur(${Math.random() * 2}px)`,
            }}
          />
        );
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  // Animate particles after they're rendered
  useEffect(() => {
    if (particles.length > 0) {
      const timer = setTimeout(() => {
        const particleElements = document.querySelectorAll(".hero-particle");
        particleElements.forEach((particle) => {
          const randomX = Math.random() * 200 - 100; // -100 to 100
          const randomY = Math.random() * 200 - 100; // -100 to 100
          const randomDelay = Math.random() * 2;
          const randomDuration = 3 + Math.random() * 5;

          gsap.to(particle, {
            x: randomX,
            y: randomY,
            opacity: Math.random() * 0.5 + 0.3,
            duration: randomDuration,
            delay: randomDelay,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });
      }, 100); // Small delay to ensure DOM is updated

      return () => clearTimeout(timer);
    }
  }, [particles]);

  // Generate grid lines for the hero background
  const renderGridLines = () => {
    const lines = [];
    // Horizontal lines
    for (let i = 0; i < 10; i++) {
      lines.push(
        <div
          key={`x-${i}`}
          className="grid-line-x absolute h-px bg-blue-500 opacity-0 origin-left"
          style={{
            width: "100%",
            top: `${i * 10 + 5}%`,
          }}
        />
      );
    }

    // Vertical lines
    for (let i = 0; i < 10; i++) {
      lines.push(
        <div
          key={`y-${i}`}
          className="grid-line-y absolute w-px bg-blue-500 opacity-0 origin-top"
          style={{
            height: "100%",
            left: `${i * 10 + 5}%`,
          }}
        />
      );
    }

    return lines;
  };

  const products = [
    {
      name: "WebForge Pro",
      category: "Web Development",
      description:
        "Advanced web development framework with AI-powered code generation and real-time collaboration features.",
      features: [
        "AI Code Generation",
        "Real-time Collaboration",
        "Component Library",
        "Performance Analytics",
      ],
      price: "$99/month",
      rating: 4.9,
      downloads: "50K+",
      icon: Code2,
      gradient: "from-blue-400 to-blue-600",
      status: "Popular",
    },
    {
      name: "MobileSync Studio",
      category: "Mobile Development",
      description:
        "Cross-platform mobile app development suite with native performance and seamless deployment.",
      features: [
        "Cross-platform Support",
        "Native Performance",
        "Cloud Sync",
        "Live Preview",
      ],
      price: "$149/month",
      rating: 4.8,
      downloads: "30K+",
      icon: Smartphone,
      gradient: "from-blue-500 to-blue-700",
      status: "New",
    },
    {
      name: "CloudOps Manager",
      category: "Cloud Infrastructure",
      description:
        "Comprehensive cloud management platform for deploying, monitoring, and scaling applications.",
      features: [
        "Multi-cloud Support",
        "Auto Scaling",
        "Cost Optimization",
        "Security Monitoring",
      ],
      price: "$199/month",
      rating: 4.7,
      downloads: "25K+",
      icon: Cloud,
      gradient: "from-blue-300 to-blue-500",
      status: "Enterprise",
    },
    {
      name: "DataViz Engine",
      category: "Analytics",
      description:
        "Real-time data visualization and analytics platform with interactive dashboards and AI insights.",
      features: [
        "Real-time Analytics",
        "Interactive Dashboards",
        "AI Insights",
        "Custom Widgets",
      ],
      price: "$79/month",
      rating: 4.6,
      downloads: "40K+",
      icon: BarChart3,
      gradient: "from-blue-600 to-blue-800",
      status: "Trending",
    },
    {
      name: "DevStack Toolkit",
      category: "Developer Tools",
      description:
        "Complete developer toolkit with code analysis, debugging tools, and performance optimization.",
      features: [
        "Code Analysis",
        "Advanced Debugging",
        "Performance Profiling",
        "Team Collaboration",
      ],
      price: "$59/month",
      rating: 4.8,
      downloads: "60K+",
      icon: Layers,
      gradient: "from-blue-400 to-blue-700",
      status: "Popular",
    },
    {
      name: "DatabasePro Suite",
      category: "Database Management",
      description:
        "Advanced database management and optimization platform with AI-powered query optimization.",
      features: [
        "Query Optimization",
        "Performance Monitoring",
        "Backup Automation",
        "Security Scanning",
      ],
      price: "$129/month",
      rating: 4.9,
      downloads: "35K+",
      icon: Database,
      gradient: "from-blue-500 to-blue-800",
      status: "Enterprise",
    },
  ];

  const aboutValues = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We push the boundaries of technology to create groundbreaking solutions that shape the future.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Building a global community of developers who collaborate and grow together.",
    },
    {
      icon: Target,
      title: "Excellence",
      description:
        "Committed to delivering the highest quality products with uncompromising standards.",
    },
    {
      icon: Award,
      title: "Recognition",
      description:
        "Industry-leading products trusted by developers and enterprises worldwide.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav
        ref={navRef}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 backdrop-blur-md bg-gray-900/80 border border-gray-800 rounded-full px-8 py-4 navbar-glow"
      >
        <div className="flex items-center justify-center space-x-8">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent navbar-logo">
            <Link href="/">Light Webx</Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#about"
              className="relative text-gray-300 hover:text-blue-400 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-400 after:transition-all hover:after:w-full"
            >
              About
            </Link>
            <Link
              href="#products"
              className="relative text-gray-300 hover:text-blue-400 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-400 after:transition-all hover:after:w-full"
            >
              Products
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      >
        {/* Futuristic background with grid and particles */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black">
          {/* Grid lines */}
          {renderGridLines()}

          {/* Particles */}
          <div ref={particlesRef} className="absolute inset-0">
            {particles}
          </div>

          {/* Center glow */}
          <div className="hero-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>

          {/* Digital circuit pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%233b82f6' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          ></div>

          {/* Radial gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-blue-900/10"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="floating">
            <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Software Products
            </h1>
          </div>
          <p className="hero-subtitle text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
            Discover our suite of cutting-edge software products designed to
            accelerate development, enhance productivity, and transform your
            digital workflow.
          </p>

          <div className="hero-stats grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            <div className="text-center p-4 bg-gray-900/50 backdrop-blur-lg rounded-lg border border-gray-800">
              <div className="text-2xl font-bold text-blue-400 mb-1">6</div>
              <div className="text-sm text-gray-300">Products</div>
            </div>
            <div className="text-center p-4 bg-gray-900/50 backdrop-blur-lg rounded-lg border border-gray-800">
              <div className="text-2xl font-bold text-blue-400 mb-1">240K+</div>
              <div className="text-sm text-gray-300">Downloads</div>
            </div>
            <div className="text-center p-4 bg-gray-900/50 backdrop-blur-lg rounded-lg border border-gray-800">
              <div className="text-2xl font-bold text-blue-400 mb-1">4.8</div>
              <div className="text-sm text-gray-300">Avg Rating</div>
            </div>
            <div className="text-center p-4 bg-gray-900/50 backdrop-blur-lg rounded-lg border border-gray-800">
              <div className="text-2xl font-bold text-blue-400 mb-1">50+</div>
              <div className="text-sm text-gray-300">Countries</div>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 border-0 text-lg px-8 py-3 relative overflow-hidden group"
          >
            <span className="relative z-10">
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        id="about"
        className="py-20 relative bg-gradient-to-b from-black to-gray-950"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              About Light Webx
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pioneering the future of software development with innovative
              tools and cutting-edge technology.
            </p>
          </div>

          <div className="about-content grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="about-text">
              <h3 className="text-3xl font-bold mb-6 text-white">
                Our Mission
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                At Light Webx, we believe in empowering developers with the
                tools they need to build extraordinary software. Founded in
                2020, we've been at the forefront of software innovation,
                creating products that streamline development workflows and
                enhance productivity.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our team of passionate engineers and designers work tirelessly
                to bridge the gap between complex technology and user-friendly
                solutions. We're committed to making advanced software
                development accessible to everyone, from individual developers
                to enterprise teams.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 px-3 py-1">
                  AI-Powered Tools
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 px-3 py-1">
                  Cloud-Native
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 px-3 py-1">
                  Developer-First
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 px-3 py-1">
                  Open Source
                </Badge>
              </div>
            </div>

            <div className="about-stats-grid grid grid-cols-2 gap-6">
              <div className="about-stats text-center p-6 bg-gray-900/50 backdrop-blur-lg rounded-lg border border-gray-800">
                <div className="text-3xl font-bold text-blue-400 mb-2">4+</div>
                <div className="text-sm text-gray-300">Years of Innovation</div>
              </div>
              <div className="about-stats text-center p-6 bg-gray-900/50 backdrop-blur-lg rounded-lg border border-gray-800">
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  100K+
                </div>
                <div className="text-sm text-gray-300">Active Users</div>
              </div>
              <div className="about-stats text-center p-6 bg-gray-900/50 backdrop-blur-lg rounded-lg border border-gray-800">
                <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-sm text-gray-300">Team Members</div>
              </div>
              <div className="about-stats text-center p-6 bg-gray-900/50 backdrop-blur-lg rounded-lg border border-gray-800">
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  99.9%
                </div>
                <div className="text-sm text-gray-300">Uptime</div>
              </div>
            </div>
          </div>

          <div className="about-grid grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card
                  key={index}
                  className="about-card bg-gray-900/30 backdrop-blur-lg border-gray-800 hover:border-blue-500/50 transition-all duration-500 group hover:scale-105"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section ref={productsRef} id="products" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Our Product Suite
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional-grade software tools built for developers, by
              developers. Each product is crafted with precision and designed
              for maximum productivity.
            </p>
          </div>

          <div className="products-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <Card
                  key={index}
                  className="product-card bg-gray-900/30 backdrop-blur-lg border-gray-800 hover:border-blue-500/50 transition-all duration-500 group hover:scale-105"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${product.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <Badge
                        variant="secondary"
                        className={`
                        ${
                          product.status === "Popular"
                            ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                            : ""
                        }
                        ${
                          product.status === "New"
                            ? "bg-green-500/20 text-green-400 border-green-500/30"
                            : ""
                        }
                        ${
                          product.status === "Enterprise"
                            ? "bg-purple-500/20 text-purple-400 border-purple-500/30"
                            : ""
                        }
                        ${
                          product.status === "Trending"
                            ? "bg-orange-500/20 text-orange-400 border-orange-500/30"
                            : ""
                        }
                      `}
                      >
                        {product.status}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-400 mb-3">
                      {product.category}
                    </p>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {product.description}
                    </p>

                    <div className="features-list space-y-2 mb-6">
                      {product.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="feature-item flex items-center text-sm text-gray-300"
                        >
                          <Zap className="h-3 w-3 text-blue-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-300 ml-1">
                            {product.rating}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Download className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-300 ml-1">
                            {product.downloads}
                          </span>
                        </div>
                      </div>
                      <div className="text-lg font-bold text-blue-400">
                        {product.price}
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button className="flex-1 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 border-0 text-sm">
                        Try Free
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-blue-500"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who trust Light Webx products to build
            the future of software.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 border-0"
            >
              Start Free Trial
              <Zap className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-700 text-gray-300 hover:bg-gray-800"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800 bg-gray-900/30">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Light Webx. All rights reserved.
            Building the future, one product at a time.
          </p>
        </div>
      </footer>
    </div>
  );
}
