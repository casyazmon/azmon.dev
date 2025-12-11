---
date: "2025-01-05"
description: A step-by-step guide on how I designed, developed, and
  deployed my personal portfolio using Next.js 14, Tailwind CSS, and
  Vercel.
tags:
- nextjs
- vercel
- portfolio
- web development
- react
title: How I Built My Portfolio Website with Next.js and Deployed It on
  Vercel
---

# How I Built My Portfolio Website with Next.js and Deployed It on Vercel

Building a personal portfolio is one of the best ways to stand out as a
software developer. In this article, I'll walk through how I built my
portfolio website using **Next.js** and deployed it on **Vercel** ---
from setup to final launch.

Whether you're a beginner or an experienced dev wanting to modernize
your stack, this guide will help you build a high-performance portfolio
the right way.

------------------------------------------------------------------------

## ⭐ Why I Chose Next.js

I picked Next.js because it offers:

-   Fast performance with React + server rendering\
-   SEO-friendly pages\
-   File-based routing\
-   Built-in API routes\
-   Smooth deployment flow

It's powerful, modern, and beginner-friendly.

------------------------------------------------------------------------

## 🛠️ Tech Stack

My portfolio uses:

-   **Next.js 14 (App Router)**
-   **Tailwind CSS**
-   **Framer Motion**
-   **Vercel Hosting**
-   **MDX (for blog posts)**

This combo allowed me to build a clean, animated, responsive website
quickly.

------------------------------------------------------------------------

## 🧱 Step 1: Starting the Next.js Project

Create the app:

``` bash
npx create-next-app@latest my-portfolio
cd my-portfolio
```

Enable:

-   TypeScript\
-   Tailwind\
-   App Router\
-   ESLint\
-   Turbopack

This gives a solid foundation.

------------------------------------------------------------------------

## 🎨 Step 2: Designing the UI (Hero, About, Projects, Contact)

My portfolio includes four key sections:

### **Hero Section**

Short intro with: - Name - Role - CTA button

### **About Section**

Quick overview of: - Skills\
- Experience\
- Current goals

### **Projects Section**

Each card contains: - Title\
- Description\
- Tech stack\
- GitHub + demo links

### **Contact Section**

Simple links to: - Email\
- GitHub\
- LinkedIn

Tailwind CSS made styling incredibly fast, and Framer Motion added
subtle animations.

------------------------------------------------------------------------

## 📁 Step 3: Managing Project Data

I used a single data file to store all project details:

``` ts
export const projects = [
  {
    title: "AI Weather Coach",
    description: "An AI-powered weather assistant built with Next.js and OpenAI.",
    github: "https://github.com/...",
    demo: "https://...",
    tech: ["Next.js", "OpenAI", "Tailwind"],
  },
];
```

This keeps the UI clean and easy to update.

------------------------------------------------------------------------

## 🔀 Step 4: Routing with the App Router

Next.js automatically creates routes using folder structure:

    /app
      /page.tsx
      /projects/page.tsx
      /contact/page.tsx

Each folder contains a `page.tsx`, which becomes a route.

------------------------------------------------------------------------

## 🖼️ Step 5: Image Optimization

Using Next.js's `<Image />` component:

``` tsx
import Image from "next/image";

<Image src="/me.jpg" width={300} height={300} alt="Profile photo" />;
```

This boosts performance by serving responsive, optimized images.

------------------------------------------------------------------------

## 🚀 Step 6: Deploying to Vercel

Deployment is extremely simple.

### **1. Push your project to GitHub**

``` bash
git add .
git commit -m "Initial commit"
git push origin main
```

### **2. Deploy via Vercel**

-   Go to **vercel.com**
-   Select **New Project**
-   Import your GitHub repo

Vercel auto-detects Next.js and builds instantly.

### **3. Add a Custom Domain**

If you purchased a domain (e.g., Namecheap):

-   Go to Vercel → Domains\
-   Add your domain\
-   Update DNS records

And you're live!

------------------------------------------------------------------------

## 📈 Step 7: Optimizing for SEO + Performance

I added metadata:

``` ts
export const metadata = {
  title: "My Portfolio – Software Developer",
  description: "Projects, skills, and blog posts by a full-stack developer.",
};
```

Additional optimizations:

-   Semantic HTML\
-   Compressed images\
-   Open Graph (OG) tags\
-   Fast hosting via Vercel\
-   Clean Lighthouse scores

------------------------------------------------------------------------

## 🔧 Step 8: Adding a Blog with MDX

I set up a `/blog` directory using MDX so I can:

-   Write articles in Markdown\
-   Keep SEO strong\
-   Support code blocks\
-   Build credibility

This article itself is rendered through MDX.

------------------------------------------------------------------------

## 🏁 Final Result

The final portfolio is:

-   Fast\
-   Responsive\
-   Cleanly designed\
-   SEO-optimized\
-   Easy to maintain\
-   Ready for recruiters

Building with Next.js + Vercel gave me the perfect balance of power and
simplicity.

------------------------------------------------------------------------

## 🎯 Final Thoughts

If you're building or upgrading your portfolio, I highly recommend:

-   **Next.js** for structure\
-   **Tailwind** for speed\
-   **Framer Motion** for polish\
-   **Vercel** for deployment

It's a modern stack that will stay relevant for years --- and it helps
you ship something beautiful quickly.

------------------------------------------------------------------------

Thanks for reading! If you'd like more tutorials like this, check my
other posts in the blog section.
