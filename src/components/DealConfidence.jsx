import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { Target, TrendingUp, TrendingDown, Minus, Sparkles, AlertTriangle, CheckCircle } from 'lucide-react'
import dealsData from '../data/active_deals.json'

// Deal confidence score list with AI insights
export default function DealConfidence() {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1 })

  // Get confidence level styling
  const getConfidenceStyle = (score) => {
    if (score >= 80) return { bg: 'bg-green-500/20', border: 'border-green-500/30', text: 'text-green-400', label: 'Likely' }
    if (score >= 50) return { bg: 'bg-yellow-500/20', border: 'border-yellow-500/30', text: 'text-yellow-400', label: 'Moderate' }
    return { bg: 'bg-red-500/20', border: 'border-red-500/30', text: 'text-red-400', label: 'At Risk' }
  }

  // Get trend icon
  const getTrendIcon = (trend) => {
    if (trend === 'up') return <TrendingUp className="w-4 h-4 text-green-400" />
    if (trend === 'down') return <TrendingDown className="w-4 h-4 text-red-400" />
    return <Minus className="w-4 h-4 text-gray-400" />
  }

  // Format currency
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <section className="py-20 px-4" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-lg border border-purple-500/30 text-sm mb-6">
            <Target className="w-4 h-4 text-purple-400" />
            <span className="text-gray-300">Deal Confidence Score</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Know Which Deals{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Will Close
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            AI-powered confidence scores help you focus on deals that matter
          </p>
        </div>

        {/* Deals List */}
        <div className={`glass-card rounded-2xl p-6 sm:p-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '200ms' }}>
          {/* Header Row */}
          <div className="hidden md:grid grid-cols-12 gap-4 text-gray-500 text-sm font-medium pb-4 border-b border-white/10">
            <div className="col-span-3">Client</div>
            <div className="col-span-2">Value</div>
            <div className="col-span-2">Stage</div>
            <div className="col-span-2">Confidence</div>
            <div className="col-span-3">AI Insight</div>
          </div>

          {/* Deal Rows */}
          <div className="space-y-4 mt-4">
            {dealsData.deals.map((deal, index) => {
              const style = getConfidenceStyle(deal.confidenceScore)
              return (
                <div
                  key={deal.id}
                  className={`grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  {/* Client Name */}
                  <div className="col-span-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-white font-bold text-sm">
                      {deal.clientName.split(' ').map(w => w[0]).join('')}
                    </div>
                    <div>
                      <p className="text-white font-medium">{deal.clientName}</p>
                      <p className="text-gray-500 text-sm md:hidden">{deal.stage}</p>
                    </div>
                  </div>

                  {/* Value */}
                  <div className="col-span-2 text-white font-semibold">
                    {formatCurrency(deal.value)}
                  </div>

                  {/* Stage */}
                  <div className="col-span-2 hidden md:block">
                    <span className="px-3 py-1 rounded-full bg-white/5 text-gray-300 text-sm">
                      {deal.stage}
                    </span>
                  </div>

                  {/* Confidence Score */}
                  <div className="col-span-2">
                    <div className="flex items-center gap-2">
                      <div className={`px-3 py-1 rounded-full ${style.bg} border ${style.border}`}>
                        <span className={`font-bold ${style.text}`}>{deal.confidenceScore}%</span>
                      </div>
                      {getTrendIcon(deal.trend)}
                    </div>
                    <span className={`text-xs ${style.text} mt-1 inline-block`}>{style.label}</span>
                  </div>

                  {/* AI Insight */}
                  <div className="col-span-3 flex items-start gap-2">
                    <Sparkles className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                      deal.confidenceScore >= 80 ? 'text-green-400' :
                      deal.confidenceScore >= 50 ? 'text-yellow-400' : 'text-red-400'
                    }`} />
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {deal.buddyInsight}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Summary Footer */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-gray-400">
                  <span className="text-white font-semibold">3</span> Likely to close
                </span>
              </div>
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <span className="text-gray-400">
                  <span className="text-white font-semibold">2</span> Need attention
                </span>
              </div>
            </div>
            <button className="px-6 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-all">
              View All Deals
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
