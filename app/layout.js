import Script from "next/script";
import localFont from "next/font/local";
import AmbientCanvas from "@/components/AmbientCanvas";
import MotionEnhancements from "@/components/MotionEnhancements";
import "./globals.css";

const geist = localFont({
  src: "../node_modules/next/dist/next-devtools/server/font/geist-latin.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-geist",
});

const initTheme = `
  (() => {
    let theme;
    try { theme = localStorage.getItem("portfolio-theme"); } catch {}
    if (theme !== "dark" && theme !== "light") {
      theme = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    document.documentElement.dataset.theme = theme;
  })();
`;

export const metadata = {
  title: "Maruf Hasan Chowdhury | Personal website",
  description: "Personal portfolio of Maruf Hasan Chowdhury — CSE student, web developer, and AI enthusiast.",
  icons: {
    icon: [{ url: "/media/maruf.jpeg", type: "image/jpeg" }],
    apple: "/media/maruf.jpeg",
  },
};

export const viewport = { viewportFit: "cover" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" data-scroll-behavior="smooth" className={geist.variable} suppressHydrationWarning>
      <head><Script id="portfolio-theme" strategy="beforeInteractive">{initTheme}</Script></head>
      <body className="min-h-screen text-base-content antialiased">
        <AmbientCanvas />
        <MotionEnhancements>{children}</MotionEnhancements>
      </body>
    </html>
  );
}
