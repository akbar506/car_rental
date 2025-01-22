import "./globals.css"
import { Inter } from "next/font/google";
import Link from "next/link";
import { Github } from "lucide-react";

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Car Rental Service",
  description: "Find and rent your perfect car",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <div className="h-10 bg-blue-600 text-center text-white flex justify-center items-center">NOTE! This is just a dummy Website</div>
        <header className="text-blue-600 p-4 shadow-lg">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="">
              <h1 className="text-2xl font-bold select-none">CAR RENTAL</h1>
            </Link>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/cars" className="hover:underline">
                  All Cars
                </Link>
              </li>
              <li>
                <Github />
              </li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto px-4 py-8">{children}</main>
        <footer className="bg-blue-600 text-white p-4 mt-8">
          <div className="container mx-auto text-center">© 2023 Car Rental Service. All rights reserved.</div>
        </footer>
      </body>
    </html>
  )
}

