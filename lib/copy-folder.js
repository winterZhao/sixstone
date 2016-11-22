'use strict';

const fs = require('fs');
const path = require('path');

module.exports = function copyFolder(srcFolder, targetFolder){

    fs.readdir(srcFolder, function(err, files) {
        if (err) throw err;
        if (files && files.length > 0) {
            for ( let i = 0, r = files.length; i < r; i++ ) {

                let file = files[i];
                let srcPath = path.join(srcFolder, file);
                let targetPath = path.join(targetFolder, file);

                (function(filePath, targetPath) {
                    fs.stat(filePath, function(err, stats) {
                        if (stats.isFile(filePath)) {
                            fs.createReadStream(filePath).pipe(fs.createWriteStream(targetPath));

                        } else if (stats.isDirectory(filePath)) {
                            fs.mkdir(targetPath, function(err){
                                if (err) throw err;
                                copyFolder(filePath, targetPath);
                            });
                        } else {
                            return;
                        }
                    });
                })(srcPath,targetPath);
            }
        }

    });
};
