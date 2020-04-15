import React from 'react'

import flowers from './data/flowers.json'

function App() {
  let grid = Object.keys(flowers.tulips.flags).map((flower) => {
    return (
      <div
        className="garden_flower"
        style={{ background: flowers.tulips.flags[flower].color }}>
        <span className="garden_flower_text">
          {flowers.tulips.flags[flower].flag}
        </span>
      </div>
    )
  })
  return (
    <div className="app">
      <div className="banner">
        <h1>Rosy Garden</h1>
      </div>
      <div className="garden">{grid.splice(0, 25)}</div>
    </div>
  )
}

export default App
