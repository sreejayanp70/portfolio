import React, { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Mail } from 'lucide-react';
import { PROFILE } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
      setScrolled(totalScroll > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'} print:hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <a href="#" className="text-2xl font-bold text-white tracking-tighter">
              Sreejayan<span className="text-sky-500">.</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white hover:text-sky-400 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            
            <div className="h-4 w-px bg-slate-800 mx-4"></div>
            
            <div className="flex items-center space-x-4">
                <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-sky-400 hover:scale-110 transition-all duration-300">
                    <Linkedin className="w-5 h-5" />
                </a>
                 <a href={`mailto:${PROFILE.email}`} className="text-slate-400 hover:text-sky-400 hover:scale-110 transition-all duration-300">
                    <Mail className="w-5 h-5" />
                </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-sky-500 transition-all duration-150 ease-out" style={{ width: `${scrollProgress * 100}%` }}></div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800 absolute w-full shadow-2xl">
          <div className="px-4 pt-2 pb-8 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-4 text-lg font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex gap-4 px-3 pt-4 border-t border-slate-800 mt-4">
               <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
                  <Linkedin className="w-6 h-6" />
               </a>
               <a href={`mailto:${PROFILE.email}`} className="text-slate-400 hover:text-white">
                  <Mail className="w-6 h-6" />
               </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
