/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Brain, 
  Cpu, 
  Network, 
  Layers, 
  Mail, 
  Linkedin, 
  ChevronRight, 
  Menu, 
  X, 
  ArrowRight,
  Zap,
  Bot,
  Database,
  Code,
  ExternalLink,
  ShieldCheck,
  Lock,
  Scale,
  Eye
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'AI & AaaS', href: '#ai' },
    { name: 'Governance', href: '#governance' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Brain className="text-white w-5 h-5" />
          </div>
          <span className={`text-xl font-bold tracking-tighter transition-colors ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>Neurovi@</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium transition-colors ${isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-full transition-all"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`md:hidden ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-slate-600 hover:text-blue-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden bg-white">
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f612_1px,transparent_1px),linear-gradient(to_bottom,#3b82f612_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-radial-gradient(circle_at_center,transparent_0%,#f8fafc_100%)"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-600 text-xs font-bold uppercase tracking-widest mb-6">
            <Zap className="w-3 h-3" />
            <span>Agentic AI & AaaS</span>
          </div>
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/10 blur-[120px] pointer-events-none"></div>
          <h1 className="text-6xl md:text-8xl font-bold text-slate-900 tracking-tighter leading-none mb-8">
            Neurovi@ <br />
            <span className="text-blue-600">Agentic</span> Intelligence.
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
            Transforming productivity with Agent-as-a-Service and Agent Fusion. A strategic framework for autonomous, collaborative, and adaptable AI agents.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#ai" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all flex items-center gap-2 group shadow-lg shadow-blue-500/20">
              Explore AaaS
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#architecture" className="px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold rounded-xl border border-slate-200 transition-all">
              View Architecture
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-1/2 hidden lg:block pointer-events-none">
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full h-full"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl"></div>
          
          {/* Central AI Core */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-48 h-48 rounded-full border border-blue-500/20 flex items-center justify-center bg-blue-500/5 backdrop-blur-sm"
              >
                <Brain className="w-24 h-24 text-blue-600 opacity-80" strokeWidth={1} />
              </motion.div>
              
              {/* Orbiting Agents */}
              {[0, 120, 240].map((angle, i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <motion.div 
                    style={{ transform: `translateY(-120px)` }}
                    className="w-10 h-10 bg-white border border-blue-200 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.1)]"
                  >
                    {i === 0 ? <Bot className="w-5 h-5 text-blue-600" /> : 
                     i === 1 ? <Cpu className="w-5 h-5 text-purple-600" /> : 
                     <Database className="w-5 h-5 text-blue-600" />}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const AISection = () => {
  return (
    <section id="ai" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Agentic AI Strategy</h2>
            <p className="text-slate-600 text-lg">The next productivity revolution driven by intelligent software agents that plan, decide, and act autonomously.</p>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-4 text-sm font-mono text-blue-600/60">
              <span>0x01 // AGENT FUSION</span>
              <div className="w-12 h-px bg-blue-600/20"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {/* Featured Article */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="lg:col-span-2 p-10 rounded-3xl bg-white border border-slate-200 relative overflow-hidden group shadow-sm"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Bot className="w-48 h-48 text-blue-600" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6">
                <Zap className="w-4 h-4" />
                <span>Strategic Framework</span>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">AaaS & Agent Fusion: <br />Transforming Organizational Productivity</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-xl">
                Modern organizations are on the cusp of a productivity revolution. Agentic AI enables autonomous, collaborative, and adaptable AI agents across organizational processes, moving beyond simple automation to intelligent decision-making.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <h4 className="text-slate-900 font-bold mb-2 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-blue-600" />
                    Autonomous Planning
                  </h4>
                  <p className="text-xs text-slate-500">Agents that can decompose complex goals into actionable steps without human intervention.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <h4 className="text-slate-900 font-bold mb-2 flex items-center gap-2">
                    <Network className="w-4 h-4 text-purple-600" />
                    Agent Fusion
                  </h4>
                  <p className="text-xs text-slate-500">Multi-agent systems where specialized agents collaborate to solve cross-functional challenges.</p>
                </div>
              </div>
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20">
                Read Full Blueprint
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Sidebar Insights */}
          <div className="flex flex-col gap-6">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4 text-blue-600">
                <Database className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest">Data-Centric AI</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Beyond APIs: Data Fusion</h4>
              <p className="text-slate-600 text-sm">Conceptual Architecture – Enabling AaaS and Agent Fusion on Data, not just static APIs.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white border border-slate-200 opacity-60 shadow-sm">
              <div className="flex items-center gap-3 mb-4 text-slate-400">
                <Layers className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest">R.A.G Frameworks</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">RAG Architectures</h4>
              <p className="text-slate-500 text-sm">Coming soon: Deep dive into Retrieval-Augmented Generation for enterprise knowledge.</p>
            </div>
          </div>
        </div>

        {/* Conceptual Architecture Visual */}
        <div id="architecture" className="p-12 rounded-3xl bg-white border border-slate-200 relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[100px] pointer-events-none"></div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Conceptual Architecture</h3>
            <p className="text-slate-500 text-sm uppercase tracking-widest font-bold">Multi-Agent Systems & Agent Fusion</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative">
            {/* Agent 1 */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="w-48 p-6 bg-white border border-blue-200 rounded-2xl text-center relative z-10 shadow-sm"
            >
              <Bot className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h4 className="text-slate-900 font-bold text-sm">Planning Agent</h4>
              <p className="text-[10px] text-slate-500 mt-2">Goal Decomposition & Task Orchestration</p>
            </motion.div>

            <div className="hidden md:block w-12 h-px bg-gradient-to-r from-blue-500/50 to-purple-500/50"></div>

            {/* Fusion Core */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-32 h-32 rounded-full border-2 border-dashed border-purple-300 flex items-center justify-center relative"
            >
              <div className="absolute inset-0 bg-purple-500/5 rounded-full blur-xl"></div>
              <Cpu className="w-12 h-12 text-purple-600" />
            </motion.div>

            <div className="hidden md:block w-12 h-px bg-gradient-to-r from-purple-500/50 to-blue-500/50"></div>

            {/* Agent 2 */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="w-48 p-6 bg-white border border-blue-200 rounded-2xl text-center relative z-10 shadow-sm"
            >
              <Code className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h4 className="text-slate-900 font-bold text-sm">Execution Agent</h4>
              <p className="text-[10px] text-slate-500 mt-2">Tool Interaction & API Execution</p>
            </motion.div>

            {/* Connector Lines (Visual only) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
              <div className="absolute top-1/2 left-0 w-full h-px bg-blue-500/50"></div>
              <div className="absolute top-0 left-1/2 w-px h-full bg-purple-500/50"></div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-slate-500 text-sm italic">"Agent Fusion Architecture: Enabling AaaS on Data (Not Just APIs)"</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-600 text-xs font-bold uppercase tracking-widest mb-6">
              The Architect
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-8 tracking-tight">Farrukh Iqbal</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                A seasoned Enterprise and Solution Architect with over 20 years of international experience spanning banking, education, telecommunications, healthcare, and aviation sectors.
              </p>
              <p>
                Currently strategizing and architecting cutting-edge Generative AI, Agentic AI, and RAG-based solutions. Farrukh has a strong track record of delivering complex digital transformations at organizations like Westpac NZ and Air New Zealand.
              </p>
              <p>
                His expertise bridges strategic vision and technical execution, underpinned by skills in Azure, AWS, CI/CD, and enterprise integration.
              </p>
            </div>
            
            <div className="mt-10">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Certifications & Affiliations</h3>
              <div className="flex flex-wrap gap-8 items-center mb-6">
                {[
                  { name: 'Azure', logo: 'https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png', isBadge: true },
                  { name: 'Azure Fundamentals', logo: 'https://images.credly.com/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png', isBadge: true },
                  { name: 'AWS', logo: 'https://images.credly.com/images/e1449791-a907-49be-a76d-c8d2723923e5/image.png', isBadge: true },
                  { name: 'PMI-ACP', logo: 'https://images.credly.com/images/f5c094f4-e07c-44e0-b685-4ffd8980fd53/blob', isBadge: true },
                  { name: 'OpenAI', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg' },
                  { name: 'Anthropic', logo: 'data:image/png;base64,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', isSmall: true },
                ].map(cert => (
                  <div key={cert.name} className="group relative">
                    <img 
                      src={cert.logo} 
                      alt={cert.name} 
                      className={`${cert.isBadge ? 'h-12 md:h-16' : cert.isSmall ? 'h-4 md:h-5' : 'h-6 md:h-8'} w-auto transition-all duration-300`}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        const span = document.createElement('span');
                        span.className = "text-xs font-bold text-slate-400";
                        span.innerText = cert.name;
                        (e.target as HTMLImageElement).parentElement!.appendChild(span);
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {['BBA-ITM(Hons)', 'MBA-IT'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-md text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-slate-200 flex items-center justify-center relative group shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/tech/800/800')] bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="relative z-10 p-12 text-center">
                <Layers className="w-24 h-24 text-blue-600 mx-auto mb-6 opacity-50" />
                <p className="text-slate-900 font-mono text-sm opacity-60">Architecting the Future</p>
              </div>
            </div>
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -left-6 p-6 bg-white border border-slate-200 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="text-3xl font-bold text-blue-600">20+</div>
                <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Years of <br />Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-slate-900 mb-8 tracking-tight">Let's Ideate Together</h2>
        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
          I'm keen to hear about what you think or share if something you read here was useful.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a 
            href="mailto:farrukh.newzealand@outlook.com" 
            className="flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20"
          >
            <Mail className="w-5 h-5" />
            Email Me
          </a>
          <a 
            href="https://www.linkedin.com/in/farrukhmalik/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold rounded-xl border border-slate-200 transition-all"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
            <Brain className="text-white w-4 h-4" />
          </div>
          <span className="text-lg font-bold tracking-tighter text-slate-900">Neurovi@</span>
        </div>
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Neurovi@. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="mailto:farrukh.newzealand@outlook.com" className="text-slate-400 hover:text-blue-600 transition-colors"><Mail className="w-5 h-5" /></a>
          <a href="https://www.linkedin.com/in/farrukhmalik/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors"><Linkedin className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  );
};

const StrategicFramework = () => {
  const steps = [
    { title: "Ideation", desc: "Identifying high-impact use cases for agentic AI within organizational workflows." },
    { title: "Architecture", desc: "Designing multi-agent systems that leverage Agent Fusion for complex problem solving." },
    { title: "Implementation", desc: "Deploying autonomous agents using AaaS models on enterprise data." },
    { title: "Evolution", desc: "Continuous monitoring and refinement of agent performance and collaboration." }
  ];

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Strategic Framework</h2>
          <p className="text-slate-600">A structured approach to implementing Agentic AI at scale.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -top-4 -left-4 text-6xl font-black text-slate-200 group-hover:text-blue-600/10 transition-colors">0{idx + 1}</div>
              <div className="relative z-10 p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-600/50 transition-all shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechStack = () => {
  const techs = [
    { name: "Generative AI", icon: Brain },
    { name: "Agentic AI", icon: Bot },
    { name: "RAG Systems", icon: Database },
    { name: "Azure AI", icon: Cpu },
    { name: "AWS Bedrock", icon: Network },
    { name: "Multi-Agent Systems", icon: Layers }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity">
          {techs.map((tech, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <tech.icon className="w-6 h-6 text-blue-600" />
              <span className="text-sm font-bold uppercase tracking-widest text-slate-500">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AIGovernance = () => {
  const pillars = [
    { 
      title: "Ethical AI", 
      icon: Scale, 
      desc: "Ensuring fairness, transparency, and bias mitigation in autonomous agent decision-making." 
    },
    { 
      title: "Compliance", 
      icon: ShieldCheck, 
      desc: "Adhering to global standards (GDPR, ISO/IEC 42001) and industry-specific regulatory requirements." 
    },
    { 
      title: "Security & Privacy", 
      icon: Lock, 
      desc: "Protecting enterprise data and model integrity through robust encryption and access controls." 
    },
    { 
      title: "Observability", 
      icon: Eye, 
      desc: "Comprehensive audit trails and real-time monitoring of agentic behaviors and performance." 
    }
  ];

  return (
    <section id="governance" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-600/5 blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">AI Governance & Ethics</h2>
            <p className="text-slate-600 text-lg">Building trust through responsible AI implementation and robust governance frameworks.</p>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-4 text-sm font-mono text-purple-600/60">
              <span>0x02 // RESPONSIBLE AI</span>
              <div className="w-12 h-px bg-purple-600/20"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ x: 10 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-200 flex gap-6 group shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center shrink-0 group-hover:bg-purple-500/20 transition-colors">
                <pillar.icon className="w-7 h-7 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{pillar.title}</h3>
                <p className="text-slate-500 leading-relaxed">{pillar.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-3xl bg-slate-50 border border-dashed border-slate-200 text-center">
          <p className="text-slate-500 italic">
            "Governance is not a blocker to innovation; it is the foundation that makes innovation sustainable and safe."
          </p>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-100">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <AISection />
        <AIGovernance />
        <StrategicFramework />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
