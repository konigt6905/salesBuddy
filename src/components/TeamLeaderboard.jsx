import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { Trophy, TrendingUp, Target, Flame } from 'lucide-react'
import teamData from '../data/team_stats.json'

// Team performance leaderboard visualization
export default function TeamLeaderboard() {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1 })

  // Sort by target percentage
  const sortedTeam = [...teamData.teamPerformance].sort((a, b) => b.targetPercent - a.targetPercent)

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
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-lg border border-amber-500/30 text-sm mb-6">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span className="text-gray-300">Team Performance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Track Your{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Champions
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real-time leaderboard to motivate and track team performance
          </p>
        </div>

        {/* Leaderboard Card */}
        <div className={`glass-card rounded-2xl p-6 sm:p-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '200ms' }}>
          {/* Team Members */}
          <div className="space-y-4">
            {sortedTeam.map((member, index) => (
              <div
                key={member.id}
                className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                  index === 0
                    ? 'bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30'
                    : 'bg-white/5 border border-white/5'
                } ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                {/* Rank */}
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
                  index === 0 ? 'bg-amber-500 text-black' :
                  index === 1 ? 'bg-gray-400 text-black' :
                  index === 2 ? 'bg-amber-700 text-white' :
                  'bg-white/10 text-gray-400'
                }`}>
                  {index + 1}
                </div>

                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                  {member.avatar}
                </div>

                {/* Name and Stats */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-white font-semibold truncate">{member.name}</p>
                    {member.streak > 0 && (
                      <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 text-xs">
                        <Flame className="w-3 h-3" />
                        <span>{member.streak}</span>
                      </div>
                    )}
                    {index === 0 && <Trophy className="w-4 h-4 text-amber-400" />}
                  </div>
                  {/* Progress Bar */}
                  <div className="mt-2 flex items-center gap-3">
                    <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${
                          member.targetPercent >= 90 ? 'bg-gradient-to-r from-emerald-500 to-green-400' :
                          member.targetPercent >= 70 ? 'bg-gradient-to-r from-blue-500 to-cyan-400' :
                          'bg-gradient-to-r from-amber-500 to-orange-400'
                        }`}
                        style={{ width: isVisible ? `${member.targetPercent}%` : '0%' }}
                      />
                    </div>
                    <span className="text-gray-400 text-sm w-12">{member.targetPercent}%</span>
                  </div>
                </div>

                {/* Sales Amount */}
                <div className="text-right hidden sm:block">
                  <p className="text-white font-bold">{formatCurrency(member.sales)}</p>
                  <p className="text-gray-500 text-sm">of {formatCurrency(member.target)}</p>
                </div>

                {/* Win Rate */}
                <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5">
                  <Target className="w-4 h-4 text-cyan-400" />
                  <span className="text-gray-300 text-sm">{member.winRate}%</span>
                </div>
              </div>
            ))}
          </div>

          {/* Team Totals */}
          <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-gray-500 text-sm">Total Sales</p>
              <p className="text-xl font-bold text-white">{formatCurrency(teamData.teamTotals.totalSales)}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-500 text-sm">Total Target</p>
              <p className="text-xl font-bold text-white">{formatCurrency(teamData.teamTotals.totalTarget)}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-500 text-sm">Closed Deals</p>
              <p className="text-xl font-bold text-white">{teamData.teamTotals.totalDeals}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-500 text-sm">Avg Win Rate</p>
              <p className="text-xl font-bold text-white">{teamData.teamTotals.avgWinRate}%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
