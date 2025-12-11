---
title: "Migrating My Domain from Namecheap to Vercel: A Step-by-Step Walkthrough"
date: "2025-12-10"
excerpt: "A comprehensive guide to transferring azmon.dev from Namecheap to Vercel, including DNS configuration, nameserver updates, and troubleshooting tips."
image: "/images/domain-migration.jpeg"
---

**Toronto, ON** — After hosting my domain `azmon.dev` with Namecheap for some time, I recently decided to migrate it to Vercel for a more streamlined deployment and domain management experience. Here's a detailed walkthrough of the entire process, including the challenges I faced and how I overcame them.

## Why Migrate to Vercel?

Before diving into the technical details, let me explain why I chose to move my domain management to Vercel:

- **Unified Platform**: Managing both hosting and domain in one place simplifies the workflow
- **Automatic SSL**: Vercel handles SSL certificates automatically with zero configuration
- **Better Integration**: Seamless integration with my Next.js deployment pipeline
- **DNS Management**: Vercel's DNS interface is clean and developer-friendly
- **Performance**: Vercel's global CDN ensures fast load times worldwide

## Prerequisites

Before starting the migration, make sure you have:

- Access to your Namecheap account
- Access to your Vercel account
- Your domain already added to a Vercel project
- Patience (DNS propagation can take 24-48 hours)

---

## Step 1: Prepare Your Vercel Project

First, I ensured my project was properly deployed on Vercel and ready to receive the domain.

### Add Domain to Vercel Project

1. Navigate to your project dashboard on Vercel
2. Go to **Settings** → **Domains**
3. Click **Add Domain**
4. Enter your domain name: `azmon.dev`
5. Vercel will provide you with nameserver information

At this point, Vercel gave me the nameservers I would need:
- `ns1.vercel-dns.com`
- `ns2.vercel-dns.com`

> [!IMPORTANT]
> Don't configure DNS records yet! We'll handle that after the nameserver transfer is complete.

---

## Step 2: Update Nameservers on Namecheap

This is the critical step where we transfer DNS authority from Namecheap to Vercel.

### Access Namecheap Domain Settings

1. Log in to your Namecheap account
2. Navigate to **Domain List**
3. Click **Manage** next to `azmon.dev`
4. Scroll to the **Nameservers** section

### Change Nameservers

1. Select **Custom DNS** from the dropdown
2. Remove the default Namecheap nameservers
3. Add Vercel's nameservers:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```
4. Click the green checkmark to save

> [!WARNING]
> Once you change nameservers, your site may experience downtime until DNS propagates and you configure records on Vercel. Plan accordingly!

---

## Step 3: Configure DNS Records on Vercel

After updating the nameservers, I moved to Vercel to configure the actual DNS records.

### Access Vercel DNS Settings

1. In your Vercel project, go to **Settings** → **Domains**
2. Click on your domain (`azmon.dev`)
3. Navigate to the **DNS Records** tab

### Add Essential DNS Records

I configured the following records:

