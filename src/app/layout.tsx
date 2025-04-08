
import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'


export const metadata: Metadata = {
  title: "BabyGuard",
  description: "BabyGuard is a baby monitoring system that uses a camera and a mobile app to keep an eye on your baby.",  
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href='/favicon.jpg' />
        </head>
        <body>
          <main>
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}
