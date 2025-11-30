import React from 'react';
import Section from './Section';
import { EXPERIENCE } from '../constants';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { FadeIn } from './FadeIn';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Professional Experience" subtitle="A timeline of my career journey and key roles" dark>
      <div className="relative container mx-auto px-4 max-w-5xl">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 transform md:-translate-x-1/2"></div>

        <div className="space-y-12">
          {EXPERIENCE.map((job, index) => (
            <div key={job.id} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 top-0 w-8 h-8 rounded-full bg-slate-900 border-2 border-sky-500 flex items-center justify-center transform -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                <div className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse"></div>
              </div>

              {/* Content */}
              <div className="ml-12 md:ml-0 md:w-1/2">
                <FadeIn direction={index % 2 === 0 ? 'left' : 'right'} delay={index * 100}>
                  <div className={`group bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-sky-500/50 hover:bg-slate-800 transition-all duration-300 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                    <div className="flex flex-col gap-1 mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">{job.role}</h3>
                      <h4 className="text-slate-300 font-medium text-lg">{job.company}</h4>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-5 pb-5 border-b border-slate-700/50">
                      <div className="flex items-center gap-1.5 bg-slate-900/50 px-3 py-1 rounded-full">
                        <Calendar className="w-3.5 h-3.5 text-sky-500" />
                        {job.period}
                      </div>
                      <div className="flex items-center gap-1.5 bg-slate-900/50 px-3 py-1 rounded-full">
                        <MapPin className="w-3.5 h-3.5 text-sky-500" />
                        {job.location}
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {job.description.map((item, i) => (
                        <li key={i} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                          <span className="text-sky-500 mt-1.5 flex-shrink-0">•</span>
                          <span className="group-hover:text-slate-200 transition-colors">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              </div>

              {/* Empty Space for alternate side */}
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
