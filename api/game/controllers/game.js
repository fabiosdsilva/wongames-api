'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    populate: async (ctx) => {
        await strapi.services.game.populate();

        ctx.send({ "Ok": true })
    }
};
