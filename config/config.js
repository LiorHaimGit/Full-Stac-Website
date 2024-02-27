// config.js

const config = {
    development: {
        database: {
            host: 'localhost',
            port: 27017,
            dbName: 'myDatabase',
            username: 'admin',
            password: 'password'
        },
        port: 3000,
        environment: 'development'
    },
    production: {
        database: {
            host: 'the-production-database-host',
            port: 27017,
            dbName: 'the-production-database-name',
            username: 'the-production-database-username',
            password: 'the-production-database-password'
        },
        port: process.env.PORT || 3000,
        environment: 'production'
    }
};

module.exports = config;
