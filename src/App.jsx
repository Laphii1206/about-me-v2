import './App.css'
import cover from '/cover.jpg'

import Wife from './assets/sections/Wife.jsx'
import Heading from './assets/sections/Heading.jsx'
import OsuCommunity from './assets/sections/osucommunity.jsx'
import Footer from './assets/sections/Footer.jsx'

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${cover})` }}
    >
      <Heading />
      <Wife />
      <OsuCommunity />
      <Footer />

    </div>


  )
}

export default App