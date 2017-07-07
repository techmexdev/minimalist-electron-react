const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let currentWindow;

const createWindow = () => {
  currentWindow = new BrowserWindow();

  currentWindow.loadURL(url.format({
    pathname: path.resolve(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  currentWindow.on('closed', () => {
    currentWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if(win === null) {
    createWindow();
  }
})
