import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = "", dark = false }) => {
  return (
    <section 
      id={id} 
      className={`py-20 px-4 sm:px-6 lg:px-8 ${dark ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && (
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${dark ? 'text-white' : 'text-slate-900'}`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`text-lg max-w-2xl mx-auto ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                {subtitle}
              </p>
            )}
            <div className={`w-24 h-1 mx-auto mt-6 rounded-full ${dark ? 'bg-accent' : 'bg-accent'}`} />
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;