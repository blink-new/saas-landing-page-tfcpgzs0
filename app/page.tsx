
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      title: "AI-Powered Insights",
      description: "Harness the power of artificial intelligence to uncover actionable insights and drive strategic decisions.",
      icon: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",
      color: "from-violet-500/20 to-fuchsia-500/20"
    },
    {
      title: "Enterprise Security",
      description: "Bank-grade encryption and security protocols to protect your most sensitive data and operations.",
      icon: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&auto=format&fit=crop&q=60",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Global Infrastructure",
      description: "Powered by a worldwide network of data centers ensuring 99.99% uptime and lightning-fast performance.",
      icon: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=60",
      color: "from-orange-500/20 to-yellow-500/20"
    },
  ];

  const plans = [
    {
      name: "Growth",
      price: "$99",
      description: "Perfect for growing businesses",
      features: [
        "Advanced Analytics Dashboard",
        "Up to 50 Team Members",
        "100GB Secure Storage",
        "24/7 Email Support",
        "API Access"
      ],
    },
    {
      name: "Scale",
      price: "$299",
      description: "For organizations ready to scale",
      features: [
        "Enterprise Analytics Suite",
        "Unlimited Team Members",
        "1TB Secure Storage",
        "24/7 Priority Support",
        "Advanced API Access",
        "Custom Integrations",
        "Dedicated Account Manager"
      ],
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large enterprises",
      features: [
        "Custom Analytics Solutions",
        "Unlimited Everything",
        "Custom Storage Solutions",
        "White-glove Support",
        "Full API Access",
        "Custom Development",
        "Dedicated Success Team"
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/50 backdrop-blur-xl z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                Quantum
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-white/70 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-white/70 hover:text-white transition-colors">Pricing</a>
              <a href="#testimonials" className="text-white/70 hover:text-white transition-colors">Enterprise</a>
              <button className="bg-white text-black px-6 py-2.5 rounded-full hover:bg-white/90 transition-colors font-medium">
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
              className="md:hidden bg-black/90 backdrop-blur-xl border-b border-white/10"
            >
              <div className="px-4 pt-2 pb-3 space-y-1">
                <a href="#features" className="block px-3 py-2 text-white/70 hover:text-white">Features</a>
                <a href="#pricing" className="block px-3 py-2 text-white/70 hover:text-white">Pricing</a>
                <a href="#testimonials" className="block px-3 py-2 text-white/70 hover:text-white">Enterprise</a>
                <button className="w-full mt-4 bg-white text-black px-6 py-2.5 rounded-full font-medium">
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Background Effects */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-violet-500/30 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]" />
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 aspect-square w-96 rounded-full bg-gradient-to-tr from-[#FF80B5] to-[#9089FC] opacity-30 blur-3xl" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-10"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              The Future of{" "}
              <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                Enterprise Software
              </span>
            </h1>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Transform your business with AI-powered insights, enterprise-grade security, and unparalleled scalability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-white px-8 py-4 rounded-full text-lg text-black hover:bg-white/90 transition-all flex items-center justify-center gap-2">
                Start Free Trial
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-full text-lg text-white border border-white/20 hover:bg-white/10 transition-colors">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-black relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Enterprise-Grade Features
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
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative"
              >
                <div className={cn(
                  "absolute inset-0 rounded-3xl bg-gradient-to-b opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                  feature.color
                )} />
                <div className="relative bg-white/5 rounded-3xl p-8 hover:bg-white/10 transition-colors border border-white/10">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-full h-48 object-cover rounded-xl mb-6"
                  />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/70">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 bg-black relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-violet-500/20 to-transparent [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Pricing Plans
              </h2>
              <p className="text-xl text-white/70">
                Choose the perfect plan for your business
              </p>
            </motion.div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={cn(
                  "relative bg-white/5 rounded-3xl p-8 hover:bg-white/10 transition-all border",
                  plan.featured ? "border-blue-500" : "border-white/10"
                )}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-white/70">/month</span>}
                </div>
                <p className="text-white/70 mb-8">{plan.description}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-white/70">
                      <CheckCircle className="text-blue-500" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={cn(
                  "w-full px-6 py-3 rounded-full font-medium transition-colors",
                  plan.featured
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "bg-white/10 text-white hover:bg-white/20"
                )}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-32 bg-black relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-white/70">
                Join thousands of companies transforming their business
              </p>
            </motion.div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.5}}
              className="bg-white/5 p-8 rounded-3xl border border-white/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60"
                  alt="CEO"
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                />
                <div>
                  <h4 className="font-semibold text-white">Michael Chen</h4>
                  <p className="text-white/70">CEO, TechGlobal Inc.</p>
                </div>
              </div>
              <p className="text-white/70 text-lg leading-relaxed">
                "Quantum has revolutionized how we handle our enterprise operations. The AI-powered insights have given us a competitive edge we never thought possible."
              </p>
            </motion.div>
            <motion.div
              initial={{opacity: 0, x: 20}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.5}}
              className="bg-white/5 p-8 rounded-3xl border border-white/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60"
                  alt="CTO"
                  className="w-16 h-16 rounded-full object-cover border-2 border-violet-500"
                />
                <div>
                  <h4 className="font-semibold text-white">Sarah Williams</h4>
                  <p className="text-white/70">CTO, Future Systems</p>
                </div>
              </div>
              <p className="text-white/70 text-lg leading-relaxed">
                "The enterprise-grade security and scalability are unmatched. We've seen a 300% improvement in our operational efficiency since implementing Quantum."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-violet-500/20 [mask-image:radial-gradient(farthest-side_at_bottom,white,transparent)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Join the next generation of industry leaders. Start your journey with Quantum today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-white px-8 py-4 rounded-full text-lg text-black hover:bg-white/90 transition-all flex items-center justify-center gap-2">
                Get Started Now
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-full text-lg text-white border border-white/20 hover:bg-white/10 transition-colors">
                Talk to Sales
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
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent mb-6">
                Quantum
              </h3>
              <p className="text-white/70">
                Empowering enterprises with next-generation software solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-white/70 hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="text-white/70 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Enterprise</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/70">
            <p>© 2024 Quantum. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}