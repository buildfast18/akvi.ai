# Design Specification - Akvi.ai Website

## Visual Identity

### Color Palette (Water-Inspired)

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Deep Blue | `#0B4F6C` | Primary dark color, headings, CTAs |
| Ocean Teal | `#118AB2` | Primary brand color, links, accents |
| Light Aqua | `#8ED1E0` | Accent color, hover states |
| Sand | `#F6F4EA` | Background color, cards |
| Neutral Dark | `#0F1724` | Text color, dark elements |

### Typography

- **Primary Font**: Inter (variable font)
- **Fallback Stack**: system-ui, -apple-system, sans-serif
- **Font Weights**: 300, 400, 500, 600, 700, 800
- **Base Font Size**: 16px
- **Line Height**: 1.5 (body), 1.2 (headings)

### Spacing Scale

Based on Tailwind's 4px base unit:
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px

## Component Specifications

### Navigation Bar

- **Position**: Fixed, floating over hero section
- **Sticky Behavior**: 
  - Transparent background when at top
  - Backdrop blur (12px) + white background (90% opacity) when scrolled
  - Height reduces from `py-6` to `py-3` on scroll
- **Hover Effects**: 
  - Text rotates slightly: `rotateY(5deg) rotateX(2deg)`
  - Icons rotate: `rotate(12deg)`
  - Smooth transition: `0.35s cubic-bezier(.2,.9,.2,1)`
- **Mobile**: Hamburger menu with slide-down animation

### Hero Section

- **Height**: Full viewport height (`min-h-screen`)
- **Background**: 
  - Animated water gradient: `linear-gradient(135deg, #118AB2 0%, #8ED1E0 100%)`
  - Flowing SVG wave paths (2 layers, different speeds)
  - Parallax effect on scroll
- **Animation**: 
  - Fade-in from bottom: `opacity: 0 → 1, y: 30px → 0`
  - Staggered delays for text elements
- **Scroll Indicator**: Animated bouncing arrow at bottom

### Service Cards

- **Layout**: Grid (1 col mobile, 2 col tablet, 3 col desktop)
- **Hover Effects**: 
  - Lift: `translateY(-8px) scale(1.02)`
  - Shadow increase: `shadow-lg → shadow-2xl`
- **Icon**: Gradient background (`from-ocean-teal to-light-aqua`)
- **Spacing**: Consistent padding (`p-8`)

### Case Study Cards

- **Layout**: Grid (1 col mobile, 2 col desktop)
- **Image**: Aspect ratio 16:9, gradient overlay
- **Hover**: Slight lift (`translateY(-5px)`)
- **Sections**: Challenge → Solution → Outcome

### Testimonial Carousel

- **Auto-play**: 5 second intervals (pauses on interaction)
- **Animation**: Slide transition (`x: 50px → 0 → -50px`)
- **Navigation**: Previous/Next buttons + dot indicators
- **Accessibility**: ARIA labels, keyboard navigation

### Footer

- **Layout**: 5 columns (2 col brand, 3 col links)
- **Background**: `neutral-dark` with white text
- **Newsletter**: Email input + subscribe button
- **Social Links**: Icon buttons with hover states

## Interaction Rules

### Hover Rotations

- **Text Elements**: 
  ```css
  transform: rotateY(5deg) rotateX(2deg);
  transition: transform 0.35s cubic-bezier(.2,.9,.2,1);
  ```
- **Icons**: 
  ```css
  transform: rotate(12deg);
  transition: transform 0.3s ease-out;
  ```

### Reduced Motion

All animations respect `prefers-reduced-motion`:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Glassmorphism

- **Light**: `backdrop-blur-md bg-white/10 border border-white/20`
- **Strong**: `backdrop-blur-lg bg-white/20 border border-white/30`

## Animation Timing

- **Fast**: 200-300ms (hover states, micro-interactions)
- **Medium**: 500-600ms (page transitions, card animations)
- **Slow**: 1-2s (hero entrance, background animations)
- **Easing**: `cubic-bezier(.2,.9,.2,1)` for natural feel

## Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md, lg)
- **Desktop**: > 1024px (xl, 2xl)

## Accessibility Standards

- **WCAG AA Compliance**: 
  - Color contrast ratios meet AA standards
  - Keyboard navigation for all interactive elements
  - ARIA labels on custom controls
  - Semantic HTML structure
- **Focus States**: Visible focus rings on all interactive elements
- **Alt Text**: All images have descriptive alt text
- **Screen Readers**: Proper heading hierarchy and landmarks

## Performance Targets

- **Lighthouse Score**: ≥90 for Performance and Accessibility
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic with Next.js App Router
- **Font Loading**: Variable fonts with `display: swap`

## Assets Required

1. **Logo**: `Akvi_logo_3.png` (already provided)
2. **Case Study Images**: Optional, can use gradient placeholders
3. **Favicon**: Generate from logo
4. **Social Media Images**: Open Graph images (1200x630px)

## Brand Voice & Tone

- **Professional yet approachable**
- **Startup-friendly and flexible**
- **Outcome-focused and transparent**
- **AI-powered but human-centered**

