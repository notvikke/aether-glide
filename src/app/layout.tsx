import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ['200', '300', '400', '500', '700'], // Load multiple weights for design
});

export const metadata: Metadata = {
  title: "Aether Glide | Gravity is Optional",
  description: "Experience the peak of hover technology. 45mph top speed, aerogel-carbon frame, and pure mag-lev propulsion. Pre-order the future today.",
  openGraph: {
    title: "Aether Glide",
    description: "Gravity is Optional.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased bg-[#050505]`}>
        {children}
      </body>
    </html>
  );
}
