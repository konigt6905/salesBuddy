import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import Calculator from './components/Calculator'
import PipelineChart from './components/PipelineChart'
import DealConfidence from './components/DealConfidence'
import TeamLeaderboard from './components/TeamLeaderboard'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

// Main App component - assembles all sections for the landing page
export default function App() {
  return (
    <div className="min-h-screen bg-[#030712]">
      <Navigation />
      <main className="relative">
        <Hero />
        <Features />
        <Calculator />
        <PipelineChart />
        <DealConfidence />
        <TeamLeaderboard />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
