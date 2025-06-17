// app/viewport.ts
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ff6b6b" },
    { media: "(prefers-color-scheme: dark)", color: "#4353ff" },
  ],
}
