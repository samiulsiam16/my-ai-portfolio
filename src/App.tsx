import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  Github, Linkedin, Mail, Twitter, ExternalLink, 
  Cpu, Brain, Code, Database, ChevronRight, 
  Terminal, Zap, Layers, Activity, Sparkles, 
  Rocket, Ghost, Smile, User, Briefcase, 
  ShieldCheck, Globe, Menu, X, Monitor, 
  Cpu as Processor, HardDrive, Wifi, Lock
} from "lucide-react";
import { useState, useEffect, ReactNode } from "react";
import portfolioData from "./data/portfolio.json";

// --- Components ---

const HUDCorners = () => (
  <>
    <div className="hud-corner hud-corner-tl" />
    <div className="hud-corner hud-corner-tr" />
    <div className="hud-corner hud-corner-bl" />
    <div className="hud-corner hud-corner-br" />
  </>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", icon: Globe },
    { name: "About", path: "/about", icon: User },
    { name: "Services", path: "/services", icon: Briefcase },
    { name: "Projects", path: "/projects", icon: Code },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 glass-panel flex items-center justify-center border-cyber-cyan/30 group-hover:border-cyber-cyan transition-all">
            <Cpu className="w-6 h-6 text-cyber-cyan" />
          </div>
          <span className="text-xl font-black tracking-tighter text-white">
            SAMIUL<span className="text-cyber-cyan">.OS</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-2 glass-panel p-1 border-white/5">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-6 py-2 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2 ${
                location.pathname === link.path 
                ? "bg-cyber-cyan text-deep-slate shadow-[0_0_20px_rgba(34,211,238,0.3)]" 
                : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <link.icon className="w-3 h-3" />
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden w-10 h-10 glass-panel flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-6 right-6 glass-panel p-6 md:hidden border-white/10"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-6 py-4 rounded-xl text-sm font-bold uppercase tracking-widest flex items-center gap-4 ${
                    location.pathname === link.path 
                    ? "bg-cyber-cyan text-deep-slate" 
                    : "text-slate-400 hover:bg-white/5"
                  }`}
                >
                  <link.icon className="w-4 h-4" />
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const PageTransition = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 1.02 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className="min-h-screen pt-24"
  >
    {children}
  </motion.div>
);

// --- Pages ---

const Home = () => {
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setBooting(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PageTransition>
      <div className="section-padding flex flex-col items-center justify-center text-center relative min-h-[80vh]">
        <div className="scanline" />
        
        <AnimatePresence>
          {booting ? (
            <motion.div
              key="boot"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="absolute inset-0 z-50 bg-deep-slate flex flex-col items-center justify-center font-mono text-cyber-cyan"
            >
              <div className="max-w-md w-full p-8 glass-panel border-cyber-cyan/30">
                <div className="flex items-center gap-2 mb-4">
                  <Terminal className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-widest">System Boot Sequence</span>
                </div>
                <div className="space-y-2 text-[10px] text-left">
                  <p className="animate-pulse">{">>"} INITIALIZING NEURAL LINK...</p>
                  <p className="delay-100 animate-pulse">{">>"} LOADING CORE ARCHITECTURE...</p>
                  <p className="delay-200 animate-pulse">{">>"} ESTABLISHING SECURE PROTOCOLS...</p>
                  <p className="delay-300 animate-pulse">{">>"} ACCESSING SAMIUL.OS DATABASE...</p>
                  <div className="w-full h-1 bg-white/10 mt-4 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.5 }}
                      className="h-full bg-cyber-cyan"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative z-10"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 px-6 py-2 glass-panel border-cyber-cyan/20 inline-flex items-center gap-3"
              >
                <HUDCorners />
                <div className="w-2 h-2 bg-cyber-cyan rounded-full animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                <span className="text-[10px] font-mono text-cyber-cyan uppercase tracking-[0.4em] text-glow">Neural Link Established</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-6xl md:text-9xl font-black mb-8 leading-none tracking-tighter"
              >
                WELCOME TO <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-cyber-indigo to-cyber-pink text-glow">THE INTERFACE</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed"
              >
                I am <span className="text-white font-bold">{portfolioData.personal.name}</span>. 
                A Software Engineer architecting digital realities through code and automation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap justify-center gap-6"
              >
                <Link to="/about" className="cyber-btn flex items-center gap-3">
                  Initialize About <ChevronRight className="w-5 h-5" />
                </Link>
                <Link to="/projects" className="cyber-btn-outline">
                  View Archives
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Decorative 3D-like elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyber-cyan/10 blur-[100px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-pink/10 blur-[120px] rounded-full" />
        </div>
      </div>
    </PageTransition>
  );
};

const About = () => {
  return (
    <PageTransition>
      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-8">IDENTITY <span className="text-cyber-cyan">PROFILE</span></h2>
            <p className="text-xl text-slate-400 leading-relaxed mb-8 font-medium">
              {portfolioData.personal.bio}
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-panel p-6">
                <div className="text-cyber-cyan font-mono text-xs mb-2 uppercase tracking-widest">Location</div>
                <div className="text-white font-bold">{portfolioData.personal.location}</div>
              </div>
              <div className="glass-panel p-6">
                <div className="text-cyber-pink font-mono text-xs mb-2 uppercase tracking-widest">Status</div>
                <div className="text-white font-bold">Active Learner</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative perspective-card"
          >
            <div className="aspect-square glass-panel p-2 overflow-hidden border-cyber-cyan/20 perspective-card-inner">
              <HUDCorners />
              <img 
                src="https://picsum.photos/seed/tech/800/800" 
                alt="Profile" 
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Floating UI elements */}
            <div className="absolute -top-6 -right-6 glass-panel p-4 border-cyber-pink/30 animate-bounce">
              <Brain className="w-8 h-8 text-cyber-pink" />
            </div>
            <div className="absolute -bottom-6 -left-6 glass-panel p-4 border-cyber-cyan/30">
              <Code className="w-8 h-8 text-cyber-cyan" />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          <div className="glass-panel p-8 relative">
            <HUDCorners />
            <div className="flex items-center gap-4 mb-6">
              <Processor className="w-8 h-8 text-cyber-cyan" />
              <h4 className="text-xl font-black">SYSTEM SPECS</h4>
            </div>
            <div className="space-y-4 font-mono text-xs">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-500 uppercase">Core Logic</span>
                <span className="text-white">TypeScript / C#</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-500 uppercase">Neural Engine</span>
                <span className="text-white">React / .NET</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-500 uppercase">Automation</span>
                <span className="text-white">n8n / Zapier</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 uppercase">Uptime</span>
                <span className="text-cyber-cyan">99.9%</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 glass-panel p-8 relative">
            <HUDCorners />
            <div className="flex items-center gap-4 mb-6">
              <Activity className="w-8 h-8 text-cyber-pink" />
              <h4 className="text-xl font-black">NEURAL STATUS</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-2">
                    <span>Frontend Sync</span>
                    <span className="text-cyber-cyan">95%</span>
                  </div>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "95%" }} className="h-full bg-cyber-cyan shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-2">
                    <span>Backend Logic</span>
                    <span className="text-cyber-pink">85%</span>
                  </div>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "85%" }} className="h-full bg-cyber-pink shadow-[0_0_10px_rgba(244,114,182,0.5)]" />
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-2">
                    <span>AI Integration</span>
                    <span className="text-cyber-indigo">70%</span>
                  </div>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "70%" }} className="h-full bg-cyber-indigo shadow-[0_0_10px_rgba(129,140,248,0.5)]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-2">
                    <span>Creative Design</span>
                    <span className="text-white">90%</span>
                  </div>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "90%" }} className="h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-3xl font-black mb-12 uppercase tracking-widest text-center">Neural <span className="text-cyber-indigo">Qualities</span></h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.qualities.map((quality, idx) => {
            const QualityIcon = [ShieldCheck, Zap, Brain, Rocket][idx % 4];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-8 group relative perspective-card"
              >
                <div className="perspective-card-inner">
                  <HUDCorners />
                  <div className="w-12 h-12 glass-panel flex items-center justify-center mb-6 border-white/10 group-hover:border-cyber-cyan transition-all">
                    <QualityIcon className="w-6 h-6 text-cyber-cyan" />
                  </div>
                  <h4 className="text-xl font-black mb-4 group-hover:text-cyber-cyan transition-colors">{quality.title}</h4>
                  <p className="text-sm text-slate-400 font-medium leading-relaxed">{quality.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </PageTransition>
  );
};

const Services = () => {
  return (
    <PageTransition>
      <div className="section-padding max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black mb-6">CORE <span className="text-cyber-pink">SERVICES</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-medium">Specialized digital solutions powered by advanced engineering and automation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-10 flex flex-col md:flex-row gap-8 items-center md:items-start group relative perspective-card"
            >
              <div className="perspective-card-inner flex flex-col md:flex-row gap-8 items-center md:items-start w-full">
                <HUDCorners />
                <div className="w-20 h-20 shrink-0 glass-panel flex items-center justify-center border-white/5 group-hover:border-cyber-pink transition-all">
                  {idx === 0 && <Zap className="w-10 h-10 text-cyber-pink" />}
                  {idx === 1 && <Database className="w-10 h-10 text-cyber-pink" />}
                  {idx === 2 && <Activity className="w-10 h-10 text-cyber-pink" />}
                  {idx === 3 && <Terminal className="w-10 h-10 text-cyber-pink" />}
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-4 group-hover:text-white transition-colors uppercase">{service.title}</h3>
                  <p className="text-slate-400 font-medium leading-relaxed mb-6">{service.description}</p>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-cyber-pink rounded-full shadow-[0_0_10px_rgba(244,114,182,0.5)]" />
                    <div className="w-2 h-2 bg-cyber-pink/30 rounded-full" />
                    <div className="w-2 h-2 bg-cyber-pink/10 rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

const Projects = () => {
  return (
    <PageTransition>
      <div className="section-padding max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-black mb-6">PROJECT <span className="text-cyber-indigo">ARCHIVES</span></h2>
            <p className="text-slate-400 max-w-xl font-medium">A collection of experimental and production-ready implementations.</p>
          </div>
          <div className="flex gap-4">
            <div className="px-6 py-3 glass-panel text-xs font-bold uppercase tracking-widest border-cyber-indigo/30">Total: {portfolioData.projects.length}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolioData.projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel overflow-hidden flex flex-col group relative perspective-card"
            >
              <div className="perspective-card-inner flex flex-col h-full">
                <HUDCorners />
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-slate to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 glass-panel bg-deep-slate/50 text-[8px] font-black uppercase tracking-widest text-cyber-indigo">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-black mb-4 group-hover:text-cyber-indigo transition-colors">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-8 font-medium leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center">
                    <a href={project.link} className="text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors">
                      Access Source <ExternalLink className="w-3 h-3" />
                    </a>
                    <Layers className="w-4 h-4 text-slate-700" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

const Contact = () => {
  return (
    <PageTransition>
      <div className="section-padding max-w-4xl mx-auto text-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="glass-panel p-10 border-cyber-cyan/20 relative overflow-hidden">
              <HUDCorners />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-cyan to-transparent" />
              
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                ESTABLISH <br />
                <span className="text-cyber-cyan">CONNECTION</span>
              </h2>
              <p className="text-slate-400 text-sm mb-8 font-medium">
                Open for high-impact collaborations, research opportunities, and technical leadership roles.
              </p>
              
              <div className="space-y-4">
                <a 
                  href={`mailto:${portfolioData.personal.email}`}
                  className="cyber-btn w-full flex items-center justify-center gap-3"
                >
                  <Mail className="w-5 h-5" /> Send Transmission
                </a>
                <div className="flex gap-4">
                  <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="flex-1 h-14 glass-panel flex items-center justify-center hover:border-cyber-cyan transition-all">
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                  <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="flex-1 h-14 glass-panel flex items-center justify-center hover:border-cyber-cyan transition-all">
                    <Github className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6 font-mono text-[10px] text-cyber-cyan/60">
              <div className="flex items-center gap-2 mb-2">
                <Wifi className="w-3 h-3" />
                <span>SIGNAL STRENGTH: OPTIMAL</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-3 h-3" />
                <span>ENCRYPTION: AES-256 ACTIVE</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 glass-panel p-10 relative"
          >
            <HUDCorners />
            <form className="space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">Identity Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter Name..."
                    className="w-full bg-deep-slate/50 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-cyber-cyan transition-all font-mono text-sm text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">Neural Address</label>
                  <input 
                    type="email" 
                    placeholder="Enter Email..."
                    className="w-full bg-deep-slate/50 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-cyber-cyan transition-all font-mono text-sm text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">Transmission Data</label>
                <textarea 
                  rows={5}
                  placeholder="Enter Message..."
                  className="w-full bg-deep-slate/50 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-cyber-cyan transition-all font-mono text-sm text-white resize-none"
                />
              </div>
              <button className="cyber-btn w-full md:w-auto">
                Execute Transmission
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 text-center bg-deep-slate/50 backdrop-blur-md">
      <div className="flex justify-center gap-8 mb-6 text-[10px] font-black uppercase tracking-[0.4em] text-slate-600">
        <a href="#" className="hover:text-cyber-cyan transition-colors">Protocol</a>
        <a href="#" className="hover:text-cyber-cyan transition-colors">Security</a>
        <a href="#" className="hover:text-cyber-cyan transition-colors">Nodes</a>
      </div>
      <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
        © {new Date().getFullYear()} SAMIUL-OS ARCHITECTURE. ALL SYSTEMS NOMINAL.
      </p>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname} {...({ location, key: location.pathname } as any)}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
