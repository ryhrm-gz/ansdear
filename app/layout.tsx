import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import {
  IconBulb,
  IconExternalLink,
  IconNews,
  IconQuestionMark,
} from "@tabler/icons-react";
import { ReactNode } from "react";
import Image from "next/image";

const noto_sans_jp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  display: "swap",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title:
    "ANSDear! | 新しい聴覚障「オーディトリー​・ニューロパチー」を知るポータルサイト",
  description:
    "新しい聴覚障「オーディトリー​・ニューロパチー」を知るポータルサイト",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${noto_sans_jp.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header>
      <div className="flex flex-col sm:flex-row justify-between sm:items-center max-w-7xl mx-auto py-5 px-4 gap-8">
        <Link href="/">
          <h1 className="text-2xl font-bold">ANSDear!</h1>
          <p className="text-xs text-gray-600 mt-1">
            新しい聴覚障害
            <br />
            「オーディトリー​・ニューロパチー」
            <br />
            を知るポータルサイト
          </p>
        </Link>
        <nav>
          <ul className="flex justify-around gap-5">
            <li>
              <HeaderNavItem
                href="/about"
                label="ANSDってなに？"
                icon={<IconQuestionMark stroke={1.5} size={28} />}
              />
            </li>
            <li>
              <HeaderNavItem
                href="/links"
                label="お役立ちリンク集"
                icon={<IconBulb stroke={1.5} size={28} />}
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function HeaderNavItem({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: JSX.Element;
}) {
  return (
    <Link href={href}>
      <div className="flex flex-col items-center gap-1">
        {icon}
        <div className="text-sm">{label}</div>
      </div>
    </Link>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-100 px-4 pt-10 pb-4 md:pt-16">
      <div className="max-w-4xl mx-auto">
        <div>
          <h2 className="text-gray-500 text-center">
            お問い合わせは
            <br />
            ブログ・オープンチャットから
          </h2>
        </div>
        <div className="mt-10">
          <ul>
            <li>
              <div className="text-center">
                <FooterLink
                  href="https://ameblo.jp/ansd-auditoryneuropathy"
                  label="ブログはこちら"
                />
                <div className="text-sm mt-2 text-gray-500">
                  我が子のリアルを発信中
                </div>
              </div>
            </li>
            <li className="mt-10">
              <div className="text-center">
                <Image
                  src="/qr.webp"
                  width={120}
                  height={120}
                  alt="オープンチャットのQRコード"
                  className="mx-auto"
                />
                <FooterLink
                  href="https://line.me/ti/g2/7xyJbAON6disC96ut2RWPsF_CxeY-gx8iqYffg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
                  label="オープンチャットはこちら"
                />
                <div className="text-sm mt-2 text-gray-500">
                  後迷路性難聴児保護者交流OC
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 text-right">
        <small className="text-gray-400">© 2023 ぼんのー</small>
      </div>
    </footer>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      className="inline-block underline underline-offset-2"
    >
      <div className="text-sm text-gray-500 flex">
        {label}
        <IconExternalLink size={18} stroke={1.5} />
      </div>
    </a>
  );
}
