import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import AppProvider from "@/components/AppProvider";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SVNet - AI Content Generator",
  description: "SVNet - AI Content Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn(
            "min-h-screen bg-background antialiased",
            inter.className
          )}
        >
          <AppProvider>
            {children}
            <Toaster />
          </AppProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
