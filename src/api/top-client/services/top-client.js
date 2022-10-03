'use strict';

/**
 * top-client service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::top-client.top-client');
