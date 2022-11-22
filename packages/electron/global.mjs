/**
 * @type {BrowserWindow}
 */
let _win;

export default class Global{

	/**
	 *
	 * @param {BrowserWindow} win
	 */
	static set win(win){
		_win = win;
	}

	/**
	 *
	 * @return {BrowserWindow}
	 */
	static get win(){
		return _win;
	}

}