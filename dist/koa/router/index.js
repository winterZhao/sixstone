

const router = require('koa-router')();

module.exports = function (app) {


    router.get('/', function*(){
        yield this.render('index.dust');
    });
    router.get('/a', function*(){
        yield this.render('index.html');
    });

    app.use(router.routes())
        .use(router.allowedMethods());
};