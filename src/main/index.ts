import { app, BrowserWindow } from 'electron';
import MainWindow from './control/MainWindow';


class MainApp {
  private mainWin: BrowserWindow | null;

  constructor() {
    this.mainWin = null;
  }

  init(): void {
    app.whenReady().then(() => {
      this.mainWin = new MainWindow();
    });
    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        app.quit();
      }
    });
  }
}

new MainApp().init();
