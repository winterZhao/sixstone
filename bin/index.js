#! /usr/bin/env node

'use strict';

const program = require('commander');
const getConfig = require('../lib/config.js');

program.version('0.0.1')
    .usage('例子')
    .description('This is an example！')

program
    .command('koa')
    .action(function(folderName){
        getConfig('koa',folderName);
    });

program
    .command('mobile')
    .action(function(folderName){
        getConfig('mobile',folderName);
    });

program
    .command('swiper')
    .action(function(folderName){
        getConfig('swiper',folderName);
    });


program.parse(process.argv);



