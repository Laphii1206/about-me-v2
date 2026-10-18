import { useEffect, useState, type CSSProperties } from 'react'
import Project from '../Project/Project'
import { btnStyle } from '../Button/Button'
import { FiArrowUpRight, FiAward } from 'react-icons/fi'

const SHEET = "https://docs.google.com/spreadsheets/d/1dCUqfqQC7rHrAj6Tg9IQXhuwJd_hIWo1mj7pRJ0q1OE/export?format=csv&gid="
const PLAY_GID = "1101075790"
const STAFF_GID = "1302328235"
const ROLES = ["Host", "Admin", "Spreadsheets", "Pooler", "Playtester", "Streamer", "Referee"]

type Staff = {
  name: string
  acronym: string
  start: string
  end: string
  forum: string
  sheet: string
  badge: boolean
  roles: string[]
}

type Play = {
  year: string
  acronym: string
  name: string
  rank: string
  format: string
  badge: boolean
  team: string
  lineup: string
  seed: string
  result: string
  comment: string
}

type Tab = "play" | "staff" | "banner"

function parseCsv(text: string) {
  const rows: string[][] = []
  let row: string[] = []
  let cell = ""
  let quoted = false
  for (let i = 0; i < text.length; i++) {
    const c = text[i]
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') { cell += '"'; i++ }
      else if (c === '"') quoted = false
      else cell += c
    } else if (c === '"') quoted = true
    else if (c === ",") { row.push(cell); cell = "" }
    else if (c === "\n") { row.push(cell); rows.push(row); row = []; cell = "" }
    else if (c !== "\r") cell += c
  }
  row.push(cell)
  rows.push(row)
  return rows
}

function parseStaff(rows: string[][]): Staff[] {
  return rows.slice(1).filter((r) => r[2]?.trim()).map((r) => ({
    start: r[0],
    end: r[1],
    name: r[2].trim(),
    acronym: r[3],
    forum: r[4],
    sheet: r[5],
    badge: r[7] === "TRUE",
    roles: ROLES.filter((_, i) => r[8 + i] === "TRUE"),
  }))
}

function parsePlay(rows: string[][]): Play[] {
  const out: Play[] = []
  let year = ""
  rows.forEach((r, i) => {
    if (/^\d{4}$/.test(r[1]) && !r[3]) year = r[1]
    else if (r[1]?.trim() && r[3]?.trim()) {
      const next = rows[i + 1] ?? []
      out.push({
        year,
        acronym: r[1].trim(),
        name: r[3].trim(),
        rank: r[4],
        format: [r[5], next[5]].filter(Boolean).join(" · "),
        badge: r[6] === "Yes",
        team: r[8]?.trim() ?? "",
        lineup: r[9]?.trim() ?? "",
        seed: r[10] ?? "",
        result: next[10] ?? "",
        comment: r[11]?.trim() ?? "",
      })
    }
  })
  return out.reverse()
}

async function fetchTab(gid: string) {
  const res = await fetch(SHEET + gid, { cache: "no-store" })
  if (!res.ok) throw new Error(res.statusText)
  return parseCsv(await res.text())
}

const card = "rounded-xl bg-black/65 backdrop-blur-md p-4 min-w-0 break-words shadow-[0_0_0_1px_oklch(1_0_0/0.08)]"
const chip = "rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset"
const roleTint: Record<string, string> = {
  Host: "bg-rose-400/15 text-rose-200 ring-rose-400/30",
  Admin: "bg-violet-400/15 text-violet-200 ring-violet-400/30",
  Spreadsheets: "bg-emerald-400/15 text-emerald-200 ring-emerald-400/30",
  Pooler: "bg-cyan-400/15 text-cyan-200 ring-cyan-400/30",
  Playtester: "bg-lime-400/15 text-lime-200 ring-lime-400/30",
  Streamer: "bg-fuchsia-400/15 text-fuchsia-200 ring-fuchsia-400/30",
  Referee: "bg-blue-400/15 text-blue-200 ring-blue-400/30",
}
const badgeChip = "shrink-0 inline-flex items-center gap-1 rounded-full bg-amber-400/20 px-2.5 py-0.5 text-xs font-medium text-amber-200 ring-1 ring-inset ring-amber-400/40"
const link = "underline decoration-white/30 underline-offset-2 hover:decoration-white focus-visible:outline-2 focus-visible:outline-white rounded-sm"
const enter = "hero-enter transition-transform duration-150 ease-out motion-safe:hover:-translate-y-0.5"
const delay = (i: number) => ({ "--delay": `${Math.min(i, 6) * 50}ms` }) as CSSProperties

