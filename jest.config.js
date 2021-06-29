{
	"transform": {
	"^.+\\.(t|j)sx?$": "ts-jest"
},
	"testMatch": ["**/+(*.)+(spec|test).+(ts|js)?(x)"],
	"moduleFileExtensions": ["ts", "tsx", "js", "jsx", "json", "node"],
	"collectCoverageFrom": [
		"src/app/**/*.ts",
		"!src/app/**/*.module.ts",
		"!src/app/**/*.compose.ts",
		"!src/app/fragmentTypes.ts"
	]
}