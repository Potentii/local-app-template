import {IpcApiClient} from "@potentii/electron-ipc-api";


export default class IpcStoreClient{

	constructor(){}


	static async get(store){
		return IpcApiClient.send('store:get', { store: store }, { timeout: 0, showLogs: process.env.NODE_ENV == 'development' });
	}


	static async set(store, obj){
		return IpcApiClient.send('store:set', { store: store, obj: obj }, { timeout: 0, showLogs: process.env.NODE_ENV == 'development' });
	}


	static async save(store, obj){
		return IpcApiClient.send('store:save', { store: store, obj: obj }, { timeout: 0, showLogs: process.env.NODE_ENV == 'development' });
	}


	static async remove(store){
		return IpcApiClient.send('store:remove', { store: store }, { timeout: 0, showLogs: process.env.NODE_ENV == 'development' });
	}


	static async getArray(store){
		return IpcApiClient.send('store:get-array', { store: store }, { timeout: 0, showLogs: process.env.NODE_ENV == 'development' });
	}


	static async addToArray(store, item){
		return IpcApiClient.send('store:add-to-array', { store: store, item: item }, { timeout: 0, showLogs: process.env.NODE_ENV == 'development' });
	}

}