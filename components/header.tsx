"use client"

import { Beaker } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-background to-background/95 border-b border-border/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-br from-primary to-accent p-2 rounded-lg">
            <Beaker className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            ChemApp
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition">
            About
          </a>
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition">
            Features
          </a>
          <a href="#team" className="text-sm text-muted-foreground hover:text-foreground transition">
            Team
          </a>
        </nav>
      </div>
    </header>
  )
}
