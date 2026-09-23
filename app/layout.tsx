import type { Metadata } from "next";
import { Aoboshi_One } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "@/components/landing/Footer";

const aoboshi = Aoboshi_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-aoboshi",
});
export const metadata: Metadata = {
  title: "Omar Scholar Agency",
  description: "",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
    >
     <body className={cn(aoboshi.className, "font-normal min-h-screen flex flex-col bg-background")}>
        <div className="flex-1 px-20 grid">
           <main className="w-full">{children}</main>
        </div>
        <Footer/>
      </body>
    </html>
  );
}
