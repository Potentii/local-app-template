import {ipcMain} from 'electron'
import IpcStore from "./ipc-store.mjs";


export async function setup(){

	await IpcStore.setup();

	// TODO setup IPC controllers here
}


export async function unsetup(){
	ipcMain.removeAllListeners();
}

