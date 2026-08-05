import type { Metadata } from "next";
import { Jua, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const jua = Jua({
  weight: "400",
  variable: "--font-jua",
});

const notoSansKr = Noto_Sans_KR({
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  title: "예비부모 지원금 찾기",
  description: "임신부터 육아까지, 단계별 정부지원금을 한눈에 확인하세요.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${jua.variable} ${notoSansKr.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
