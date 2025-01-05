if ('paintWorklet' in CSS) {
  
  CSS.paintWorklet.addModule('https://unpkg.com/curved-line@1.0.1/curved-line.js');
  CSS.paintWorklet.addModule('https://unpkg.com/css-houdini-voronoi/dist/worklet.js');
  CSS.paintWorklet.addModule('https://unpkg.com/houdini-paint-dot-grid/dist/dot-grid-worklet.js');
  CSS.paintWorklet.addModule('https://unpkg.com/houdini-sunset@0.1.0/Sunset.js');
  CSS.paintWorklet.addModule('https://unpkg.com/extra-confetti/worklet.js');

} else {
  console.error('Paint Worklet is not supported in this browser.');
}