'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('customers', [
      {
        "fullName": "Pepito Perez",
        "email": "pepito.perez@correo.com",
        "amount": "10000000",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "fullName": "Juan Pinto",
        "email": "juan.pinto@correo.com",
        "amount": "5500000",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "fullName": "Luisa Torres",
        "email": "luisa.torres@correo.com",
        "amount": "8000000",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "fullName": "Maria Garcia",
        "email": "marcia.garcia@correo.com",
        "amount": "800000",
        "createdAt": new Date(),
        "updatedAt": new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('customers', null, {});
  }
};
