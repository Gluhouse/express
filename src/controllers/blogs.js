let blogs = [
  {
    id: 'c4d8d6a3-d921-4c5e-a543-a7a3337f0109',
    content: {
      date: '1970-01-05T08:36:24.423Z',
      post: 'Minim non do dolor ea deserunt irure.',
    },
  },
  {
    id: '5dcbdd9c-0f40-4bab-afb3-39abcbcdc03f',
    content: {
      date: '1979-03-31T23:25:19.319Z',
      post: 'Mollit amet do sint quis ut irure aliquip adipisicing mollit.',
    },
  },
  {
    id: 'f9b3d2fc-47c8-4a28-9262-ce97a59d755e',
    content: {
      date: '1983-10-30T19:49:50.350Z',
      post: 'Quis magna officia do ullamco id nulla elit exercitation irure consectetur tempor non.',
    },
  },
  {
    id: '31c4537c-69f0-4631-bbc0-13140fc71528',
    content: {
      date: '1975-01-27T08:15:37.423Z',
      post: 'Enim nisi nulla sit laborum sint cillum amet.',
    },
  },
  {
    id: '54d0a1c4-7b9e-4507-80e0-cf0013a44de0',
    content: {
      date: '1976-03-07T10:04:59.377Z',
      post: 'Aliquip qui minim et sint voluptate magna consectetur Lorem amet.',
    },
  },
];

export const getAll = (req, res) => {
  res.status(200).json(blogs);
};
