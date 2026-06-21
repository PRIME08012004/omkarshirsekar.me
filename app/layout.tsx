import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: {
    default: "Omkar Shirsekar",
    template: "%s | Omkar Shirsekar",
  },
  description: "Full-Stack Developer & DevOps Enthusiast based in Panvel, India.",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)

{
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Omkar Shirsekar",
    url: "https://omkarshirsekar.me",
    jobTitle: "Full Stack Developer",
    sameAs: [
      "https://github.com/PRIME08012004",
      "https://linkedin.com/in/omkar-shirsekar",
    ],
  };
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
         <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        {children}</body>
    </html>
  );
}