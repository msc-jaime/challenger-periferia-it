'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        "name": "Laptop Asus Vivobook Pro 15 OLED quiet blue 15.6",
        "price": "2449779",
        "totalQuantity": "6",
        "totalSold": "4",
        "urlProductImage": "https://http2.mlstatic.com/D_NQ_NP_2X_856678-MLA53334195276_012023-F.webp",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Silla De Escritorio Y Oficina Ergonomica Pc Giratoria Femmto",
        "price": "205900",
        "totalQuantity": "10",
        "totalSold": "20",
        "urlProductImage": "https://http2.mlstatic.com/D_NQ_NP_2X_698601-MCO52869979576_122022-F.webp",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Televisor Samsung 55 Neo Qled 8k Qn700b",
        "price": "2899900",
        "totalQuantity": "5",
        "totalSold": "8",
        "urlProductImage": "https://http2.mlstatic.com/D_NQ_NP_2X_784292-MLU69498926234_052023-F.webp",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Audífonos gamer Sony ZX Series MDR-ZX110 negro",
        "price": "59900",
        "totalQuantity": "80",
        "totalSold": "100",
        "urlProductImage": "https://http2.mlstatic.com/D_NQ_NP_2X_975252-MLA45258514131_032021-F.webp",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Xiaomi Redmi 9A Dual SIM 32 GB azul celeste 2 GB RAM",
        "price": "399900",
        "totalQuantity": "20",
        "totalSold": "40",
        "urlProductImage": "https://http2.mlstatic.com/D_NQ_NP_2X_746902-MLA48765111950_012022-F.webp",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Celular Xiaomi Redmi Note 12s 8ram / 256gb / 108mp",
        "price": "904900",
        "totalQuantity": "10",
        "totalSold": "180",
        "urlProductImage": "https://http2.mlstatic.com/D_NQ_NP_2X_622320-MLU69622392646_052023-F.webp",
        "createdAt": new Date(),
        "updatedAt": new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
