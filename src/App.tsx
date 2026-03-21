import { motion } from "motion/react";
import { Github, Linkedin, Mail, Twitter, ExternalLink, Cpu, Brain, Code, Database, ChevronRight, Terminal, Zap, Layers, Activity, Sparkles, Rocket, Ghost, Smile } from "lucide-react";
import portfolioData from "./data/portfolio.json";

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white border-4 border-ink py-3 px-8 flex gap-8 items-center rounded-3xl shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]"
    >
      <div className="text-lg font-black tracking-tighter flex items-center gap-2 mr-4">
        <div className="w-8 h-8 bg-card-pink border-2 border-ink rounded-lg flex items-center justify-center">
          <Smile className="w-5 h-5 text-ink" />
        </div>
        <span className="hidden sm:inline uppercase">{portfolioData.personal.name.split(' ')[0]}<span className="text-card-pink">.dev</span></span>
      </div>
      <div className="flex gap-6 text-xs font-black uppercase tracking-widest text-ink">
        {["About", "Projects", "Experience"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-card-pink transition-colors">
            {item}
          </a>
        ))}
      </div>
      <div className="w-[2px] h-4 bg-ink/20 mx-2" />
      <div className="flex gap-4">
        <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="hover:text-card-pink transition-colors">
          <Github className="w-5 h-5" />
        </a>
        <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="hover:text-card-pink transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center section-padding relative overflow-hidden">
      {/* Playful floating shapes */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-20 w-32 h-32 bg-card-yellow border-4 border-ink rounded-full opacity-20"
      />
      <motion.div 
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-20 right-20 w-40 h-40 bg-card-blue border-4 border-ink rounded-3xl opacity-20"
      />
      
      <div className="z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-6 py-2 bg-card-green border-4 border-ink rounded-full mb-8 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]"
        >
          <Sparkles className="w-4 h-4 text-ink" />
          <span className="text-xs font-black uppercase tracking-widest text-ink">I'm a learner! 🚀</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase"
        >
          Hi, I'm <br />
          <span className="text-card-pink text-stroke">{portfolioData.personal.name.split(' ')[0]}</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-ink text-lg md:text-xl max-w-2xl mx-auto mb-12 font-bold leading-relaxed"
        >
          {portfolioData.personal.bio}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <button className="cartoon-btn bg-card-yellow">
            Explore My World
          </button>
          <button className="cartoon-btn bg-white">
            Say Hi!
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const BentoGrid = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Bio Card */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 cartoon-card p-10 bg-card-blue relative overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 opacity-10">
              <Ghost className="w-40 h-40" />
            </div>
            <h3 className="text-3xl font-black mb-6 uppercase">My Journey</h3>
            <p className="text-ink font-bold leading-relaxed mb-8">
              Currently studying Software Engineering at <span className="underline decoration-4 decoration-card-pink">Daffodil International University</span>. 
              I'm diving deep into C, Python, and AI automation. I might be a learner, but I'm building something cool every day!
            </p>
            <div className="flex flex-wrap gap-3">
              {["C", "Java", "Python", "C# .NET"].map(tag => (
                <span key={tag} className="px-4 py-2 bg-white border-2 border-ink rounded-xl text-xs font-black uppercase">{tag}</span>
              ))}
            </div>
          </motion.div>

          {/* AI Knowledge Card */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="cartoon-card p-8 bg-card-yellow flex flex-col justify-center text-center"
          >
            <div className="w-16 h-16 bg-white border-4 border-ink rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-ink" />
            </div>
            <h4 className="text-2xl font-black mb-2 uppercase">AI Automation</h4>
            <p className="text-sm font-bold text-ink/70">n8n & Zapier Wizard in training!</p>
          </motion.div>

          {/* Skills Grid */}
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-6">
            {portfolioData.skills.map((skill, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className={`cartoon-card p-6 text-center ${idx % 4 === 0 ? 'bg-card-pink' : idx % 4 === 1 ? 'bg-card-green' : idx % 4 === 2 ? 'bg-card-yellow' : 'bg-card-blue'}`}
              >
                <div className="text-lg font-black uppercase mb-1">{skill.name}</div>
                <div className="text-[10px] font-black uppercase text-ink/50">{skill.category}</div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4 uppercase">Cool <span className="text-card-pink">Stuff</span> I Built</h2>
          <p className="text-ink font-bold">From C system tools to AI-powered automations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolioData.projects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="cartoon-card overflow-hidden flex flex-col bg-white"
            >
              <div className="aspect-video border-b-4 border-ink overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-card-yellow border-2 border-ink rounded-lg text-[10px] font-black uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase">{project.title}</h3>
                <p className="text-ink text-sm mb-8 font-bold leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mt-auto pt-6 border-t-2 border-ink/10 flex justify-between items-center">
                  <a href={project.link} className="text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:text-card-pink transition-colors">
                    Check it out <Rocket className="w-4 h-4" />
                  </a>
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
    <section id="experience" className="section-padding bg-card-green/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-black mb-16 text-center uppercase">My <span className="text-card-green">Growth</span> Path</h2>
        
        <div className="space-y-10">
          {portfolioData.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              className="cartoon-card p-8 bg-white"
            >
              <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-black uppercase">{exp.role}</h3>
                  <div className="text-card-green font-black uppercase text-xs">{exp.company}</div>
                </div>
                <div className="px-4 py-2 bg-card-yellow border-2 border-ink rounded-xl text-[10px] font-black uppercase">
                  {exp.period}
                </div>
              </div>
              <p className="text-ink font-bold text-sm">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          whileHover={{ rotate: [-1, 1, -1] }}
          className="cartoon-card p-16 md:p-24 bg-card-pink relative overflow-hidden"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight uppercase">
            Let's <br />
            <span className="text-white text-stroke">Connect!</span>
          </h2>
          <p className="text-ink text-lg mb-12 max-w-xl mx-auto font-black">
            I'm always open to learning new things and collaborating on fun projects!
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href={`mailto:${portfolioData.personal.email}`}
              className="cartoon-btn bg-white"
            >
              Send a Message
            </a>
            <div className="flex gap-4">
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="w-16 h-16 cartoon-card bg-card-blue flex items-center justify-center">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="w-16 h-16 cartoon-card bg-card-yellow flex items-center justify-center">
                <Github className="w-6 h-6" />
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
    <footer className="py-16 px-6 border-t-4 border-ink text-center bg-white">
      <p className="text-ink text-sm font-black uppercase tracking-widest">
        Made with ❤️ by {portfolioData.personal.name}
      </p>
    </footer>
  );
};

export default function App() {
  return (
    <div className="relative">
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
