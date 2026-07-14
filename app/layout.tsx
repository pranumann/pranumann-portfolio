import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Praveen Yadav | AI Software Engineer",
  description:
    "Official portfolio of Praveen Yadav - Software Engineer specializing in AI Agents, Generative AI, LLMs, LangGraph, LangChain, FastAPI, Go, Python, Docker and Kubernetes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrains.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}