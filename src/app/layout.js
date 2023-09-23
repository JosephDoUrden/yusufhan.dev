import "./globals.css";
import { Inter } from "next/font/google";
import GoogleAnalytics from "./components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yusufhan Sacak - Full Stack Developer",
  description:
    "Yusufhan Sacak is a distinguished Full Stack Developer with expertise in web and mobile application development. Explore his projects and skills in Flutter, JavaScript, Node.js, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
