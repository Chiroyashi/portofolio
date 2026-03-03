import { BookOpen, Briefcase, Award, Code, Globe } from 'lucide-react';

const BentoGrid = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {/* 1. Education - Kotak Besar */}
      <div className="md:col-span-2 glass-card-purple p-8 rounded-3xl relative">
        <div className="flex items-center gap-3 mb-6 text-neon-magenta">
          <BookOpen size={24} />
          <h3 className="text-xl font-bold uppercase tracking-widest">Education</h3>
        </div>
        
        <div className="space-y-6">
          <div className="border-l-2 border-royal-purple/30 pl-4">
            <h4 className="font-bold text-white text-lg">Politeknik Negeri Semarang</h4>
            <p className="text-sm text-neon-magenta font-mono">2024 - Present</p>
            <p className="text-slate-blue text-sm mt-1">D4 Computer Engineering Technology • <span className="text-white font-bold">GPA: 3.60/4.00</span></p>
          </div>
          
          <div className="border-l-2 border-royal-purple/30 pl-4">
            <h4 className="font-bold text-white text-lg">SMA N 1 Salatiga</h4>
            <p className="text-sm text-neon-magenta font-mono">2021 - 2024</p>
            <p className="text-slate-blue text-sm mt-1">Science Major (MIPA) • <span className="text-white">Avg Grade: 85/100</span></p>
          </div>
        </div>
      </div>

      {/* 2. Skills - Kotak Tinggi */}
      <div className="glass-card-purple p-8 rounded-3xl">
        <div className="flex items-center gap-3 mb-6 text-electric-blue">
          <Code size={24} />
          <h3 className="text-xl font-bold uppercase tracking-widest">Skills</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {['Graphic Design', 'Videography', 'Public Speaking', 'Leadership', 'Problem Solving', 'Adaptability'].map(skill => (
            <span key={skill} className="px-3 py-1 bg-royal-purple/20 border border-royal-purple/30 rounded-lg text-xs text-slate-blue">
              {skill}
            </span>
          ))}
        </div>
        
        <div className="mt-8">
          <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
            <Globe size={14} /> Languages
          </h4>
          <div className="space-y-2 text-sm text-slate-blue">
            <div className="flex justify-between"><span>English</span><span className="text-neon-magenta italic">Advanced</span></div>
            <div className="flex justify-between"><span>Japan</span><span className="text-neon-magenta italic">Basic</span></div>
          </div>
        </div>
      </div>

      {/* 3. Experience - Kotak Lebar */}
      <div className="md:col-span-3 glass-card-purple p-8 rounded-3xl">
        <div className="flex items-center gap-3 mb-8 text-royal-purple">
          <Briefcase size={24} />
          <h3 className="text-xl font-bold uppercase tracking-widest text-white">Organizational Experience</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <ExperienceCard 
            title="Vice Chairperson" 
            org="Forum Anak Salatiga" 
            date="2022 - 2023"
            desc="Organized Children’s Rights Seminars and outreach education programs."
          />
          <ExperienceCard 
            title="Vice Chairperson" 
            org="PIK-R Salatiga" 
            date="2021 - 2023"
            desc="Initiated the 'Golden Youth 2045 Seminar' for youth health education."
          />
          <ExperienceCard 
            title="Member" 
            org="OSIS SMA N 1 Salatiga" 
            date="2022 - 2023"
            desc="Organized debates on democracy and environmental programs."
          />
        </div>
      </div>

    </section>
  );
};

const ExperienceCard = ({ title, org, date, desc }) => (
  <div className="group hover:bg-white/5 p-4 rounded-2xl transition-all border border-transparent hover:border-royal-purple/20">
    <h4 className="text-neon-magenta font-mono text-xs mb-1">{date}</h4>
    <h5 className="text-white font-bold leading-tight">{title}</h5>
    <p className="text-slate-blue text-xs font-bold mb-3 uppercase tracking-tighter opacity-60">{org}</p>
    <p className="text-slate-blue text-xs leading-relaxed">{desc}</p>
  </div>
);

export default BentoGrid;