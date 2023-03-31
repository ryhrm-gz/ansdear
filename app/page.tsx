import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="max-w-7xl mx-auto px-4 sm:grid sm:grid-cols-2 mt-12 sm:mt-20">
        <div className="sm:flex sm:flex-col h-full sm:justify-center sm:gap-4 text-center sm:text-left">
          <h2 className="text-2xl font-bold md:text-4xl">
            ANSDを知っていますか？
          </h2>
          <p className="text-gray-500 mt-4 sm:mt-0">
            1996年に提唱された新しい聴覚障害 <br />
            「ANSD」を知っていますか？
            <br />
            ​早期発見が大切です。
            <br /> さあ、ANSDに出会う旅へ。
          </p>
        </div>
        <Image
          src="/mimi.webp"
          alt="耳の画像"
          width={850}
          height={566}
          className="mt-4 sm:mt-0"
        />
      </section>
      <section className="bg-amber-400 mt-12 sm:mt-20 py-10 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:grid sm:grid-cols-2">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold md:text-4xl">
              誤診も多いANSD
              <br />
              ​聴力検査を
              <br />
              正しく知ろう！
            </h2>
          </div>
          <div className="text-center sm:text-right mt-10 sm:my-auto">
            <p>
              「言葉の遅れが気になる」
              <br />
              「二歳を過ぎても話さない」
              <br />
              「新生児スクリーニングは正常だった」
              <br />
              ​もう一度「聴覚」を確認してください
            </p>
          </div>
        </div>
      </section>
      <div className="text-center py-14 md:py-28">
        <Link
          href="/about"
          className="inline-block rounded px-12 py-3 bg-black text-white font-bold"
        >
          ANSDってなに？
        </Link>
      </div>
    </main>
  );
}
