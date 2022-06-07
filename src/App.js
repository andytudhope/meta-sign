import React, { useContext } from 'react'
import { ReactP5Wrapper } from 'react-p5-wrapper';
import { HighlightContext } from './contexts/Highlight';
import Canvas from './utils/Canvas'
import text from './utils/Text'

function App() {
  const {state, dispatch} = useContext(HighlightContext);
  const str = window.location.href
  const index = str.split('?')
  const removeCount = index[2] - index[1]
  let essay = text.split(' ')
  let selected = essay.splice(index[1], removeCount)
  let highlighted = selected.join(' ')

  return (
    <>
      {
          <ReactP5Wrapper
            sketch={Canvas}
            selectedText={highlighted}
            handleFinishedDrawing={(img) => dispatch({ type: 'ready', payload: img })}
          />
      }
      {/* {
        state.image &&
          <img src={state.image} alt="" style={{ width: '500px', height: '750px', maxWidth: '500px' }} />
      } */}
    </>
  );
}

export default App;
