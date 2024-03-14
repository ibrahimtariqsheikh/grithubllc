import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import NavigationBar from "@/components/self/navbar";
import Footer from "@/components/self/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GritHub",
  description: "Shopping store for the next generation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <NavigationBar />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
