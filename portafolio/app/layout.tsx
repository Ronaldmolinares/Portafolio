import type { Metadata } from "next";
import { Atkinson_Hyperlegible, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const atkinson = Atkinson_Hyperlegible({
  variable: "--font-atkinson",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Samir Molinares - Ingeniero de Sistemas",
  description: "Portafolio de Samir Molinares, Ingeniero de Sistemas y Computación, especializado en desarrollo backend y full stack. Explora mis proyectos, habilidades y experiencia en el desarrollo de soluciones de software escalables y eficientes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${atkinson.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
