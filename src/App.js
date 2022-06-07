import React from 'react'
import { ReactP5Wrapper } from 'react-p5-wrapper'
import Canvas from './utils/Canvas'
import text from './utils/Text'

function App() {
  const [x, y] = window.location.hash.slice(1).split('-').map((e) => parseInt(e))
  let essay = text.split(' ')
  let selected = essay.splice(x, (y-x))
  let highlighted = selected.join(' ')
  
  if (highlighted === null || highlighted === '') {
    return (
      <p>Loading...</p>
    )
  }
  return (
    <>
      <ReactP5Wrapper
        sketch={Canvas}
        selectedText={highlighted}
      />
    </>
  );
}

export default App;
