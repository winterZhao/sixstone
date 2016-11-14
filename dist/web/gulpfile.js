'use strict';

const gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin'),             //压缩html
    autoprefixer = require('gulp-autoprefixer'),   //给css自动添加浏览器前缀的
    less = require('gulp-less'),                   //将less转成css
    minify = require('gulp-minify-css'),           //压缩css
    concat = require('gulp-concat'),               //合并js的
    uglify = require('gulp-uglify'),               //压缩js的
    notify = require('gulp-notify'),               //添加通知的
    imagemin = require('gulp-imagemin'),           //压缩图片的
    spriter = require('gulp-css-spriter'),         //生成雪碧图的
    clean = require('gulp-clean'),                 //清除build文件夹下的所有;
    runSequence = require('gulp-run-sequence');    //gulp串行并行问题;




const path = require('path');
const fs = require('fs');
// 原文件夹
const srcFile = require('./gulpfile.conifg.js').srcPath;
// 目标文件夹
const buildFile = require('./gulpfile.conifg.js').buildPath;
// 将一个文件下的所有.html里的css和js组成一个数组返回;
const getFileArr = require('./common/get-files-path.js')(srcFile);




gulp.task('clean', function() {
    gulp.src('build')
        .pipe(clean())
        .pipe(notify('clean成功'));

    fs.exists(buildFile,function(exists) {
        if (!exists) {
            fs.mkdirSync(buildFile);
        }
    });

});


gulp.task('buildCss',function(){
    for (let i = 0, r = getFileArr.length; i < r; i++) {
        var cur = getFileArr[i];
        gulp.src(cur.cssFileArr)
            .pipe(concat(cur.fileName + '.min.css'))
            .pipe(minify())            //压缩css
            .pipe(gulp.dest(buildFile + '/css'))
            .pipe(notify('css build成功'));

    }
});



gulp.task('buildJs',function(){
    for (let i = 0, r = getFileArr.length; i < r; i++) {
        var cur = getFileArr[i];
        gulp.src(cur.jsFileArr)
            .pipe(concat(cur.fileName + '.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest(buildFile + '/js'))
            .pipe(notify('js build成功'));
    }
});


// 生成雪碧图在页面制作过程完成,作为一个单独的任务;待定?
gulp.task('getSpriter', function() {
    gulp.src('src/css/*.css')
        .pipe(spriter({
            'spriteSheet': 'src/images/sprite.png',     //生成的雪碧图地址;貌似不能放在原先的文件夹下
            'pathToSpriteSheetFromCSS': '../images/sprite.png'      //修改对应css里雪碧图的位置;
        }))
        .pipe(notify('生成雪碧图成功'));
});

gulp.task('build', function() {
    runSequence('clean', ['buildCss', 'buildJs', 'buildImg']);
});

gulp.task('default', ['build']);