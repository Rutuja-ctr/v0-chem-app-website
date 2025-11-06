"use client"

import { Microscope, Radio, MessageSquare, Lightbulb, BarChart3, Zap } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Microscope,
      title: "Immersive AR Experiments",
      description: "Visualize chemical reactions in augmented reality with realistic 3D models and animations.",
    },
    {
      icon: Zap,
      title: "Safe Lab Interaction",
      description: "Safely interact with virtual lab equipment without real-world hazards or risks.",
    },
    {
      icon: Radio,
      title: "Guided Simulations",
      description: "Follow step-by-step guided simulations that teach proper experimental procedures.",
    },
    {
      icon: MessageSquare,
      title: "Voice Narration",
      description: "Learn from interactive voice-guided instructions that explain each step clearly.",
    },
    {
      icon: BarChart3,
      title: "Observation Tables",
      description: "Record and analyze experimental data with built-in observation tracking tools.",
    },
    {
      icon: Lightbulb,
      title: "Interactive Quiz",
      description: "Test your knowledge with interactive quizzes and reinforce learning outcomes.",
    },
  ]

  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Key Features</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-background to-card/50 border border-border/60 rounded-xl p-8 hover:border-primary/50 hover:shadow-lg transition duration-300"
              >
                <div className="bg-gradient-to-br from-primary/20 to-accent/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/20 transition">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
