import { IconExternalLink } from "@tabler/icons-react";
import { ReactNode } from "react";

export default function Links() {
  return (
    <main>
      <div className="max-w-7xl mx-auto px-4 mt-12 sm:mt-20 mb-20">
        <h2 className="text-2xl font-bold md:text-4xl">お役立ちリンク集</h2>
        <ul className="mt-8 flex flex-col gap-8">
          <li>
            <Title>論文系</Title>
            <ChildList>
              <li>
                <StyledLink href="https://www.jstage.jst.go.jp/article/audiology/57/5/57_649/_pdf">
                  Auditory Neuropathy Spectrum
                  Disorder（ANSD）における時間分解能の側面
                </StyledLink>
              </li>
              <li>
                <StyledLink href="https://www.jstage.jst.go.jp/article/audiology/57/2/57_151/_pdf">
                  片側性 Auditory neuropathy spectrum disorder の 疑われた一例
                </StyledLink>
              </li>
              <li>
                <StyledLink href="https://mhlw-grants.niph.go.jp/project/25054">
                  新生児聴覚スクリーニングにおけるAuditory Neuropathy Spectrum
                  Disorders症例の長期追跡研究
                </StyledLink>
              </li>
              <li>
                <StyledLink href="https://kidshealth.org/en/parents/ansd.html">
                  Auditory Neuropathy Spectrum Disorder (ANSD)
                </StyledLink>
              </li>
              <li>
                <StyledLink href="https://kaken.nii.ac.jp/ja/grant/KAKENHI-PROJECT-19K09865/">
                  新規ANSD原因遺伝子の探索と臨床的特徴の解明に関する研究
                </StyledLink>
              </li>
              <li>
                <StyledLink href="https://www.jstage.jst.go.jp/article/audiology/63/5/63_421/_pdf">
                  小児 Auditory neuropathy spectrum
                  disorder（ANSD）例の人工内耳術後成績
                </StyledLink>
              </li>
              <li>
                <StyledLink href="https://www.jstage.jst.go.jp/article/audiology/54/4/54_4_289/_pdf">
                  OTOF 遺伝子変異を認める Auditory neuropathy spectrum disorder
                  の 乳幼児例における人工内耳装用効果
                </StyledLink>
              </li>
              <li>
                <StyledLink href="https://www.nanbyou.or.jp/wp-content/uploads/kenkyuhan_pdf2014/gaiyo016.pdf">
                  耳鼻科疾患分野 Auditory
                  Neuropathy（オーディトリー・ニューロパシー）
                </StyledLink>
              </li>
            </ChildList>
          </li>
          <li>
            <Title>人工内耳について</Title>
            <ChildList>
              <li>
                <StyledLink href="https://www.jibika.or.jp/modules/hearingloss/index.php?content_id=3">
                  人工内耳について
                </StyledLink>
              </li>
              <li>
                <StyledLink href="https://www.cochlear.com/jp/ja/campaign/nancho/cochlear-implants">
                  人工内耳について（メーカー）
                </StyledLink>
              </li>
            </ChildList>
          </li>
          <li>
            <Title>その他サポートサービス</Title>
            <ChildList>
              <li>
                <StyledLink href="https://nannchou.net/">デフサポ</StyledLink>
              </li>
            </ChildList>
          </li>
          <li>
            <Title>メディア</Title>
            <ChildList>
              <li>
                <StyledLink href="https://www3.nhk.or.jp/news/html/20211018/k10013311501000.html">
                  見つけられなかった難聴 7年半の孤独
                </StyledLink>
              </li>
              <li>
                <StyledLink href="https://www.nhk.or.jp/shutoken/wr/20210513.html">
                  難聴の娘にことばをたくさん覚えてほしい 父親が作ったアプリとは
                </StyledLink>
              </li>
            </ChildList>
          </li>
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
