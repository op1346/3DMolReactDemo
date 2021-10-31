import React, { useState } from 'react';
import MolRenderer, { RENDER_STYLES } from './MolRenderer';
import pdb from './sampleData/7m53'
import asprin from './sampleData/asprin'

const appStyles = {
  display: 'flex', 
  flexDirection: 'column', 
  textAlign: 'center',
  fontFamily: 'sans-serif'
}

function App() {
  const [viewStyle, setViewStyle] = useState(RENDER_STYLES.Stick)
  const [model, setModel] = useState(pdb)
  return (
    <div className="App" style={appStyles}>
      <h1>React 3D Mol Demo</h1>
      <MolRenderer
        width={1000}
        height={500}
        modelData={model.data}
        fileType={model.type}
        style={viewStyle}
      />
      <h3>Molecules</h3>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <button style={{margin: '10px'}} onClick={() => {setModel(asprin); setViewStyle(RENDER_STYLES.Stick)}}>Asprin</button>
        <button style={{margin: '10px'}} onClick={() => {setModel(pdb)}}>7m53</button>
      </div>
      <h3>View Styles</h3>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <button style={{margin: '10px'}} onClick={() => {setViewStyle(RENDER_STYLES.Stick)}}>Stick</button>
        <button style={{margin: '10px'}} onClick={() => {setViewStyle(RENDER_STYLES.Line)}}>Line</button>
        <button style={{margin: '10px'}} onClick={() => {setViewStyle(RENDER_STYLES.Cross)}}>Cross</button>
        <button style={{margin: '10px'}} onClick={() => {setViewStyle(RENDER_STYLES.Sphere)}}>Sphere</button>
        <button style={{margin: '10px'}} disabled={model.type === "sdf"} onClick={() => {setViewStyle(RENDER_STYLES.Cartoon)}}>Cartoon</button>
      </div>
    </div>
  );
}

export default App;
