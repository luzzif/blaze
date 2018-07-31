const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require("path");
const url = require("url");
const PATHS = require("./env");

let mainWindow;

const installExtenstions = () => {
    PATHS.EXTENSION_IDS.split(",").forEach(extensionPath =>
        BrowserWindow.addDevToolsExtension(PATHS.BASE_PATH + extensionPath)
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
    installExtenstions();
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
