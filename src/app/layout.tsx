import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Toaster } from "@atomic/mol.toaster";
import { Providers } from "@components/obj.providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Term Monitor",
  description:
    "Ferramenta de monitoramento de termos de marca para sites concorrentes que são patrocinados usando Google Ads.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  );
}
