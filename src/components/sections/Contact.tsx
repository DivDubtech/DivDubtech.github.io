"use client";

import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data";
import { Mail, Linkedin, Github, FileText } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-40 px-6 md:px-12 bg-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary">Inquiries</span>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none max-w-4xl">
              Let’s create something <span className="serif italic font-normal text-primary lowercase tracking-normal">Meaningful</span> together.
            </h2>
            
            <div className="flex flex-wrap justify-center gap-10 pt-12">
              <a href={`mailto:${personalInfo.email}`} className="group flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-background border border-border flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:text-background group-hover:border-primary">
                  <Mail size={24} />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-secondary-foreground group-hover:text-primary transition-colors">Email</span>
              </a>
              <a href={personalInfo.linkedin} target="_blank" className="group flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-background border border-border flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:text-background group-hover:border-primary">
                  <Linkedin size={24} />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-secondary-foreground group-hover:text-primary transition-colors">LinkedIn</span>
              </a>
              <a href={personalInfo.github} target="_blank" className="group flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-background border border-border flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:text-background group-hover:border-primary">
                  <Github size={24} />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-secondary-foreground group-hover:text-primary transition-colors">GitHub</span>
              </a>
              <a href={personalInfo.resumeUrl} className="group flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-background border border-border flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:text-background group-hover:border-primary">
                  <FileText size={24} />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-secondary-foreground group-hover:text-primary transition-colors">Resume</span>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-48 pt-20 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-2xl font-black tracking-tighter">
            DIVYANSHU<span className="text-primary">.</span>
          </div>
          <div className="flex gap-12 text-[10px] font-bold uppercase tracking-widest text-secondary-foreground">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#skills" className="hover:text-primary transition-colors">Expertise</a>
          </div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-secondary-foreground/40">
            © 2026 Editorial Portfolio
          </div>
        </div>
      </div>
    </section>
  );
};
