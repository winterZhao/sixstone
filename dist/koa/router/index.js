'use strict';
const router = require('koa-router')();

module.exports = function(app){
    router.get('/',function*(){
        this.body = 'hello';
    });

    app.use(router.routes())
        .use(router.allowedMethods());
};