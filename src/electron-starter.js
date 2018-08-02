const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require("path");
const url = require("url");
const PATHS = require("./env");

let mainWindow;

const isDev = () => {
    return process.mainModule.filename.indexOf("app.asar") === -1;
};

const installExtensions = () => {
    const { EXTENSION_IDS, BASE_PATH } = PATHS;
    EXTENSION_IDS &&
        BASE_PATH &&
        EXTENSION_IDS.split(",").forEach(extensionPath =>
            BrowserWindow.addDevToolsExtension(BASE_PATH + extensionPath)
        );
};

const createWindow = () => {
    mainWindow = new BrowserWindow();
    mainWindow.setMenu(null);
    const startUrl =
        process.env.ELECTRON_START_URL ||
        url.format({
            pathname: path.join(__dirname, "/../build/index.html"),
            protocol: "file:",
            slashes: true
        });
    mainWindow.loadURL(startUrl);
    mainWindow.webContents.openDevTools();
    mainWindow.on("closed", () => {
        mainWindow = null;
    });
    if (isDev()) {
        installExtensions();
    }
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});
