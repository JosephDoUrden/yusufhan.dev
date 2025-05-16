import "./globals.css";
import { Inter } from "next/font/google";
import GoogleAnalytics from "./components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Yusufhan Sacak | Software Engineer & Mobile Developer",
  description:
    "Yusufhan Sacak is a skilled Software Engineer with expertise in web and mobile application development. Specializing in Flutter, React, and Node.js with a background in cybersecurity.",
  keywords: [
    "Software Engineer",
    "Flutter Developer",
    "Mobile Developer",
    "Web Developer",
    "UI/UX Designer",
    "Cybersecurity",
  ],
  authors: [{ name: "Yusufhan Sacak" }],
  openGraph: {
    title: "Yusufhan Sacak | Software Engineer & Mobile Developer",
    description:
      "Portfolio showcasing web and mobile development projects by Yusufhan Sacak",
    url: "https://yusufhan.dev",
    siteName: "Yusufhan Sacak Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yusufhan Sacak | Software Engineer & Mobile Developer",
    description:
      "Portfolio showcasing web and mobile development projects by Yusufhan Sacak",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <GoogleAnalytics />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
