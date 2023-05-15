const Shop = require("../models/shop")

const axios = require('axios');

const token = process.env.Token

const url = process.env.SALLINGAPISHOP

const Country = "dk"
const Page = 1
const PerPage = 800

const weeklyApiCall = async () => {
        try {
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                params: {
                    country: Country,
                    page: Page,
                    per_page: PerPage,
                },
            });

            const stores = response.data
                .filter((store) => ['netto', 'bilka', 'foetex',].includes(store.brand.toLowerCase()))
                .map((store) => ({
                    id: store.id,
                    name: store.name.replace(/\u200B/g, ''),
                    brand: store.brand,
                    city: store.address.city,
                    street: store.address.street,
                    zip: store.address.zip,
                    latitude: store.coordinates[1],
                    longitude: store.coordinates[0],
                }));

            return stores;
        } catch (error) {
            console.error('Error occurred while calling weekly API:', error);
            return [];
        }
};

const saveStores = async (stores) => {
    try {
        for (const store of stores) {
            // Check if a store with the same ID already exists in the database
            const existingStore = await Shop.findOne({ where: { id: store.id } });

            if (existingStore) {
                // Update the existing store
                await Shop.update(store, { where: { id: store.id } });
            } else {
                // Insert a new store
                await Shop.create(store);
            }
        }

        console.log('Stores saved successfully.');
    } catch (error) {
        console.error('Error occurred while saving stores:', error);
    }
};

const getAllStores = async () => {
    return await Shop.findAll()
}


module.exports = {weeklyApiCall, saveStores, getAllStores}