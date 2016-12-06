
const koa = require('koa');
const app = koa();
const Route = require('./router');
const path = require('path');
const bodyParser = require('koa-body-parser');
const View = require('koa-views');
const Logger = require('koa-logger');
const Static = require('koa-static');
const StaticCache = require('koa-static-cache');


app.use(Logger());
app.use(bodyParser());

// 不需要缓存
app.use(Static(path.resolve(__filename, '../public'), {
    maxage: 24 * 60 * 60
}));

// 需要缓存
// app.use(StaticCache(path.resolve(__dirname, 'public'), {
//    maxAge: 24 * 60 * 60
// }));


app.use(View(__dirname + '/views', {
    default: 'dust'
}));


Route(app);


app.listen(201);