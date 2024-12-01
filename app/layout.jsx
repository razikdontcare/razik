import React from "react";
import "../global.css";
import { Outfit } from "next/font/google";
const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://razik.net"),
  title: {
    default: "Abdurrazik | Personal Portfolio",
    template: "%s | Abdurrazik",
  },
  description:
    "20 years old, self-taught web developer, and a computer science student.",
  openGraph: {
    title: "Abdurrazik | Personal Portfolio",
    description:
      "20 years old, self-taught web developer, and a computer science student.",
    url: "https://razik.net",
    siteName: "Abdurrazik",
    images: [
      {
        url: "/dp.jpg",
      },
    ],
  },
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>{children}</body>
    </html>
  );
}
