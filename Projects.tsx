import React from 'react';
import Section from './Section';
import { PROJECTS } from '../constants';
import { Building2, UserCircle, ArrowUpRight } from 'lucide-react';
import { FadeIn } from './FadeIn';

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Featured Projects" subtitle="Key initiatives delivered for major clients in the region">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <FadeIn key={project.id} delay={index * 100} className="h-full">
            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl hover:shadow-sky-900/5 border border-slate-200 hover:border-sky-200 transition-all duration-300 flex flex-col h-full overflow-hidden relative top-0 hover:-top-1">
              <div className="p-7 flex-grow">
                <div className="flex justify-between items-start mb-5">
                  <div className="bg-sky-50 text-sky-600 p-3 rounded-xl group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                      <Building2 className="w-6 h-6" />
                  </div>
                  {project.client && (
                      <span className="text-xs font-bold tracking-wide uppercase text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200 group-hover:border-sky-100 transition-colors">
                          {project.client}
                      </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors flex items-center justify-between">
                  {project.title}
                  {/* <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1" /> */}
                </h3>
                
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-5 bg-slate-50 w-fit px-3 py-1 rounded-md">
                  <UserCircle className="w-4 h-4 text-slate-400" />
                  <span className="font-medium">{project.role}</span>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>
              
              <div className="px-7 py-5 bg-slate-50/50 border-t border-slate-100 mt-auto">
                 <div className="flex flex-wrap gap-2">
                   {project.tags.map((tag, idx) => (
                     <span key={idx} className="text-xs font-semibold text-slate-600 bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-sm">
                       #{tag}
                     </span>
                   ))}
                 </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};

export default Projects;