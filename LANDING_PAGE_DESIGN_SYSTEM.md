# Landing Page Design System

A comprehensive design system prompt for generating modern, animated React landing pages. Built for React + Vite, deployable to GitHub Pages as static sites.

---

## Tech Stack Requirements

```
Framework: React 18+ with Vite
Styling: Tailwind CSS 4+
Icons: Lucide React
Routing: React Router DOM (for SPA navigation)
Deployment: GitHub Pages (static export)
```

### Package.json Dependencies
```json
{
  "dependencies": {
    "react": "^18.x",
    "react-dom": "^18.x",
    "react-router-dom": "^6.x",
    "lucide-react": "^0.x"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.x",
    "tailwindcss": "^4.x",
    "vite": "^5.x"
  }
}
```

### Vite Config for GitHub Pages
```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/repository-name/', // Replace with your repo name
  build: {
    outDir: 'dist'
  }
})
```

---

## Design Philosophy

### Core Principles

1. **Dark-First Glassmorphism** - Deep black/gray backgrounds with translucent glass-like cards
2. **Gradient Accents** - Vibrant color gradients as highlights against dark backgrounds
3. **Micro-interactions** - Subtle animations on every interactive element
4. **Scroll-Triggered Animations** - Content animates into view as user scrolls
5. **Floating Elements** - Background orbs and shapes that pulse and float
6. **Progressive Disclosure** - Information reveals through expandable sections

### Visual Hierarchy
- Primary focus: Large gradient headlines
- Secondary: White/light gray body text
- Tertiary: Muted gray supporting text
- Accent: Colored badges, buttons, and icons

---

## Color System

### Background Colors
```css
/* Primary Background - Deep space gradient */
background: linear-gradient(to bottom, #000000, #111827);

/* Card Background - Glass effect */
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(16px);
border: 1px solid rgba(255, 255, 255, 0.1);

/* Elevated Card */
background: linear-gradient(to bottom-right,
  rgba(17, 24, 39, 0.8),
  rgba(17, 24, 39, 0.9),
  rgba(0, 0, 0, 0.9)
);
```

### Accent Color Palettes

Choose ONE primary accent palette per landing page:

**Cyan/Blue (Tech, SaaS, AI)**
```css
--accent-primary: #06b6d4;    /* cyan-500 */
--accent-secondary: #3b82f6;  /* blue-500 */
--gradient: linear-gradient(to right, #3b82f6, #06b6d4);
--glow: rgba(6, 182, 212, 0.4);
```

**Purple/Violet (Creative, Premium)**
```css
--accent-primary: #a855f7;    /* purple-500 */
--accent-secondary: #8b5cf6;  /* violet-500 */
--gradient: linear-gradient(to right, #a855f7, #8b5cf6);
--glow: rgba(168, 85, 247, 0.4);
```

**Green/Emerald (Finance, Health, Eco)**
```css
--accent-primary: #10b981;    /* emerald-500 */
--accent-secondary: #22c55e;  /* green-500 */
--gradient: linear-gradient(to right, #10b981, #22c55e);
--glow: rgba(16, 185, 129, 0.4);
```

**Amber/Yellow (Energy, Warmth)**
```css
--accent-primary: #f59e0b;    /* amber-500 */
--accent-secondary: #eab308;  /* yellow-500 */
--gradient: linear-gradient(to right, #f59e0b, #eab308);
--glow: rgba(245, 158, 11, 0.4);
```

### Semantic Colors
```css
--success: #22c55e;  /* green-500 */
--warning: #f59e0b;  /* amber-500 */
--error: #ef4444;    /* red-500 */
--info: #3b82f6;     /* blue-500 */
```

### Text Colors
```css
--text-primary: #ffffff;
--text-secondary: #e5e7eb;     /* gray-200 */
--text-muted: #9ca3af;         /* gray-400 */
--text-subtle: #6b7280;        /* gray-500 */
```

---

## Typography

### Font Stack
```css
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
             Roboto, 'Helvetica Neue', Arial, sans-serif;
```

### Type Scale

```
Hero Headline:    text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold
Section Title:    text-3xl sm:text-4xl md:text-5xl font-bold
Card Title:       text-xl sm:text-2xl font-semibold
Subheadline:      text-lg sm:text-xl text-gray-400
Body:             text-base text-gray-300
Small:            text-sm text-gray-400
Caption:          text-xs text-gray-500
```

