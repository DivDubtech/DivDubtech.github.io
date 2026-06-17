"use client";

import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data";
import { ArrowUpRight } from "lucide-react";

export const Hero = () => {
  return (
    <section id="hero" className="split-screen pt-20">
      {/* Left Side: Typography */}
      <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 bg-background border-b lg:border-b-0 lg:border-r border-border/50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col mb-12">
            <span className="text-4xl md:text-5xl font-bold tracking-tighter mb-2">HELLO 👋</span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
              I&apos;M <span className="serif italic font-normal text-primary lowercase tracking-normal">Divyanshu</span>
            </h1>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-secondary border border-border text-secondary-foreground text-[10px] font-bold mb-8 tracking-[0.2em] uppercase"
          >
            Data Science Engineer
          </motion.div>

          <p className="text-xl md:text-2xl font-medium text-foreground max-w-lg mb-8 leading-tight">
            I&apos;m a Computer Science student specializing in Data Science, focused on building intelligent systems and scalable backend applications.
          </p>

          <p className="text-base md:text-lg text-secondary-foreground max-w-lg mb-12 leading-relaxed">
            By combining AI-powered systems with modern software engineering, I create practical and impactful digital experiences focused on machine learning, analytics, and backend scalability.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-foreground text-background font-bold rounded-full hover:scale-105 transition-transform flex items-center group">
              Learn More
              <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
            </button>
            <button className="px-8 py-4 bg-transparent border border-border hover:bg-secondary font-bold rounded-full transition-all">
              Resume
            </button>
          </div>
        </motion.div>
      </div>

      {/* Right Side: Profile Showcase */}
      <div className="relative flex items-center justify-center bg-secondary/30 p-12 overflow-hidden">
        {/* Abstract Shapes */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/40 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full max-w-md"
        >
          <div className="luxury-card flex flex-col items-center text-center">
            {/* Placeholder for Profile Image */}
            <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-accent to-muted mb-8 overflow-hidden shadow-inner flex items-center justify-center">
              <span className="serif italic text-6xl text-primary/40">DD</span>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-black tracking-tighter uppercase">{personalInfo.name}</h3>
              <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-secondary-foreground">Data Science Engineer</p>
            </div>

            <div className="w-full h-px bg-border/50 my-8" />

            <div className="flex items-center justify-between w-full text-[10px] font-bold uppercase tracking-widest text-secondary-foreground">
              <span>Noida, India</span>
              <span>2023 - 2027</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
