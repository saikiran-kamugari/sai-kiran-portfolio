import "./globals.css";
import Navbar from "../components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sai Kiran Kamugari | Full-Stack & Platform Engineer",
  description:
    "Full-stack developer with 4+ years experience in React, Node.js, TypeScript, Java, AWS, and Server-Driven UI platforms.",
  openGraph: {
    title: "Sai Kiran Kamugari | Full-Stack Engineer",
    description:
      "Building scalable cloud-native systems, backend SDKs, and high-performance APIs.",
    url: "https://saikiran-kamugari.github.io/sai-kiran-portfolio",
    siteName: "Sai Kiran Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sai Kiran Kamugari Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 dark:bg-black dark:text-gray-100">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
