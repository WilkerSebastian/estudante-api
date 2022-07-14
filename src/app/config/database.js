const url = String(process.env.DATABASE_URL)

module.exports = {
    dialect: 'postgres',
    host: url.slice(91 , 130),
    username: url.slice(11 , 25),
    password: url.slice(26 , 90),
    database: url.slice(136),
    define: {
        timestamps: true,
        underscored: true,
    },
    dialectOptions: {
        ssl:{
           require: true,
           rejectUnauthorized: false
        }
    }
};