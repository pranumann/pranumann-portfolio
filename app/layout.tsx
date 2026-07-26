import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pranumann.vercel.app"),

  title: {
    default: "Praveen Yadav • AI Software Engineer | Generative AI • LLM • Backend",
    template: "%s | Praveen Yadav",
  },

  description:
    "Praveen Yadav is an AI Software Engineer specializing in Generative AI, AI Agents, LLMs, LangChain, LangGraph, Python, Go, FastAPI, Docker, Kubernetes and scalable cloud-native backend systems. Explore projects, experience and AI innovations.",

  applicationName: "Praveen Portfolio",

  keywords: [
    "Praveen Yadav",
    "Pranumann",
    "AI Software Engineer",
    "Generative AI Engineer",
    "LLM Engineer",
    "AI Agent Developer",
    "LangChain",
    "LangGraph",
    "OpenAI",
    "Python Developer",
    "Go Developer",
    "FastAPI",
    "Next.js",
    "Backend Engineer",
    "Cloud Native",
    "Docker",
    "Kubernetes",
    "Machine Learning",
    "Artificial Intelligence",
    "Portfolio",
  ],

  authors: [
    {
      name: "Praveen Yadav",
      url: "https://pranumann.vercel.app",
    },
  ],

  creator: "Praveen Yadav",

  publisher: "Praveen Yadav",

  category: "Technology",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://pranumann.vercel.app",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title:
      "Praveen Yadav | AI Software Engineer • Generative AI • Backend",

    description:
      "Building AI-powered applications, intelligent agents, cloud-native systems and modern full-stack experiences.",

    url: "https://pranumann.vercel.app",

    siteName: "Praveen Yadav Portfolio",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Praveen Yadav Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Praveen Yadav | AI Software Engineer",

    description:
      "AI Engineer building intelligent software, scalable backend systems and cloud-native applications.",

    creator: "@pranumann",

    images: ["/og-image.png"],
  },

  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_CODE",
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  themeColor: "#020617",

  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <body
        className={`
          ${sora.variable}
          ${manrope.variable}
          bg-[#020617]
          text-white
          antialiased
          selection:bg-cyan-400/30
          selection:text-white
          overflow-x-hidden
          min-h-screen
          font-[var(--font-body)]
        `}
      >
        {children}
      </body>
    </html>
  );
}