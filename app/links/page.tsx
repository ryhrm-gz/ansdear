import { IconExternalLink } from "@tabler/icons-react";
import { ReactNode } from "react";

const links: {
  title: string;
  childLinks: {
    href: string;
    label: string;
  }[];
}[] = [
  {
    title: "論文系",
    childLinks: [
      {
        href: "https://www.jstage.jst.go.jp/article/audiology/57/5/57_649/_pdf",
        label:
          "Auditory Neuropathy Spectrum Disorder（ANSD）における時間分解能の側面",
      },
      {
        href: "https://www.jstage.jst.go.jp/article/audiology/57/2/57_151/_pdf",
        label: "片側性 Auditory neuropathy spectrum disorder の 疑われた一例",
      },
      {
        href: "https://mhlw-grants.niph.go.jp/project/25054",
        label:
          "新生児聴覚スクリーニングにおけるAuditory Neuropathy Spectrum Disorders症例の長期追跡研究",
      },
      {
        href: "https://kidshealth.org/en/parents/ansd.html",
        label: "Auditory Neuropathy Spectrum Disorder (ANSD)",
      },
      {
        href: "https://kaken.nii.ac.jp/ja/grant/KAKENHI-PROJECT-19K09865/",
        label: "新規ANSD原因遺伝子の探索と臨床的特徴の解明に関する研究",
      },
      {
        href: "https://www.jstage.jst.go.jp/article/audiology/63/5/63_421/_pdf",
        label:
          "小児 Auditory neuropathy spectrum disorder（ANSD）例の人工内耳術後成績",
      },
      {
        href: "https://www.jstage.jst.go.jp/article/audiology/54/4/54_4_289/_pdf",
        label:
          "OTOF 遺伝子変異を認める Auditory neuropathy spectrum disorder の 乳幼児例における人工内耳装用効果",
      },
      {
        href: "https://www.nanbyou.or.jp/wp-content/uploads/kenkyuhan_pdf2014/gaiyo016.pdf",
        label:
          "耳鼻科疾患分野 Auditory Neuropathy（オーディトリー・ニューロパシー）",
      },
    ],
  },
  {
    title: "人工内耳について",
    childLinks: [
      {
        href: "https://www.jibika.or.jp/modules/hearingloss/index.php?content_id=3",
        label: "人工内耳について",
      },
      {
        href: "https://www.cochlear.com/jp/ja/campaign/nancho/cochlear-implants",
        label: "人工内耳について（メーカー）",
      },
    ],
  },
  {
    title: "その他サポートサービス",
    childLinks: [
      {
        href: "https://nannchou.net/",
        label: "デフサポ",
      },
    ],
  },
  {
    title: "メディア",
    childLinks: [
      {
        href: "https://www3.nhk.or.jp/news/html/20211018/k10013311501000.html",
        label: "見つけられなかった難聴 7年半の孤独",
      },
      {
        href: "https://www.nhk.or.jp/shutoken/wr/20210513.html",
        label: "難聴の娘にことばをたくさん覚えてほしい 父親が作ったアプリとは",
      },
    ],
  },
];

export default function Links() {
  return (
    <main>
      <div className="max-w-7xl mx-auto px-4 mt-12 sm:mt-20 mb-20">
        <h2 className="text-2xl font-bold md:text-4xl">お役立ちリンク集</h2>
        <ul className="mt-8 flex flex-col gap-8">
          {links.map(({ title, childLinks }) => (
            <li key={title}>
              <Title>{title}</Title>
              <ChildList>
                {childLinks.map(({ href, label }) => (
                  <li key={label}>
                    <StyledLink href={href}>{label}</StyledLink>
                  </li>
                ))}
              </ChildList>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

function Title({ children }: { children: ReactNode }) {
  return <div className="font-bold text-xl">{children}</div>;
}

function ChildList({ children }: { children: ReactNode }) {
  return <ul className="ml-4 mt-4 flex flex-col gap-3">{children}</ul>;
}

function StyledLink({ children, href }: { children: ReactNode; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      className="inline-block underline underline-offset-2"
    >
      <div className="text-sm">
        {children}
        <IconExternalLink size={18} stroke={1.5} className="inline" />
      </div>
    </a>
  );
}
