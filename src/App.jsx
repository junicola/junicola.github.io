import React, { useState } from 'react'
import { data } from './data/content'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

export default function App() {
  const [lang, setLang] = useState('pt')
  const t = data[lang]

  const toggleLang = () => setLang((l) => (l === 'pt' ? 'en' : 'pt'))

  return (
    <>
      <Navbar nav={t.nav} lang={lang} onToggleLang={toggleLang} />
      <main>
        <Hero hero={t.hero} />
      </main>
    </>
  )
}
