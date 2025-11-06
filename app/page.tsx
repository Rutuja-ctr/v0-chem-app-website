import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Features from "@/components/features"
import Team from "@/components/team"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Features />
      <Team />
      <Footer />
    </main>
  )
}
