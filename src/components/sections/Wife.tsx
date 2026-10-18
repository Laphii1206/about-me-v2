import { useEffect, useRef, type CSSProperties } from 'react'

const stats: { label: string; value: string; lang?: string; wide?: boolean }[] = [
  { label: "Height", value: "150cm" },
  { label: "Weight", value: "41kg" },
  { label: "Birthday", value: "8 December" },
  { label: "Personality", value: "Cheerful, Sweets Lover" },
  { label: "Affiliation", value: "香々見学園本校1年1組", lang: "ja", wide: true },
  { label: "Favourite", value: "Alice in Wonderland, Mystery Novel" },
  { label: "Dislike", value: "Loud Noise (Thunder etc.)" },
];

const linkStyle = "inline-flex items-center justify-center px-4 py-2 rounded-full border border-white/10 bg-neutral-800 hover:bg-neutral-700 text-sm font-medium text-white transition-colors duration-150 ease-out active:scale-[0.96]"

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties

function Wife() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      el.dataset.inview = ""
      observer.disconnect()
    }, { threshold: 0.2 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      data-reveal
      id="wife"
      aria-labelledby="wife-title"
      className="bg-black/80 flex items-center justify-center px-4 pt-16 pb-6 sm:px-10 flex-1 text-white"
    >
      <article className="enter-card glow relative w-full max-w-4xl grid gap-6 md:grid-cols-[18rem_minmax(0,1fr)] md:items-center p-4 sm:p-6 rounded-2xl bg-neutral-900/90 backdrop-blur-md border border-white/10 shadow-[0_24px_48px_-12px_oklch(0_0_0/0.6)]">
        <img
          src="/Arisu.jpg"
          alt="Sagisawa Arisu"
          loading="lazy"
          width={508}
          height={550}
          style={delay(80)}
          className="enter-pop w-full max-w-sm mx-auto md:w-72 aspect-[508/550] object-cover rounded-xl shadow-xl shadow-black/40 outline outline-1 -outline-offset-1 outline-white/10"
        />

        <div className="flex flex-col gap-6 min-w-0">
          <div className="enter" style={delay(160)}>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <h2 id="wife-title" className="text-2xl font-bold text-white text-balance">Sagisawa Arisu</h2>
              <span className="bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 text-xs px-2.5 py-0.5 rounded-full">My Wife!</span>
            </div>
            <p lang="ja" className="mt-1 text-sm text-neutral-400">鷺沢 有里栖</p>
          </div>

          <p lang="ja" className="enter text-neutral-300 text-sm leading-relaxed" style={delay(220)}>
            {"天然でお日様のように明るく、周囲から好かれる生まれながらのお嬢様。" +
              "飾らない人柄が男女ともに人気で、学園のアイドル的な存在になっている。" +
              "特定の恋人を作る気はないようだが、" +
              "お人好しで告白を断るのにいつも苦労しているらしい。"}
          </p>

          <dl className="grid grid-cols-2 gap-3">
            {stats.map(({ label, value, lang, wide }, i) => (
              <div
                key={label}
                style={delay(280 + i * 40)}
                className={`enter relative rounded-xl bg-white/5 p-3 shadow-[0_0_0_1px_oklch(1_0_0/0.06)] transition-transform duration-150 ease-out hover:-translate-y-0.5 after:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:shadow-[0_0_0_1px_oklch(1_0_0/0.18)] after:opacity-0 after:transition-opacity after:duration-150 after:ease-out hover:after:opacity-100 ${wide ? "col-span-2" : ""}`}
              >
                <dt className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">{label}</dt>
                <dd lang={lang} className="mt-1 text-sm font-medium">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="enter flex flex-wrap gap-3" style={delay(560)}>
            <a
              href="https://vndb.org/c77134?view=0S-rr2moiyj"
              className={linkStyle}
              target="_blank"
              rel="noopener noreferrer"
            >
              VNDB
            </a>
            <a
              href="https://circus-co.jp/product/dc4ph/character/arisu/"
              className={linkStyle}
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
