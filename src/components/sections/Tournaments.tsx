import { useEffect, useState } from 'react'
import Project from '../Project/Project'
import { btnStyle } from '../Button/Button'

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
  return out
}

async function fetchTab(gid: string) {
  const res = await fetch(SHEET + gid, { cache: "no-store" })
  if (!res.ok) throw new Error(res.statusText)
  return parseCsv(await res.text())
}

const card = "rounded-xl bg-black/50 backdrop-blur-md p-4 min-w-0 break-words shadow-[0_0_0_1px_oklch(1_0_0/0.06)]"
const chip = "rounded-full px-2.5 py-0.5 text-xs font-medium"
const roleTint: Record<string, string> = {
  Host: "bg-rose-400/15 text-rose-200",
  Admin: "bg-violet-400/15 text-violet-200",
  Spreadsheets: "bg-emerald-400/15 text-emerald-200",
  Pooler: "bg-cyan-400/15 text-cyan-200",
  Playtester: "bg-lime-400/15 text-lime-200",
  Streamer: "bg-fuchsia-400/15 text-fuchsia-200",
  Referee: "bg-blue-400/15 text-blue-200",
}
const badgeChip = "shrink-0 rounded-full bg-amber-400/20 px-2.5 py-0.5 text-xs font-medium text-amber-200"
const link = "underline decoration-white/30 underline-offset-2 hover:decoration-white"

function StaffCard({ item }: { item: Staff }) {
  return (
    <article className={card}>
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-bold min-w-0">
          {item.forum ? <a href={item.forum} target="_blank" rel="noopener noreferrer" className={link}>{item.name}</a> : item.name}
        </h3>
        {item.badge && <span className={badgeChip}>Badge</span>}
      </div>
      <p className="mt-1 text-sm text-white/60">
        {item.sheet ? <a href={item.sheet} target="_blank" rel="noopener noreferrer" className={link}>{item.acronym}</a> : item.acronym}
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

function PlayCard({ item }: { item: Play }) {
  const solo = item.team === "-" || !item.team
  return (
    <article className={card}>
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-bold min-w-0">{item.name}</h3>
        {item.badge && <span className={badgeChip}>Badge</span>}
      </div>
      <p className="mt-1 text-sm text-white/60">
        {[item.acronym, item.year, item.rank, item.format].filter(Boolean).join(" · ")}
      </p>
      <p className="mt-3 text-sm font-medium">{solo ? "Solo" : item.team}</p>
      {!solo && <p className="text-sm text-white/60 whitespace-pre-line">{item.lineup}</p>}
      <ul className="mt-3 flex flex-wrap gap-1.5">
        {[item.seed, item.result].filter(Boolean).map((v) => <li key={v} className={`${chip} bg-white/10`}>{v}</li>)}
      </ul>
      {item.comment && <p className="mt-3 text-sm italic text-white/75">{item.comment}</p>}
    </article>
  )
}

function Tournaments() {
  const [tab, setTab] = useState<Tab>("play")
  const [data, setData] = useState(readCache)
  const [status, setStatus] = useState<"loading" | "error" | "ok">("loading")
  const [syncedAt, setSyncedAt] = useState("")

  const sync = async () => {
    setStatus("loading")
    try {
      const [play, staff] = await Promise.all([fetchTab(PLAY_GID), fetchTab(STAFF_GID)])
      const next = { play: parsePlay(play), staff: parseStaff(staff) }
      setData(next)
      try { localStorage.setItem(CACHE_KEY, JSON.stringify(next)) } catch { void 0 }
      setSyncedAt(new Date().toLocaleTimeString())
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
      <h2 id="tournaments-title" className="text-3xl sm:text-5xl font-bold mb-6 text-center text-balance">
        Tournaments
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
        {tabs.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            aria-pressed={tab === id}
            onClick={() => setTab(id)}
            className={`${btnStyle} aria-pressed:bg-black/70`}
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
          <p aria-live="polite" className="mb-4 min-h-5 text-center text-sm text-white/60">
            {status === "error" && "Couldn't load the sheet."}
            {status === "loading" && !data && <span className="sr-only">Loading from Google Sheets…</span>}
            {status !== "error" && data && `${tab === "play" ? `${data.play.length} played` : `${data.staff.length} staffed`}${status === "ok" ? ` · synced ${syncedAt}` : ""}`}
          </p>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {!data
              ? status === "loading" && Array.from({ length: 6 }, (_, i) => <SkeletonCard key={i} />)
              : tab === "play"
                ? data.play.map((item) => <PlayCard key={`${item.year}-${item.acronym}-${item.name}`} item={item} />)
                : data.staff.map((item) => <StaffCard key={`${item.start}-${item.acronym}-${item.name}`} item={item} />)}
          </div>
        </div>
      )}
    </section>
  )
}

export default Tournaments
