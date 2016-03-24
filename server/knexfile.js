var config = require('./app-config');
module.exports = {
    client: 'mysql',
    connection: {
        host     : config['mysql-host'],
        user     : config['mysql-user'],
        password : config['mysql-password'],
        database : 'expenses',
        charset  : 'utf8'
    }
};