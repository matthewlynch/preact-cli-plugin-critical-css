# preact-cli-plugin-critical-css


[Preact CLI] plugin that adds critical css to your [pre-rendered] routes using [html-critical-webpack-plugin].

## Installation
Install via npm:
```bash
npm i -D preact-cli-plugin-critical-css
```
or yarn:
```bash
yarn add preact-cli-plugin-critical-css
```

then include it in your project by creating a `preact.config.js` file:

```js
import criticalCssPlugin from 'preact-cli-plugin-critical-css';

export default (config, env) => {
  const options = {...};
  criticalCssPlugin(config, env, options);
}
```

## License

MIT © [matthewlynch](https://github.com/matthewlynch)

[Preact CLI]: https://github.com/developit/preact-cli
[pre-rendered]: https://github.com/developit/preact-cli#pre-rendering
[html-critical-webpack-plugin]: https://github.com/anthonygore/html-critical-webpack-plugin
