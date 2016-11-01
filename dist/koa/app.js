'use strict';
const koa = require('koa');
const app = koa();
const Route = require('./router');
const path = require('path');
const bodyParser = require('koa-body-parser');
const View = require('koa-views');
const Logger = require('koa-logger');
const staticCache = require('koa-static-cache');


app.use(Logger());
app.use(bodyParser());
app.use(staticCache(path.resolve(__dirname, 'public'), {
    maxAge: 24 * 60 * 60
}));


app.use(View(__dirname + '/views', {
    default:'dust'
}));


Route(app);


app.listen(201);