import React from 'react';
import Section from './Section';
import { EDUCATION, LANGUAGES } from '../constants';
import { GraduationCap, Languages, Quote } from 'lucide-react';
import { FadeIn } from './FadeIn';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me" subtitle="Professional Profile & Educational Background">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Main Text */}
        <div className="space-y-6">
          <FadeIn direction="right">
            <h3 className="text-2xl font-bold text-slate-800">
              Expert in Geophysical Surveys & Project Management
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              I am a highly accomplished Geophysicist and Project Manager with over <span className="font-semibold text-slate-900">12 years</span> of hands-on experience leading complex infrastructure projects across Saudi Arabia. 
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              From the futuristic landscapes of <span className="text-sky-600 font-medium">NEOM</span> to the green transformation of Riyadh, I have successfully executed projects by integrating cutting-edge technologies like GPR, Lidar, and GIS. My disciplined approach ensures milestone-driven execution while maintaining the highest standards of safety and quality.
            </p>
          </FadeIn>
          
          <FadeIn delay={200} direction="up">
            <div className="pt-6 border-t border-slate-100 mt-8">
               <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                  <Languages className="w-5 h-5 text-sky-600" />
                  Languages Spoken
               </h4>
               <div className="flex flex-wrap gap-2">
                  {LANGUAGES.map((lang, idx) => (
                      <span key={idx} className="px-4 py-1.5 bg-slate-50 text-slate-700 border border-slate-200 rounded-full text-sm font-medium hover:border-sky-300 hover:bg-sky-50 transition-colors cursor-default">
                          {lang}
                      </span>
                  ))}
               </div>
            </div>
          </FadeIn>
        </div>

        {/* Education & Info Cards */}
        <div className="space-y-6">
            <FadeIn direction="left" delay={100}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                      <GraduationCap className="w-6 h-6 text-sky-600" />
                      Education
                  </h4>
                  <div className="space-y-8">
                      {EDUCATION.map((edu, idx) => (
                          <div key={idx} className="relative pl-6 border-l-2 border-slate-200 hover:border-sky-400 transition-colors">
                              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-slate-300 group-hover:border-sky-500"></div>
                              <h5 className="text-lg font-bold text-slate-900 leading-none">{edu.degree}</h5>
                              <p className="text-sky-600 font-medium mt-1">{edu.institution}</p>
                              <p className="text-slate-500 text-sm mt-1">{edu.location}</p>
                          </div>
                      ))}
                  </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={300}>
              <div className="bg-gradient-to-br from-sky-50 to-white p-8 rounded-2xl border border-sky-100 relative overflow-hidden">
                  <Quote className="absolute top-4 right-4 w-10 h-10 text-sky-100 -z-0" />
                  <h4 className="text-lg font-bold text-sky-900 mb-3 relative z-10">My Core Philosophy</h4>
                  <p className="text-sky-800 italic relative z-10 leading-relaxed">
                      "Transforming complex geophysical data into actionable insights for sustainable infrastructure development."
                  </p>
              </div>
            </FadeIn>
        </div>
      </div>
    </Section>
  );
};

export default About;