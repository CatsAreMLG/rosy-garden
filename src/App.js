import React from 'react'

import flowers from './data/flowers.json'

const images = require.context('./img/cactus', true)

function App() {
  let grid = Object.keys(flowers.tulips.flags).map((flower) => {
    return (
      <div className="garden_flower">
        {/* <span className="garden_flower_text">
          {flowers.tulips.flags[flower].flag}
        </span> */}
        <img
          className="garden_flower_image"
          src={images('./' + flowers.tulips.flags[flower].color + '.png')}
          alt="cactus"
        />
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
