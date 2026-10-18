import { useEffect, useState } from 'react'
import './App.css'

import Nav from './components/Nav'
import Wife from './components/sections/Wife'
import Heading from './components/sections/Heading'
import Tournaments from './components/sections/Tournaments'
import Footer from './components/sections/Footer'

const pages = { home: Heading, wife: Wife, tournaments: Tournaments }
type Page = keyof typeof pages

const currentPage = (): Page => {
  const hash = location.hash.slice(1)
  return Object.hasOwn(pages, hash) ? hash as Page : "home"
}

function App() {
  const [page, setPage] = useState(currentPage)

  useEffect(() => {
    const onHashChange = () => {
      setPage(currentPage())
      window.scrollTo(0, 0)
    }
    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  const Current = pages[page]

  return (
    <div className="min-h-dvh flex flex-col">
      <Nav active={page} />
      <Current />
      <Footer />
    </div>
  )
}

export default App