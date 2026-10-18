const links = [
  { id: "home", label: "Home" },
  { id: "wife", label: "Wife" },
  { id: "tournaments", label: "osu! Tournaments", short: "osu!" },
]

function Nav({ active }: { active: string }) {
  return (
    <nav aria-label="Main" className="fixed top-3 right-3 sm:top-5 sm:right-5 z-50 max-w-[calc(100vw-1.5rem)]">
      <ul className="flex gap-1 p-1 rounded-full bg-white/15 backdrop-blur-md shadow-[0_0_0_1px_oklch(1_0_0/0.12)]">
        {links.map(({ id, label, short }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              aria-current={active === id ? "page" : undefined}
              className="block px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wide text-white transition-colors duration-150 ease-out hover:bg-white/15 aria-[current=page]:bg-black/70"
            >
              {short ? (
                <>
                  <span className="sm:hidden">{short}</span>
                  <span className="hidden sm:inline">{label}</span>
                </>
              ) : label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
