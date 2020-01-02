// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const { remote } = require('electron');
const BrowserWindow = remote.BrowserWindow;

const openThreeJsDocBtn = document.querySelector('.openThreeJsDoc');

openThreeJsDocBtn.addEventListener('click', () => {
  const win = new BrowserWindow({
    width: 500, height: 300, title: 'test', webPreferences: {
      nodeIntegration: true,
    }
  });
  win.loadURL("https://threejs.org/docs/#api/en/geometries/BoxBufferGeometry");

});