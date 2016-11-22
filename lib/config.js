'use strict';

const copyFolder = require('./copy-folder');
const path = require('path');
const fs = require('fs');
const dist = path.resolve(__dirname,'../dist');


function getConfig(option, name) {
    name = name || 'zhao';
    let currentFolder = process.cwd();
    let folder = path.join(currentFolder, name);
    fs.mkdir(folder, function(err){
        if (err) throw err;
        let optionFolder = path.join(dist, option);
        copyFolder(optionFolder, folder);
    });
}



module.exports = getConfig;
