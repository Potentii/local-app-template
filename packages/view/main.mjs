import {Logger} from '@local-app-template/commons';
// *Vue:
import {createApp} from 'vue';
// *Vue integrations:
import store from './store.mjs';
import router from './router.mjs';
// *Root component:
import VRoot from './v-root.vue';

const app = createApp(VRoot);

app.config.productionTip = process.env.NODE_ENV === 'development';
app.config.performance = process.env.NODE_ENV === 'development';

app.use({
	install(app, options){
		app.config.globalProperties.$logger = Logger;
	}
});
app.use(router);
app.use(store);

app.mount('#app');
