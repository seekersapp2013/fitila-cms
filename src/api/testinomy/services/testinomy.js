'use strict';

/**
 * testinomy service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::testinomy.testinomy');
