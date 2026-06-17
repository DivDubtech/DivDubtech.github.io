"use client";

import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/data";
import { Github, ExternalLink, ArrowRight } from "lucide-react";

export const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 md:px-12 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between gap-10 mb-24">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary mb-6 block">Portfolio</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-8">
              Selected <span className="serif italic font-normal text-primary lowercase tracking-normal">Works</span>
            </h2>
          </div>
          <p className="text-lg text-secondary-foreground max-w-sm mb-2 leading-relaxed font-medium">
            Exploring the intersection of complex algorithms and elegant user interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-8 bg-muted border border-border/50 shadow-sm">
                {/* Project Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/50 to-background flex items-center justify-center p-12 overflow-hidden transition-transform duration-1000 group-hover:scale-105">
                  <div className="relative z-10 text-center">
                    <span className="serif italic text-8xl text-primary/10 select-none">0{idx + 1}</span>
                    <h3 className="text-4xl font-black tracking-tighter text-foreground mt-[-40px]">
                      {project.title.split(" ").map((word, i) => (
                        <span key={i} className="block">{word}</span>
                      ))}
                    </h3>
                  </div>
                  
                  {/* Subtle Background Pattern */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="w-full h-full grid-background" />
                  </div>
                </div>

                {/* Hover Action Overlay */}
                <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.github} className="p-4 bg-background text-foreground rounded-full hover:scale-110 transition-transform">
                    <Github size={20} />
                  </a>
                  <a href={project.demo} className="p-4 bg-primary text-background rounded-full hover:scale-110 transition-transform">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="space-y-4 px-2">
                <div className="flex flex-wrap gap-3">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="text-[9px] font-bold uppercase tracking-widest text-primary/60 px-2 py-1 bg-primary/5 border border-primary/10 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <h4 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors cursor-pointer">
                  {project.title}
                </h4>
                <p className="text-sm text-secondary-foreground leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <a href={project.github} className="inline-flex items-center text-xs font-black uppercase tracking-[0.2em] pt-4 group-hover:text-primary transition-colors">
                  Case Study <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
