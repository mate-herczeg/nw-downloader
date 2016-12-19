'use strict';

const clone = require('clone');
const path = require('path');
const file = require('../utils/file');

module.exports = class FoldersConfig {
    get tmp() {
        return file.getAbsouluteOf(this._config.tmpFolder);
    }

    get nw() {
        return path.join(this.tmp, this._nw.filename);
    }

    constructor(config, nw) {
        this._config = clone(config);
        this._nw = clone(nw);
    }
};