### Gradient Text Effect
```jsx
<span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
  Gradient Text
</span>
```

---

## Layout Patterns

### Container Widths
```css
max-w-7xl   /* 80rem - Main content */
max-w-4xl   /* 56rem - Narrow content (FAQ, CTA) */
max-w-5xl   /* 64rem - Medium content (Hero visual) */
```

### Section Spacing
```css
py-16 sm:py-20   /* Standard section padding */
px-4 sm:px-6 lg:px-8   /* Horizontal padding */
space-y-8   /* Vertical spacing between elements */
gap-8   /* Grid/flex gap */
```

### Grid Patterns
```jsx
// 3-column features
<div className="grid md:grid-cols-3 gap-8">

// 2-column alternating (feature showcase)
<div className="grid md:grid-cols-2 gap-12 items-center">

// Pricing cards
<div className="grid md:grid-cols-3 gap-8">

// Testimonials
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
```

---

## Component Patterns

### Navigation Bar (Sticky with Scroll Effect)
```jsx
const [scrolled, setScrolled] = useState(false)

useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 20)
  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])

<header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
  scrolled
    ? 'bg-black/80 backdrop-blur-lg border-b border-white/10'
    : 'bg-transparent'
}`}>
```

### Hero Section Structure
```jsx
<section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 overflow-hidden">
  {/* Background Orbs */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
  </div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto text-center z-10">
    {/* Badge */}
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-lg border border-blue-500/30 text-sm">
      <Zap className="w-4 h-4 text-amber-400 animate-pulse" />
      <span className="text-gray-300">Badge Text</span>
    </div>

    {/* Headlines */}
    {/* CTAs */}
    {/* Hero Visual */}
  </div>
</section>
```

### Glass Card
```jsx
<div className="rounded-xl bg-gradient-to-br from-gray-900/80 via-gray-900/90 to-black/90 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all p-6">
  {/* Card content */}
</div>
```

### Feature Card with Accent Color
```jsx
<div className={`rounded-xl bg-gradient-to-br ${feature.gradient} border ${feature.border} p-8 transition-all hover:scale-105`}>
  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${feature.badgeBg} border ${feature.badgeBorder} mb-4`}>
    <FeatureIcon className={`w-4 h-4 ${feature.text}`} />
    <span className={`text-sm ${feature.text}`}>{feature.title}</span>
  </div>
  <h3 className="text-2xl font-bold text-white mb-2">{feature.headline}</h3>
  <p className="text-gray-400">{feature.description}</p>
</div>
```

### Pricing Card (Highlighted)
```jsx
<div className={`relative rounded-2xl bg-gradient-to-br from-gray-900/80 via-gray-900/90 to-black/90 backdrop-blur-lg border p-8 transition-all hover:scale-105 ${
  isHighlighted
    ? 'border-blue-500/50 shadow-2xl shadow-blue-500/30'
    : 'border-white/10 hover:border-white/20'
}`}>
  {isHighlighted && (
    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold shadow-lg">
      Most Popular
    </div>
  )}
  {/* Pricing content */}
</div>
```

### Accordion/FAQ Item
```jsx
<div className="rounded-xl bg-gradient-to-br from-gray-900/80 via-gray-900/90 to-black/90 backdrop-blur-lg border border-white/10 overflow-hidden">
  <button
    onClick={() => setOpen(!open)}
    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
  >
    <span className="text-lg font-semibold text-white pr-8">{question}</span>
    <ChevronDown className={`w-5 h-5 text-cyan-400 flex-shrink-0 transition-transform ${
      open ? 'rotate-180' : ''
    }`} />
  </button>
  {open && (
    <div className="px-6 pb-6 text-gray-400 animate-chat-open">
      {answer}
    </div>
  )}
</div>
```

### CTA Button Variants
```jsx
// Primary CTA - Gradient with glow
<button className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-lg shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 transition-all hover:scale-105 flex items-center gap-2">
  Get Started
  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
</button>

// Secondary CTA - Glass
<button className="px-8 py-4 rounded-lg bg-white/5 hover:bg-white/10 backdrop-blur-lg border border-white/20 hover:border-white/40 text-white font-semibold text-lg transition-all flex items-center gap-2">
  <Play className="w-5 h-5" />
  Watch Demo
</button>

// Ghost CTA
<button className="px-6 py-3 rounded-lg bg-transparent border border-white/20 text-gray-300 hover:bg-white/5 transition-all">
  Learn More
</button>
```

---

## Animation System

### Tailwind Animation Config
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'chat-open': 'slideUp 0.3s ease-out',
        'fade-in-up': 'fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'scale-in': 'scaleIn 0.3s ease-out',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeInUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
}
```

### Scroll-Triggered Animations (Intersection Observer)
```jsx
function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, { threshold: 0.1, ...options })

    if (ref.current) observer.observe(ref.current)
    return () => { if (ref.current) observer.unobserve(ref.current) }
  }, [])

  return [ref, isIntersecting]
}

