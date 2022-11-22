import Vuex from 'vuex';


const is_dev = process.env.NODE_ENV == 'development';


export default Vuex.createStore({

	// strict: is_dev,

	strict: false,

	plugins: is_dev ? [Vuex.createLogger()] : [],

   state: () => ({

   	env: process.env.NODE_ENV,

   }),


	mutations: {

	},


	actions: {

	},


   modules: {

   }

});
