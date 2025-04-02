
"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Menu, X, Globe, Shield, Zap, Users, BarChart, Lock } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      title: "Global Infrastructure",
      description: "Enterprise-grade cloud infrastructure with 99.99% uptime guarantee across 200+ global regions.",
      icon: Globe,
      gradient: "from-[#0066FF] to-[#6D28D9]"
    },
    {
      title: "Advanced Security",
      description: "SOC 2 Type II certified with end-to-end encryption and advanced threat detection.",
      icon: Shield,
      gradient: "from-[#00A3FF] to-[#0066FF]"
    },
    {
      title: "Real-time Analytics",
      description: "AI-powered insights and predictive analytics with sub-second query performance.",
      icon: BarChart,
      gradient: "from-[#6D28D9] to-[#9333EA]"
    },
    {
      title: "Enterprise Controls",
      description: "Granular access controls, audit logs, and compliance management tools.",
      icon: Lock,
      gradient: "from-[#9333EA] to-[#7C3AED]"
    },
    {
      title: "Team Collaboration",
      description: "Advanced workflows, real-time collaboration, and team management tools.",
      icon: Users,
      gradient: "from-[#0066FF] to-[#00A3FF]"
    },
    {
      title: "High Performance",
      description: "Lightning-fast performance with advanced caching and optimization.",
      icon: Zap,
      gradient: "from-[#7C3AED] to-[#6D28D9]"
    }
  ];

  const stats = [
    { value: "200+", label: "Enterprise Customers" },
    { value: "99.99%", label: "Uptime SLA" },
    { value: "$2.8B", label: "Processing Annually" },
    { value: "24/7", label: "Enterprise Support" }
  ];

  const testimonials = [
    {
      quote: "Atlas has transformed how we handle our enterprise operations. The platform's capabilities are unmatched in the industry.",
      author: "Sarah Chen",
      role: "CTO, Fortune 500 Tech Company",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60"
    },
    {
      quote: "The enterprise security features and global infrastructure have given us confidence to scale our operations worldwide.",
      author: "Michael Zhang",
      role: "VP Engineering, Global Payments Leader",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/50 backdrop-blur-xl z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gradient">Atlas</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#platform" className="text-white/70 hover:text-white transition-colors text-sm font-medium">Platform</a>
              <a href="#security" className="text-white/70 hover:text-white transition-colors text-sm font-medium">Security</a>
              <a href="#enterprise" className="text-white/70 hover:text-white transition-colors text-sm font-medium">Enterprise</a>
              <a href="#pricing" className="text-white/70 hover:text-white transition-colors text-sm font-medium">Pricing</a>
              <button className="button-gradient text-white px-6 py-2.5 rounded-full text-sm font-medium">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white/70"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden bg-black/90 backdrop-blur-xl"
            >
              <div className="px-4 pt-2 pb-3 space-y-1">
                <a href="#platform" className="block px-3 py-2 text-white/70 hover:text-white text-sm font-medium">Platform</a>
                <a href="#security" className="block px-3 py-2 text-white/70 hover:text-white text-sm font-medium">Security</a>
                <a href="#enterprise" className="block px-3 py-2 text-white/70 hover:text-white text-sm font-medium">Enterprise</a>
                <a href="#pricing" className="block px-3 py-2 text-white/70 hover:text-white text-sm font-medium">Pricing</a>
                <button className="w-full mt-4 button-gradient text-white px-6 py-2.5 rounded-full text-sm font-medium">
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 overflow-hidden relative">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 noise-bg"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 bg-white/5 rounded-full text-sm font-medium text-white/70 mb-8">
              Trusted by Fortune 500 Companies
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto text-balance">
              Enterprise Infrastructure for the{" "}
              <span className="text-gradient">Modern Era</span>
            </h1>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Secure, scalable, and reliable infrastructure trusted by the world's leading enterprises. Built for the future of business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="button-gradient group px-8 py-4 rounded-full text-white font-medium inline-flex items-center">
                Schedule Enterprise Demo
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-full text-white border border-white/10 hover:bg-white/5 transition-colors font-medium">
                View Platform
              </button>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="platform" className="py-32 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Enterprise-Grade Platform
              </h2>
              <p className="text-xl text-white/70">
                Built for scale, security, and performance
              </p>
            </motion.div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="gradient-border group"
              >
                <div className="relative p-8 rounded-[23px] bg-black h-full">
                  <div className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-colors",
                    `bg-gradient-to-r ${feature.gradient}`
                  )}>
                    <feature.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Trusted by Global Leaders
              </h2>
              <p className="text-xl text-white/70">
                See why enterprises choose Atlas
              </p>
            </motion.div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="gradient-border"
              >
                <div className="relative p-8 rounded-[23px] bg-black">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.author}</h4>
                      <p className="text-white/70 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/70 text-lg leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 hero-gradient opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto text-balance">
              Ready to Transform Your Enterprise Infrastructure?
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Join the world's leading enterprises in building the future of business infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="button-gradient group px-8 py-4 rounded-full text-white font-medium inline-flex items-center">
                Schedule Enterprise Demo
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-full text-white border border-white/10 hover:bg-white/5 transition-colors font-medium">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gradient mb-6">Atlas</h3>
              <p className="text-white/70">
                Enterprise infrastructure for the modern era.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Platform</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Enterprise</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">© 2024 Atlas Technologies, Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Privacy</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Terms</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}