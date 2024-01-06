import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js Tutorial",
  description: "Build some awesome stuff with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="sunset">
      <body className={`${inter.className} bg-base-800`}>
        <NavBar />
        <main className="px-x py-20 max-w-6xl mx-auto p-7">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