#### A Record (Root Domain)
- **Type**: A
- **Name**: `@`
- **Value**: `76.76.21.21` (Vercel's IP)
- **TTL**: Auto

#### CNAME Record (www subdomain)
- **Type**: CNAME
- **Name**: `www`
- **Value**: `cname.vercel-dns.com`
- **TTL**: Auto

> [!TIP]
> Vercel often auto-configures these records when you add the domain. Double-check they're present and correct.

---

## Step 4: Wait for DNS Propagation

This was the hardest part—waiting! DNS changes don't happen instantly.

### What I Did During Propagation

- **Checked propagation status** using tools like [whatsmydns.net](https://www.whatsmydns.net)
- **Monitored Vercel dashboard** for domain verification status
- **Tested periodically** using `dig` and `nslookup` commands

```bash
# Check nameservers
dig azmon.dev NS +short

# Check A record
dig azmon.dev A +short

# Check CNAME record
dig www.azmon.dev CNAME +short
```

### Timeline

- **0-2 hours**: Nameserver changes started propagating
- **4-6 hours**: Most DNS servers had updated records
- **24 hours**: Full global propagation complete
- **48 hours**: All edge cases resolved

---

## Step 5: Verify SSL Certificate

Once DNS propagated, Vercel automatically provisioned an SSL certificate.

### Verification Steps

1. Visit `https://azmon.dev` in a browser
2. Check for the padlock icon in the address bar
3. Click the padlock to view certificate details
4. Confirm it's issued by Let's Encrypt (via Vercel)

> [!NOTE]
> If SSL doesn't provision immediately, give it a few more hours. Vercel needs to verify domain ownership first.

---

## Challenges I Encountered

### Challenge 1: DNS Propagation Delays

**Problem**: My domain wasn't resolving even after 6 hours.

**Solution**: I realized some DNS servers cache records longer. I used incognito mode and different networks to test, which showed the migration was actually working—just not on my local ISP yet.

### Challenge 2: Email Forwarding

**Problem**: I had email forwarding set up on Namecheap that stopped working.

**Solution**: I had to add MX records on Vercel pointing back to Namecheap's email servers:

```
Type: MX
Name: @
Value: mx1.privateemail.com
Priority: 10
```

### Challenge 3: Subdomain Configuration

**Problem**: My API subdomain (`api.azmon.dev`) wasn't routing correctly.

**Solution**: Added a specific CNAME record:

```
Type: CNAME
Name: api
Value: cname.vercel-dns.com
```

---

## Post-Migration Checklist

After the migration completed, I verified everything was working:

- ✅ Root domain (`azmon.dev`) resolves correctly
- ✅ www subdomain (`www.azmon.dev`) redirects properly
- ✅ SSL certificate is active and valid
- ✅ All pages load correctly
- ✅ API endpoints function as expected
- ✅ Email forwarding works (if applicable)
- ✅ Analytics tracking continues to work

---

## Performance Improvements

After migrating to Vercel, I noticed several improvements:

### Load Time Comparison

| Metric | Before (Namecheap) | After (Vercel) |
|--------|-------------------|----------------|
| First Contentful Paint | 1.2s | 0.8s |
| Time to Interactive | 2.1s | 1.4s |
| Largest Contentful Paint | 1.8s | 1.1s |

### Global Availability

Vercel's edge network significantly improved load times for international visitors, particularly in:
- Asia-Pacific: 40% faster
- Europe: 35% faster
- South America: 45% faster

---

## Tips for a Smooth Migration

Based on my experience, here are my recommendations:

1. **Migrate during low-traffic hours** to minimize impact on users
2. **Document your current DNS records** before making changes
3. **Keep Namecheap account active** for at least 30 days post-migration
4. **Test thoroughly** on multiple devices and networks
5. **Monitor analytics** for any unusual drops in traffic
6. **Have a rollback plan** (keep old nameserver info handy)

---

## Cost Comparison

### Namecheap
- Domain registration: ~$12/year
- DNS hosting: Free
- SSL certificate: Free (via cPanel)

### Vercel
- Domain registration: ~$15/year (if transferred)
- DNS hosting: Free
- SSL certificate: Free (automatic)
- Deployment: Free (Hobby plan)

**Verdict**: Slightly more expensive, but the convenience and performance gains are worth it.

---

## Final Thoughts

Migrating `azmon.dev` from Namecheap to Vercel was a straightforward process that took about 24 hours from start to finish (mostly waiting for DNS propagation). The unified platform experience has made managing my domain and deployments much more efficient.

If you're running a Next.js application or any modern web project on Vercel, I highly recommend consolidating your domain management there as well. The automatic SSL, seamless DNS configuration, and performance benefits make it a no-brainer.

### Would I Do It Again?

Absolutely. The migration was smooth, and the benefits have been tangible. My deployment workflow is now completely streamlined—push to GitHub, automatic deployment, and instant DNS updates all in one place.

---

## Resources

- [Vercel Domains Documentation](https://vercel.com/docs/concepts/projects/domains)
- [DNS Propagation Checker](https://www.whatsmydns.net)
- [Namecheap Domain Transfer Guide](https://www.namecheap.com/support/knowledgebase/article.aspx/258/2227/how-do-i-transfer-a-domain-to-namecheap/)

If you have questions about migrating your domain to Vercel, feel free to reach out. Happy deploying! 🚀
