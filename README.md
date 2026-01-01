# Akvi.ai - Software Consulting & AI-Powered Staffing Platform

A production-ready Next.js website for Akvi.ai, a software consulting and staffing firm focused on SMEs and startups in India and globally.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Water-Inspired Theme**: Flowing animations and water-themed design elements
- **Accessibility**: WCAG AA compliant with keyboard navigation and ARIA labels
- **SEO Optimized**: Server-side rendering, meta tags, and JSON-LD structured data
- **Performance**: Optimized images, lazy loading, and Lighthouse score target ≥90
- **Animations**: Smooth microinteractions with Framer Motion and CSS transitions
- **Sticky Navigation**: Floating nav bar with backdrop blur on scroll

## 📁 Project Structure

```
akvi-ai/
├── app/                    # Next.js App Router pages
│   ├── api/                # API routes
│   │   └── contact/        # Contact form handler
│   ├── about/              # About page
│   ├── blog/               # Blog page
│   ├── careers/            # Careers page
│   ├── case-studies/       # Case studies page
│   ├── contact/            # Contact page
│   ├── pricing/            # Pricing page
│   ├── services/           # Services page
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/             # React components
│   ├── NavBar.tsx          # Navigation bar (floating + sticky)
│   ├── Hero.tsx            # Hero section with water animations
│   ├── ServiceCard.tsx     # Service card component
│   ├── CaseStudyCard.tsx   # Case study card component
│   ├── TestimonialCarousel.tsx  # Testimonials carousel
│   ├── HowItWorks.tsx      # How it works section
│   ├── Footer.tsx          # Footer component
│   └── Analytics.tsx       # Analytics placeholder
├── __tests__/              # Unit tests
├── public/                 # Static assets
│   └── Akvi_logo_3.png    # Logo file
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies

```

## 🛠️ Setup & Installation

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation Steps

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd akvi-ai
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root directory:
   ```env
   # Analytics (optional)
   NEXT_PUBLIC_GA_ID=your-google-analytics-id
   NEXT_PUBLIC_HOTJAR_ID=your-hotjar-id

   # Contact Form (configure as needed)
   CONTACT_EMAIL=hello@akvi.ai
   SMTP_HOST=your-smtp-host
   SMTP_PORT=587
   SMTP_USER=your-smtp-user
   SMTP_PASS=your-smtp-password

   # Database (if using)
   DATABASE_URL=your-database-url

   # Calendly (optional)
   CALENDLY_URL=https://calendly.com/akvi-ai
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🧪 Testing

Run the test suite:
```bash
npm test
# or
yarn test
# or
pnpm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

## 🏗️ Build & Production

### Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Start Production Server

```bash
npm start
# or
yarn start
# or
pnpm start
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub/GitLab/Bitbucket**

2. **Import your repository to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables**:
   - In Vercel dashboard, go to Project Settings → Environment Variables
   - Add all variables from `.env.local`

4. **Deploy**:
   - Vercel will automatically deploy on every push to main branch
   - Or click "Deploy" to deploy manually

### Deploy to Other Platforms

#### Render
1. Create a new Web Service
2. Connect your repository
3. Set build command: `npm run build`
4. Set start command: `npm start`
5. Add environment variables

#### AWS (Amplify/ECS)
- Follow AWS Next.js deployment guides
- Configure environment variables in AWS console

## 🎨 Design System

### Color Palette (Water-Inspired)

- **Deep Blue**: `#0B4F6C` - Primary dark color
- **Ocean Teal**: `#118AB2` - Primary brand color
- **Light Aqua**: `#8ED1E0` - Accent color
- **Sand**: `#F6F4EA` - Background color
- **Neutral Dark**: `#0F1724` - Text color

### Typography

- **Font Family**: Inter (variable font)
- **Fallback**: system-ui, sans-serif

### Spacing Scale

- Uses Tailwind's default spacing scale (4px base unit)

### Components

- **Glassmorphism**: Backdrop blur effects for cards and nav
- **Hover Rotations**: Subtle 3D rotations on interactive elements
- **Water Animations**: Flowing SVG paths and gradient animations

## 📝 Customization

### Update Brand Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  'deep-blue': '#YOUR_COLOR',
  'ocean-teal': '#YOUR_COLOR',
  // ... etc
}
```

### Replace Logo

1. Place your logo file in `public/` directory
2. Update logo references in:
   - `components/NavBar.tsx`
   - `components/Footer.tsx`
   - `app/layout.tsx` (for favicon)

### Update Content

- **Homepage**: Edit `app/page.tsx`
- **Services**: Edit `app/services/page.tsx`
- **Case Studies**: Edit `app/case-studies/page.tsx` and add data
- **Testimonials**: Update testimonials array in `app/page.tsx`

### Configure Contact Form

The contact form API route is at `app/api/contact/route.ts`. To enable email sending:

1. Install an email service (e.g., Resend, SendGrid, Nodemailer)
2. Uncomment and configure the email sending code
3. Add SMTP credentials to `.env.local`

Example with Resend:
```bash
npm install resend
```

Then update `app/api/contact/route.ts` with Resend integration.

### Add Calendly Integration

1. Get your Calendly link
2. Update the link in `app/contact/page.tsx`:
   ```tsx
   href="https://calendly.com/your-username"
   ```

## 🔍 SEO & Analytics

### Google Analytics 4

1. Get your GA4 Measurement ID
2. Add to `.env.local`: `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`
3. Uncomment and configure GA4 code in `components/Analytics.tsx`

### Meta Tags

SEO meta tags are configured in each page's metadata export. Update as needed:
- `app/page.tsx`
- `app/services/page.tsx`
- etc.

### Structured Data

JSON-LD structured data is included in `app/layout.tsx`. Update organization details as needed.

## 🐛 Troubleshooting

### Logo not showing

- Ensure logo file is in `public/` directory
- Check file path in components matches filename
- Verify Next.js Image component is configured correctly

### Styles not applying

- Run `npm run dev` to ensure Tailwind is processing
- Check `tailwind.config.ts` content paths
- Clear `.next` cache: `rm -rf .next`

### Build errors

- Ensure all TypeScript types are correct
- Check for missing dependencies
- Verify environment variables are set

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 📄 License

This project is proprietary and confidential.

## 🤝 Support

For questions or issues, contact: hello@akvi.ai

---

**Built with ❤️ for Akvi.ai**

