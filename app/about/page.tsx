import { IconAlertCircle, IconComet } from "@tabler/icons-react";
import { ReactNode } from "react";

const getIconColor = (color: string) => {
  switch (color) {
    case "yellow":
      return "rgb(133 77 14)";
    case "green":
      return "rgb(22 101 52)";
  }
};

export default function About() {
  return (
    <main>
      <section className="max-w-7xl mx-auto px-4 mt-12 sm:mt-20 mb-20">
        <h2 className="text-2xl font-bold md:text-4xl">ANSDってなに？</h2>
        <p className="mt-8">
          <span className="font-bold bg-amber-400">
            ANSD(Auditory Neuropathy Spectrum Disorder)
          </span>
          は、
          日本語では「後迷路性難聴」や「オーディトリー・ニューロパチー」と呼ばれています。
          <br />
          略して「AN」と呼ぶ場合もあります。
          ​一般的な難聴との違いを知りましょう。
        </p>
        <div className="mt-12">
          <Message
            color="yellow"
            title="検査方法に注意"
            icon={
              <IconAlertCircle
                stroke={1.5}
                size={28}
                color={getIconColor("yellow")}
              />
            }
          >
            <div className="leading-6 text-sm">
              ANSDは新生児スクリーニングで発見できないことが多いです。検査方法に注意してください。
            </div>
          </Message>
        </div>
        <h3 className="text-xl font-bold md:text-2xl mt-12">一般的な難聴</h3>
        <p className="mt-8 leading-7">
          一般に知られる難聴には、大きく分けて外耳性の難聴と内耳性の難聴があります。
          <br />
          <br />
          耳の外から鼓膜までの「音を伝える部分」にエラーが起こる
          <span className="font-bold">「伝音性難聴」</span>。
          <br />
          伝音性難聴は、鼓膜まで届く音の大きさが小さかったりすることにより聞き取りづらさが生まれます。
          <br />
          補聴器などで音を増幅し補助することで聞こえが良くなる場合があります。
          <br />
          <br />
          さらに、音の伝わった先、鼓膜よりも内側で「音を感じる部分」にエラーが起こる
          <span className="font-bold">「感音性難聴」</span>。
          <br />
          感音性難聴の場合は、人工内耳などを装填し、内側のエラーが起きている部分の処理を補助することで聞こえが良くなる場合があります。
          <br />
          <br />
          <span className="font-bold bg-amber-400">
            一般的な難聴に共通するのは「音が聞こえない・聞こえづらい」ということです。
          </span>
          <br />
          ​みなさんの想像する「聴覚障害・聾」も「聞こえない」ではないでしょうか？
        </p>
        <h3 className="text-xl font-bold md:text-2xl mt-12">
          ANSD（後迷路性難聴）
        </h3>
        <p className="mt-8 leading-7">
          ANSDは長らく感音性難聴と同じ分類でした。
          <br />
          <br />
          エラーが起こる部分は、内耳またはさらに奥の聴神経。
          確かに見た目は一般の感音性難聴と似ています。
          <br />
          一番違う点は簡単に言えば
          <span className="font-bold">「音が聞こえている」</span>ことです。
          <br />
          近年、新生児期に新生児スクリーニングを受けることが推奨または義務化された自治体が増えてきました。
          <br />
          <br />
          その新生児スクリーニングには大きく分けて二つの種類があります。
          <br />
          鼓膜の反響を見ることで音が聞こえているか判別する
          <span className="font-bold">「OAE 」</span>
          、脳幹の反応までを見る<span className="font-bold">「ABR」</span>。
          <br />
          <br />
          ANSDは検査がOAEだった場合にパス、つまり
          <span className="font-bold">「聞こえている」</span>と判定されます。
          <br />
          ABRで検査をするとより深い脳の神経部分では音に反応していないことが特徴です。
          <br />
          <span className="font-bold bg-amber-400">
            ​OAE＋（正常、パス）・ABR
            -（異常、リファー）の初見を持つ聴覚障害のことをANSDと言います。
          </span>
        </p>
        <div className="mt-12">
          <Message
            title="ANSDについてのパンフレット"
            icon={
              <IconComet stroke={1.5} size={28} color={getIconColor("green")} />
            }
            color="green"
          >
            <div className="leading-6 text-sm">
              ANSD周知のためのパンフレットができました！
            </div>
            <a
              href="/pamphlet.pdf"
              target="_blank"
              className="inline-block rounded px-6 text-sm py-3 bg-black text-white mt-3 font-bold"
            >
              ダウンロードはこちら
            </a>
          </Message>
        </div>
      </section>
    </main>
  );
}

function Message({
  color,
  title,
  icon,
  children,
}: {
  color: "yellow" | "green";
  title: string;
  icon: JSX.Element;
  children?: ReactNode;
}) {
  const borderColor = (() => {
    switch (color) {
      case "yellow":
        return "border-yellow-300";
      case "green":
        return "border-green-300";
    }
  })();

  const bgColor = (() => {
    switch (color) {
      case "yellow":
        return "bg-yellow-100";
      case "green":
        return "bg-green-100";
    }
  })();

  const textColor = (() => {
    switch (color) {
      case "yellow":
        return "text-yellow-800";
      case "green":
        return "text-green-800";
    }
  })();

  return (
    <div
      className={`border-2 ${borderColor} rounded inline-block p-4 ${bgColor} w-full max-w-lg`}
    >
      <div className="flex gap-4">
        <div>{icon}</div>
        <div>
          <div className={`text-lg font-bold ${textColor}`}>{title}</div>
          {children && <div className="mt-3">{children}</div>}
        </div>
      </div>
    </div>
  );
}
