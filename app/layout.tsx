import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Sai Kiran Kamugari | Full-Stack Developer",
  description:
    "Full-stack developer specializing in React, Node.js, TypeScript, Java, and AWS.",
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
