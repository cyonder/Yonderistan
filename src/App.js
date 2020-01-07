import React, { useState } from 'react'
import './assets/styles/normalize.css'
import './assets/styles/app.css'
import './assets/styles/map.css'

import gameData from './gameData.json'

import Map from './Map'

function App() {
  const [showMap, setShowMap] = useState(true)

  return (
    <div className="app">
      {showMap && <Map gameData={gameData} setShowMap={setShowMap} />}
    </div>
  )
}

export default App
