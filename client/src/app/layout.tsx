import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/organisms/sidebar/Sidebar";
import Link from "next/link";
import GithubIcon from "@/components/atoms/icons/GithubIcon";

const inter = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Contact kjw",
  description: "만나서 반가워요. 프론트 개발자 김정운입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="border-y-orange-100">
      <body className={inter.className}>
        <Sidebar />
        <Link
          href={"https://github.com/1478952"}
          className="absolute right-0 translate-x-8 top-20 z-10"
        >
          <GithubIcon width="4rem" height="4rem" />
        </Link>
        <main>{children}</main>
      </body>
    </html>
  );
}
