# Deployment Guide

## Deploying to Netlify

### Option 1: Using Bolt's Built-in Deployment
1. Look for the "Deploy to Web" button in your dashboard
2. Click it to open the deployment modal
3. Follow the prompts to deploy to Netlify
4. Get your live URL instantly!

### Option 2: Manual Netlify Deployment

#### Prerequisites
- Netlify account (free at netlify.com)
- Your project built and ready

#### Steps:

1. **Build your project locally:**
   ```bash
   cd project
   npm run build
   ```

2. **Deploy via Netlify CLI:**
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli
   
   # Login to Netlify
   netlify login
   
   # Deploy
   netlify deploy --prod --dir=dist
   ```

3. **Or deploy via Netlify Dashboard:**
   - Go to netlify.com
   - Drag and drop your `dist` folder
   - Get instant deployment!

#### Build Settings for Netlify Dashboard:
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** `18`

### Option 3: GitHub + Netlify Auto-Deploy

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to netlify.com
   - Click "New site from Git"
   - Connect your GitHub repo
   - Set build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`

### Environment Variables

For production deployment, you'll need to set these environment variables in Netlify:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_API_URL=your_backend_api_url
```

### Important Notes

⚠️ **Backend Considerations:**
- This frontend-only deployment won't include the Python backend
- You'll need to deploy the backend separately (e.g., Railway, Render, Heroku)
- Update `VITE_API_URL` to point to your deployed backend

🔧 **For Full-Stack Deployment:**
- Consider using Railway, Render, or Vercel for the backend
- Or use Netlify Functions for serverless backend functionality

### Troubleshooting

- **Build fails:** Check that all dependencies are in package.json
- **404 errors:** Ensure netlify.toml redirects are configured
- **API errors:** Verify backend URL and CORS settings
- **Environment variables:** Double-check they're set in Netlify dashboard