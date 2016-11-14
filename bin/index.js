#! /usr/bin/env node

'use strict';

const program = require('commander');
const getConfig = require('../lib/config.js');
const commanderConfig = require('../sixstone-config.js');

program
    .version('1.0.14')
    .usage('例子')
    .description('This is an example！');


for ( let i = 0, r = commanderConfig.length; i < r; i++) {
    var cur = commanderConfig[i];
    (function(cur) {
        program
            .command(cur.command)
            .description(cur.description)
            .action(function(folderName) {
                getConfig(cur.command, folderName);
            });
    })(cur);
}


program.parse(process.argv);



