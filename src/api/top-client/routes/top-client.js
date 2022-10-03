'use strict';

/**
 * top-client router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::top-client.top-client');
