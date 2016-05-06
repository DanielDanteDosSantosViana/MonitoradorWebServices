#!/usr/bin/env node

var cli = require('../lib/cli');
var options = cli.parser(process.argv);
options.parse(process.argv);

