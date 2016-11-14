

const Sequelize = require('sequelize');
const connect = require('./connect');

const project = sequelize.define('nav', {
    gmt_create: Sequelize.DATEONLY,
    gmt_modified: Sequelize.DATEONLY,
    nav: Sequelize.STRING(40)
},{
    underscored: true,
    timestamps: false,
    createdAt: 'gmt_create',
    updatedAt: 'gmt_modified',
    freezeTableName: true
});


project.drop();
project.sync();


module.exports = {
    project: project
};