module.exports = {
    dialect: 'postgres',
    host: process.env.DATABASE_URL.slice(91 , 131),
    username: process.env.DATABASE_URL.slice(11 , 25),
    password: process.env.DATABASE_URL.slice(26 , 90),
    database: process.env.DATABASE_URL.slice(137),
    define: {
        timestamps: true,
        underscored: true,
    },
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
    }
};