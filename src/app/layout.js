import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Scribble",
  description: "Journal app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className} bg-gradient-to-b from-orange-50 via-amber-50 to-orange-50`}
        >
          <div className="bg-[url('/bg.jpg')] opacity-50 fixed -z-10 inset-0" />
          <Header />
          <main className="min-h-screen">{children}</main>
          <footer className="bg-orange-300 py-12 bg-opacity-10">
            <div className="container mx-auto px-4 text-center text-gray-900">
              <p>@scribble | all rights reserved</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
