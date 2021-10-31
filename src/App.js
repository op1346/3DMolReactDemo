import React, { useState } from 'react';
import MolRenderer from './MolRenderer';
import model from './sampleData/7m53'

const appStyles = {
  display: 'flex', 
  flexDirection: 'column', 
  textAlign: 'center',
  fontFamily: 'sans-serif'
}

function App() {
  const [viewStyle, setViewStyle] = useState({stick:{}})

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
      <h3>View Styles</h3>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <button style={{margin: '10px'}} onClick={() => {setViewStyle({stick:{}})}}>Stick</button>
        <button style={{margin: '10px'}} onClick={() => {setViewStyle({line:{}})}}>Line</button>
        <button style={{margin: '10px'}} onClick={() => {setViewStyle({cross:{linewidth:5}})}}>Cross</button>
        <button style={{margin: '10px'}} onClick={() => {setViewStyle({sphere:{}})}}>Sphere</button>
      </div>
    </div>
  );
}

export default App;
