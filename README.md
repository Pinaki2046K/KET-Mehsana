# KET India — Khodiyar Education Trust Website

A production-grade Next.js 16 + TypeScript website for Khodiyar Education Trust (KET India), an NGO based in Mahesana, Gujarat dedicated to children with intellectual disabilities.

---

## 🎨 Design Overview

- **Theme**: Warm light cream + sage green + amber gold — professional, warm, and trustworthy
- **Fonts**: Cormorant Garamond (display headings) + DM Sans (body) + Playfair Display (subheadings)
- **Animations**: Framer Motion — staggered reveals, scroll-triggered counters, image hover effects
- **Image Effect**: All gallery/section images start B&W and reveal color on hover

---

## 📁 Project Structure

```
app/
  page.tsx              # Home page
  about/page.tsx        # About Us
  programs/page.tsx     # Programs (6 programs)
  impact/page.tsx       # Impact stats + sports medals
  get-involved/page.tsx # Donate + bank details + QR
  parent-corner/page.tsx# Parent support + FAQs
  gallery/page.tsx      # Filterable photo gallery + lightbox
  contact/page.tsx      # Contact form (Web3Forms)
  layout.tsx            # Root layout + SEO metadata
  globals.css           # Design tokens + utility classes

components/
  Header.tsx            # Sticky nav, scroll-aware, mobile menu
  Footer.tsx            # Full footer with legal info + bank details
  ImageSlider.tsx       # Full-screen hero slider (4 slides)
  AnimatedCounter.tsx   # Spring-animated number counters
  BentoGallery.tsx      # Bento-grid B&W-to-color gallery
  SectionHeading.tsx    # Reusable section heading with decorator

public/
  logo.jpg              # ⚠️ Add your logo here
  payment.png           # ⚠️ Add your UPI QR code here
```

---

## ⚙️ Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

---

## 🏗️ Build for Production

```bash
npm run build
# Output goes to /out folder — ready for upload
```

---

## 🚀 Deploying to GoDaddy

This project is configured as a **static export** (`output: "export"` in next.config.ts), which means it generates plain HTML/CSS/JS files — perfect for GoDaddy shared hosting.

### Steps:

1. **Build the project:**
   ```bash
   npm run build
   ```
   This creates an `out/` folder.

2. **Upload to GoDaddy via cPanel File Manager** (or FTP):
   - Log into cPanel → File Manager → `public_html/`
   - Upload all contents of the `out/` folder into `public_html/`
   - Make sure `index.html` is at the root of `public_html/`

3. **Add a `.htaccess` file** in `public_html/` for proper routing:
   ```apache
   Options -MultiViews
   RewriteEngine On
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule ^(.*)$ /$1/ [L,R=301]
   ```

4. **Connect your domain** in GoDaddy DNS settings → point to your hosting.

5. **Add SSL certificate** in cPanel → SSL/TLS → Let's Encrypt (free HTTPS).

---

## 📸 Replacing Placeholder Images

Replace placeholder images with real KET India photos:

1. Add images to `public/gallery/` folder
2. Update image arrays in:
   - `components/ImageSlider.tsx` (hero slides)
   - `components/BentoGallery.tsx` (home gallery)
   - `app/gallery/page.tsx` (gallery page)
   - `app/programs/page.tsx` (program section images)

---

## 📬 Contact Form

The contact form uses **Web3Forms** (free, no backend needed).

The current access key in `app/contact/page.tsx` is a placeholder. To use your own:
1. Go to https://web3forms.com
2. Create an account with `khodiyareducationtrust@yahoo.in`
3. Get your access key
4. Replace the `access_key` value in `app/contact/page.tsx`

---

## 💳 QR Code / Payment

Add your UPI QR code image:
- Save as `public/payment.png`
- It will appear automatically on the Get Involved / Donate page

---

## 🔧 Customization Checklist

- [ ] Replace `public/logo.jpg` with actual KET India logo
- [ ] Add `public/payment.png` (UPI QR code)
- [ ] Replace placeholder images with real photos
- [ ] Update Web3Forms access key in `app/contact/page.tsx`
- [ ] Add phone number in `components/Footer.tsx` and `app/contact/page.tsx`
- [ ] Update social media links in `components/Footer.tsx`
- [ ] Add real success stories in `app/impact/page.tsx`
- [ ] Add Google Analytics (optional) in `app/layout.tsx`

---

## 📦 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 16 | React framework |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Utility styling |
| Framer Motion | 10.x | Animations |
| Lucide React | 0.344 | Icons |
| Web3Forms | — | Contact form backend |