// Usage
const [sectionRef, isVisible] = useIntersectionObserver()

<div
  ref={sectionRef}
  className={`transition-all duration-700 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`}
>
```

### Staggered Animation Delays
```jsx
{items.map((item, index) => (
  <div
    key={index}
    className={`transition-all duration-700 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}
    style={{ transitionDelay: `${index * 100}ms` }}
  >
    {/* Item content */}
  </div>
))}
```

### Hover Micro-interactions
```css
/* Scale on hover */
hover:scale-105 transition-transform

/* Lift on hover */
hover:-translate-y-1 transition-transform

/* Glow intensify on hover */
shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow

/* Border highlight on hover */
border-white/10 hover:border-white/20 transition-colors

/* Arrow slide on hover */
group-hover:translate-x-1 transition-transform
```

### Background Animated Orbs
```jsx
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
  <div
    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
    style={{ animationDelay: '1s' }}
  />
  <div
    className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float"
    style={{ animationDelay: '2s' }}
  />
</div>
```

---

## Section Templates

### 1. Hero Section
- Full viewport height
- Animated background orbs
- Badge with icon
- Two-line gradient headline
- Subheadline paragraph
- Two CTA buttons (primary + secondary)
- Trust indicators (security badge, no credit card text)
- Hero visual (video placeholder or product screenshot)

### 2. Social Proof Bar
- Horizontal strip
- "Trusted by X+ users" text
- Company logos (grayscale, low opacity)
- Border top and bottom

### 3. Problem/Agitation Section
- Question headline ("Do any of these sound familiar?")
- List of pain points with warning icons
- Red-tinted borders for emphasis
- CTA link to solution

### 4. How It Works (3 Steps)
- Section headline
- 3-column grid on desktop
- Numbered badges (1, 2, 3)
- Icon or video placeholder per step
- Title and description
- Final CTA button

### 5. Features Deep Dive
- Alternating left/right layout
- Badge with feature name
- Headline + subheadline
- Description paragraph
- Feature checklist (4-6 items)
- Learn more button
- Feature visual placeholder

### 6. Use Cases / Audience Tabs
- Horizontal tab buttons
- Active tab highlighted with gradient
- Tab content panel with:
  - Headline
  - Description
  - Feature grid
  - Testimonial quote

### 7. Pricing Section
- 3-column grid
- Free / Pro / Enterprise tiers
- Highlighted middle card
- "Most Popular" badge
- Feature checklist with checkmarks
- CTA button per tier
- Trust text below

### 8. Testimonials Grid
- Star ratings
- Quote with quotation marks
- Author name and role
- Card hover effect

### 9. FAQ Accordion
- Expandable questions
- Animated open/close
- Chevron rotation
- Smooth height transition

### 10. Final CTA Section
- Gradient background band
- Large headline
- Two CTA buttons
- Star rating with count

### 11. Footer
- 4-column grid
- Logo + tagline
- Link columns (Product, Company, Legal)
- Social media icons
- Developer links
- Copyright

---

## Smooth Scroll Navigation
```jsx
function useSmoothScroll() {
  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  return scrollTo
}

// Usage
const scrollTo = useSmoothScroll()
<button onClick={() => scrollTo('features')}>Features</button>
```

---

## Mobile Responsiveness

### Breakpoint Strategy
```
sm: 640px   - Small tablets
md: 768px   - Tablets
lg: 1024px  - Laptops
xl: 1280px  - Desktops
```

### Mobile Menu Pattern
```jsx
const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

{/* Mobile menu button */}
<button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
  {mobileMenuOpen ? <X /> : <Menu />}
</button>

{/* Mobile menu panel */}
{mobileMenuOpen && (
  <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10">
    <div className="px-4 py-4 space-y-3">
      {/* Menu items */}
    </div>
  </div>
)}
```

### Responsive Typography
```
text-4xl sm:text-5xl md:text-6xl lg:text-7xl   /* Hero headline */
text-lg sm:text-xl                             /* Subheadline */
grid-cols-1 md:grid-cols-2 lg:grid-cols-3      /* Feature grids */
```

---

## Accessibility Checklist

- [ ] Focus visible outlines on all interactive elements
- [ ] Aria labels on icon-only buttons
- [ ] Sufficient color contrast (4.5:1 minimum)
- [ ] Keyboard navigable (Tab, Enter, Escape)
- [ ] Reduced motion preference respected
- [ ] Alt text on images
- [ ] Semantic HTML (header, nav, main, section, footer)

```jsx
// Focus styles
*:focus-visible {
  outline: 2px solid rgba(6, 182, 212, 0.8);
  outline-offset: 2px;
}

// Reduced motion
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## GitHub Pages Deployment

### Build Script
```json
{
  "scripts": {
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### GitHub Actions Workflow
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### SPA Routing Fix for GitHub Pages
Create `public/404.html` that redirects to index:
```html
<!DOCTYPE html>
<html>
<head>
  <script>
    sessionStorage.redirect = location.href;
  </script>
  <meta http-equiv="refresh" content="0;URL='/'">
</head>
</html>
```

Add to `index.html`:
```html
<script>
  (function(){
    var redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect && redirect != location.href) {
      history.replaceState(null, null, redirect);
    }
  })();
</script>
```

---

## Quick Start Prompt

When generating a landing page, provide:

1. **Product/Service Name**
2. **One-line description**
3. **Primary accent color** (cyan, purple, green, or amber)
4. **Target audience** (developers, businesses, consumers, etc.)
5. **Key features** (3-6 bullet points)
6. **Pricing tiers** (if applicable)
7. **Social proof** (user count, company logos, testimonials)

The generated page will include:
- Sticky navigation with scroll effect
- Animated hero section with CTAs
- Social proof bar
- Problem/solution sections
- How it works (3 steps)
- Feature deep dives
- Use case tabs
- Pricing cards
- Testimonials
- FAQ accordion
- Final CTA
- Footer with links

---

## Example Data Structure

```javascript
const landingPageData = {
  brand: {
    name: 'ProductName',
    tagline: 'Your tagline here',
    logo: '/logo.svg',
  },
  hero: {
    badge: 'Powered by AI',
    headline: ['Transform Your', 'Workflow'],
    subheadline: 'Description of what the product does and its main benefit.',
    primaryCTA: 'Start Free Trial',
    secondaryCTA: 'Watch Demo',
    trustText: 'Enterprise-grade security • No credit card required',
  },
  features: [
    {
      icon: 'Sparkles',
      title: 'Feature Name',
      headline: 'Feature Headline',
      subheadline: 'Short subheadline',
      description: 'Detailed description of the feature.',
      bullets: ['Benefit 1', 'Benefit 2', 'Benefit 3', 'Benefit 4'],
      color: 'cyan', // cyan, blue, green, yellow, purple
    },
    // ... more features
  ],
  pricing: [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      features: ['Feature 1', 'Feature 2'],
      cta: 'Start Free',
      highlighted: false,
    },
    // ... more tiers
  ],
  testimonials: [
    {
      quote: 'Testimonial text here.',
      author: 'Author Name',
      role: 'Role @ Company',
      rating: 5,
    },
    // ... more testimonials
  ],
  faqs: [
    {
      question: 'Question text?',
      answer: 'Answer text here.',
    },
    // ... more FAQs
  ],
}
```

---

*This design system is optimized for modern SaaS landing pages with a dark, premium aesthetic. Adjust colors and content to match your brand.*