function ExtLink({ href, children }: { href: string; children: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={link}>
      {children}
      <FiArrowUpRight aria-hidden="true" className="ml-0.5 inline align-[-0.1em] text-[0.85em] opacity-60" />
    </a>
  )
}

function Badge() {
  return <span className={badgeChip}><FiAward aria-hidden="true" />Badge</span>
}

function groupByYear<T>(items: T[], year: (item: T) => string) {
  const groups = new Map<string, T[]>()
  for (const item of items) groups.set(year(item), [...groups.get(year(item)) ?? [], item])
  return [...groups]
}

function StaffCard({ item, i }: { item: Staff; i: number }) {
  return (
    <article className={`${card} ${enter}`} style={delay(i)}>
      <div className="flex items-start justify-between gap-2">
        <h4 className="font-bold min-w-0">
          {item.forum ? <ExtLink href={item.forum}>{item.name}</ExtLink> : item.name}
        </h4>
        {item.badge && <Badge />}
      </div>
      <p className="mt-1 text-sm text-white/70">
        {item.sheet ? <ExtLink href={item.sheet}>{item.acronym}</ExtLink> : item.acronym}
        {" · "}{item.start} – {item.end}
      </p>
      <ul className="mt-3 flex flex-wrap gap-1.5">
        {item.roles.map((role) => <li key={role} className={`${chip} ${roleTint[role]}`}>{role}</li>)}
      </ul>
    </article>
  )
}

function SkeletonCard() {
  return (
    <div className={`${card} animate-pulse`} aria-hidden="true">
      <div className="h-5 w-2/3 rounded bg-white/15" />
      <div className="mt-2 h-3.5 w-1/2 rounded bg-white/10" />
      <div className="mt-4 h-3.5 w-1/3 rounded bg-white/10" />
      <div className="mt-3 flex gap-1.5">
        <div className="h-5 w-14 rounded-full bg-white/10" />
        <div className="h-5 w-16 rounded-full bg-white/10" />
      </div>
    </div>
  )
}

const CACHE_KEY = "tournaments"

function readCache(): { play: Play[]; staff: Staff[] } | null {
  try {
    return JSON.parse(localStorage.getItem(CACHE_KEY) ?? "null")
  } catch {
    return null
  }
}

function tagTone(v: string) {
  if (/elim|dnq|did not qualify/i.test(v)) return "bg-red-400/10 text-red-200 ring-red-400/30"
  if (/seed/i.test(v)) return "bg-sky-400/10 text-sky-200 ring-sky-400/25"
  return "bg-white/10 text-white/90 ring-white/15"
}

function PlayCard({ item, i }: { item: Play; i: number }) {
  const solo = item.team === "-" || !item.team
  return (
    <article style={delay(i)} className={`flex flex-col justify-between gap-3 rounded-xl border border-white/10 bg-neutral-900/80 backdrop-blur-md p-4 min-w-0 break-words ${enter}`}>
      <div>
        <div className="flex items-start justify-between gap-2">
          <h4 className="font-bold min-w-0">{item.name}</h4>
          {item.badge && <Badge />}
        </div>
        <p className="mt-1 text-sm text-gray-400">
          {[item.acronym, item.rank, item.format].filter(Boolean).join(" · ")}
        </p>
        <p className="mt-3 text-sm font-bold text-white">{solo ? "Solo" : item.team}</p>
        {!solo && <p className="mt-0.5 text-xs leading-relaxed text-neutral-300 whitespace-pre-line">{item.lineup}</p>}
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {[item.seed, item.result].filter(Boolean).map((v) => <li key={v} className={`${chip} ${tagTone(v)}`}>{v}</li>)}
        </ul>
      </div>
      {item.comment && (
        <p className="rounded-r-md border-l-2 border-yellow-500 bg-white/5 px-3 py-2 text-sm italic text-white/80">
          {item.comment}
        </p>
      )}
    </article>
  )
}

