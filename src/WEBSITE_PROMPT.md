# Complete Website Specification for DigitalForge Agency

## Overview
Create a modern, premium digital agency website for "DigitalForge" - a freelancing agency specializing in web and mobile application development for startups and businesses. The design should feel dynamic, interactive, conversion-focused, and suitable for an international-level agency.

---

## Design System

### Color Palette
- **Primary Dark Background**: `#1C1C1C` (charcoal black)
- **Primary Accent**: `#14B8A6` (teal/cyan)
- **Accent Hover**: `#0D9488` (darker teal)
- **Secondary Accent**: Blue `#3B82F6` and variations
- **Light Background**: `#F3F4F6` (light gray)
- **White**: `#FFFFFF`
- **Text Primary**: `#111827` (gray-900)
- **Text Secondary**: `#6B7280` (gray-500)
- **Text Light**: `#9CA3AF` (gray-400)

### Typography
- **Headings**: Bold, tracking-tight
  - H1: `text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold`
  - H2: `text-4xl lg:text-6xl font-bold`
  - H3: `text-2xl lg:text-3xl font-bold`
- **Body Text**: `text-base lg:text-lg` with `leading-relaxed`
- **Small Text**: `text-sm`

### Spacing & Layout
- **Section Padding**: `py-24 lg:py-32`
- **Container**: `container mx-auto px-6`
- **Border Radius**: `rounded-xl` (12px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Grid Gaps**: `gap-6 lg:gap-8`
- **Card Padding**: `p-8 lg:p-10`

### Visual Effects
- **Shadows**: 
  - Default: `shadow-sm`
  - Hover: `shadow-2xl`
  - Glow: `shadow-xl shadow-[#14B8A6]/30`
- **Blur Effects**: `blur-[100px]`, `blur-[120px]`, `blur-[150px]`
- **Backdrop Blur**: `backdrop-blur-sm`
- **Transitions**: `transition-all duration-300`, `transition-colors`, `transition-transform`
- **Hover Transforms**: `hover:-translate-y-2`, `hover:scale-105`, `hover:scale-110`

### Background Decorations (Used Throughout)
- Large blurred circular gradients positioned absolutely
- Teal (`#14B8A6`) and blue glows at 5-20% opacity
- Animated pulse effects on key elements
- Gradient overlays: `bg-gradient-to-br`, `bg-gradient-to-r`

---

## Website Structure (10 Sections in Order)

### 1. HERO SECTION (Intro)
**Background**: Dark `#1C1C1C` with animated teal glows

**Navigation Bar**:
- Logo: Teal gradient box (10x10, rounded-xl) with Sparkles icon + "DigitalForge" text
- Desktop Menu: Services, Work, Team, Pricing links (hover:text-[#14B8A6])
- CTA Button: "Let's Talk" - teal background, rounded-xl, with shadow on hover
- Mobile: Hamburger menu icon

**Floating Background Elements**:
- Large teal blob (96x96, blur-120px, opacity-20%) top-right, animate-pulse
- Blue blob (80x80, blur-100px, opacity-10%) bottom-left
- Giant teal blob (500x500, blur-150px, opacity-5%) center
- Floating Code icon (top-left, opacity-20%, animate-bounce)
- Floating Smartphone icon (bottom-right, opacity-20%, custom bounce animation)

**Hero Content** (centered, max-w-5xl):
- Badge: "✦ Trusted by 200+ Startups Worldwide" in pill shape with green pulse dot
- Main Headline: "We Build Scalable" (white) + "Digital Products" (teal gradient text with bg-clip-text)
- Font: text-5xl to text-8xl, bold, leading-tight, tracking-tight
- Subheadline: "From MVP to enterprise solutions, we craft web and mobile applications that drive growth for startups and businesses."
- Font: text-xl lg:text-2xl, text-gray-300
- Two CTA Buttons (flex gap):
  - "Start Your Project" - teal bg, white text, arrow icon, hover glow effect
  - "View Case Studies" - transparent with border, white/10 opacity

**Stats Cards** (4 columns, grid):
- Each card: bg-white/5, backdrop-blur, border-white/10, rounded-2xl
- Hover: scale-105, shadow-lg
- Content: Large number (teal), small label (gray-400)
- Stats: "200+ Projects Delivered", "150+ Happy Clients", "25+ Team Members", "30+ Countries"
- Staggered animation delay per card

**Bottom Element**:
- Gradient fade from dark to white (height-24)

---

### 2. SERVICES SECTION
**Background**: Light gray `#F3F4F6`

**Section Header** (centered, max-w-3xl):
- Badge: "What We Do" in teal/10 background pill
- Heading: "Services Built for Growth" (2 lines)
- Description: End-to-end digital solutions

**Services Grid**: 3 columns on desktop, 2 on tablet, 1 on mobile

**6 Service Cards**:
1. **Web Development**
   - Icon: Monitor (gradient from teal to darker teal)
   - Description: Custom web apps with React, Next.js, Node.js
   - Features: React & Next.js, E-commerce, CMS Integration

2. **Mobile Apps**
   - Icon: Smartphone (blue gradient)
   - Description: Native and cross-platform mobile apps
   - Features: iOS & Android, React Native, App Store Launch

3. **UI/UX Design**
   - Icon: Palette (purple gradient)
   - Description: User-centered design from wireframes to prototypes
   - Features: Brand Strategy, UI/UX Design, Design Systems

4. **Backend & APIs**
   - Icon: Database (orange gradient)
   - Description: Robust backend systems and APIs
   - Features: Speed Optimization, Testing, Monitoring

5. **MVP Development**
   - Icon: Rocket (pink gradient)
   - Description: Fast-track idea to market
   - Features: Consulting, Roadmapping, Market Research

6. **Maintenance & Support**
   - Icon: Settings (cyan gradient)
   - Description: Ongoing support and optimization
   - Features: Updates, Bug Fixes, Performance

**Card Design**:
- White background, rounded-2xl, padding 8-10
- Border: gray-200, hover:border-teal/20
- Shadow: sm to 2xl on hover
- Hover: -translate-y-2
- Icon: 14x14, gradient background, rounded-xl, shadow-lg
- Icon hover: scale-110
- Features list: small dots with gray text
- "Learn More" link: teal color, arrow icon, gap increases on hover

**Bottom CTA**:
- Text: "Need something custom?"
- Button: "Let's Discuss Your Project" - teal background

---

### 3. TEAM SECTION
**Background**: White

**Section Header**:
- Badge: "Our Team"
- Heading: "Meet The Experts Behind Your Success"
- Description: Diverse team of designers, developers, strategists

**Team Grid**: 4 columns (responsive)

**4 Team Members**:
1. Sarah Chen - CEO & Co-Founder - Product Strategy
2. Marcus Johnson - CTO & Co-Founder - Full-Stack Development
3. Diego Martinez - Lead Designer - UI/UX & Branding
4. Emma Wilson - Senior Developer - React & Node.js

**Team Card Design**:
- Gray-50 background, rounded-2xl
- Image container: height-80, gradient overlay on hover
- Image hover: scale-110
- Social icons (Linkedin, Twitter, Github): appear on hover in overlay
  - White/90 background circles at bottom
  - Hover: teal background
- Info section: centered text below image
  - Name: bold, gray-900
  - Role: teal color, font-medium
  - Expertise: small, gray-600
- Accent border (top): teal gradient, scale-x-0 to scale-x-100 on hover
- Card hover: -translate-y-2, shadow-2xl

**Bottom Section**:
- Gradient box (teal/10 to blue/10), rounded-2xl, padding-10
- Heading: "Want to Join Our Team?"
- Description + CTA button: "View Open Positions"

---

### 4. TECHNOLOGIES SECTION
**Background**: Dark `#1C1C1C`

**Background Effects**:
- Teal and blue blurred circles, opacity 10%

**Section Header**:
- Badge: "Tech Stack" (teal/20 background)
- Heading: "Technologies We Master"
- Description: Cutting-edge technologies

**Technologies Grid**: 3 columns, 2 rows (6 categories)

**Categories**:
1. **Frontend**: React ⚛️, Next.js ▲, TypeScript TS, Tailwind 🎨
2. **Mobile**: React Native 📱, Flutter 🦋, iOS 🍎, Android 🤖
3. **Backend**: Node.js 🟢, Python 🐍, PostgreSQL 🐘, MongoDB 🍃
4. **Cloud & DevOps**: AWS ☁️, Docker 🐳, Kubernetes ⚙️, CI/CD 🔄
5. **Design**: Figma 🎯, Adobe XD 📐, Sketch ✏️, Framer 🖼️
6. **Other**: GraphQL ◆, Firebase 🔥, Stripe 💳, Vercel ▼

**Card Design**:
- bg-white/5, backdrop-blur, border-white/10, rounded-2xl
- Hover: bg-white/10, border-teal/50, scale-105
- Gradient glow on hover (teal/10)
- Category title: teal color, text-xl, bold
- Tools: 2x2 grid
  - Each tool: bg-white/5, rounded-xl, padding-3, hover:bg-white/10
  - Emoji icon + name

**Bottom Stats** (4 columns):
- "15+ Programming Languages"
- "30+ Frameworks & Tools"
- "100% Modern Stack"
- "24/7 Learning & Improving"
- Numbers in teal, labels in gray-400

---

### 5. PROJECTS / CASE STUDIES SECTION
**Background**: Light gray `#F3F4F6`

**Section Header**:
- Badge: "Case Studies"
- Heading: "Projects We're Proud Of"
- Description: Real results from real projects
- Button: "View All Projects" (right side on desktop)

**3 Featured Projects** (stacked vertically):

**Project 1: FinTech Mobile Banking App** (FEATURED - large format)
- Layout: 2 columns (image left, content right)
- Image: height-full, rounded-3xl edge, gradient overlay on hover, scale-110 on hover
- "View Case Study" button appears centered on image hover
- Content side:
  - Category badge: "Mobile App Development" (teal/10 background)
  - Title: large, bold, hover:text-teal
  - Description: paragraph
  - Tags: "React Native", "Node.js", "AWS" (gray-100 pills)
  - Metrics (3 columns): "50K+ Users", "4.8★ Rating", "3 months Launch"
- Border: gray-200, hover:border-teal/30
- Shadow: sm to 2xl on hover
- Corner accent: teal glow triangle (top-right, opacity on hover)

**Project 2: E-Commerce Platform** (FEATURED - large format)
- Same layout and design as Project 1
- Tags: "Next.js", "PostgreSQL", "Stripe"
- Metrics: "$2M+ Revenue", "+185% Conversion", "0.8s Speed"

**Project 3: SaaS Project Management Tool** (standard format)
- Layout: 5 columns (image 2 cols, content 3 cols)
- Smaller height
- Tags: "React", "GraphQL", "MongoDB"
- Metrics: "1000+ Teams", "+45% Productivity", "99.9% Uptime"

**Bottom CTA**:
- Button: "View All Projects" with arrow icon (hover: translate diagonal)
- Background: dark #1C1C1C, hover:teal

---

### 6. CLIENT REVIEWS SECTION
**Background**: White

**Section Header**:
- Badge: "Client Reviews"
- Heading: "What Our Clients Say"
- Description: Testimonials from founders and product leaders

**Reviews Grid**: 3 columns

**6 Review Cards**:
1. Alex Thompson - CEO, TechStartup Inc. - SaaS Platform
2. Sarah Martinez - Founder, FinFlow - Mobile Banking App
3. Michael Chen - CTO, RetailHub - E-Commerce Platform
4. Jennifer Adams - PM, HealthTech Solutions - Healthcare Portal
5. David Park - Co-Founder, EduLearn - EdTech Platform
6. Lisa Wang - VP Product, LogisticsPro - Logistics System

**Card Design**:
- Gradient: from-gray-50 to-white, rounded-2xl, padding-8
- Border: gray-100, hover:border-teal/30
- Hover: -translate-y-2, shadow-2xl
- Gradient glow overlay on hover (teal/5)
- Quote icon: 12x12, teal gradient box, rounded-xl, shadow-lg, scale-110 on hover
- 5 stars: filled teal stars
- Review text: quoted text, gray-700, leading-relaxed
- Project tag: teal/10 pill badge
- Author section (border-top):
  - Avatar: 12x12 rounded-full
  - Name: bold, gray-900
  - Role and company: small, gray-600
- Corner accent: teal blob (top-right, opacity on hover)

**Bottom Stats** (4 cards, gradient backgrounds):
- "4.9/5 Average Rating" (teal/10 gradient)
- "150+ Happy Clients" (blue/10 gradient)
- "98% Satisfaction Rate" (teal/10 gradient)
- "90% Repeat Clients" (blue/10 gradient)

---

### 7. CLIENTS / CLIENT LOGOS SECTION
**Background**: Light gray `#F3F4F6`

**Section Header**:
- Badge: "Trusted By"
- Heading: "Leading Brands Choose Us"
- Description: Partners from startups to enterprises

**Clients Grid**: 6 columns on desktop, 4 on tablet, 3 on mobile (12 total)

**Client Cards**:
- Square aspect ratio, white background, rounded-2xl
- Shadow: sm to xl on hover
- Border: gray-200, hover:border-teal/30
- Hover: -translate-y-2
- Gradient glow on hover (teal/10)
- Logo placeholder: large initials (text-3xl, gray-300, hover:teal)
- Company name below (text-xs, gray-400)

**12 Clients**:
TechCorp, StartupHub, FinanceFlow, HealthPlus, EduLearn, RetailPro, LogisticX, MediaWave, CloudSync, DataViz, SocialHub, TravelGo

**Industry Coverage Section** (bottom):
- Large dark box: gradient from #1C1C1C to #2a2a2a, rounded-3xl, padding-12
- Teal glow (top-right, blur-100px, opacity-20%)
- Heading: "We Work Across Industries"
- 6 industry categories (3 columns):
  1. 🏦 FinTech & Banking - Secure financial solutions
  2. 🏥 Healthcare & MedTech - HIPAA-compliant platforms
  3. 🛒 E-Commerce & Retail - Scalable marketplaces
  4. 🎓 EdTech & Learning - Interactive platforms
  5. 🚚 Logistics & Supply Chain - Smart tracking systems
  6. 📱 SaaS & Enterprise - Business automation

---

### 8. PRICING SECTION
**Background**: White

**Section Header**:
- Badge: "Transparent Pricing"
- Heading: "Flexible Plans for Every Stage"
- Description: Quality code, modern design, commitment to success

**Pricing Grid**: 3 columns (side by side)

**Plan 1: MVP Starter** (Left)
- Price: "$15,000" (large, gray-900)
- Duration: "Starting from"
- Description: Perfect for validating your idea
- Button: "Get Started"
- 8 Features (checkmark icons):
  - MVP Development (4-6 weeks)
  - Core Features Implementation
  - Responsive Web or Mobile App
  - Basic UI/UX Design
  - Database Setup
  - 2 Rounds of Revisions
  - 1 Month Post-Launch Support
  - Deployment & Launch
- Card: gray-50, hover:white, rounded-3xl
- Hover: shadow-xl, -translate-y-2
- Checkmarks: teal/10 circles with teal checks

**Plan 2: Growth Package** (Center - HIGHLIGHTED)
- Popular badge: "Most Popular" with Zap icon (gradient teal background, floating above card)
- Price: "$35,000" (teal color)
- All same structure as Plan 1 but:
  - Background: gradient dark (#1C1C1C to #2a2a2a)
  - Text: white
  - Border: 2px teal
  - Scale: 105-110% (larger than others)
  - Shadow: 2xl
  - Button: teal background, extra glow
- 10 Features (more comprehensive)
- Button: "Choose Plan"

**Plan 3: Enterprise** (Right)
- Price: "Custom"
- Duration: "Let's Talk"
- Description: Tailored solutions for complex projects
- 10 Features (enterprise-level)
- Button: "Contact Sales"
- Same design as Plan 1

**Features Section Icons**: Checkmark in circle

**Additional Info Section**:
- Text: "Need a custom solution?"
- Two buttons: "Schedule a Call" (gray bg), "View FAQ" (border only)

**Payment Info** (3 columns):
- 💳 Flexible Payment - Milestone-based or monthly
- 🔒 Secure & Protected - NDA & IP protection
- ⚡ Fast Delivery - Agile with weekly updates

---

### 9. CONTACT SECTION
**Background**: Dark `#1C1C1C`

**Background Effects**:
- Teal blob (500x500, blur-150px, opacity-10%) top-right
- Blue blob (400x400, blur-120px, opacity-10%) bottom-left

**Section Header**:
- Badge: "Get In Touch" (teal/20 background)
- Heading: "Let's Build Something Amazing Together"
- Description: Have a project? Get in touch

**Layout**: 2 columns (form left, info right on desktop)

**Contact Form** (Left Side):
- White/5 background inputs with white/10 borders
- Rounded-xl inputs
- Focus: border-teal, ring-2, ring-teal/20
- Fields:
  1. Your Name * (required)
  2. Email Address * (required)
  3. Phone Number
  4. Company Name
  5. Service dropdown * (Web Dev, Mobile, MVP, Design, Full-Stack, Other)
  6. Budget dropdown ($10-25k, $25-50k, $50-100k, $100k+)
  7. Project description * (textarea, 5 rows)
- Submit button: "Send Message" with Send icon
  - Gradient teal background, full width
  - Glow shadow on hover
  - Icon translates right on hover
- Helper text: "We'll get back to you within 24 hours"

**Contact Info Cards** (Right Side):
- 4 info cards stacked vertically

**Card 1: Email Us**
- Icon: Mail (teal gradient box)
- Title: "Email Us"
- Description: "Drop us a line anytime"
- Link: hello@digitalforge.com (teal, hover:underline)

**Card 2: Call Us**
- Icon: Phone (blue gradient box)
- Title: "Call Us"
- Description: "Mon-Fri from 9am to 6pm"
- Link: +1 (555) 123-4567

**Card 3: Live Chat**
- Icon: MessageSquare (purple gradient box)
- Title: "Live Chat"
- Description: "Chat with our team"
- Button: "Start Conversation"

**Card 4: Schedule a Call**
- Icon: Calendar (orange gradient box)
- Title: "Schedule a Call"
- Description: "Book a time that works for you"
- Button: "View Calendar"

**Card Design**: bg-white/5, backdrop-blur, border-white/10, rounded-2xl, hover:bg-white/10

**Office Info Box** (bottom):
- Gradient background (teal/10 to blue/10), rounded-2xl, padding-8
- Border: teal/20
- MapPin icon: teal
- 3 office locations:
  - 🇺🇸 San Francisco, USA - HQ & Development Center
  - 🇬🇧 London, UK - European Operations
  - 🇸🇬 Singapore - Asia Pacific Hub
- Note: "Remote-first company with teams across 15+ countries"

---

### 10. FOOTER SECTION
**Background**: Very dark `#0a0a0a`

**Background Effect**:
- Teal glow (500x300, blur-150px, opacity-5%) center-top

**Main Footer** (5 columns on desktop):

**Column 1-2: Brand** (wider, 2 columns)
- Logo: Same as header (teal gradient box + Sparkles + DigitalForge)
- Description: "Global team building scalable digital products"
- Social icons (4): Linkedin, Twitter, Github, Instagram
  - Design: white/5 background, rounded-xl, hover:teal

**Column 3: Services**
- Title: "Services"
- Links: Web Development, Mobile Apps, UI/UX Design, MVP Development, Backend & APIs
- Link hover: text-teal

**Column 4: Company**
- Title: "Company"
- Links: About Us, Our Team, Careers, Blog, Contact
- Link hover: text-teal

**Column 5: Resources**
- Title: "Resources"
- Links: Case Studies, Portfolio, Pricing, FAQ, Privacy Policy
- Link hover: text-teal

**Newsletter Section** (full width):
- Border-top: white/10
- Centered content
- Heading: "Stay in the Loop"
- Description: "Get updates on new projects, tech insights, and industry trends"
- Form: Email input + Subscribe button (gradient teal, arrow icon)

**Bottom Bar**:
- Border-top: white/10
- Flex layout: Copyright left, links right
- Copyright: "© 2026 DigitalForge. All rights reserved."
- Links: Terms of Service, Privacy Policy, Cookie Settings
- Link hover: text-teal

---

## Key Interaction & Animation Details

### Hover Effects Throughout:
1. **Cards**: -translate-y-2, shadow increase, border color change
2. **Buttons**: Shadow glow with accent color, slight scale
3. **Icons**: scale-110, color change
4. **Images**: scale-110 within container (overflow-hidden)
5. **Links**: Color change to teal, underline on some
6. **Gradients**: Opacity transitions on overlay backgrounds

### Transition Specifications:
- Default: `transition-all duration-300`
- Images: `duration-500` or `duration-700`
- Colors: `transition-colors`
- Transform: `transition-transform`

### Background Glow Pattern:
- Large circles (300-500px)
- Positioned absolute
- Heavy blur (100-150px)
- Low opacity (5-20%)
- Colors: teal (#14B8A6) and blue variants
- Occasionally animated with `animate-pulse`

### Badge/Pill Design:
- `px-4 py-2`
- `rounded-full`
- Background: accent/10 or accent/20
- Text: accent color
- Font: `text-sm font-medium`

### Icon Boxes:
- Square (12x12, 14x14, or 10x10)
- `rounded-xl`
- Gradient backgrounds (`bg-gradient-to-br`)
- Icons: white, centered
- Shadow: `shadow-lg`
- Hover: `scale-110`

---

## Responsive Behavior

### Breakpoints:
- Mobile: default
- Tablet: `md:` (768px+)
- Desktop: `lg:` (1024px+)
- Large: `xl:` (1280px+)

### Grid Adjustments:
- Services: 1 → 2 → 3 columns
- Team: 1 → 2 → 4 columns
- Technologies: 1 → 2 → 3 columns
- Reviews: 1 → 2 → 3 columns
- Clients: 2 → 3 → 4 → 6 columns
- Pricing: 1 → 1 → 3 columns

### Text Scaling:
- H1: 5xl → 6xl → 7xl → 8xl
- H2: 4xl → 6xl
- Body: base → lg
- Padding: py-24 → py-32

### Navigation:
- Mobile: Hamburger menu
- Desktop: Full horizontal menu

---

## Content Guidelines

### Tone:
- Professional but approachable
- Confidence without arrogance
- Focus on results and metrics
- International/global perspective

### Metrics Style:
- Use "+" for growth indicators
- Include realistic numbers (150+, 200+, 98%)
- Mix percentages, currency, and counts
- Always provide context labels

### CTA Language:
- Action-oriented: "Start Your Project", "Let's Talk", "Get Started"
- Value-focused: "View Case Studies", "See Our Work"
- Urgency: "Schedule a Call", "Book Now"

---

## Technical Requirements

### Icons:
- Use lucide-react package
- Import: `import { IconName } from 'lucide-react'`
- Common icons: ArrowRight, Sparkles, Code, Smartphone, Monitor, Database, etc.

### Images:
- Use ImageWithFallback component for team/client photos
- Real photos from Unsplash for authenticity
- Alt text for all images

### Forms:
- Proper labels and placeholders
- Required field indicators (*)
- Focus states with teal accent
- Proper input types (email, tel, text, textarea, select)

### Accessibility:
- Semantic HTML
- Proper heading hierarchy
- Focus states on interactive elements
- Sufficient color contrast
- Hover states distinct from default

---

## Brand Identity

### Company Name: DigitalForge

### Tagline/Positioning:
- "We Build Scalable Digital Products"
- Focus: Startups and businesses
- Services: Web + Mobile applications
- Geography: International/Global
- Team: 25+ members across 15+ countries

### Trust Indicators:
- 200+ projects delivered
- 150+ happy clients
- 98% client satisfaction
- 4.9/5 average rating
- 30+ countries served
- 10 years experience

---

## Final Notes

This website should feel:
- ✅ Premium and high-end
- ✅ Modern and cutting-edge
- ✅ Dynamic and interactive (not flat/boring)
- ✅ Conversion-focused with clear CTAs
- ✅ Trustworthy with social proof
- ✅ Professional yet approachable
- ✅ Visually engaging with depth (layers, glows, shadows)

The design uses a dark-light-dark-light alternating pattern to create visual rhythm and prevent monotony. Every section has unique characteristics while maintaining overall consistency through the color system, typography, and spacing rules.

All interactive elements should feel responsive and provide clear visual feedback. The teal accent color (#14B8A6) is the star of the show and should be used strategically for CTAs, highlights, and interactive states to guide users toward conversion actions.
