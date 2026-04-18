# Vercel Deployment Guide for Najmul Portfolio

This project is optimized for deployment on **Vercel** with Next.js standalone mode, Analytics, and Speed Insights enabled.

## 🚀 Deployment Steps

### 1. Push to GitHub
Ensure all your latest changes are pushed to your GitHub repository.

### 2. Connect to Vercel
1.  Go to [vercel.com](https://vercel.com) and create a new project.
2.  Import your GitHub repository.
3.  **Root Directory**: If your repository contains a folder named `najmul-quantam-2.0`, ensure you set the **Root Directory** to `najmul-quantam-2.0` in the "Build and Output Settings" section.

### 3. Configure Environment Variables
Set the following variables in Vercel **Settings > Environment Variables**:

- `APP_URL`: Your production domain (e.g., `https://najmul-haque-talukder.vercel.app`).
- `RESEND_API_KEY`: Required for the contact form.
- `GITHUB_TOKEN`: Required for fetching repository data.
- `NEXT_PUBLIC_POSTHOG_KEY`: (Optional) Analytics.
- `NEXT_PUBLIC_OPENPANEL_CLIENT_ID`: (Optional) Analytics.

### 4. Deploy & Monitor
1. Click **Deploy**.
2. Once live, Vercel **Analytics** and **Speed Insights** will automatically start collecting data from your visitors.

## 🛠️ Optimizations Included
- **Standalone Output**: Improved build performance and smaller deployment size.
- **Pnpm v10 Support**: Pre-configured to allow necessary built dependencies like `sharp`.
- **Framework Detection**: Explicitly set in `vercel.json` to prevent detection errors.

## 📈 Monitoring
You can view your site performance and visitor metrics directly in the **Analytics** and **Speed Insights** tabs of your Vercel project dashboard.
