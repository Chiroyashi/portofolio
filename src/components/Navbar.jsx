const Navbar = () => {
    return (
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
        <div className="glass-card flex items-center justify-between px-8 py-4 rounded-full border border-white/10 bg-black/20 backdrop-blur-xl">
          <div className="text-xl font-bold tracking-tighter italic">
            STUDENT<span className="text-electric-blue">.IT</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
            <a href="#" className="hover:text-electric-blue transition-colors">Projects</a>
            <a href="#" className="hover:text-electric-blue transition-colors">Stack</a>
            <a href="#" className="hover:text-electric-blue transition-colors">Contact</a>
          </div>
          <button className="bg-electric-blue/10 border border-electric-blue/50 text-electric-blue px-5 py-2 rounded-full text-sm font-bold hover:bg-electric-blue hover:text-black transition-all">
            Hire Me
          </button>
        </div>
      </nav>
    );
  };
  
  export default Navbar;