# Deployment Guide for Najmul Portfolio

This project is built with Next.js and optimized for deployment on **Vercel**.

## 🚀 Deployment Steps

### 1. Push to GitHub
Ensure all your latest changes are pushed to your GitHub repository.

### 2. Connect to Vercel
1.  Go to [vercel.com](https://vercel.com) and create a new project.
2.  Import your GitHub repository.
3.  Vercel will automatically detect that this is a Next.js project.

### 3. Configure Environment Variables
You MUST set the following Environment Variables in the Vercel project settings (refer to `.env.example`):

- `APP_URL`: Your production domain (e.g., `https://najmul-haque-talukder.vercel.app`).
- `RESEND_API_KEY`: Required for the contact form.
- `GITHUB_TOKEN`: Required for fetching repository data.
- `NEXT_PUBLIC_POSTHOG_KEY`: (Optional) For analytics.
- `NEXT_PUBLIC_OPENPANEL_CLIENT_ID`: (Optional) For analytics.

### 4. Deploy
Click "Deploy". Vercel will build and host your site.

## 🛠️ Troubleshooting

- **EPERM Errors (Windows)**: If you see `EPERM` errors during local development, run `rm -rf .next` and restart. This is handled automatically by the deployment platform during build.
- **Image Optimization**: If images fail to load, ensure the `hostname` in `next.config.ts` matches your production domain.
- **Form Submission**: Ensure your `RESEND_API_KEY` is valid and correct.

## 📈 Search Engine Optimization (SEO)
The project includes `robots.ts` and `sitemap.ts` which automatically use the `APP_URL` you provide to generate SEO-friendly files.
