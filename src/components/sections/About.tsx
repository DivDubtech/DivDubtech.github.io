"use client";

import React from "react";
import { motion } from "framer-motion";

export const About = () => {
  const focuses = [
    { title: "AI Systems", desc: "Developing intelligent architectures that learn and adapt." },
    { title: "Backend Engineering", desc: "Building robust, scalable server-side foundations." },
    { title: "Machine Learning", desc: "Transforming data into predictive insights." },
    { title: "Data Science", desc: "Extracting meaning from complex datasets." },
    { title: "Scalable Applications", desc: "Designing for growth and high-concurrency." },
  ];

  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Header Area */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary">Philosophy</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.1]">
                Where <span className="serif italic font-normal text-primary lowercase tracking-normal">Engineering</span> meets <span className="serif italic font-normal text-primary lowercase tracking-normal">Intelligence</span>.
              </h2>
            </motion.div>
          </div>

          {/* Description Area */}
          <div className="lg:col-span-7 flex flex-col justify-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-xl"
            >
              <p className="text-xl md:text-2xl font-medium text-foreground mb-12 leading-tight">
                I am a Data Science engineering student focused on building AI-powered applications, backend systems, and analytics-driven solutions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {focuses.map((focus, i) => (
                  <div key={i} className="space-y-3">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-primary flex items-center">
                      <span className="w-4 h-px bg-primary/30 mr-3" />
                      {focus.title}
                    </h4>
                    <p className="text-sm text-secondary-foreground leading-relaxed">
                      {focus.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Quote or Minimal Stat */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 pt-20 border-t border-border/50 text-center"
        >
          <span className="serif italic text-4xl md:text-6xl text-primary/60">
            &quot;Transforming complex data into <span className="text-foreground not-italic font-black tracking-tighter uppercase">Meaningful</span> experiences.&quot;
          </span>
        </motion.div>
      </div>
    </section>
  );
};
