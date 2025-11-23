import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { Star, Quote, Heart } from 'lucide-react'

// Testimonials section with social proof
export default function Testimonials() {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1 })

  const testimonials = [
    {
      quote: "Before Sales Buddy, our forecasting was a guessing game. Now we hit our numbers with surgical precision.",
      author: "Alex Chen",
      role: "VP of Sales",
      company: "TechFlow",
      avatar: "AC",
      rating: 5,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      quote: "The 'Deal Confidence Score' saved us from wasting months on a dead-end client. It pays for itself.",
      author: "Maria Garcia",
      role: "Founder",
      company: "StartScale",
      avatar: "MG",
      rating: 5,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      quote: "Our team's productivity increased by 40% in the first month. The pipeline visualization is a game-changer.",
      author: "James Wilson",
      role: "Sales Director",
      company: "Nexus Corp",
      avatar: "JW",
      rating: 5,
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      quote: "Finally, a tool that actually understands sales. The AI insights are spot-on and actionable.",
      author: "Sarah Kim",
      role: "CRO",
      company: "GrowthLabs",
      avatar: "SK",
      rating: 5,
      gradient: 'from-orange-500 to-amber-500',
    },
  ]

  return (
    <section id="testimonials" className="py-20 px-4 relative overflow-hidden" ref={sectionRef}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-lg border border-pink-500/30 text-sm mb-6">
            <Heart className="w-4 h-4 text-pink-400" />
            <span className="text-gray-300">Loved by Sales Teams</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Sales Teams Love{' '}
            <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
              Their Buddy
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join thousands of sales professionals crushing their quotas
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className={`glass-card rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:scale-[1.02] hover:border-white/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-white/10" />
                <p className="text-gray-300 text-lg leading-relaxed pl-6">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center text-white font-bold`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role} @ {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Bar */}
        <div className={`mt-16 text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '500ms' }}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 px-8 py-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
              <span className="text-white font-semibold ml-2">4.9/5</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/10" />
            <p className="text-gray-400">
              Based on <span className="text-white font-semibold">2,500+</span> reviews
            </p>
            <div className="hidden sm:block w-px h-6 bg-white/10" />
            <p className="text-gray-400">
              <span className="text-white font-semibold">10,000+</span> active users
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
