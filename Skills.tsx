import React from 'react';
import Section from './Section';
import { SKILLS } from '../constants';
import { CheckCircle2 } from 'lucide-react';
import { FadeIn } from './FadeIn';

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Technical Expertise" subtitle="Comprehensive skillset across geophysics and management" className="bg-slate-50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SKILLS.map((skillGroup, index) => (
          <FadeIn key={index} delay={index * 150} direction="up">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 h-full hover:border-sky-200 transition-colors duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100 flex items-center gap-2">
                {skillGroup.category}
              </h3>
              <ul className="space-y-4">
                {skillGroup.items.map((skill, idx) => (
                  <li key={idx} className="flex items-start gap-3 group">
                    <CheckCircle2 className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5 group-hover:text-emerald-500 transition-colors" />
                    <span className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
      
      {/* Banner */}
      <FadeIn delay={400} className="mt-16">
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden group">
           {/* Decorative bg */}
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=1974&auto=format&fit=crop')] opacity-10 bg-cover bg-center group-hover:scale-105 transition-transform duration-1000"></div>
           <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900"></div>
           
           <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Proficient in Advanced Geospatial Software</h3>
              <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-lg">
                  Extensive hands-on experience with industry-standard tools including Trimble Business Center, Reflex W, and IDSGeoRadar suite.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                   {['ArcGIS', 'AutoCAD', 'MS Project', 'Trimble MX', 'Applanix', 'Geolitix'].map((tool) => (
                       <span key={tool} className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-200 font-medium hover:bg-white/10 hover:text-white transition-all cursor-default">
                          {tool}
                       </span>
                   ))}
              </div>
           </div>
        </div>
      </FadeIn>
    </Section>
  );
};

export default Skills;