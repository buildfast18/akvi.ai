# Quick Start Guide - Akvi.ai Website

## 🚀 Get Started in 5 Minutes

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

### Step 3: Open Browser
Navigate to [http://localhost:3000](http://localhost:3000)

That's it! Your website is now running locally.

## 📝 Next Steps

### 1. Configure Environment Variables (Optional)
Create `.env.local` file:
```env
NEXT_PUBLIC_GA_ID=your-ga-id
CONTACT_EMAIL=hello@akvi.ai
```

### 2. Customize Content
- **Homepage**: Edit `app/page.tsx`
- **Services**: Edit `app/services/page.tsx`
- **Case Studies**: Edit `app/case-studies/page.tsx`
- **Testimonials**: Update testimonials array in `app/page.tsx`

### 3. Update Contact Form
Edit `app/api/contact/route.ts` to add email sending functionality.

### 4. Add Calendly Link
Update Calendly URL in `app/contact/page.tsx`:
```tsx
href="https://calendly.com/your-username"
```

## 🎨 Customize Brand Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  'deep-blue': '#YOUR_COLOR',
  'ocean-teal': '#YOUR_COLOR',
  // ...
}
```

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚢 Deploy to Vercel

1. Push code to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy!

For detailed instructions, see [README.md](./README.md)

