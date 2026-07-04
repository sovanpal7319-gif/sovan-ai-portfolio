import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sovan Pal | AI Engineer & ML Researcher",
  description:
    "Portfolio of Sovan Pal — AI Engineer, Machine Learning Enthusiast, and Deep Learning Developer. Explore projects in NLP, Reinforcement Learning, and Intelligent Systems.",
  keywords: [
    "Sovan Pal",
    "AI Engineer",
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "Portfolio",
    "Data Science",
  ],
  authors: [{ name: "Sovan Pal" }],
  openGraph: {
    title: "Sovan Pal | AI Engineer & ML Researcher",
    description:
      "AI Engineer passionate about Machine Learning, Deep Learning, NLP, and Intelligent Systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="global-grid min-h-screen text-foreground">
        {children}
      </body>
    </html>
  );
}