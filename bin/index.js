#! /usr/bin/env node

'use strict';

const program = require('commander');
const getConfig = require('../lib/config.js');
const commanderConfig = require('../conf/sixstone-config.js');

program
    .version('1.1.4')
    .usage('sixstone')
    .description('This is an example for generatoring all')

for (let i = 0, r = commanderConfig.length; i < r; i++) {
    var cur = commanderConfig[i];
    (function(cur) {
        program
            .command(cur.command)
            .description(cur.description)
            .action(function(folederName) {
                getConfig(cur.command, folederName);
            })
    })(cur)
}

program.parse(process.argv);
