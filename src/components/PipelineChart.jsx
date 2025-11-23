import { useEffect, useRef, useState } from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend, Filler } from 'chart.js'
import { Bar, Line } from 'react-chartjs-2'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { BarChart3, TrendingUp, Activity } from 'lucide-react'
import salesData from '../data/sales_data.json'

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend, Filler)

// Pipeline visualization with animated charts
export default function PipelineChart() {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1 })
  const [activeTab, setActiveTab] = useState('pipeline')
  const [animationComplete, setAnimationComplete] = useState(false)

  // Trigger animation when visible
  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setAnimationComplete(true), 500)
    }
  }, [isVisible])

  // Pipeline funnel data
  const pipelineData = {
    labels: salesData.pipelineStages.map(s => s.stage),
    datasets: [{
      label: 'Deals',
      data: animationComplete ? salesData.pipelineStages.map(s => s.count) : salesData.pipelineStages.map(() => 0),
      backgroundColor: [
        'rgba(59, 130, 246, 0.8)',
        'rgba(56, 189, 248, 0.8)',
        'rgba(6, 182, 212, 0.8)',
        'rgba(20, 184, 166, 0.8)',
        'rgba(16, 185, 129, 0.8)',
        'rgba(34, 197, 94, 0.8)',
      ],
      borderColor: [
        'rgb(59, 130, 246)',
        'rgb(56, 189, 248)',
        'rgb(6, 182, 212)',
        'rgb(20, 184, 166)',
        'rgb(16, 185, 129)',
        'rgb(34, 197, 94)',
      ],
      borderWidth: 2,
      borderRadius: 8,
    }]
  }

  // Revenue history line chart data
  const revenueData = {
    labels: salesData.revenueHistory.map(r => r.month),
    datasets: [
      {
        label: 'Actual Revenue',
        data: animationComplete ? salesData.revenueHistory.map(r => r.actual) : salesData.revenueHistory.map(() => 0),
        borderColor: 'rgb(6, 182, 212)',
        backgroundColor: 'rgba(6, 182, 212, 0.1)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: 'rgb(6, 182, 212)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 4,
      },
      {
        label: 'Predicted',
        data: animationComplete ? salesData.revenueHistory.map(r => r.predicted) : salesData.revenueHistory.map(() => 0),
        borderColor: 'rgb(168, 85, 247)',
        backgroundColor: 'transparent',
        borderDash: [5, 5],
        tension: 0.4,
        pointBackgroundColor: 'rgb(168, 85, 247)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 4,
      }
    ]
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 1500, easing: 'easeOutQuart' },
    plugins: {
      legend: {
        labels: { color: 'rgba(255, 255, 255, 0.7)', font: { size: 12 } }
      },
      tooltip: {
        backgroundColor: 'rgba(17, 24, 39, 0.95)',
        titleColor: '#fff',
        bodyColor: 'rgba(255, 255, 255, 0.8)',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        padding: 12,
        cornerRadius: 8,
      }
    },
    scales: {
      x: {
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
        ticks: { color: 'rgba(255, 255, 255, 0.6)' }
      },
      y: {
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
        ticks: { color: 'rgba(255, 255, 255, 0.6)' }
      }
    }
  }

  const tabs = [
    { id: 'pipeline', label: 'Pipeline Funnel', icon: BarChart3 },
    { id: 'revenue', label: 'Revenue History', icon: TrendingUp },
  ]

  return (
    <section id="pipeline" className="py-20 px-4" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-lg border border-cyan-500/30 text-sm mb-6">
            <Activity className="w-4 h-4 text-cyan-400" />
            <span className="text-gray-300">Living Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Your Pipeline,{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Visualized
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Watch your sales funnel come to life with real-time data visualization
          </p>
        </div>

        {/* Chart Card */}
        <div className={`glass-card rounded-2xl p-6 sm:p-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '200ms' }}>
          {/* Tab Buttons */}
          <div className="flex gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Charts */}
          <div className="h-[400px]">
            {activeTab === 'pipeline' ? (
              <Bar data={pipelineData} options={chartOptions} />
            ) : (
              <Line data={revenueData} options={chartOptions} />
            )}
          </div>

          {/* Stats Summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10">
            {[
              { label: 'Pipeline Value', value: salesData.appStats.pipelineValue },
              { label: 'Active Deals', value: salesData.appStats.activeDeals },
              { label: 'Win Rate', value: salesData.appStats.winRate },
              { label: 'Avg Deal Size', value: salesData.appStats.avgDealSize },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-gray-500 text-sm">{stat.label}</p>
                <p className="text-xl font-bold text-white mt-1">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
