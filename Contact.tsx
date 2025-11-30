
import React from 'react';
import Section from './Section';
import { PROFILE } from '../constants';
import { Mail, Phone, MapPin, Linkedin, ExternalLink, Download } from 'lucide-react';
import { FadeIn } from './FadeIn';

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch" subtitle="Open for new opportunities in Project Management and Geophysics" dark>
      <div className="max-w-4xl mx-auto">
        <FadeIn direction="up">
          <div className="text-center mb-16">
             <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
                  Currently based in Riyadh and available for immediate collaboration. I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
             </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <FadeIn delay={100} direction="right">
              <a href={`mailto:${PROFILE.email}`} className="flex items-center p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm hover:border-sky-500/50 hover:bg-slate-800 transition-all group h-full">
                  <div className="bg-sky-500/10 p-4 rounded-xl group-hover:bg-sky-500/20 transition-colors mr-6">
                      <Mail className="w-8 h-8 text-sky-400" />
                  </div>
                  <div className="text-left">
                      <h4 className="text-white font-bold text-lg mb-1">Email Me</h4>
                      <p className="text-slate-400 group-hover:text-white transition-colors">{PROFILE.email}</p>
                  </div>
              </a>
            </FadeIn>

            <FadeIn delay={200} direction="left">
              <a href={`tel:${PROFILE.phone.replace(/\s/g, '')}`} className="flex items-center p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm hover:border-sky-500/50 hover:bg-slate-800 transition-all group h-full">
                  <div className="bg-sky-500/10 p-4 rounded-xl group-hover:bg-sky-500/20 transition-colors mr-6">
                      <Phone className="w-8 h-8 text-sky-400" />
                  </div>
                  <div className="text-left">
                      <h4 className="text-white font-bold text-lg mb-1">Call Me</h4>
                      <p className="text-slate-400 group-hover:text-white transition-colors">{PROFILE.phone}</p>
                  </div>
              </a>
            </FadeIn>
            
             <FadeIn delay={300} direction="right">
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm hover:border-sky-500/50 hover:bg-slate-800 transition-all group h-full">
                  <div className="bg-sky-500/10 p-4 rounded-xl group-hover:bg-sky-500/20 transition-colors mr-6">
                      <Linkedin className="w-8 h-8 text-sky-400" />
                  </div>
                  <div className="text-left">
                      <h4 className="text-white font-bold text-lg mb-1 flex items-center gap-2">
                          LinkedIn <ExternalLink className="w-4 h-4 opacity-50" />
                      </h4>
                      <p className="text-slate-400 group-hover:text-white transition-colors">Connect professionally</p>
                  </div>
              </a>
            </FadeIn>

            <FadeIn delay={400} direction="left">
              <div className="flex items-center p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm h-full">
                  <div className="bg-sky-500/10 p-4 rounded-xl mr-6">
                      <MapPin className="w-8 h-8 text-sky-400" />
                  </div>
                  <div className="text-left">
                      <h4 className="text-white font-bold text-lg mb-1">Location</h4>
                      <p className="text-slate-400">{PROFILE.location}</p>
                  </div>
              </div>
            </FadeIn>
        </div>

        {/* Replaced Form with Download Resume CTA */}
        <FadeIn delay={500} direction="up">
          <div className="bg-gradient-to-r from-sky-900/50 to-slate-900 border border-sky-800/30 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
             <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-sky-500/10 rounded-full blur-3xl"></div>
             <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"></div>
             
             <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">
               Ready to review my qualifications?
             </h3>
             <p className="text-slate-300 mb-8 max-w-xl mx-auto relative z-10">
               Download my comprehensive resume to see how my experience in Geophysics and Project Management can benefit your organization.
             </p>
             <a 
                href="/Sreejayan_Vasudevan_Resume.pdf"
                download="Sreejayan_Vasudevan_Resume.pdf"
                className="relative z-10 inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 text-lg font-bold rounded-xl hover:bg-sky-50 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-sky-900/20"
             >
                <Download className="w-5 h-5 mr-2 text-sky-600" />
                Download Resume
             </a>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
};

export default Contact;
