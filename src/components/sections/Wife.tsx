import { useEffect, useRef } from 'react'
import { FiExternalLink } from 'react-icons/fi'
import { GiDiamondRing } from 'react-icons/gi'
import { btnStyle } from '../Button/Button'
import { delay } from '../delay'

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
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      el.dataset.inview = ""
      observer.disconnect()
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      data-reveal
      id="wife"
      aria-labelledby="wife-title"
      className="bg-ink/80 flex items-center justify-center px-4 pt-20 pb-6 sm:px-10 flex-1 text-white"
    >
      <article className="enter-card glow relative w-full max-w-4xl grid gap-6 md:grid-cols-[18rem_minmax(0,1fr)] p-4 sm:p-6 rounded-2xl bg-surface/90 border border-white/10 shadow-[0_24px_48px_-12px_oklch(0_0_0/0.6)]">
        <div
          style={delay(80)}
          className="enter-pop flex flex-col gap-3 w-full max-w-sm mx-auto md:max-w-none p-3 rounded-xl border border-white/10 bg-linear-to-b from-sky/15 via-transparent to-ruby/15"
        >
          <img
            src="/arisu1.webp"
            alt="Sagisawa Arisu"
            width={800}
            height={750}
            className="w-full aspect-[16/15] md:aspect-auto md:h-0 md:grow md:basis-0 object-cover rounded-lg shadow-xl shadow-black/40"
          />
          <img
            src="/arisu2.webp"
            alt="Sagisawa Arisu smiling, close-up"
            width={800}
            height={750}
            className="w-full aspect-[16/15] md:aspect-auto md:h-0 md:grow md:basis-0 object-cover rounded-lg shadow-xl shadow-black/40"
          />
          <p className="flex items-center justify-center gap-2 rounded-lg bg-black/40 py-1.5 text-xs text-silver">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-mint" />
            Main Heroine
          </p>
        </div>

        <div className="flex flex-col gap-4 min-w-0">
          <div className="enter" style={delay(160)}>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <h1 id="wife-title" className="text-2xl sm:text-3xl font-bold text-white text-balance">Sagisawa Arisu</h1>
              <span className="inline-flex items-center gap-1 bg-bow/20 text-bow border border-bow/30 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                <GiDiamondRing aria-hidden="true" />
                My Wife!
              </span>
            </div>
            <p lang="ja" className="mt-1 text-sm text-silver">鷺沢 有里栖</p>
          </div>

          <p lang="ja" className="enter rounded-xl border border-white/10 bg-white/5 p-4 text-silver text-sm leading-relaxed" style={delay(220)}>
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
                className={`enter relative rounded-xl border border-white/10 bg-white/5 p-3 transition-transform duration-150 ease-out motion-safe:hover:-translate-y-0.5 after:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:shadow-[0_0_0_1px_oklch(1_0_0/0.18)] after:opacity-0 after:transition-opacity after:duration-150 after:ease-out hover:after:opacity-100 ${wide ? "col-span-2" : ""}`}
              >
                <dt className="text-xs font-bold text-silver uppercase tracking-wider">{label}</dt>
                <dd lang={lang} className="mt-1 text-sm font-semibold">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="enter flex flex-wrap gap-3" style={delay(560)}>
            <a
              href="https://vndb.org/c77134?view=0S-rr2moiyj"
              className={`${btnStyle} gap-2`}
              target="_blank"
              rel="noopener noreferrer"
            >
              VNDB
              <FiExternalLink aria-hidden="true" />
            </a>
            <a
              href="https://circus-co.jp/product/dc4ph/character/arisu/"
              className={`${btnStyle} gap-2`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Official Website
              <FiExternalLink aria-hidden="true" />
            </a>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Wife
