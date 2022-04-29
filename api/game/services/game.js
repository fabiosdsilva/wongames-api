'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

const axios = require('axios')

module.exports = {
    populate: async (params) => {
        const category = await strapi.services.category.find({ name: 'Action' })

        console.log(category)

        // data = await axios('')
    }
};
