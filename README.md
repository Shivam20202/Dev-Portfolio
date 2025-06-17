# 🎨 Shivam Pandey - Full-Stack Developer Portfolio

A modern, interactive, and cartoon-themed portfolio website showcasing full-stack development skills with beautiful animations, background music, and engaging user experience.

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-cyan)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10.0-purple)

## 🌟 Live Demo

**[View Live Portfolio →](https://portfolio-shivam20202-shivams-projects-e4bdbe86.vercel.app/)**

## 🚀 Features

### 🎭 **Interactive Theme System**
- **Animated Theme Toggle**: Eye-catching theme button with sparkles and rotating rings
- **Smooth Transitions**: Beautiful sun/moon animations with stars and clouds
- **Dynamic Background**: Cartoon-style background that changes with theme
- **Attention-Grabbing**: Pulsing effects and hint tooltips for better UX

### 🎵 **Smart Background Music System**
- **Auto-Play**: Music starts automatically after user interaction (browser policy compliant)
- **Intelligent Hints**: Clear visual hints showing users how to control music
- **Full Controls**: Play/pause, volume control, and mute functionality
- **Visual Feedback**: Animated music notes and pulsing effects
- **Context-Aware**: Music player adapts to different sections of the site
- **Hover Controls**: Extended controls appear on hover

### 🎨 **Modern Design**
- **Cartoon Theme**: Playful and professional cartoon-style design
- **Responsive Layout**: Perfect on all devices and screen sizes
- **Smooth Animations**: Framer Motion powered animations throughout
- **Custom Cursor**: Interactive custom cursor for desktop users
- **Loading Animation**: Engaging loading screen with character animation

### 📱 **Sections**
1. **Hero Section**: Dynamic introduction with programming fun facts and resume download
2. **About Me**: Personal introduction with animated character illustration
3. **Projects**: Interactive project showcase with horizontal scrolling and detailed view
4. **Skills**: Technical skills with real logos, progress bars, and animations
5. **Education**: Academic background and certifications with modal views
6. **Fun Facts**: Rotating developer statistics and achievements
7. **Contact**: Working contact form with Web3Forms integration
8. **Footer**: Beautiful footer with social links, statistics, and back-to-top button

### 🛠️ **Technical Features**
- **Next.js 14**: Latest Next.js with App Router
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework with custom animations
- **Framer Motion**: Advanced animations and transitions
- **Theme System**: Dark/light mode with smooth transitions
- **Responsive Design**: Mobile-first approach
- **Performance Optimized**: Fast loading and smooth interactions
- **SEO Optimized**: Meta tags, structured data, and semantic HTML


## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm
- Git

### Installation

1. **Clone the repository**
\`\`\`bash
git clone https://github.com/Shivam20202/Dev-Portfolio.git
cd portfolio
\`\`\`

2. **Install dependencies**
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. **Add background music**
\`\`\`bash
mkdir -p public/music
# Add your background-music.mp3 file to public/music/
\`\`\`

4. **Set up environment variables**
\`\`\`bash
cp .env.example .env.local
\`\`\`

Add your Web3Forms access key:
\`\`\`env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
\`\`\`

5. **Run the development server**
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

6. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🌐 Deployment on Vercel

### Step 1: Prepare Your Repository

1. **Push to GitHub**
\`\`\`bash
git add .
git commit -m "Initial commit"
git push origin main
\`\`\`

2. **Ensure music file is included**
\`\`\`bash
# Make sure your music file is in the correct location
ls public/music/background-music.mp3
\`\`\`

### Step 2: Deploy to Vercel

#### Option A: Vercel Dashboard (Recommended)

1. **Go to [Vercel Dashboard](https://vercel.com/dashboard)**
2. **Click "New Project"**
3. **Import your GitHub repository**
4. **Configure project settings:**
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: .next
   - Install Command: `npm install`

5. **Add Environment Variables:**
   - Go to "Environment Variables" section
   - Add: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` = `your_access_key_here`

6. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete

#### Option B: Vercel CLI

1. **Install Vercel CLI**
\`\`\`bash
npm i -g vercel
\`\`\`

2. **Login to Vercel**
\`\`\`bash
vercel login
\`\`\`

3. **Deploy**
\`\`\`bash
vercel
\`\`\`

4. **Add environment variables**
\`\`\`bash
vercel env add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
\`\`\`



## 📁 Project Structure

\`\`\`
portfolio/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and animations
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Main page component
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── about.tsx         # About section
│   ├── smart-music-player.tsx # Enhanced music player
│   ├── cartoon-background.tsx # Animated background
│   ├── contact.tsx       # Contact form
│   ├── custom-cursor.tsx # Custom cursor
│   ├── footer.tsx        # Footer section
│   ├── fun-facts.tsx     # Fun facts carousel
│   ├── hero.tsx          # Hero section with resume download
│   ├── loading-animation.tsx # Loading screen
│   ├── navigation.tsx    # Navigation bar
│   ├── projects.tsx      # Projects showcase
│   ├── real-skills.tsx   # Skills section with real logos
│   ├── education.tsx     # Education and certifications
│   ├── theme-provider.tsx # Theme context
│   └── theme-toggle.tsx  # Enhanced theme switcher
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
│   ├── music/           # Background music files
│   │   └── background-music.mp3
│   ├── resume/          # Resume files
│   │   └── Shivam-Pandey-Resume.pdf
│   └── images/          # Images and icons
├── .env.example         # Environment variables template
├── .env.local          # Local environment variables (not committed)
├── next.config.mjs     # Next.js configuration
├── tailwind.config.ts  # Tailwind CSS configuration
├── package.json        # Dependencies and scripts
└── README.md          # This file
\`\`\`

## 🛠️ Technologies Used

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Comic Neue, Bangers)
- **Theme**: next-themes
- **Forms**: Web3Forms
- **Audio**: HTML5 Audio API
- **Deployment**: Vercel

## 🎯 Performance Features

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting with Next.js
- **Font Optimization**: Google Fonts with display swap
- **Animation Performance**: Hardware-accelerated animations
- **Responsive Images**: Optimized images for different screen sizes
- **Lazy Loading**: Components load as they enter viewport
- **Audio Optimization**: Efficient audio loading and playback

## 📱 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile**: iOS Safari, Chrome Mobile, Samsung Internet
- **Audio Support**: All browsers with HTML5 audio support
- **Features**: CSS Grid, Flexbox, Custom Properties, Intersection Observer

## 🎵 Music Player Features

### User Experience
- **Clear Hints**: Visual indicators showing users how to interact with music
- **Auto-Play**: Starts automatically after user interaction (complies with browser policies)
- **Context Awareness**: Player adapts to different sections of the site
- **Accessibility**: Screen reader support and keyboard navigation

### Technical Implementation
- **Browser Compliance**: Follows autoplay policies of modern browsers
- **Error Handling**: Graceful fallbacks if music fails to load
- **Performance**: Optimized audio loading and playback
- **Memory Management**: Proper cleanup and resource management


## 🙏 Acknowledgments

- **shadcn/ui** for beautiful UI components
- **Framer Motion** for smooth animations
- **Tailwind CSS** for utility-first styling
- **Next.js** team for the amazing framework
- **Vercel** for hosting and deployment
- **Web3Forms** for contact form handling

## 📊 Stats

- **Components**: 15+ custom React components
- **Animations**: 50+ Framer Motion animations
- **Responsive**: 100% mobile-friendly
- **Performance**: 95+ Lighthouse score
- **Accessibility**: WCAG 2.1 compliant
- **Music Integration**: Smart auto-play with user hints

---

<div align="center">

**Made with ❤️ and lots of ☕ by Shivam Pandey**

**🎵 Don't forget to turn on the music for the full experience! 🎵**

</div>
