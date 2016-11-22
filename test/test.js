'use strict';

const Assert = require('assert');
const fs = require('fs');
const path = require('path');
const copyFolder = require('../lib/copy-folder.js');

describe('bin', function() {
    var arr = [0,1,2,3,4];
    var arr1 = [];
    describe('#function in for', function() {
        it('should return equal', function() {
            for (let i = 0; i < 5; i++) {
                (function(i) {
                    arr1.push(i);
                })(i)
            }
            setTimeout(function() {
                Assert.strictEqual(arr1, arr);
            }, 3000)
        })
    })
})

describe('copy-folder', function() {
    describe('#test copying folder', function() {
        it('should have the same category between source and the copied', function(done) {
            var srcPath = path.resolve(__dirname, '../lib');
            console.log(srcPath);
            fs.mkdir('test/test-lib', function(err){
                if (err) throw err;
                copyFolder(srcPath, 'test/test-lib');
                done();
            });
        })
    })

})
