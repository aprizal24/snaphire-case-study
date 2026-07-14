
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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

  alternates: {
    canonical: "https://snaphire-case-study.vercel.app",
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

const schema = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://snaphire-case-study.vercel.app/#website",

      url: "https://snaphire-case-study.vercel.app",

      name: "SnapHire Case Study",

      description:
        "A UI/UX case study showcasing the end-to-end design process of a photography booking application.",

      inLanguage: "en",

      publisher: {
        "@id": "https://snaphire-case-study.vercel.app/#person",
      },
    },

    {
      "@type": "Person",

      "@id": "https://snaphire-case-study.vercel.app/#person",

      name: "Aprizal Triansyah",

      url: "https://snaphire-case-study.vercel.app",

      jobTitle: "UI/UX Designer",

      image:
        "https://snaphire-case-study.vercel.app/og-image.png",

      knowsAbout: [
        "UI Design",
        "UX Design",
        "Mobile App Design",
        "Design System",
        "Wireframing",
        "Prototyping",
        "User Research",
      ],
    },

    {
      "@type": "CreativeWork",

      "@id": "https://snaphire-case-study.vercel.app/#project",

      name: "SnapHire",

      headline: "SnapHire — Photography Booking App UI/UX Case Study",

      description:
        "SnapHire is a UI/UX case study of a photography booking application, documenting the complete design process from user research and personas to wireframes, high-fidelity interfaces, and interaction design.",

      author: {
        "@id": "https://snaphire-case-study.vercel.app/#person",
      },

      creator: {
        "@id": "https://snaphire-case-study.vercel.app/#person",
      },

      publisher: {
        "@id": "https://snaphire-case-study.vercel.app/#person",
      },

      url: "https://snaphire-case-study.vercel.app",

      image:
        "https://snaphire-case-study.vercel.app/og-image.png",

      inLanguage: "en",

      genre: "UI/UX Case Study",

      keywords: [
        "UI Design",
        "UX Design",
        "Photography Booking",
        "Mobile App",
        "Case Study",
        "Design Process",
      ],

      about: [
        {
          "@type": "Thing",
          name: "Photography Booking",
        },
        {
          "@type": "Thing",
          name: "User Experience",
        },
        {
          "@type": "Thing",
          name: "Mobile Application",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />{children}</body>
    </html>
  );
}
