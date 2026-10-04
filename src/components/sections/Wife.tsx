import { btnStyle } from '../Button/Button'

const stats: { label: string; value: string; lang?: string; wide?: boolean }[] = [
  { label: "Height", value: "150cm" },
  { label: "Weight", value: "41kg" },
  { label: "Birthday", value: "8 December" },
  { label: "Personality", value: "Cheerful, Sweets Lover" },
  { label: "Affiliation", value: "香々見学園本校1年1組", lang: "ja", wide: true },
  { label: "Favourite", value: "Alice in Wonderland, Mystery Novel" },
  { label: "Dislike", value: "Loud Noise (Thunder etc.)" },
];

function Wife() {
  return (
    <section
      id="wife"
      aria-labelledby="wife-title"
      className="bg-black/80 flex items-center justify-center px-4 py-16 sm:p-10 min-h-screen snap-start text-white"
    >
      <article className="w-full max-w-5xl grid gap-6 md:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] md:items-center p-4 sm:p-6 rounded-[28px] sm:rounded-[36px] bg-black/50 backdrop-blur-xl shadow-[0_0_0_1px_oklch(1_0_0/0.08),0_24px_48px_-12px_oklch(0_0_0/0.6)]">
        <img
          src="/Arisu.jpg"
          alt="My Wife"
          loading="lazy"
          width={508}
          height={550}
          className="w-full max-w-sm mx-auto md:max-w-none aspect-[508/550] object-cover rounded-xl shadow-xl shadow-black/40 outline outline-1 -outline-offset-1 outline-white/10"
        />

        <div className="flex flex-col gap-6 min-w-0">
          <h2 id="wife-title" className="text-3xl sm:text-5xl font-bold text-balance">
            My Wife!
          </h2>

          <p lang="ja" className="text-base sm:text-lg leading-[1.8] text-white/75">
            {"天然でお日様のように明るく、周囲から好かれる生まれながらのお嬢様。" +
              "飾らない人柄が男女ともに人気で、学園のアイドル的な存在になっている。" +
              "特定の恋人を作る気はないようだが、" +
              "お人好しで告白を断るのにいつも苦労しているらしい。"}
          </p>

          <dl className="grid grid-cols-2 gap-3">
            {stats.map(({ label, value, lang, wide }) => (
              <div
                key={label}
                className={`rounded-xl bg-white/5 p-3 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] ${wide ? "col-span-2" : ""}`}
              >
                <dt className="text-xs font-medium uppercase tracking-wider text-white/60">{label}</dt>
                <dd lang={lang} className="mt-1 font-medium">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://vndb.org/c77134?view=0S-rr2moiyj"
              className={btnStyle}
              target="_blank"
              rel="noopener noreferrer"
            >
              VNDB
            </a>
            <a
              href="https://circus-co.jp/product/dc4ph/character/arisu/"
              className={btnStyle}
              target="_blank"
              rel="noopener noreferrer"
            >
              Official Website
            </a>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Wife
