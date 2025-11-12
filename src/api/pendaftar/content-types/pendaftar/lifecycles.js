'use strict';

module.exports = {
  async beforeCreate(event) {
    const { data } = event.params;
    
    // Auto-set tanggalDaftar jika tidak disediakan
    if (!data.tanggalDaftar) {
      data.tanggalDaftar = new Date().toISOString();
    }
    
    // Auto-set status jika tidak disediakan
    if (!data.status) {
      data.status = 'menunggu';
    }
  },

  async afterCreate(event) {
    const { result } = event;
    
    // Generate nomor pendaftaran setelah create
    if (!result.nomorPendaftaran) {
      try {
        const year = new Date().getFullYear();
        const sequential = String(result.id).padStart(4, '0');
        const nomorPendaftaran = `SPMB-${year}${sequential}`;
        
        await strapi.entityService.update('api::pendaftar.pendaftar', result.id, {
          data: { nomorPendaftaran },
        });
        
        strapi.log.info(`Generated nomor pendaftaran: ${nomorPendaftaran}`);
      } catch (error) {
        strapi.log.error('Error generating nomor pendaftaran:', error);
      }
    }

    strapi.log.info(`Pendaftar baru: ${result.namaLengkap} (${result.email})`);
  },

  async beforeUpdate(event) {
    const { data } = event.params;
    
    // Prevent changing nomorPendaftaran
    if (data.nomorPendaftaran) {
      delete data.nomorPendaftaran;
    }
  },
};