import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";

// Styles.
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--body-font" });
const raleway = Raleway({ subsets: ["latin"], variable: "--header-font" });

// Meta Data.
export const metadata: Metadata = {
  title: "Root - Mckenzie Irwin",
  description:
    "Mckenzie Irwin's personal portfolio showcasing experience, projects, and writings.",
};

// Render.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${raleway.variable} fade-in`}>{children}</body>
    </html>
  );
}
