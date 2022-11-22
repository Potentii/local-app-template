import Store from '../stores/store.mjs';
import {IpcApiRoute} from "@potentii/electron-ipc-api";

export default class IpcStore{

	static async setup(){

		IpcApiRoute.on(`store:get`, data => Store.get(data.store));

		IpcApiRoute.on(`store:set`, data => Store.set(data.store, data.obj));

		IpcApiRoute.on(`store:save`, data => Store.save(data.store, data.obj));

		IpcApiRoute.on(`store:remove`, data => Store.remove(data.store));

		IpcApiRoute.on(`store:get-array`, data => Store.getArray(data.store));

		IpcApiRoute.on(`store:add-to-array`, data => Store.addToArray(data.store, data.item));

	}

}
