'use strict';

const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs-extra'));
const Compression = require('./utils/compression.js');
const path = require('path');
const file = require('./utils/file');

module.exports = class NwDownloader {
    constructor(config) {
        this._config = config;
        this._destination = this._getDestination();
    }

    _getDestination() {
        return path.join(this._config.folders.tmp, this._config.nw.file);
    }

    download() {
        return new Promise((resolve) => {
            this._isNwExist()
                .catch(() => this._startDownload())
                .finally(() => resolve(this.getNwFolder()));
        });
    }

    getNwFolder() {
        return path.join(this._config.folders.tmp, this._config.nw.filename);
    }

    _isNwExist() {
        return file.isDirectoryExist(this._config.folders.nw);
    }

    _startDownload() {
        return file.download(this._config.nw.url, this._destination)
            .then(() => this._extract())
            .then(() => this._clear());
    }

    _extract() {
        return (new Compression(this._destination, this._config.folders.tmp)).extract();
    }

    _clear() {
        return fs.unlinkAsync(this._destination);
    }
};
