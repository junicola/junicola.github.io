import React from 'react'
import './Stack.css'

export default function Stack({ stack }) {
  return (
    <section id="stack" className="stack section-padding">
      <div className="container">
        <h2 className="section-title">{stack.title}</h2>
        <div className="stack__pills">
          {stack.items.map((item) => (
            <span key={item} className="stack__pill">{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
