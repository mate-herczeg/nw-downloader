'use strict';

require('./polyfills');
const Config = require('./source/config/config');
const NwDownloader = require('./source/nw.downloader.js');

module.exports = function(userConfig) {

	const downloader = new NwDownloader(new Config(userConfig));

	return downloader.download();
}
