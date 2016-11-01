'use strict';

const fs = require('fs');
const path = require('path');

module.exports = function copyFolder(srcFolder,targetFolder){

    fs.readdir(srcFolder,function(err,files){
        if (err) throw err;
        for ( let i = 0, r = files.length; i < r; i++ ) {
            let file = files[i];
            let srcPath = path.join(srcFolder,file);
            let targetPath = path.join(targetFolder,file);
            (function(filePath,targetPath){
                fs.stat(filePath,function(err,stats){
                    if (stats.isFile(filePath)) {
                        //let rs = fs.createReadFile(filePath);
                        //let ws = fs.createWriteFile(targetPath);
                        fs.createReadStream(filePath).pipe(fs.createWriteStream(targetPath))
                        //fs.link(filePath,targetPath,function(err){
                        //    if (err) throw err;
                        //})
                    } else if (stats.isDirectory(filePath)) {
                        fs.mkdir(targetPath,function(err){
                            if (err) throw err;
                            copyFolder(filePath,targetPath);
                        })
                    }
                })
            })(srcPath,targetPath)
        }
    })
}


