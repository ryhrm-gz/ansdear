import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const noto_sans_jp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  display: "swap",
  weight: ["400", "700"],
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
      </body>
    </html>
  );
}

function Header() {
  return (
    <header>
      <h1>ANSDear!</h1>
    </header>
  );
}
