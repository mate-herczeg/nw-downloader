'use strict';

require('./polyfills/all.js');

module.exports = function(userConfig) {
	const Config = require('./source/config/config');
	const NwDownloader = require('./source/nw.downloader.js');

	let downloader = new NwDownloader(new Config(userConfig));

	downloader.download()
		.then(
			() => console.log('Download was sucessful'), 
			(error) => console.log('There was an error during download', error)
		);
}
