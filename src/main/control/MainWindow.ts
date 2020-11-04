import { BrowserWindow, BrowserWindowConstructorOptions } from 'electron';
import * as isDev from 'electron-is-dev';
import path from 'path';

export default class MainWindow extends BrowserWindow {
  private mainWindow: BrowserWindow;

  constructor() {
    const config: BrowserWindowConstructorOptions = {
      height: 600,
      titleBarStyle: 'hiddenInset',
      webPreferences: {
        nodeIntegration: true,
        preload: path.join(__dirname, 'preload.js'),
      },
      width: 800,
    };
    super(config);
    this.mainWindow = this;
    this.init();
  }

  private init(): void {
    this.loadURL(isDev ? 'http://localhost:8000' : `file://${path.join(__dirname, '../../dist/render/index.html')}`);
  }
}
