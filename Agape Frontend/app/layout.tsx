import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "sonner"
import "./globals.css"
import { Suspense, useEffect } from "react"
import { QueryProvider } from "@/lib/providers/query-provider"
import { CartProvider } from "@/lib/cart-context"
import { WishlistProvider } from "@/lib/contexts/wishlist-context"
import { MiniCart } from "@/components/mini-cart"
import { WhatsAppButton } from "@/components/whatsapp-button"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Agape looks — Authentic Lace, Handwoven in Ghana",
  description:
    "Premium Lace fabric and garments. Authentic patterns crafted by Ghanaian weavers. Luxury ethnic elegance meets modern design.",
  keywords: ["Lace", "African fabric", "Ghanaian textiles", "handwoven", "authentic Lace", "premium fabric"],
  openGraph: {
    title: "Agape looks — Authentic Lace, Handwoven in Ghana",
    description: "Premium Lace fabric and garments. Authentic patterns crafted by Ghanaian weavers.",
    type: "website",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <QueryProvider>
          <CartProvider>
            <WishlistProvider>
              <Suspense fallback={null}>
                <a
                  href="#main-content"
                  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-sm"
                >
                  Skip to main content
                </a>
                {children}
              </Suspense>
              <MiniCart />
              <WhatsAppButton />
            </WishlistProvider>
          </CartProvider>
        </QueryProvider>
        <Toaster
          position="top-right"
          richColors
          closeButton
          duration={3000}
          toastOptions={{
            style: {
              background: 'var(--card)',
              color: 'var(--card-foreground)',
              border: '1px solid var(--border)',
            },
          }}
        />
        <Analytics />
      </body>
    </html>
  )
}
