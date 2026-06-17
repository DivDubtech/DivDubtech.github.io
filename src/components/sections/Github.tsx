"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Trophy, Star, Activity, GitCommit, Code } from "lucide-react";
import { personalInfo } from "@/data";

export const GithubSection = () => {
  const stats = [
    { label: "Repositories", value: "24", icon: GitCommit },
    { label: "Total Stars", value: "150+", icon: Star },
    { label: "Contributions", value: "500+", icon: Activity },
    { label: "Languages", value: "8", icon: Code },
  ];

  return (
    <section id="achievements" className="py-24 px-6 relative bg-secondary/50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6 tracking-widest uppercase"
          >
            Open Source & Impact
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-extrabold mb-6"
          >
            GitHub <span className="text-primary">& Achievements</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* GitHub Stats Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 p-8 glass rounded-3xl border border-white/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 text-primary/10 group-hover:text-primary/20 transition-colors">
              <Github size={120} />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <Github className="mr-3 text-primary" /> Coding Statistics
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center text-muted-foreground mb-1">
                      <stat.icon size={14} className="mr-2" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">{stat.label}</span>
                    </div>
                    <div className="text-3xl font-black text-primary">{stat.value}</div>
                  </div>
                ))}
              </div>

              {/* Fake Contribution Graph Placeholder */}
              <div className="space-y-4">
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Recent Contributions</div>
                <div className="h-32 w-full bg-white/5 rounded-xl border border-white/5 p-4 flex items-end justify-between gap-1 overflow-hidden">
                  {Array.from({ length: 50 }).map((_, i) => {
                    // Using a predictable pattern instead of Math.random for purity
                    const height = 20 + ((i * 7) % 80);
                    return (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.01, duration: 0.5 }}
                        className={`w-full rounded-t-sm ${
                          i % 5 === 0 ? "bg-primary" : i % 3 === 0 ? "bg-primary/60" : "bg-primary/20"
                        }`}
                      />
                    );
                  })}
                </div>
                <div className="flex justify-between text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
                  <span>Last 6 Months</span>
                  <a href={personalInfo.github} target="_blank" className="text-primary hover:underline">View on GitHub</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievement Cards */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 glass rounded-3xl border border-white/10 group hover:border-primary/50 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6">
                <Trophy size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Technical Problem Solving</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Solved 200+ problems on LeetCode and GeeksforGeeks, focusing on Advanced DSA and Algorithms.
              </p>
              <div className="text-xs font-bold text-primary tracking-widest uppercase">Ranked Top 15%</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 glass rounded-3xl border border-white/10 group hover:border-purple-accent/50 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-purple-accent/10 border border-purple-accent/20 flex items-center justify-center text-purple-accent mb-6">
                <Star size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">AWS Academy Graduate</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Completed AWS Academy Cloud Architecting course with practical labs on EC2, S3, and RDS.
              </p>
              <div className="text-xs font-bold text-purple-accent tracking-widest uppercase">Cloud Certified</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
