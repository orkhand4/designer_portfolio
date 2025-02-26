import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "Orkhan Aliyev Portfolio",
  description: "Orkhan Aliyev Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="h-screen overflow-scroll border-[22px] hide-scrollbar border-[#EDEDED]">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
