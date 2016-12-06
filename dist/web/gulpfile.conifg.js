
const path = require('path');

const srcPath = path.resolve(__filename, '../source/src') ;

const buildPath = path.resolve(__filename, '../source/build');


module.exports = {
    srcPath: srcPath,
    buildPath: buildPath
};