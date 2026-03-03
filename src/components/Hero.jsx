import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
      
      {/* Kolom Kiri: Identitas */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center md:text-left z-10"
      >
        <div className="inline-block px-4 py-1.5 rounded-full border border-royal-purple/30 bg-royal-purple/10 text-neon-magenta text-xs font-bold uppercase tracking-[0.2em] mb-8">
          IT Student & Digital Architect
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9]">
          Akbar <span className="text-transparent bg-clip-text bg-gradient-to-br from-royal-purple via-neon-magenta to-electric-blue neon-text-purple">
            Hakim Muzaky
          </span>
        </h1>
        
        <p className="text-slate-blue text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-medium opacity-80">
          Building the digital future with precision code. Focusing on <span className="text-neon-magenta">modern</span> aesthetics and <span className="text-electric-blue">advanced</span> functionality.
        </p>

        {/* Social Links & CTA */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
          <button className="group relative flex items-center gap-3 bg-royal-purple text-white px-10 py-4 rounded-full font-bold transition-all hover:scale-105 hover:bg-neon-magenta shadow-[0_0_40px_rgba(112,0,255,0.3)] border border-white/10">
            View My Projects 
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="flex gap-4">
            <SocialIcon 
              icon={<Github size={22} />} 
              href="https://github.com/Chiroyashi" 
            />
            <SocialIcon 
              icon={<Linkedin size={22} />} 
              href="https://www.linkedin.com/in/akbar-muzaky-219957288" 
            />
            <SocialIcon 
              icon={<Mail size={22} />} 
              href="mailto:Akbarmuzaky36@gmail.com" 
            />
          </div>
        </div>
      </motion.div> {/* Penutup motion.div kiri */}

      {/* Kolom Kanan: Profile Picture */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10"
      >
        {/* Glow Aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-royal-purple/30 blur-[80px] rounded-full -z-10 animate-pulse-slow"></div>
        
        <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] rounded-full p-[2px] bg-gradient-to-b from-royal-purple to-transparent shadow-2xl">
          <div className="w-full h-full rounded-full overflow-hidden bg-space-black relative">
            <img 
              src="/assets/profile.png" 
              alt="Profile"
              /* Perbaikan: Grayscale dihapus agar selalu berwarna */
              className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
            />
          </div>
        </div>

        <div className="absolute bottom-6 -left-6 glass-card-purple p-5 rounded-2xl shadow-2xl animate-float">
          <div className="text-neon-magenta font-black text-2xl leading-none">100%</div>
          <div className="text-[10px] text-slate-blue uppercase tracking-widest font-bold mt-1">Dedication</div>
        </div>
      </motion.div>
    </section>
  );
};

const SocialIcon = ({ icon, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-4 rounded-full border border-royal-purple/20 bg-royal-purple/5 text-slate-blue hover:text-neon-magenta hover:border-neon-magenta/50 transition-all duration-300 shadow-lg"
  >
    {icon}
  </a>
);

export default Hero;