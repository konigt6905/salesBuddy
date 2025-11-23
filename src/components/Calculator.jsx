import { useState, useMemo, useEffect } from 'react'
import { Sparkles, TrendingUp, ArrowRight, Zap } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

// Clean calculator with animated results
export default function Calculator() {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1 })
  const [animatedRevenue, setAnimatedRevenue] = useState(0)

  const [leads, setLeads] = useState(500)
  const [conversionRate, setConversionRate] = useState(8)
  const [dealSize, setDealSize] = useState(2500)

  const projectedRevenue = useMemo(() => leads * (conversionRate / 100) * dealSize, [leads, conversionRate, dealSize])
  const buddyRevenue = useMemo(() => projectedRevenue * 1.15, [projectedRevenue])

  // Animate revenue number when it changes
  useEffect(() => {
    const duration = 300
    const steps = 20
    const increment = (projectedRevenue - animatedRevenue) / steps
    let current = animatedRevenue
    let step = 0

    const timer = setInterval(() => {
      step++
      current += increment
      setAnimatedRevenue(Math.round(current))
      if (step >= steps) {
        setAnimatedRevenue(projectedRevenue)
        clearInterval(timer)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [projectedRevenue])

  const formatCurrency = (value) => {
    if (value >= 1000000) return '$' + (value / 1000000).toFixed(1) + 'M'
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value)
  }

  // Calculate fill percentage for visual slider track
  const getSliderFill = (value, min, max) => ((value - min) / (max - min)) * 100

  return (
    <section id="calculator" className="py-16 sm:py-24 px-4 relative" ref={sectionRef}>
      {/* Subtle animated background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-emerald-500/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-8 sm:mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs sm:text-sm mb-3 sm:mb-4">
            <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
            <span className="text-emerald-400 font-medium">Revenue Calculator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2 sm:mb-3">
            Simulate Your{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Growth
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-lg px-2">
            Adjust the sliders to see how Sales Buddy can optimize your output
          </p>
        </div>

        {/* Calculator Card */}
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '150ms' }}>
          <div className="bg-gradient-to-b from-white/[0.05] to-white/[0.02] backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10 p-5 sm:p-8 md:p-10">

            {/* Sliders */}
            <div className="space-y-5 sm:space-y-7 mb-8 sm:mb-10">

              {/* Monthly Leads */}
              <div className="group">
                <div className="flex justify-between items-center mb-2 sm:mb-3">
                  <span className="text-gray-300 text-sm sm:text-base font-medium">Monthly Leads</span>
                  <span className="text-xl sm:text-2xl font-bold text-white tabular-nums transition-all group-hover:text-cyan-400">
                    {leads.toLocaleString()}
                  </span>
                </div>
                <div className="relative h-2.5 sm:h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full transition-all duration-150"
                    style={{ width: `${getSliderFill(leads, 100, 5000)}%` }}
                  />
                </div>
                <input
                  type="range"
                  min="100"
                  max="5000"
                  step="50"
                  value={leads}
                  onChange={(e) => setLeads(Number(e.target.value))}
                  className="absolute w-full h-3 opacity-0 cursor-pointer"
                  style={{ marginTop: '-12px' }}
                />
                <div className="flex justify-between text-[10px] sm:text-xs text-gray-500 mt-1 sm:mt-1.5">
                  <span>100</span>
                  <span>5,000</span>
                </div>
              </div>

              {/* Conversion Rate */}
              <div className="group">
                <div className="flex justify-between items-center mb-2 sm:mb-3">
                  <span className="text-gray-300 text-sm sm:text-base font-medium">Conversion Rate</span>
                  <span className="text-xl sm:text-2xl font-bold text-white tabular-nums transition-all group-hover:text-purple-400">
                    {conversionRate}%
                  </span>
                </div>
                <div className="relative h-2.5 sm:h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full transition-all duration-150"
                    style={{ width: `${getSliderFill(conversionRate, 1, 20)}%` }}
                  />
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="0.5"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="absolute w-full h-3 opacity-0 cursor-pointer"
                  style={{ marginTop: '-12px' }}
                />
                <div className="flex justify-between text-[10px] sm:text-xs text-gray-500 mt-1 sm:mt-1.5">
                  <span>1%</span>
                  <span>20%</span>
                </div>
              </div>

              {/* Average Deal Size */}
              <div className="group">
                <div className="flex justify-between items-center mb-2 sm:mb-3">
                  <span className="text-gray-300 text-sm sm:text-base font-medium">Average Deal Size</span>
                  <span className="text-xl sm:text-2xl font-bold text-white tabular-nums transition-all group-hover:text-emerald-400">
                    {formatCurrency(dealSize)}
                  </span>
                </div>
                <div className="relative h-2.5 sm:h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-150"
                    style={{ width: `${getSliderFill(dealSize, 500, 10000)}%` }}
                  />
                </div>
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="100"
                  value={dealSize}
                  onChange={(e) => setDealSize(Number(e.target.value))}
                  className="absolute w-full h-3 opacity-0 cursor-pointer"
                  style={{ marginTop: '-12px' }}
                />
                <div className="flex justify-between text-[10px] sm:text-xs text-gray-500 mt-1 sm:mt-1.5">
                  <span>$500</span>
                  <span>$10,000</span>
                </div>
              </div>
            </div>

            {/* Results Divider */}
            <div className="relative my-6 sm:my-8">
              <div className="h-px bg-white/10" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-3 sm:px-4 bg-gray-900">
                <span className="text-gray-500 text-xs sm:text-sm">Monthly Revenue</span>
              </div>
            </div>

            {/* Results */}
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              {/* Current Projection */}
              <div className="p-3 sm:p-5 rounded-lg sm:rounded-xl bg-white/[0.03] border border-white/5">
                <p className="text-gray-500 text-[10px] sm:text-sm mb-1 sm:mb-2">Without AI</p>
                <p className="text-xl sm:text-3xl md:text-4xl font-bold text-white tabular-nums">
                  {formatCurrency(animatedRevenue)}
                </p>
              </div>

              {/* With Sales Buddy */}
              <div className="relative p-3 sm:p-5 rounded-lg sm:rounded-xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/5 border border-emerald-500/20 overflow-hidden">
                {/* Animated glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 animate-shimmer" />

                <div className="relative">
                  <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
                    <p className="text-emerald-400 text-[10px] sm:text-sm font-medium">With Sales Buddy</p>
                  </div>
                  <p className="text-xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 tabular-nums">
                    {formatCurrency(buddyRevenue)}
                  </p>
                  <div className="flex items-center gap-0.5 sm:gap-1 mt-1 sm:mt-2 text-emerald-400/80">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-[10px] sm:text-sm font-medium">+{formatCurrency(buddyRevenue - projectedRevenue)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <button className="w-full mt-6 sm:mt-8 group px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold text-base sm:text-lg transition-all hover:shadow-xl hover:shadow-emerald-500/25 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
              Start Your Free Trial
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-center text-gray-500 text-xs sm:text-sm mt-3 sm:mt-4">No credit card required</p>
          </div>
        </div>
      </div>
    </section>
  )
}
