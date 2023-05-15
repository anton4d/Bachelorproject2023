const redis = require('redis');

const redisHost = process.env.REDIS_HOST;
const redisPort = process.env.REDIS_PORT;

const client = redis.createClient(redisPort, redisHost);

client.on('error', err => console.log('Redis Client Error', err));



module.exports = client;