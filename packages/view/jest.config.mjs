
export default {
	// "globals": {
	// 	"__DEV__": true
	// },
	"testRegex": "./tests/.*.mjs$",
	"rootDir": ".",
	"transform": {
		// ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
		"^.+\\.mjs$": "babel-jest",
	},
};