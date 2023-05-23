require('dotenv').config();
const {saveOffer} = require('./offers/offerController')
const {weeklyApiCall, saveStores, getAllStores} = require('./store/storeController');
const cron = require('cron');
const sequelize = require('./utils/database.js');
const client = require("./utils/redis")
sequelize.sync()
client.connect();

// Schedule the function to run every Sunday at 01:00
const storeJob = new cron.CronJob('* * 1 * * 0', async function() {
    const stores = await weeklyApiCall();
    saveStores(stores);
}, null,
    false,
    'Europe/Copenhagen'
    );
// Schedule the function to run every day at 00:00
const offerJob = new cron.CronJob('* * 0 * * *', async function() {
    const stores = await getAllStores()
    saveOffer(stores);
}, null,
    false,
    'Europe/Copenhagen'
);

storeJob.start()
offerJob.start()
