import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/ui/navbar";
import { ThemeProvider } from "@/providers/theme-provider"
import TanstackQueryProvider from "@/providers/tanstack-query-provider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "small",
  description: "A medium clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TanstackQueryProvider>
          <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              >
            <Navbar /> 
            {children}
          </ThemeProvider>
        </TanstackQueryProvider>
      </body>
      </ClerkProvider>
    </html>
  );
}
