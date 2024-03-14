import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gather Mate",
  description:
    "Together We Thrive: Where Friendship Sparks Unforgettable Events!",
  icons: "/logo.svg",
};
export const viewport: Viewport = {
  themeColor: "#0E0B18",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