function Tournaments() {
  const [tab, setTab] = useState<Tab>("play")
  const [data, setData] = useState(readCache)
  const [status, setStatus] = useState<"loading" | "error" | "ok">("loading")
  const [roles, setRoles] = useState<string[]>([])

  const toggleRole = (role: string) =>
    setRoles((r) => r.includes(role) ? r.filter((x) => x !== role) : [...r, role])

  const staff = data?.staff.filter((s) => !roles.length || s.roles.some((r) => roles.includes(r))) ?? []
  const groups = !data ? [] : tab === "play"
    ? groupByYear(data.play, (p) => p.year).map(([y, items]) => [y, items.map((item, i) =>
        <PlayCard key={`${item.year}-${item.acronym}-${item.name}`} item={item} i={i} />)] as const)
    : groupByYear(staff, (s) => s.start.match(/\d{4}/)?.[0] ?? "").map(([y, items]) => [y, items.map((item, i) =>
        <StaffCard key={`${item.start}-${item.acronym}-${item.name}`} item={item} i={i} />)] as const)

  const sync = async () => {
    setStatus("loading")
    try {
      const [play, staff] = await Promise.all([fetchTab(PLAY_GID), fetchTab(STAFF_GID)])
      const next = { play: parsePlay(play), staff: parseStaff(staff) }
      setData(next)
      try { localStorage.setItem(CACHE_KEY, JSON.stringify(next)) } catch { void 0 }
      setStatus("ok")
    } catch {
      setStatus("error")
    }
  }

  useEffect(() => { sync() }, [])

  const tabs: { id: Tab; label: string }[] = [
    { id: "play", label: "Participate" },
    { id: "staff", label: "Staff" },
    { id: "banner", label: "Banner" },
  ]

  return (
    <section id="tournaments" aria-labelledby="tournaments-title"
      className="bg-black/80 px-4 pt-20 pb-10 sm:px-10 flex-1 text-white">
      <h2 id="tournaments-title" className="hero-enter text-3xl sm:text-5xl font-bold mb-6 text-center text-balance">
        Tournaments
      </h2>

      <div className="hero-enter flex flex-wrap items-center justify-center gap-2 mb-6" style={delay(2)}>
        {tabs.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            aria-pressed={tab === id}
            onClick={() => setTab(id)}
            className={`${btnStyle} aria-pressed:bg-white aria-pressed:text-black aria-pressed:hover:bg-white`}
          >
            {label}
          </button>
        ))}
        {import.meta.env.DEV && (
          <button type="button" onClick={sync} disabled={status === "loading"} className={`${btnStyle} disabled:opacity-50`}>
            {status === "loading" ? "Syncing…" : "Sync"}
          </button>
        )}
      </div>

      {tab === "banner" ? <Project /> : (
        <div className="max-w-6xl mx-auto">
          {tab === "staff" && data && (
            <div role="group" aria-label="Filter by role" className="mb-4 flex flex-wrap items-center justify-center gap-1.5">
              {ROLES.map((role) => (
                <button
                  key={role}
                  type="button"
                  aria-pressed={roles.includes(role)}
                  onClick={() => toggleRole(role)}
                  className={`${chip} py-1 transition-colors ${roles.includes(role) ? roleTint[role] : "bg-white/5 text-white/70 ring-white/15 hover:bg-white/10 hover:text-white"}`}
                >
                  {role}
                </button>
              ))}
              {roles.length > 0 && (
                <button type="button" onClick={() => setRoles([])} className="px-2 py-1 text-xs text-white/70 underline underline-offset-2 hover:text-white">
                  Clear
                </button>
              )}
            </div>
          )}
          <p aria-live="polite" className="mb-4 min-h-5 text-center text-sm text-white/70">
            {status === "error" && "Couldn't load the sheet."}
            {status === "loading" && !data && <span className="sr-only">Loading from Google Sheets…</span>}
            {status !== "error" && data && (tab === "play"
              ? `${data.play.length} played`
              : roles.length ? `${staff.length} of ${data.staff.length} staffed` : `${data.staff.length} staffed`)}
          </p>
          {!data ? (
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {status === "loading" && Array.from({ length: 6 }, (_, i) => <SkeletonCard key={i} />)}
            </div>
          ) : groups.map(([year, cards]) => (
            <section key={year} aria-labelledby={`${tab}-${year}`} className="mt-8 first-of-type:mt-0">
              <h3 id={`${tab}-${year}`} className="hero-enter mb-3 flex items-center gap-3 text-sm font-semibold tracking-wider text-white/80 after:h-px after:flex-1 after:bg-white/15">
                {year || "Other"}
              </h3>
              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">{cards}</div>
            </section>
          ))}
        </div>
      )}
    </section>
  )
}

export default Tournaments
