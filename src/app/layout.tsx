import type { Metadata } from "next";
import { BioRhyme, Cormorant, Encode_Sans, Manrope } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import NavigationBar from "@/components/self/navbar";
import Footer from "@/components/self/footer";
import clsx from "clsx";

const font = Cormorant({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={clsx(font.className, "antialiased overflow-x-hidden w-full")}
      >
        <StoreProvider>
          <NavigationBar />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
