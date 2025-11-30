
import React from 'react';
import { Download, ChevronDown, MapPin, Mail, Phone, ArrowRight } from 'lucide-react';
import { PROFILE } from '../constants';
import { FadeIn } from './FadeIn';
import GeometricBackground from './GeometricBackground';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white pt-16 print:min-h-0 print:pt-0 print:bg-white print:text-black">
      {/* Background Effect - Hidden when printing */}
      <div className="absolute inset-0 z-0 print:hidden">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
         <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950"></div>
         <GeometricBackground />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center print:text-left print:px-0">
        <FadeIn delay={100} direction="down">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-sky-800/50 bg-sky-900/10 backdrop-blur-sm text-sm font-medium text-sky-400 print:hidden">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            Available for Opportunities in Saudi Arabia
          </div>
        </FadeIn>
        
        <FadeIn delay={200}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 print:text-4xl print:text-slate-900 print:mb-2">
            <span className="block text-white mb-2 print:text-slate-900">{PROFILE.name}</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400 text-2xl sm:text-3xl md:text-4xl font-normal print:text-slate-600 print:text-2xl">
              {PROFILE.title}
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={300}>
          <p className="mt-8 max-w-3xl mx-auto text-lg sm:text-xl text-slate-300 leading-relaxed font-light print:text-slate-700 print:text-base print:mt-4">
            Empowering infrastructure with precision. Over <span className="text-white font-medium print:text-slate-900">12 years</span> of expertise leading large-scale 
            <span className="text-sky-400 print:text-slate-900"> GPR & GIS</span> projects for visionaries like <span className="text-white font-medium print:text-slate-900">NEOM</span> and <span className="text-white font-medium print:text-slate-900">Green Riyadh</span>.
          </p>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-slate-400 text-sm md:text-base print:justify-start print:text-slate-700 print:gap-4 print:mt-4">
            <div className="flex items-center gap-2 hover:text-sky-400 transition-colors cursor-default">
              <MapPin className="w-4 h-4 text-sky-500 print:text-slate-500" />
              {PROFILE.location}
            </div>
            <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-2 hover:text-sky-400 transition-colors">
              <Mail className="w-4 h-4 text-sky-500 print:text-slate-500" />
              {PROFILE.email}
            </a>
            <a href={`tel:${PROFILE.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-sky-400 transition-colors">
               <Phone className="w-4 h-4 text-sky-500 print:text-slate-500" />
              {PROFILE.phone}
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={500}>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center print:hidden">
            <a 
              href={`mailto:${PROFILE.email}?subject=Inquiry from Portfolio`}
              className="group inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-lg text-white bg-sky-600 hover:bg-sky-700 transition-all shadow-lg hover:shadow-sky-500/25 ring-offset-2 focus:ring-2 ring-sky-500"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/Sreejayan_Vasudevan_Resume.pdf"
              download="Sreejayan_Vasudevan_Resume.pdf"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-700 text-base font-medium rounded-lg text-slate-300 bg-slate-900/50 hover:bg-slate-800 hover:text-white transition-all backdrop-blur-sm hover:border-slate-600"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </div>
        </FadeIn>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500 hover:text-sky-400 transition-colors cursor-pointer print:hidden">
        <a href="#about" aria-label="Scroll down">
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
