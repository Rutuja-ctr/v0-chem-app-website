"use client"

import { Download, Heart } from "lucide-react"
import { useState } from "react"

export default function Footer() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    try {
      setIsDownloading(true)

      const response = await fetch("/ChemApp.apk")

      if (!response.ok) {
        alert("APK not found. Please ensure the APK file is added.")
        setIsDownloading(false)
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

      setIsDownloading(false)
    } catch (error) {
      console.error("Download error:", error)
      alert("Failed to download APK. Please try again.")
      setIsDownloading(false)
    }
  }

  return (
    <footer className="bg-background border-t border-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center justify-center gap-8 mb-12">
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="px-10 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition text-lg flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Download className="w-6 h-6" />
            {isDownloading ? "Downloading..." : "Download APK Now"}
          </button>
          <p className="text-muted-foreground text-center max-w-2xl">
            Start your chemistry learning journey today with ChemApp. Experience the future of chemistry education.
          </p>
        </div>

        <div className="border-t border-border/40 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between text-muted-foreground text-sm">
            <p>© 2025 ChemApp. All rights reserved.</p>
            <div className="flex items-center gap-1 mt-4 sm:mt-0">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-accent fill-accent" />
              <span>for Chemistry Education</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
