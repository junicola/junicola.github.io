import React, { useState } from 'react'
import { data } from './data/content'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stack from './components/Stack'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [lang, setLang] = useState('en')
  const t = data[lang]

  const toggleLang = () => setLang((l) => (l === 'pt' ? 'en' : 'pt'))

  return (
    <>
      <Navbar nav={t.nav} lang={lang} onToggleLang={toggleLang} />
      <main style={{ overflow: 'hidden' }}>
        <Hero hero={t.hero} />
        <About about={t.about} />
        <Stack stack={t.stack} />
        <Projects projects={t.projects} />
        <Experience experience={t.experience} />
        <Contact contact={t.contact} />
      </main>
      <Footer text={t.footer} />
    </>
  )
}
