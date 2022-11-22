import appdata from '@potentii/app-data';

const Store = appdata;
Store.setAppName('local-app-template');
Store.disableInMemoryCache();

export default Store;