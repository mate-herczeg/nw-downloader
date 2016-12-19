'use strict';

var userConfig = require('yargs').argv;

let nwDownloader = require('./index.js')
nwDownloader(userConfig)