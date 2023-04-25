'use strict';

/**
 * mk-character service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mk-character.mk-character');
