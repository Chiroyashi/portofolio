import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import BentoGrid from './components/BentoGrid';

function App() {
  return (
    <main className="relative min-h-screen text-white selection:bg-neon-magenta/40 overflow-x-hidden">
      
      {/* 1. BACKGROUND LAYER - Mengambil langsung dari folder public */}
      <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden bg-[#030005]">
        <img 
          src="assets/spider.gif" 
          className="w-full h-full object-cover opacity-40 animate-slow-pan grayscale-[30%] brightness-[0.5] scale-110"
          alt="sasuke-background"
          onError={(e) => console.error("Cek lagi! File tidak terbaca di /public/assets/sasuke.png")}
        />
        
        {/* Overlay Ungu agar UI tetap elegan */}
        <div className="absolute inset-0 bg-gradient-to-b from-space-black via-transparent to-space-black opacity-90" />
        <div className="absolute inset-0 bg-royal-purple/10 mix-blend-color-dodge" />
      </div>

      <Navbar />
      
      {/* Konten Utama */}
      <div className="relative z-10 flex flex-col gap-10">
        <Hero />
        <AboutMe />
        <BentoGrid />
      </div>

      {/* Efek Glow Global */}
      <div className="fixed top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-royal-purple/15 blur-[150px] rounded-full -z-10 pointer-events-none animate-pulse-slow" />
      
      {/* Noise Overlay */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none -z-20"></div>

      {/* Footer */}
      <footer className="relative z-10 py-16 text-center border-t border-royal-purple/10 mt-20 bg-space-black/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start text-left">
            <p className="text-slate-blue/60 text-[10px] font-mono tracking-[0.4em] uppercase mb-2">
              Uchiha Legacy / IT Student
            </p>
            <p className="text-slate-blue/30 text-[10px] font-mono">
              &copy; {new Date().getFullYear()} — Built with React + Vite
            </p>
          </div>
          
          <div className="flex gap-4">
             <div className="h-1.5 w-1.5 rounded-full bg-royal-purple shadow-[0_0_15px_#7000FF]"></div>
             <div className="h-1.5 w-1.5 rounded-full bg-neon-magenta shadow-[0_0_10px_#B633FF]"></div>
             <div className="h-1.5 w-1.5 rounded-full bg-electric-blue shadow-[0_0_10px_#00D2FF]"></div>
          </div>

          <p className="text-slate-blue/40 text-[10px] font-mono uppercase tracking-[0.2em]">
            Status: <span className="text-neon-magenta animate-pulse">Synchronized</span>
          </p>
        </div>
      </footer>
    </main>
  );
}

export default App;