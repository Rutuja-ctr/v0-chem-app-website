"use client"

import { Users, Award } from "lucide-react"

export default function Team() {
  const teamMembers = [
    { name: "Rutuja Jamdhade", role: "Team Member" },
    { name: "Jyoti Gavali", role: "Team Member" },
    { name: "Kalyani Gophane", role: "Team Member" },
  ]

  return (
    <section id="team" className="py-20 sm:py-32 bg-card/50 border-t border-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Project Team</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold">Team Members</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-background to-background/80 border border-border/60 rounded-xl p-8 text-center hover:border-primary/50 transition"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{member.name.charAt(0)}</span>
                </div>
                <h4 className="text-lg font-bold">{member.name}</h4>
                <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/15 to-accent/15 border border-primary/30 rounded-xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold">Guide</h3>
          </div>
          <p className="text-lg text-foreground">
            <span className="font-semibold">Prof. Poonam L. Patil</span>
          </p>
          <p className="text-muted-foreground mt-2">Project Guide and Mentor</p>
        </div>

        <div className="mt-8 bg-gradient-to-r from-accent/15 to-primary/15 border border-accent/30 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">Special Thanks</h3>
          <div className="space-y-2 text-foreground">
            <p className="font-semibold">Dr. Dipak Patil</p>
            <p className="text-muted-foreground">Special appreciation for guidance and support</p>
          </div>
          <div className="space-y-2 text-foreground mt-4">
            <p className="font-semibold">K.K. Wagh College of Pharmacy, Nashik</p>
            <p className="text-muted-foreground">For their invaluable guidance and support</p>
          </div>
        </div>
      </div>
    </section>
  )
}
