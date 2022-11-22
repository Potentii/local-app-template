import url from 'url'
import path from 'path'
import electron from 'electron'
import electron_debug from 'electron-debug'
import is_dev from 'electron-is-dev'
import * as ipc from './ipc/ipc.mjs';
import Global from "./global.mjs";


const { app, BrowserWindow } = electron;


// TODO fix this using dotenv
if(is_dev){
	// process.env.PAGE_ADDRESS = 'http://localhost:1234';
	process.env.PAGE_ADDRESS = '../../../../view/out/parcel-watch/bundle/index.html';
} else{
	process.env.PAGE_ADDRESS = './renderer/view/index.html';
}


electron_debug();



/**
 * The main window frame
 * @type {Electron.BrowserWindow}
 */
let win = null;

const page_address = process.env.PAGE_ADDRESS;

/**
 * Window configurations
 * @type {Object}
 */
const settings = {
	window: {
		title: 'local-app-template',
		minWidth:  process.env.WINDOW_MIN_WIDTH  || 356,
		minHeight: process.env.WINDOW_MIN_HEIGHT || 256,
		width:  process.env.WINDOW_WIDTH  || 1024,
		height: process.env.WINDOW_HEIGHT || 640,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: true,
			enableRemoteModule: true,
			preload: path.join(__dirname, '../../parcel-preload-build/bundle/preload.js'),
		},
		// alwaysOnTop: true,
		// fullscreen: true,
		// closable: false,
		// kiosk: true,
		center: true,
		backgroundColor: '#ffffff',
	},
	// *Checking if the address of the window content is HTTP(S):
	address: /^http/i.test(page_address)
		// *If it is, simply setting it as the address:
		? page_address
		// *If it's not, assuming the address is a file relative to the project root:
		: url.format({
			protocol: 'file',
			slashes: true,
			pathname: path.join(__dirname, page_address),
		}),
};



// *When electron is ready:
app.on('ready', async () => {
	// *Creating the window frame:
	await createWindow(settings);
});


app.on('will-quit', async e => {
	await ipc.unsetup();
});


// *When all windows get closed:
app.on('window-all-closed', () => {
	// *Checking if the OS is a Macintosh:
	if(process.platform !== 'darwin')
		// *If it's not:
		// *Quitting the application:
		app.quit();
});


// *When user re-focus the application:
app.on('activate', async () => {
	// *Checking if windows reference is lost:
	if(win === null)
		// *If it is:
		// *Creates the window again:
		await createWindow(settings);
});


/**
 * Creates a new window frame
 * @author Guilherme Reginaldo Ruella
 */
async function createWindow(settings){

	const window_settings = settings.window;
	// window_settings.show = false;

	await app.whenReady();

	// electron.Menu.setApplicationMenu(null);

	// *Setting up the window frame:
	win = new BrowserWindow(window_settings);

	Global.win = win;

	// *When the window closes:
	win.on('closed', () => {
		// *Removing the window reference:
		win = null;
	});

	win.once('ready-to-show', () => {
		// *Displaying the window frame:
		win.show();
		if(is_dev)
			win.webContents.openDevTools();
	});

	// *Loading the html file:
	win.loadURL(settings.address);

	// *Removing the default menu bar:
	win.setMenu(null);

	// shortcuts.setup(win);

	await ipc.setup();
}
