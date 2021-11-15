'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Blogs', [
      {
        date: '1979-03-31T23:25:19.319Z',
        author: 'John Doe',
        content:
          'Mollit amet do sint quis ut irure aliquip adipisicing mollit.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: '1976-11-24T16:37:27.502Z',
        author: 'Wilma Snyder',
        content: 'Consequat dolore proident ex do eu aute sint id velit anim.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: '2013-10-23T02:37:39.166Z',
        author: 'Mooney Meadows',
        content:
          'Cillum dolore incididunt eiusmod est magna esse ullamco amet amet dolor occaecat.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: '1997-08-21T21:59:26.619Z',
        author: 'Snyder Harper',
        content:
          'Enim velit sint consectetur ex duis sit commodo nulla exercitation voluptate ullamco excepteur ullamco sunt.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: '2005-03-22T14:45:05.938Z',
        author: 'Freida Sanchez',
        content: 'Officia officia id ipsum exercitation labore dolore.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: '1999-03-04T06:46:45.057Z',
        author: 'Martinez Morris',
        content:
          'Aute ullamco deserunt dolore aliqua nulla mollit qui amet ullamco.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Blog', null, {});
  },
};
