# preact-cli-plugin-critical-css [![npm version](http://img.shields.io/npm/v/preact-cli-plugin-critical-css.svg)](https://www.npmjs.com/package/preact-cli-plugin-critical-css)

[Preact CLI] plugin that adds critical css to your [pre-rendered] routes using [html-critical-webpack-plugin].

## Installation

Install via npm:

```bash
npm i -D preact-cli-plugin-critical-css
```

or yarn:

```bash
yarn add preact-cli-plugin-critical-css --dev
```

then include it in your project by creating a `preact.config.js` file:

```js
import criticalCssPlugin from "preact-cli-plugin-critical-css";

export default (config, env) => {
	const options = {
		// Passed directly to the 'critical' module (this is optional)
	};

	criticalCssPlugin(config, env, options);
};
```

## Default options

The plugin sets some default options which can be overridden:

```js
const defaultOptions = {
	// Inline the generated critical-path CSS.
	inline: true,

	// Minify critical-path CSS when inlining.
	minify: true,

	// Extract inlined styles from referenced stylesheets.
	extract: false,

	// Viewport width
	width: 1280,

	// Viewport height.
	height: 600,

	// Your build directory to find css files.
	base: path.resolve(env.dest),

	// The path to a prerendered route. (e.g. index.html)
	src: filePath,

	// Write the generated critical-path CSS to this file.
	dest: filePath
};
```

## Configuration

Full list of possible options that are passed to [critical] are available [here](https://github.com/addyosmani/critical#usage).

## License

MIT © [matthewlynch](https://github.com/matthewlynch)

[preact cli]: https://github.com/developit/preact-cli
[pre-rendered]: https://github.com/developit/preact-cli#pre-rendering
[critical]: https://github.com/addyosmani/critical
[html-critical-webpack-plugin]: https://github.com/anthonygore/html-critical-webpack-plugin
