import { motion } from 'framer-motion';

const GlassCard = ({ children, className = "" }) => {
  return (
    <motion.div 
      whileHover={{ y: -8, scale: 1.02 }}
      className={`relative overflow-hidden rounded-3xl border border-royal-purple/20 bg-black/40 backdrop-blur-2xl p-8 transition-all duration-500 hover:border-electric-blue/60 group shadow-[0_0_20px_rgba(112,0,255,0.1)] ${className}`}
    >
      {/* Efek Cahaya di sudut saat Hover */}
      <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-electric-blue/10 blur-[80px] group-hover:bg-electric-blue/20 transition-all duration-500" />
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-royal-purple/10 blur-[80px] group-hover:bg-royal-purple/20 transition-all duration-500" />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;