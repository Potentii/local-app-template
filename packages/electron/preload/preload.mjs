import {contextBridge, ipcRenderer, remote} from 'electron';


contextBridge.exposeInMainWorld(
	'electron',
	{
		remote: remote,
		// fs: fs,
		// fsProm: fsProm,
		// path: path,
		ipcRenderer: {
			send(channel, ...args){
				ipcRenderer.send(channel, ...args);
			},
			on(channel, cb){
				ipcRenderer.on(channel, cb);
			},
			once(channel, cb){
				ipcRenderer.once(channel, cb);
			},
			off(channel, cb){
				ipcRenderer.off(channel, cb);
			},
			removeListener(channel, cb){
				ipcRenderer.removeListener(channel, cb);
			},
		}
	});