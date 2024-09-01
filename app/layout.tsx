import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";

// Styles.
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--body-font" });
const raleway = Raleway({ subsets: ["latin"], variable: "--header-font" });

// Meta Data.
export const metadata: Metadata = {
  title: "Mckenzie Irwin",
  description: "Silly little portfolio for my development career.",
};

// Render.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${raleway.variable}`}>{children}</body>
    </html>
  );
}
