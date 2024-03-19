import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio| Nut",
  description: "เว็บไซต์ Portfolio ของ สิริพัชร นำเสนอผลงาน โปรเจค และประสบการณ์การทำงาน",
  icon: "/images/code3.png",
  keywords: "portfolio, software developer, siripat",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={metadata.icon} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
