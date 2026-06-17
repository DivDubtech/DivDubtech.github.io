"use client";

import React from "react";
import { motion } from "framer-motion";
import { experience } from "@/data";
import { GraduationCap } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 relative bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6 tracking-widest uppercase"
          >
            My Journey
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-extrabold mb-6"
          >
            Education & <span className="text-primary">Journey</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-purple-accent to-transparent transform -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-12">
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 md:top-6 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(56,189,248,0.8)] transform -translate-x-1/2 z-10" />

                <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? "md:pl-12" : "md:pr-12 text-right"}`}>
                  <div className={`p-6 bg-card border border-white/10 rounded-2xl hover:border-primary/30 transition-all group ${
                    idx % 2 === 0 ? "text-left" : "md:text-right text-left"
                  }`}>
                    <div className={`flex items-center gap-3 mb-2 ${idx % 2 === 0 ? "justify-start" : "md:justify-end justify-start"}`}>
                      <GraduationCap className="text-primary" size={20} />
                      <span className="text-xs font-bold text-primary uppercase tracking-widest">{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{exp.title}</h3>
                    <div className="text-sm font-semibold text-muted-foreground mb-4">{exp.company}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
