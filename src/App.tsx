import { motion } from "motion/react";
import { Github, Linkedin, Mail, Twitter, ExternalLink, Cpu, Brain, Code, Database, ChevronRight, Terminal, Zap, Layers, Activity } from "lucide-react";
import portfolioData from "./data/portfolio.json";

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 glass-card py-3 px-8 flex gap-8 items-center rounded-full"
    >
      <div className="text-lg font-black tracking-tighter flex items-center gap-2 mr-4">
        <div className="w-6 h-6 bg-mint rounded flex items-center justify-center">
          <Cpu className="w-4 h-4 text-midnight" />
        </div>
        <span className="hidden sm:inline">NEURAL<span className="text-mint">GLASS</span></span>
      </div>
      <div className="flex gap-6 text-xs font-bold uppercase tracking-widest text-slate-400">
        {["About", "Projects", "Experience"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-mint transition-colors">
            {item}
          </a>
        ))}
      </div>
      <div className="w-[1px] h-4 bg-white/10 mx-2" />
      <div className="flex gap-4">
        <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="hover:text-mint transition-colors">
          <Github className="w-4 h-4" />
        </a>
        <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="hover:text-mint transition-colors">
          <Linkedin className="w-4 h-4" />
        </a>
      </div>
    </motion.nav>
  );
};

