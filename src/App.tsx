import { motion } from "motion/react";
import { Github, Linkedin, Mail, Twitter, ExternalLink, Cpu, Brain, Code, Database, ChevronDown } from "lucide-react";
import portfolioData from "./data/portfolio.json";

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass py-4 px-6 md:px-12 flex justify-between items-center"
    >
      <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <Cpu className="w-5 h-5 text-black" />
        </div>
        <span>{portfolioData.personal.name.split(' ')[0]}<span className="text-primary">.ai</span></span>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
        {["About", "Projects", "Experience", "Contact"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
            {item}
          </a>
        ))}
      </div>
      <a 
        href={`mailto:${portfolioData.personal.email}`}
        className="px-4 py-2 bg-primary text-black text-sm font-bold rounded-full hover:scale-105 transition-transform"
      >
        Hire Me
      </a>
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative section-padding overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 blur-[120px] rounded-full" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block"
        >
          Available for Internships
        </motion.span>
        <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight">
          Engineering the <br />
          <span className="text-gradient">Future of AI</span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {portfolioData.personal.bio}
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-colors flex items-center gap-2">
            View Projects <ChevronDown className="w-4 h-4" />
          </button>
          <div className="flex gap-4 items-center px-4">
            <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="p-3 glass rounded-xl hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="p-3 glass rounded-xl hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding bg-white/2">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">Technical Arsenal</h2>
            <div className="grid grid-cols-2 gap-4">
              {portfolioData.skills.map((skill, idx) => (
                <div key={idx} className="p-4 glass rounded-2xl flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <div>
                    <div className="font-bold text-sm">{skill.name}</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-tighter">{skill.category}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="p-8 glass rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Brain className="w-24 h-24" />
              </div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Code className="text-primary" /> My Philosophy
              </h3>
              <p className="text-slate-400 leading-relaxed">
                I believe AI shouldn't just be powerful; it should be accessible and ethical. 
                My focus is on bridging the gap between complex research and practical, 
                user-centric applications.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 glass rounded-3xl text-center">
                <div className="text-3xl font-bold text-primary mb-1">2+</div>
                <div className="text-xs text-slate-500 uppercase">Years Coding</div>
              </div>
              <div className="p-6 glass rounded-3xl text-center">
                <div className="text-3xl font-bold text-secondary mb-1">10+</div>
                <div className="text-xs text-slate-500 uppercase">AI Models</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">Selected Works</h2>
            <p className="text-slate-400">A showcase of my research and development in AI.</p>
          </div>
          <a href="#" className="text-primary font-bold flex items-center gap-2 hover:underline">
            View All <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-3xl overflow-hidden glass"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="flex gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-2">{project.description}</p>
                <a href={project.link} className="inline-flex items-center gap-2 font-bold text-sm">
                  Explore Project <ExternalLink className="w-4 h-4" />
                </a>
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
    <section id="experience" className="section-padding bg-white/2">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Journey So Far</h2>
        
        <div className="space-y-12">
          {portfolioData.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l border-white/10"
            >
              <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-primary" />
              <div className="flex flex-wrap justify-between items-start mb-2">
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <span className="text-sm font-mono text-slate-500">{exp.period}</span>
              </div>
              <div className="text-primary font-bold mb-4">{exp.company}</div>
              <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 pt-20 border-t border-white/10">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Database className="text-secondary" /> Education
          </h3>
          {portfolioData.education.map((edu, idx) => (
            <div key={idx} className="glass p-8 rounded-3xl">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-bold">{edu.school}</h4>
                  <div className="text-secondary font-bold">{edu.degree}</div>
                </div>
                <span className="text-sm font-mono text-slate-500">{edu.period}</span>
              </div>
              <p className="text-slate-400 text-sm">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-12 md:p-20 rounded-[3rem] relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
          
          <h2 className="text-4xl md:text-6xl font-black mb-8">Let's build something <br /><span className="text-gradient">intelligent.</span></h2>
          <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
            Currently looking for internship opportunities where I can contribute to cutting-edge AI research and development.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href={`mailto:${portfolioData.personal.email}`}
              className="px-10 py-5 bg-white text-black font-bold rounded-2xl hover:scale-105 transition-transform flex items-center gap-3"
            >
              <Mail className="w-5 h-5" /> Say Hello
            </a>
            <div className="flex gap-4">
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="p-5 glass rounded-2xl hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href={portfolioData.personal.twitter} target="_blank" rel="noreferrer" className="p-5 glass rounded-2xl hover:text-primary transition-colors">
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
    <footer className="py-12 px-6 border-t border-white/5 text-center text-slate-500 text-sm">
      <div className="mb-4 flex justify-center gap-6">
        <a href={portfolioData.personal.github} className="hover:text-white transition-colors">GitHub</a>
        <a href={portfolioData.personal.linkedin} className="hover:text-white transition-colors">LinkedIn</a>
        <a href={portfolioData.personal.twitter} className="hover:text-white transition-colors">Twitter</a>
      </div>
      <p>© {new Date().getFullYear()} {portfolioData.personal.name}. Built with AI & Passion.</p>
    </footer>
  );
};

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
