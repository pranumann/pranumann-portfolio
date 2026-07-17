import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Praveen Yadav | AI Software Engineer",

  description:
    "Official portfolio of Praveen Yadav. AI Software Engineer specializing in AI Agents, LLMs, Go, Python, FastAPI, LangChain, LangGraph, Docker and Kubernetes.",

  keywords: [
    "Praveen Yadav",
    "Pranumann",
    "AI Engineer",
    "Software Engineer",
    "Go Developer",
    "Python",
    "FastAPI",
    "LangChain",
    "LangGraph",
    "LLM",
    "Next.js Portfolio",
  ],

  authors: [
    {
      name: "Praveen Yadav",
    },
  ],

  creator: "Praveen Yadav",

  openGraph: {
    title: "Praveen Yadav | AI Software Engineer",
    description:
      "AI Software Engineer Portfolio built with Next.js.",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Praveen Yadav | AI Software Engineer",
    description:
      "AI Software Engineer Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${space.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}