'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::pendaftar.pendaftar', ({ strapi }) => ({
  // Semua method standar sudah include dari createCoreController
  // find(), findOne(), create(), update(), delete()
  
  // Custom method
  async findByField(ctx) {
    try {
      const { field, value } = ctx.params;
      const allowedFields = ['nomorPendaftaran', 'email'];
      
      if (!allowedFields.includes(field)) {
        return ctx.badRequest('Field tidak diizinkan');
      }

      const entities = await strapi.entityService.findMany('api::pendaftar.pendaftar', {
        filters: { [field]: { $eq: value } },
        limit: 1,
      });

      if (!entities?.length) return ctx.notFound('Data tidak ditemukan');
      return entities[0];
    } catch (error) {
      strapi.log.error('Error in findByField:', error);
      return ctx.internalServerError('Terjadi kesalahan server');
    }
  }
}));