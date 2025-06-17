import type React from "react"
import type { Metadata } from "next"
import { Comic_Neue, Bangers } from "next/font/google"
import "./globals.css"
import CustomCursor from "@/components/custom-cursor"
import SmoothScrollProvider from "@/components/smooth-scroll-provider"
import LoadingAnimation from "@/components/loading-animation"
import { ThemeProvider } from "@/components/theme-provider"
import CartoonBackground from "@/components/cartoon-background"
import ThemeToggle from "@/components/theme-toggle"

const comicNeue = Comic_Neue({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-comic",
})

const bangers = Bangers({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bangers",
})

export const metadata: Metadata = {
  title: "Shivam Pandey | Full-Stack Developer & Creative Coder",
  description:
    "Shivam Pandey - Full-Stack Developer specializing in React, Node.js, and modern web technologies. Building epic digital experiences with creativity and code! 🚀",
  keywords: [
    "Shivam Pandey",
    "Full-Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Web Developer",
    "JavaScript",
    "TypeScript",
    "Portfolio",
    "Creative Developer",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Shivam Pandey", url: "https://github.com/Shivam20202" }],
  creator: "Shivam Pandey",
  publisher: "Shivam Pandey",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio-url.vercel.app",
    title: "Shivam Pandey | Full-Stack Developer & Creative Coder",
    description: "Building epic digital experiences with React, Node.js, and modern web technologies! 🚀",
    siteName: "Shivam Pandey Portfolio",
    images: [
      {
        url: "/s.png",
        width: 1200,
        height: 630,
        alt: "Shivam Pandey - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivam Pandey | Full-Stack Developer & Creative Coder",
    description: "Building epic digital experiences with React, Node.js, and modern web technologies! 🚀",
    creator: "@shivam_dev",
    images: ["/s.png"],
  },
  icons: {
    icon: [
      { url: "/s.png", type: "image/png" },
      { url: "/s.png", sizes: "32x32", type: "image/png" },
      { url: "/s.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/s.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/s.png",
  },
  manifest: "/site.webmanifest",

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/s.png" type="image/png" />
        <link rel="apple-touch-icon" href="/s.png" />
        <link rel="shortcut icon" href="/s.png" />
      </head>
      <body className={`${comicNeue.variable} ${bangers.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange={false}>
          <SmoothScrollProvider>
            <CartoonBackground />
            <LoadingAnimation />
            <CustomCursor />
            <ThemeToggle />
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
