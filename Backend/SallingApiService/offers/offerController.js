const axios = require('axios');
const { Op } = require("sequelize");
const Offer = require("../models/offer")
const client = require("../utils/redis")


const token = process.env.TOKEN;

const apiUrl = process.env.SALLINGAPIOFFER;


const makeAPICall = async (id) => {
    const url = `${apiUrl}${id}`;

    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const clearances = response.data.clearances;

        const offers = clearances.map((clearance) => ({
            shopid: id,
            ean: clearance.offer.ean,
            name: clearance.product.description,
            discount: clearance.offer.discount,
            endTime: clearance.offer.endTime,
            newPrice: clearance.offer.newPrice,
            originalPrice: clearance.offer.originalPrice,
            percentDiscount: clearance.offer.percentDiscount,
            stock: clearance.offer.stock,
        }));

        return offers;
    } catch (error) {
        console.error(error);
        return []; // Return an empty array if an error occurs
    }
};



const updateOffers = async (offers, id) => {
    try {
        const allOffers = [];
        const oldOffers = await Offer.findAll({
            where: {
                shopid: {
                    [Op.eq]: id
                }
            }
        });

        const updatedEans = offers.map(offer => offer.ean);
        const removedOffers = oldOffers.filter(offer => !updatedEans.includes(offer.ean));

        for (const offer of offers) {
            const existingOffer = await Offer.findOne({
                where: {
                    ean: {
                        [Op.eq]: offer.ean
                    }
                }
            });

            if (existingOffer) {
                await Offer.update(offer, {
                    where: {
                        ean: {
                            [Op.eq]: offer.ean
                        }
                    }
                });
            } else {
                await Offer.create(offer);
            }
            allOffers.push(offer);
        }

        for (const removedOffer of removedOffers) {
                allOffers.push(removedOffer);
                console.log("removed offer ")
                console.log(removedOffer.toJSON())
                await Offer.destroy({
                    where: {
                        ean: {
                            [Op.eq]: removedOffer.ean
                        }
                    }
                });
            }
        const redisKey = id.toString(); // Convert id to string if it's not already

        // Convert the allOffers array to a JSON string before storing in Redis
        const allOffersJSON = JSON.stringify(allOffers);

        // Save the JSON string under the redisKey
        client.set(redisKey, allOffersJSON, (error, reply) => {
            if (error) {
                console.error('Error occurred while saving allOffers in Redis:', error);
            } else {
                console.log('allOffers saved in Redis under key:', redisKey);
            }
        });
    } catch (error) {
        console.error('Error occurred while updating offers', error);
    }
};

const saveOffer = async (stores) => {
    try {
        for (const store of stores) {
            const id = store.id;
            const offers = await makeAPICall(id);
            await updateOffers(offers, id);
            await delay(1000); // Wait for 1 second before the next iteration
        }
    } catch (error) {
        console.error('Error occurred while saving stores:', error);
    }
};

const delay = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

module.exports = {saveOffer}