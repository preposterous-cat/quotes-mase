import { VT323 } from "next/font/google";
import "./globals.css";

const inter = VT323({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Quotes Mase",
  description: "Kata-kata Hari Ini Mase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="lofi">
      <body className={inter.className} data-theme="lofi">
        {children}
      </body>
    </html>
  );
}
