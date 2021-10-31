import jQuery from 'jquery';
import React, { useEffect, useState } from 'react';

window.$ = jQuery;
const $3Dmol = require('3dmol');

export const RENDER_STYLES = {
  Stick: {stick:{colorscheme:'Jmol'}},
  Line: {line:{colorscheme:'Jmol'}},
  Cross: {cross:{lineWidth:5, colorscheme:'Jmol'}},
  Sphere: {sphere:{colorscheme:'Jmol'}},
  Cartoon: {cartoon:{}}
}

const MolRenderer = (props) => {
  const [container, setContainer] = useState()
  const [viewer, setViewer] = useState()

  useEffect(() => {
    if(container) {
      const glViewer = $3Dmol.createViewer(jQuery(container), {
        defaultcolors: $3Dmol.elementColors.Jmol,
      });
      glViewer.addModel(props.modelData, props.fileType)
      glViewer.setBackgroundColor("#eeeeee")
      glViewer.zoomTo();
      glViewer.render();
      glViewer.zoom(1, 1000);
      setViewer(glViewer)
    }
  }, [container, props.modelData, props.fileType])

  useEffect(() => {
    if(viewer) {
      let model = viewer.getModel()
      if(props.style === RENDER_STYLES.Cartoon) {
        model.setColorByFunction({}, (atom) => {
          if(atom.ss == 'h') return "magenta";
          else if(atom.ss == 's') return "orange";
          else return "white";
        });
      }
      viewer.setStyle({}, props.style)
      viewer.render();
    }
  }, [viewer, props.style])

  return (
    <div
      className="molecule-3d"
      style={{
        width: props.width,
        height: props.height,
        position: 'relative',
        margin: '0 auto',
      }}
      ref={(c)=>{setContainer(c)}}
    />
  );
}

export default MolRenderer;
