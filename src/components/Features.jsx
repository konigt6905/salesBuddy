import { Activity, Target, TrendingUp, Brain, BarChart3, Zap } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

// Feature cards with scroll-triggered staggered animations
export default function Features() {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1 })

  const features = [
    {
      icon: Activity,
      badge: 'The Pipeline Pulse',
      title: 'See Your Pipeline in 4K',
      description: 'Visualize your sales funnel as a living, breathing flow. Identify exactly where leads are dropping off and where the money is stuck.',
      gradient: 'from-cyan-900/40 via-cyan-900/20 to-transparent',
      border: 'border-cyan-500/20',
      badgeBg: 'bg-cyan-500/10',
      badgeBorder: 'border-cyan-500/30',
      text: 'text-cyan-400',
      iconBg: 'bg-cyan-500/20',
    },
    {
      icon: Target,
      badge: 'Deal Confidence Score',
      title: 'Know Which Deals Will Close',
      description: 'Sales Buddy analyzes email sentiment, response times, and historical data to assign a "Confidence Score" to every open deal. Stop chasing ghosts.',
      gradient: 'from-purple-900/40 via-purple-900/20 to-transparent',
      border: 'border-purple-500/20',
      badgeBg: 'bg-purple-500/10',
      badgeBorder: 'border-purple-500/30',
      text: 'text-purple-400',
      iconBg: 'bg-purple-500/20',
    },
    {
      icon: TrendingUp,
      badge: 'Smart Forecast',
      title: 'Predict the Future, No Crystal Ball Required',
      description: 'Run "What-if" scenarios instantly. See how hiring two more reps or increasing lead flow by 20% impacts your Q4 revenue.',
      gradient: 'from-emerald-900/40 via-emerald-900/20 to-transparent',
      border: 'border-emerald-500/20',
      badgeBg: 'bg-emerald-500/10',
      badgeBorder: 'border-emerald-500/30',
      text: 'text-emerald-400',
      iconBg: 'bg-emerald-500/20',
    },
  ]

  return (
    <section id="features" className="py-20 px-4" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-lg border border-blue-500/30 text-sm mb-6">
            <Brain className="w-4 h-4 text-blue-400" />
            <span className="text-gray-300">AI-Powered Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Crush Quota
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Three powerful features that transform how your team sells
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.badge}
              className={`rounded-2xl bg-gradient-to-br ${feature.gradient} border ${feature.border} p-8 transition-all duration-500 hover:scale-105 hover:border-white/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl ${feature.iconBg} flex items-center justify-center mb-6`}>
                <feature.icon className={`w-6 h-6 ${feature.text}`} />
              </div>

              {/* Badge */}
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${feature.badgeBg} border ${feature.badgeBorder} mb-4`}>
                <span className={`text-sm font-medium ${feature.text}`}>{feature.badge}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Learn More Link */}
              <button className={`mt-6 ${feature.text} hover:underline text-sm font-medium flex items-center gap-1`}>
                Learn more
                <Zap className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '500ms' }}>
          {[
            { icon: BarChart3, value: '98%', label: 'Forecast Accuracy' },
            { icon: TrendingUp, value: '47%', label: 'Avg Revenue Increase' },
            { icon: Target, value: '2.3x', label: 'Faster Deal Close' },
            { icon: Activity, value: '10K+', label: 'Active Users' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 mb-3">
                <stat.icon className="w-5 h-5 text-cyan-400" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