const NeuralNodes = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%",
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{ 
            y: [null, (Math.random() * 100) + "%"],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute w-1 h-1 bg-mint rounded-full shadow-[0_0_10px_#2dd4bf]"
        />
      ))}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(45, 212, 191, 0.1)" />
            <stop offset="100%" stopColor="rgba(34, 211, 238, 0.1)" />
          </linearGradient>
        </defs>
        <path 
          d="M 100 100 L 300 400 L 600 200 L 800 500" 
          stroke="url(#line-grad)" 
          strokeWidth="0.5" 
          fill="none" 
          className="animate-pulse"
        />
      </svg>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center section-padding relative overflow-hidden grainy-gradient">
      <NeuralNodes />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-deep/30 blur-[150px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-mint/10 blur-[120px] rounded-full" />
      
      <div className="z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-8 border-mint/20"
        >
          <div className="w-2 h-2 rounded-full bg-mint animate-ping" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-mint">System Online: v2.4.0</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-9xl font-black mb-8 leading-[0.9] tracking-tighter"
        >
          NEURAL <br />
          <span className="text-neon">ARCHITECT</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed"
        >
          {portfolioData.personal.bio}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <button className="px-10 py-5 bg-mint text-midnight font-black rounded-2xl hover:scale-105 transition-transform shadow-[0_0_20px_rgba(45,212,191,0.3)]">
            INITIALIZE PROJECT
          </button>
          <button className="px-10 py-5 glass-card font-black rounded-2xl hover:bg-white/10 transition-colors">
            VIEW SOURCE
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const BentoGrid = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Large Bio Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 md:row-span-2 glass-card p-10 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-mint/5 rounded-full blur-3xl group-hover:bg-mint/10 transition-colors" />
            <div>
              <div className="w-12 h-12 bg-mint/10 rounded-2xl flex items-center justify-center mb-6">
                <Brain className="text-mint w-6 h-6" />
              </div>
              <h3 className="text-3xl font-black mb-4">Core Intelligence</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Specializing in the intersection of high-performance software engineering and advanced machine learning. 
                Building systems that don't just process data, but understand it.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-[10px] font-bold uppercase tracking-widest">Distributed Systems</div>
              <div className="px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-[10px] font-bold uppercase tracking-widest">LLM Ops</div>
            </div>
          </motion.div>

          {/* Tech Stack Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 glass-card p-8"
          >
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-mint mb-6">Tech Stack Velocity</h4>
            <div className="space-y-4">
              {portfolioData.skills.slice(0, 4).map((skill, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between text-[10px] font-bold uppercase">
                    <span>{skill.name}</span>
                    <span className="text-mint">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      className="h-full seaborn-gradient"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Code Snippet Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 glass-card p-8 bg-indigo-deep/20"
          >
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="w-4 h-4 text-cyber-orange" />
              <span className="text-[10px] font-mono text-slate-500">neural_router.py</span>
            </div>
            <pre className="code-block text-mint/80">
              <code>{`def optimize_weights(layers):\n  for layer in layers:\n    layer.grad = compute_grad(layer)\n    layer.step(lr=1e-4)\n  return layers`}</code>
            </pre>
          </motion.div>

          {/* Stats Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="glass-card p-8 flex flex-col items-center justify-center text-center"
          >
            <Activity className="w-8 h-8 text-electric-cyan mb-4" />
            <div className="text-4xl font-black mb-1">99.9%</div>
            <div className="text-[10px] font-bold uppercase text-slate-500">Uptime Architecture</div>
          </motion.div>

          {/* Automation Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="glass-card p-8 flex flex-col items-center justify-center text-center border-circuit-orange/20"
          >
            <Zap className="w-8 h-8 text-circuit-orange mb-4" />
            <div className="text-4xl font-black mb-1">500+</div>
            <div className="text-[10px] font-bold uppercase text-slate-500">Automated Flows</div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-5xl font-black mb-6">NEURAL <span className="text-mint">SHOWCASE</span></h2>
            <p className="text-slate-400 font-medium">Advanced implementations of distributed intelligence and high-fidelity software architecture.</p>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 glass-card flex items-center justify-center cursor-pointer hover:border-mint transition-colors">
              <ChevronRight className="w-6 h-6 rotate-180" />
            </div>
            <div className="w-12 h-12 glass-card flex items-center justify-center cursor-pointer hover:border-mint transition-colors">
              <ChevronRight className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group glass-card overflow-hidden flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-lg text-[8px] font-black uppercase tracking-widest text-mint">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-black mb-4 group-hover:text-mint transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-8 line-clamp-3 font-medium leading-relaxed">
                  {project.description}
                </p>
                
                {project.code && (
                  <div className="mb-8">
                    <pre className="code-block text-[10px] text-electric-cyan/70">
                      <code>{project.code}</code>
                    </pre>
                  </div>
                )}

                <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center">
                  <a href={project.link} className="text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:text-mint transition-colors">
                    Analyze Source <ExternalLink className="w-3 h-3" />
                  </a>
                  <Layers className="w-4 h-4 text-slate-700" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">Operational <span className="text-circuit-orange">History</span></h2>
          <div className="w-20 h-1 bg-circuit-orange mx-auto rounded-full" />
        </div>
        
        <div className="space-y-8">
          {portfolioData.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 relative group hover:border-circuit-orange/30 transition-colors"
            >
              <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-black mb-1">{exp.role}</h3>
                  <div className="text-circuit-orange font-bold uppercase tracking-widest text-xs">{exp.company}</div>
                </div>
                <div className="px-4 py-2 bg-white/5 rounded-full text-[10px] font-mono text-slate-500 border border-white/5">
                  {exp.period}
                </div>
              </div>
              <p className="text-slate-400 font-medium leading-relaxed">{exp.description}</p>
              
              <div className="absolute top-10 right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <Code className="w-16 h-16" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-mint/5 blur-[150px] rounded-full" />
      
      <div className="max-w-4xl mx-auto text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-16 md:p-24 rounded-[4rem] border-mint/20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            READY TO <br />
            <span className="text-neon">INTEGRATE?</span>
          </h2>
          <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto font-medium">
            Currently architecting the next generation of intelligent systems. Open for high-impact collaborations and engineering leadership roles.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href={`mailto:${portfolioData.personal.email}`}
              className="px-12 py-6 bg-mint text-midnight font-black rounded-2xl hover:scale-105 transition-transform shadow-[0_0_30px_rgba(45,212,191,0.4)] flex items-center gap-3"
            >
              <Mail className="w-5 h-5" /> ESTABLISH CONNECTION
            </a>
            <div className="flex gap-4">
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="p-6 glass-card rounded-2xl hover:text-mint transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href={portfolioData.personal.twitter} target="_blank" rel="noreferrer" className="p-6 glass-card rounded-2xl hover:text-mint transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-white/5 text-center">
      <div className="flex justify-center gap-8 mb-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
        <a href="#" className="hover:text-mint transition-colors">Protocol</a>
        <a href="#" className="hover:text-mint transition-colors">Security</a>
        <a href="#" className="hover:text-mint transition-colors">Nodes</a>
      </div>
      <p className="text-slate-600 text-xs font-medium">
        © {new Date().getFullYear()} NEURAL-GLASS ARCHITECTURE. ALL SYSTEMS OPERATIONAL.
      </p>
    </footer>
  );
};

export default function App() {
  return (
    <div className="relative selection:bg-mint selection:text-midnight">
      <Navbar />
      <main>
        <Hero />
        <BentoGrid />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
