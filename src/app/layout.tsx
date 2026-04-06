import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import "./styles/styles.css";
import { ThemeProvider } from "./_context/ThemeContext";
import ThemeWrapper from "./_shared/ThemeWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "UNBREN. STUDIO | Premium Digital Experiences",
  description: "Next-generation digital studio specializing in branding, web design, and SEO.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ro" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          <ThemeWrapper>{children}</ThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
