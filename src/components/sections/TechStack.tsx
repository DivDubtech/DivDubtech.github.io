"use client";

import React from "react";
import { motion } from "framer-motion";
import { skills } from "@/data";

export const TechStack = () => {
  return (
    <section id="skills" className="py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary mb-6">Expertise</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter max-w-2xl">
            A specialized <span className="serif italic font-normal text-primary lowercase tracking-normal">Toolkit</span> for modern systems.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {skills.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <span className="text-xs font-black uppercase tracking-widest text-primary/40">0{idx + 1}</span>
                <h3 className="text-xl font-black tracking-tight uppercase">{category.category}</h3>
                <div className="flex-1 h-px bg-border/50" />
              </div>
              
              <div className="flex flex-wrap gap-x-4 gap-y-6">
                {category.items.map((skill) => (
                  <div key={skill} className="group cursor-default">
                    <span className="text-sm font-medium text-secondary-foreground group-hover:text-foreground transition-colors relative block pb-1">
                      {skill}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full" />
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Minimal Tech Carousel or Static List at bottom */}
        <div className="mt-40 p-12 bg-secondary/30 rounded-3xl border border-border/50 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl font-bold tracking-tight">Core Competencies</h4>
            <p className="text-sm text-secondary-foreground italic serif">Continually evolving with the industry standards.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {["Next.js", "Python", "AWS", "PyTorch"].map((tech) => (
              <span key={tech} className="text-xs font-black uppercase tracking-[0.3em] opacity-30 select-none">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
