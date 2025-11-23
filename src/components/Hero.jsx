import { ArrowRight, Play, Shield, Sparkles, Target, TrendingUp, TrendingDown, BarChart3, Activity, Zap, Mail } from 'lucide-react'
import { useSmoothScroll } from '../hooks/useIntersectionObserver'

// Sparkline helper: generates SVG path from data array
const generateSparklinePath = (data, isArea = false) => {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1

  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 100
    const y = 32 - ((value - min) / range) * 28
    return `${x},${y}`
  })

  if (isArea) return `M0,32 L${points.join(' L')} L100,32 Z`
  return `M${points.join(' L')}`
}

const getLastPointY = (data) => {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1
  return 32 - ((data[data.length - 1] - min) / range) * 28
}

// Hero section with premium animated dashboard preview
export default function Hero() {
  const scrollTo = useSmoothScroll()

  const stats = [
    { label: 'Revenue', value: '$1.24M', change: '+12.5%', positive: true, sparkline: [40, 45, 42, 48, 52, 49, 55, 60, 58, 65, 70, 75] },
    { label: 'Active Deals', value: '47', change: '+8', positive: true, sparkline: [30, 32, 35, 33, 38, 40, 42, 45, 43, 47, 46, 47] },
    { label: 'Win Rate', value: '68%', change: '+5.2%', positive: true, sparkline: [55, 58, 56, 60, 62, 59, 63, 65, 64, 67, 66, 68] },
    { label: 'Pipeline', value: '$2.4M', change: '+$340K', positive: true, sparkline: [65, 68, 66, 70, 73, 71, 75, 78, 76, 80, 82, 85] },
  ]

  const deals = [
    { name: 'Acme Corp', value: '$125K', confidence: 92, stage: 'Negotiation', trend: 'up' },
    { name: 'TechStart Inc', value: '$89K', confidence: 78, stage: 'Proposal', trend: 'up' },
    { name: 'GlobalTech', value: '$210K', confidence: 45, stage: 'Discovery', trend: 'down' },
  ]

  const pipelineStages = [
    { stage: 'Lead', count: 124, width: '100%', color: 'from-blue-500 to-blue-400' },
    { stage: 'Qualified', count: 89, width: '72%', color: 'from-cyan-500 to-cyan-400' },
    { stage: 'Proposal', count: 45, width: '36%', color: 'from-teal-500 to-teal-400' },
    { stage: 'Negotiation', count: 23, width: '19%', color: 'from-emerald-500 to-emerald-400' },
    { stage: 'Closed', count: 18, width: '15%', color: 'from-green-500 to-green-400' },
  ]

  const activities = [
    { action: 'Deal moved to Negotiation', company: 'Acme Corp', time: '2m', Icon: ArrowRight, color: 'text-green-400' },
    { action: 'New lead scored', company: 'DataFlow Inc', time: '15m', Icon: Zap, color: 'text-cyan-400' },
    { action: 'Email opened', company: 'CloudBase', time: '1h', Icon: Mail, color: 'text-blue-400' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-8 px-4 overflow-hidden">
      {/* Animated Background Orbs - subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto text-center z-10">
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4 sm:mb-6 animate-fade-in-up px-2 sm:px-0">
          <span className="text-white">Meet </span>
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Sales Buddy
          </span>
          <span className="text-white">.</span>
          <br />
          <span className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl leading-tight">
            The AI Co-Pilot Your Revenue Team Was Missing.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 sm:mb-10 animate-fade-in-up delay-100 px-2 sm:px-0">
          Stop drowning in spreadsheets. Sales Buddy transforms your raw CRM data into clear,
          actionable visual insights. Predict trends, spot risks, and close deals faster.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 animate-fade-in-up delay-200 px-4 sm:px-0">
          <button
            onClick={() => scrollTo('calculator')}
            className="group w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-base sm:text-lg shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            Start Free Trial
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-lg border border-white/20 hover:border-white/40 text-white font-semibold text-base sm:text-lg transition-all flex items-center justify-center gap-2">
            <Play className="w-5 h-5" />
            View Demo
          </button>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-500 animate-fade-in delay-300 px-4 sm:px-0">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500" />
            <span>Enterprise security</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-gray-600" />
          <span>No credit card</span>
          <div className="w-1 h-1 rounded-full bg-gray-600" />
          <span>2 min setup</span>
        </div>

        {/* Hero Visual - Premium Dashboard Preview */}
        <div className="mt-10 sm:mt-16 pb-4 sm:pb-8 relative animate-hero-reveal delay-400 mx-2 sm:mx-0">
          {/* Glow effect behind dashboard */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/15 to-blue-500/10 blur-3xl scale-110" />

          <div className="relative glass-card rounded-xl sm:rounded-2xl p-3 sm:p-6 max-w-5xl mx-auto border-cyan-500/20 shadow-2xl shadow-cyan-500/10">

            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-3 sm:mb-5">
              <div className="flex items-center gap-2 sm:gap-4">
                {/* The "Buddy" AI Orb - animated with orbital ring */}
                <div className="relative">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-cyan-400 flex items-center justify-center animate-pulse-glow">
                    <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                      <Sparkles className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white" />
                    </div>
                  </div>
                  {/* Orbital ring - hidden on mobile for cleaner look */}
                  <div
                    className="hidden sm:block absolute inset-[-4px] rounded-full border-2 border-cyan-400/30 border-dashed"
                    style={{ animation: 'spin 8s linear infinite' }}
                  />
                  {/* Pulse ring */}
                  <div className="absolute inset-[-2px] rounded-full bg-cyan-400/20 animate-ping opacity-75" style={{ animationDuration: '3s' }} />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <p className="text-white font-semibold text-sm sm:text-lg">Sales Buddy</p>
                    <span className="px-1.5 sm:px-2 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-[10px] sm:text-xs font-medium animate-pulse">
                      AI Active
                    </span>
                  </div>
                  <p className="text-gray-500 text-[10px] sm:text-sm">Live data - Updated 2s ago</p>
                </div>
              </div>

              {/* Connection Status */}
              <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-400 text-[10px] sm:text-sm font-medium">Live</span>
              </div>
            </div>

            {/* Stats Row with Sparklines */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-3 sm:mb-5">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="relative bg-white/5 rounded-lg sm:rounded-xl p-2 sm:p-4 border border-white/10 overflow-hidden group hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-0.5 sm:mb-1">
                      <p className="text-gray-400 text-[9px] sm:text-xs font-medium uppercase tracking-wider">{stat.label}</p>
                      <span className={`text-[9px] sm:text-xs font-semibold ${stat.positive ? 'text-green-400' : 'text-red-400'}`}>
                        {stat.change}
                      </span>
                    </div>
                    <p className="text-sm sm:text-xl font-bold text-white mb-1 sm:mb-2">{stat.value}</p>

                    {/* Mini Sparkline SVG */}
                    <svg className="w-full h-4 sm:h-6" viewBox="0 0 100 32" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id={`sparkGradient${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor={stat.positive ? '#06b6d4' : '#ef4444'} stopOpacity="0.4" />
                          <stop offset="100%" stopColor={stat.positive ? '#06b6d4' : '#ef4444'} stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d={generateSparklinePath(stat.sparkline, true)}
                        fill={`url(#sparkGradient${index})`}
                      />
                      <path
                        d={generateSparklinePath(stat.sparkline, false)}
                        fill="none"
                        stroke={stat.positive ? '#06b6d4' : '#ef4444'}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="100"
                        cy={getLastPointY(stat.sparkline)}
                        r="3"
                        fill={stat.positive ? '#06b6d4' : '#ef4444'}
                        className="animate-pulse"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4">

              {/* Left Column: Deal Cards with Confidence Scores */}
              <div className="lg:col-span-5 space-y-1.5 sm:space-y-2">
                <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                  <h3 className="text-white text-xs sm:text-sm font-semibold flex items-center gap-1.5 sm:gap-2">
                    <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
                    Top Deals
                  </h3>
                  <span className="text-gray-500 text-[10px] sm:text-xs">AI Confidence</span>
                </div>

                {deals.map((deal, index) => (
                  <div
                    key={deal.name}
                    className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/20 hover:bg-white/[0.07] transition-all duration-300"
                  >
                    {/* Company Avatar */}
                    <div className={`w-7 h-7 sm:w-9 sm:h-9 rounded-md sm:rounded-lg flex items-center justify-center text-[10px] sm:text-xs font-bold ${
                      deal.confidence >= 80 ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      deal.confidence >= 60 ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' :
                      'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                    }`}>
                      {deal.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                    </div>

                    {/* Deal Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-white text-[11px] sm:text-sm font-medium truncate">{deal.name}</p>
                        <p className="text-white text-[11px] sm:text-sm font-semibold">{deal.value}</p>
                      </div>
                      <div className="flex items-center justify-between mt-0.5">
                        <span className="text-gray-500 text-[10px] sm:text-xs">{deal.stage}</span>
                        <div className="flex items-center gap-0.5 sm:gap-1">
                          {deal.trend === 'up' ? (
                            <TrendingUp className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-400" />
                          ) : (
                            <TrendingDown className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-red-400" />
                          )}
                          <span className={`text-[10px] sm:text-xs font-bold ${
                            deal.confidence >= 80 ? 'text-green-400' :
                            deal.confidence >= 60 ? 'text-cyan-400' :
                            'text-amber-400'
                          }`}>
                            {deal.confidence}%
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Confidence Bar - Hidden on mobile for cleaner look */}
                    <div className="hidden sm:block w-14 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${
                          deal.confidence >= 80 ? 'bg-gradient-to-r from-green-500 to-emerald-400' :
                          deal.confidence >= 60 ? 'bg-gradient-to-r from-cyan-500 to-blue-400' :
                          'bg-gradient-to-r from-amber-500 to-orange-400'
                        }`}
                        style={{ width: `${deal.confidence}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Center Column: Pipeline Funnel */}
              <div className="lg:col-span-3 mt-2 lg:mt-0">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                  <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
                  <h3 className="text-white text-xs sm:text-sm font-semibold">Pipeline</h3>
                </div>

                <div className="space-y-1 sm:space-y-1.5">
                  {pipelineStages.map((stage, index) => (
                    <div key={stage.stage} className="relative group">
                      <div
                        className={`h-5 sm:h-7 rounded-md sm:rounded-lg bg-gradient-to-r ${stage.color} flex items-center justify-between px-2 sm:px-2.5 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-cyan-500/20`}
                        style={{
                          width: stage.width,
                          transitionDelay: `${index * 100}ms`
                        }}
                      >
                        <span className="text-white text-[10px] sm:text-xs font-medium truncate">{stage.stage}</span>
                        <span className="text-white/90 text-[10px] sm:text-xs font-bold">{stage.count}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Conversion Rate */}
                <div className="mt-2 sm:mt-3 pt-1.5 sm:pt-2 border-t border-white/10 flex items-center justify-between">
                  <span className="text-gray-500 text-[10px] sm:text-xs">Conversion</span>
                  <div className="flex items-center gap-0.5 sm:gap-1">
                    <TrendingUp className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-400" />
                    <span className="text-green-400 text-xs sm:text-sm font-bold">14.5%</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Activity Feed + AI Insight */}
              <div className="lg:col-span-4 space-y-2 sm:space-y-3 mt-2 lg:mt-0">
                {/* AI Insight Card - Highlighted */}
                <div className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-500/15 to-blue-500/10 border border-cyan-500/30 relative overflow-hidden">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer" />

                  <div className="flex items-start gap-2 relative z-10">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0 animate-pulse-glow">
                      <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-cyan-400 text-[10px] sm:text-xs font-semibold mb-0.5 sm:mb-1 flex items-center gap-1">
                        Buddy Insight
                        <span className="inline-block w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      </p>
                      <p className="text-gray-300 text-[10px] sm:text-xs leading-relaxed">
                        "Acme Corp engagement up 40%. Schedule a follow-up call."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Activity Feed */}
                <div>
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                    <Activity className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
                    <h3 className="text-white text-xs sm:text-sm font-semibold">Recent Activity</h3>
                    <span className="ml-auto text-gray-600 text-[10px] sm:text-xs">Live</span>
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    {activities.map((activity, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs p-1.5 sm:p-2 rounded-md sm:rounded-lg hover:bg-white/5 transition-colors"
                      >
                        <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full ${
                          activity.color.replace('text-', 'bg-').replace('-400', '-500/20')
                        } flex items-center justify-center flex-shrink-0`}>
                          <activity.Icon className={`w-2 h-2 sm:w-2.5 sm:h-2.5 ${activity.color}`} />
                        </div>
                        <span className="text-gray-400 flex-1 truncate">
                          <span className="text-white font-medium">{activity.company}</span>
                          <span className="text-gray-500 hidden sm:inline"> - {activity.action}</span>
                        </span>
                        <span className="text-gray-600 text-[9px] sm:text-[10px]">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
