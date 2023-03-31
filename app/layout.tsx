import "./globals.css";

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
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
