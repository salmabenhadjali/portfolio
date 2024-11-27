import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/componens/header/Header";
import Footer from "@/componens/footer/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Quest of Code",
  description: "Embark on a journey through coding challenges",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`container ${nunito.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
