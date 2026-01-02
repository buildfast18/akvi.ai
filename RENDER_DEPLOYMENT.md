# Render Deployment Guide

## Issue: Deployment Stuck After Adding Environment Variables

If your Render deployment gets stuck after adding EmailJS environment variables, follow these steps:

## Solution 1: Remove Empty Environment Variables

If you added environment variables with empty values (like `NEXT_PUBLIC_EMAILJS_SERVICE_ID=`), this can cause build issues.

### Steps:

1. **Go to your Render Dashboard**
2. **Navigate to your service → Environment**
3. **Remove the empty environment variables** (or set them with actual values)
4. **Redeploy** your service

## Solution 2: Set Environment Variables Properly

### Option A: Remove Variables (Use Mailto Fallback)

If you haven't set up EmailJS yet, you can remove these variables:
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

The form will automatically use the mailto fallback.

### Option B: Set Actual Values

If you have EmailJS set up, add the actual values:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

## Solution 3: Manual Redeploy

If the deployment is stuck:

1. **Cancel the current deployment** (if possible)
2. **Remove the problematic environment variables**
3. **Manually trigger a new deployment**:
   - Go to your service → Manual Deploy
   - Click "Deploy latest commit"

## Solution 4: Check Build Logs

1. **Go to your Render service**
2. **Click on "Logs" tab**
3. **Look for error messages** that might indicate what's wrong
4. **Common issues:**
   - Build timeout
   - Missing dependencies
   - Environment variable syntax errors

## Render-Specific Configuration

### Build Command
Make sure your Render service has:
- **Build Command**: `npm run build`
- **Start Command**: `npm start`

### Environment Variables
- All `NEXT_PUBLIC_*` variables are available at build time
- Make sure there are no trailing spaces or special characters
- Use quotes only if the value contains spaces

### Recommended: Use Render Environment Groups
1. Create an Environment Group in Render
2. Add your EmailJS variables there
3. Link the group to your service
4. This makes it easier to manage across services

## Troubleshooting

### Build Fails Immediately
- Check if `@emailjs/browser` is in `package.json`
- Run `npm install` locally to verify dependencies

### Build Hangs/Stuck
- Check Render build logs for timeout errors
- Increase build timeout in Render settings (if available)
- Remove problematic environment variables temporarily

### Runtime Errors
- Check browser console for errors
- Verify environment variables are accessible (they should be, as they're `NEXT_PUBLIC_*`)

## Quick Fix: Deploy Without EmailJS

If you need to deploy quickly:

1. **Remove all EmailJS environment variables from Render**
2. **Redeploy** - the form will use mailto fallback
3. **Set up EmailJS later** and add variables back

The contact form is designed to work without EmailJS - it will automatically fall back to opening the user's email client.

## After Deployment

Once deployed successfully:

1. **Test the contact form** on your live site
2. **If using mailto fallback**: Test that it opens email client correctly
3. **If using EmailJS**: Verify emails are being sent to hello@akvi.ai

## Need Help?

- Check Render documentation: https://render.com/docs
- Check EmailJS setup guide: See `EMAILJS_SETUP.md` in this project

