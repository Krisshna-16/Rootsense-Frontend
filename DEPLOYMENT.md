# Deployment Guide - RootSense Frontend

## ✅ Pre-Deployment Checklist

The project has been tested and builds successfully with **zero errors**.

---

## 🚀 Deploy to Vercel

### Step 1: Push to GitHub

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: RootSense Frontend"
   ```

2. **Add Remote and Push**:
   ```bash
   git remote add origin https://github.com/Krisshna-16/Rootsense-Frontend.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import `Krisshna-16/Rootsense-Frontend`
4. **Framework Preset**: Next.js (auto-detected)
5. **Root Directory**: `./` (leave as is - the entire repo is the frontend)
6. **Build Command**: `npm run build` (default)
7. **Output Directory**: `.next` (default)

### Step 3: Environment Variables

Add these in Vercel Dashboard → Project Settings → Environment Variables:

```
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

⚠️ **IMPORTANT**: Use your actual production keys, not the test keys from `.env.local`

### Step 4: Deploy

Click **"Deploy"** - Vercel will:
- Install dependencies
- Run build
- Deploy to production

---

## 🔧 Post-Deployment

### Update Clerk URLs
1. Go to [Clerk Dashboard](https://dashboard.clerk.com)
2. Navigate to your application
3. Update **Authorized Redirect URLs** to include your Vercel domain:
   - `https://your-app.vercel.app/sign-in`
   - `https://your-app.vercel.app/sign-up`

### Test Deployment
Visit these routes to verify:
- `/` - Landing page
- `/dashboard` - Main dashboard
- `/trees` - Tree inventory
- `/issues` - Civic issues
- `/impact` - Impact metrics
- `/map` - Interactive map
- `/admin` - Admin panel

---

## 📝 Notes

- **Build Status**: ✅ Tested locally - builds successfully
- **Framework**: Next.js 16.0.10
- **Node Version**: 18+ recommended
- **Package Manager**: npm

## 🐛 Troubleshooting

If deployment fails:
1. Check environment variables are set correctly
2. Ensure all API keys are valid
3. Check Vercel build logs for specific errors
4. Verify Node.js version compatibility (18+)
