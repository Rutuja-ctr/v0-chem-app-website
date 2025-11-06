"use client"

import { Zap, Shield, BookOpen } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-card/50 border-y border-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">About ChemApp</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-background/50 border border-border/60 rounded-xl p-8 hover:border-primary/50 transition">
            <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Interactive Learning</h3>
            <p className="text-muted-foreground">
              Engage with chemistry through immersive augmented reality experiences and virtual labs.
            </p>
          </div>

          <div className="bg-background/50 border border-border/60 rounded-xl p-8 hover:border-accent/50 transition">
            <div className="bg-accent/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-3">Safe & Secure</h3>
            <p className="text-muted-foreground">
              Perform experiments safely in a virtual environment without risks of real laboratory hazards.
            </p>
          </div>

          <div className="bg-background/50 border border-border/60 rounded-xl p-8 hover:border-primary/50 transition">
            <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Comprehensive Learning</h3>
            <p className="text-muted-foreground">
              Learn through step-by-step guided simulations with voice narration and detailed observations.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-2xl p-8 sm:p-12">
          <p className="text-lg text-foreground leading-relaxed">
            ChemApp is designed to revolutionize chemistry education by making complex concepts accessible and engaging.
            Whether you're studying reaction mechanisms, exploring molecular structures, or conducting virtual
            experiments, ChemApp provides a comprehensive platform that transforms how students learn and interact with
            chemistry.
          </p>
        </div>
      </div>
    </section>
  )
}
