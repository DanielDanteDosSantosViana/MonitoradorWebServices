#!/usr/bin/env node

var cli = require('../lib/cli');
var monitorweb = require('../lib/monitorweb');
var options = cli.parser(process.argv);
options.parse(process.argv);
//console.log(options);
//monitorweb(options);



