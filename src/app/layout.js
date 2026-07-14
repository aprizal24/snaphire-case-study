
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SnapHire — UI/UX Case Study",
  description: "A UI/UX case study showcasing the end-to-end design process of a photography booking application, from user research to high-fidelity interface design.",
  keywords: [
  "UI UX",
  "Case Study",
  "Product Design",
  "Photography Booking",
  "Mobile App",
  "SnapHire"
  ],
  authors: [
    {
      name: "Aprizal Triansyah",
      url: "https://snaphire-case-study.vercel.app",
    },
  ],
  creator: "Aprizal Triansyah",
  publisher: "Aprizal Triansyah",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "SnapHire — UI/UX Case Study",
    description:
      "A UI/UX case study showcasing the design process of a photography booking application.",
    url: "https://snaphire-case-study.vercel.app",
    siteName: "SnapHire",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SnapHire UI/UX Case Study",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SnapHire — UI/UX Case Study",
    description:
      "A UI/UX case study showcasing the design process of a photography booking application.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
