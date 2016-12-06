'use strict';
/*
 * 作用:此方法用于将一个.html文件里的所有的.css和.js分别提取成一个数组暴露给外;
 * params: filename [String] 单个html文件路径;
 * return: [Object] 一个包含所有css文件路径的cssPathArr属性以及一个包含所有js文件路径的jsPathArr属性
 */

const fs = require('fs');
const path = require('path');


const cdnReg = /(.)*\/\//g;
const linkReg = /href=\"(.+\.css)\"/g;
const jsReg = /src=\"(.+\.js)\"/g;


function execWhile (reg, str, filename) {
    var arr = [];
    function exec (reg, str) {
        let regStrArr = reg.exec(str);
        if (regStrArr && regStrArr.length > 0) {
            var urlPath = regStrArr[1].trim();
            if (cdnReg.test(urlPath)) {
                exec(reg, str);
            } else {
                regStrArr[1] = path.join(filename, '../../css/' + urlPath);
                arr.push(regStrArr[1]);
                exec(reg, str);
            }

        }
    }
    exec(reg, str);
    return arr;
}



module.exports = function (filename) {
    try {
        var result = fs.readFileSync(filename);
        var cssPathArr = execWhile(linkReg, result, filename);
        var jsPathArr = execWhile(jsReg, result, filename);

        return {
            cssPathArr: cssPathArr,
            jsPathArr: jsPathArr
        };
    } catch(e) {
        throw e;
    }

};