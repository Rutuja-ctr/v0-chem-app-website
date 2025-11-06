"use client"

import { Download, Sparkles } from "lucide-react"
import { useState } from "react"

export default function Hero() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownloadAPK = async () => {
    try {
      setIsDownloading(true)
      const response = await fetch("/ChemApp.apk")

      if (!response.ok) {
        alert("APK file not found. Please contact support.")
        return
      }

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = "ChemApp.apk"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Download failed:", error)
      alert("Failed to download APK. Please try again.")
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/30">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-medium">Revolutionary Chemistry Education</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Experience Chemistry
          <br />
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Like Never Before
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          ChemApp brings chemistry to life with immersive AR-based experiments, safe virtual lab interactions, and
          guided simulations that make learning engaging and interactive.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={handleDownloadAPK}
            disabled={isDownloading}
            className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Download className="w-5 h-5" />
            {isDownloading ? "Downloading..." : "Download APK"}
          </button>
          <button className="px-8 py-3 border border-primary/50 text-foreground font-semibold rounded-lg hover:bg-primary/10 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
