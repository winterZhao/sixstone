'use strict';

/*
 * 作用:此方法用于将一个.html文件里的所有的.css和.js分别提取成一个数组暴露给外;
 * params: srcFile [String] 文件夹名字;
 * return: [Array] 一个将文件夹下的layout文件夹下的所有css和js以及html文件夹输出的数组;
 */

const fs = require('fs');
const path = require('path');
const getHtmlInnerCssJs = require('./get-css-js.js');


module.exports = function (srcFile) {
    const htmlFile = path.join(srcFile, './layout');
    try {
        var arr = [];
        var files = fs.readdirSync(htmlFile);
        for (let i = 0, r = files.length; i < r; i++) {
            var obj = {};
            var curFile = files[i];
            var curFilePath = path.join(htmlFile, curFile);
            obj.fileName = path.basename(curFile, '.html');
            obj.cssFileArr = getHtmlInnerCssJs(curFilePath).cssPathArr;
            obj.jsFileArr = getHtmlInnerCssJs(curFilePath).jsPathArr;
            arr.push(obj);
        }
        return arr;
    } catch(e) {
        throw e;
    }
};

