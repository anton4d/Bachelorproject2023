const redis = require('redis'); // Import the Redis library

const redisHost = process.env.REDIS_HOST; // Retrieve the Redis host from environment variables
const redisPort = process.env.REDIS_PORT; // Retrieve the Redis port from environment variables

const client = redis.createClient(redisPort, redisHost); // Create a Redis client with the specified host and port

client.on('error', err => console.log('Redis Client Error', err)); // Set up an error handler for the Redis client

module.exports = client; // Export the Redis client for use in other modules
