const path = require('path');
const HtmlCriticalPlugin = require('html-critical-webpack-plugin');
const merge = require('deepmerge');

const defaults = {
	inline: true,
	minify: true,
	extract: false,
	width: 1280,
	height: 600
};

function preactCliCriticalCssPlugin(config, env, options) {
	if (!config) {
		throw new Error(
			'You must pass a webpack config to preactCliCriticalCssPlugin'
		);
	}

	if (!env) {
		throw new Error('You must pass the env to preactCliCriticalCssPlugin');
	}

	const opts = options || {};

	if (!env.ssr && env.production && env.prerender && env.prerenderUrls) {
		const routes = require(path.resolve(env.cwd, env.prerenderUrls));
		const fileName = 'index.html';

		routes
			.map(route => {
				if (route.url === '/') {
					return path.resolve(env.dest, `.${route.url}${fileName}`);
				}

				return path.resolve(env.dest, `.${route.url}/${fileName}`);
			})
			.forEach(filePath => {
				config.plugins.push(
					new HtmlCriticalPlugin(
						merge.all([
							defaults,
							{
								base: path.resolve(env.dest),
								src: filePath,
								dest: filePath
							},
							opts
						])
					)
				);
			});
	}

	return config;
}

module.exports = preactCliCriticalCssPlugin;
