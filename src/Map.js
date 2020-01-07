import React from 'react'

/**
 * Plain
 * Lake - Water, Fish
 * Forest - Wood
 * Farm
 * Ore - Coal, Copper, Silver, Gold, Diamond, Emerald
 * Village
 * City
 */

function Map({ gameData, setShowMap }) {
  const rowNumber = 20
  const columNumber = 20

  function renderSegments() {
    return [...Array(rowNumber)].map((row, rowIndex) => {
      return [...Array(columNumber)].map((column, columnIndex) => {
        return <Segment key={`${rowIndex}${columnIndex}`} 
          gameData={gameData}
          x={rowIndex} 
          y={columnIndex} />
      })
    })
  }

  return (
    <div className="map__wrapper">
      <div className="map__button">
        <button onClick={() => setShowMap(false)}>X</button>
      </div>
      <div className="map">
        { renderSegments() }
      </div>
    </div>
  )
}

function Segment({ gameData, x, y }) {
  const segmentLocation = [x, y]
  let segmentPlace = {}
  let world = gameData

  // Initialize segment place
  Object.keys(world).find(place => {
    const allPlaces = world[place]
    allPlaces.find(place => {
      place.locations.find(location => {
        if(JSON.stringify(location) === JSON.stringify(segmentLocation)) { 
          Object.assign(segmentPlace, place)
          return true
        }
        return false
      })
      return false
    })
    return false
  })

  function handleClick() {
    console.log(segmentPlace)
  }

  return (
    <div className='map__segment' onClick={handleClick}>
      {`${x}-${y}`}
    </div>
  )
}

export default Map