import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card-purple p-8 md:p-12 rounded-[2rem] relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-royal-purple/10 blur-[80px] -z-10" />
        
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1">
            <h2 className="text-4xl font-black mb-4 tracking-tighter uppercase text-white">
              About <span className="text-neon-magenta">Me</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-royal-purple to-electric-blue mb-6"></div>
          </div>
          
          <div className="md:col-span-2">
            <p className="text-slate-blue text-lg leading-relaxed font-medium italic">
              "I am a D4 Computer Engineering Technology student with a strong interest in software development, distributed systems, and game development. I am accustomed to collaborating in teams, solutions-oriented, and highly enthusiastic about learning new and emerging technologies."
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;