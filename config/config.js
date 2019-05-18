module.exports = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 8000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
    // mongoUri: process.env.MONGODB_URI ||
    // process.env.MONGO_HOST ||
    // 'mongodb://' + (process.env.IP || 'localhost') + ':' +
    // (process.env.MONGO_PORT || '27017') +
    // '/crud',
    // mongoUri: 'mongodb://admin:king123456@ds117535.mlab.com:17535/eighteen',
    mongoUri: 'mongodb://admin:9eighteenkddhml2019@ds147036-a0.mlab.com:47036,ds147036-a1.mlab.com:47036/holeinone?replicaSet=rs-ds147036'
    // email: '',
    // password: ''
}