"use client";

import React from "react";
import { motion } from "framer-motion";
import { certifications, experience } from "@/data";
import { Award, GraduationCap } from "lucide-react";

export const Certifications = () => {
  return (
    <section id="education" className="py-32 px-6 md:px-12 bg-background border-t border-border/50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-24">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary mb-6 block">Trajectory</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
            Education & <span className="serif italic font-normal text-primary lowercase tracking-normal">Credentials</span>
          </h2>
        </div>

        <div className="space-y-32">
          {/* Education Timeline */}
          <div className="relative">
            <div className="absolute left-[11px] top-2 bottom-0 w-[1px] bg-border" />
            
            <div className="space-y-20">
              {experience.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative pl-12"
                >
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10">
                    <GraduationCap size={12} className="text-primary" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="md:col-span-1">
                      <span className="text-sm font-bold tracking-widest text-primary uppercase">{edu.period}</span>
                    </div>
                    <div className="md:col-span-3 space-y-3">
                      <h3 className="text-2xl font-bold tracking-tight">{edu.title}</h3>
                      <div className="text-lg text-secondary-foreground font-medium">{edu.company}</div>
                      <p className="text-sm text-secondary-foreground leading-relaxed max-w-xl italic serif">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-6 group"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center text-primary shrink-0 transition-all group-hover:bg-primary group-hover:text-background">
                  <Award size={24} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-bold tracking-tight group-hover:text-primary transition-colors leading-tight">
                    {cert.title}
                  </h4>
                  <div className="text-xs font-bold uppercase tracking-widest text-secondary-foreground/60">
                    {cert.issuer}
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
