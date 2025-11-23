import { ArrowRight, Zap, Github, Twitter, Linkedin, Mail } from 'lucide-react'

// Final CTA section and Footer
export default function Footer() {
  const footerLinks = {
    Product: ['Features', 'Pricing', 'Integrations', 'Changelog'],
    Company: ['About', 'Blog', 'Careers', 'Contact'],
    Resources: ['Documentation', 'API Reference', 'Help Center', 'Status'],
    Legal: ['Privacy', 'Terms', 'Security', 'GDPR'],
  }

  return (
    <>
      {/* Final CTA Section */}
      <section className="py-14 sm:py-20 px-4 relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-cyan-900/20 to-blue-900/30" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[800px] h-[250px] sm:h-[400px] bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready to{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Transform
            </span>{' '}
            Your Sales?
          </h2>
          <p className="text-gray-400 text-sm sm:text-lg mb-6 sm:mb-10 max-w-2xl mx-auto">
            Join thousands of sales teams already crushing their quotas with Sales Buddy.
            Start your free trial today - no credit card required.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <button className="w-full sm:w-auto group px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-base sm:text-lg shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 transition-all hover:scale-105 flex items-center justify-center gap-2">
              Start Free Trial
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-lg border border-white/20 hover:border-white/40 text-white font-semibold text-base sm:text-lg transition-all">
              Schedule Demo
            </button>
          </div>

          {/* Trust Text */}
          <p className="text-gray-500 text-xs sm:text-sm">
            Free 14-day trial • No credit card • 2 min setup
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 sm:py-16 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 sm:gap-12">
            {/* Logo and Description */}
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <span className="text-lg sm:text-xl font-bold text-white">Sales Buddy</span>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
                The AI co-pilot your revenue team was missing. Transform CRM data into
                actionable insights and close deals faster.
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-3 sm:gap-4">
                {[
                  { icon: Twitter, href: '#' },
                  { icon: Linkedin, href: '#' },
                  { icon: Github, href: '#' },
                  { icon: Mail, href: '#' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all"
                    aria-label={`Social link ${index + 1}`}
                  >
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-white text-sm sm:text-base font-semibold mb-3 sm:mb-4">{category}</h4>
                <ul className="space-y-2 sm:space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-gray-500 text-xs sm:text-sm">
              &copy; {new Date().getFullYear()} Sales Buddy. All rights reserved.
            </p>
            <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
