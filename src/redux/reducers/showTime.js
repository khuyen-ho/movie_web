let initialState = [
  {
    movieInfo: {
      id: 1283,
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/trainwreck.jpg",
      name: "Trainwreck",
      duration: 100,
      score: 5.2,
    },
    list: [
      {
        start: "2019-01-01T08:15:00",
        duration: 100,
      },
      {
        start: "2019-01-01T11:00:00",
        duration: 100,
      },
      {
        start: "2019-01-01T12:30:00",
        duration: 100,
      },
      {
        start: "2019-01-01T15:50:00",
        duration: 100,
      },
      {
        start: "2019-01-01T18:30:00",
        duration: 100,
      },
    ],
  },
  {
    movieInfo: {
      id: 1284,
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/insideout.jpg",
      name: "Inside Out",
      duration: 90,
      score: 7.8,
    },
    list: [
      {
        start: "2019-01-01T02:20:00",
        duration: 90,
      },
      {
        start: "2019-01-01T11:30:00",
        duration: 90,
      },
      {
        start: "2019-01-01T17:40:00",
        duration: 90,
      },
      {
        start: "2019-01-01T21:45:00",
        duration: 90,
      },
    ],
  },
  {
    movieInfo: {
      id: 1285,
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/home.jpg",
      name: "Home",
      duration: 125,
      score: 9.5,
    },
    list: [
      {
        start: "2019-01-01T09:15:00",
        duration: 125,
      },
      {
        start: "2019-01-01T12:35:00",
        duration: 125,
      },
      {
        start: "2019-01-01T17:50:00",
        duration: 125,
      },
    ],
  },
  {
    movieInfo: {
      id: 1286,
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/batmanvssuperman.jpg",
      name: "Batman v Superman: Dawn of Justice",
      duration: 180,
      score: 8.3,
    },
    list: [
      {
        start: "2019-01-01T10:10:00",
        duration: 180,
      },
      {
        start: "2019-01-01T11:30:00",
        duration: 180,
      },
      {
        start: "2019-01-01T15:40:00",
        duration: 180,
      },
    ],
  },
  {
    movieInfo: {
      id: 1287,
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/antman.jpg",
      name: "Ant-Man",
      duration: 180,
      score: 10.0,
    },
    list: [
      {
        start: "2019-01-01T12:10:00",
        duration: 180,
      },
      {
        start: "2019-01-01T20:30:00",
        duration: 180,
      },
      {
        start: "2019-01-01T21:45:00",
        duration: 180,
      },
      {
        start: "2019-01-01T22:50:00",
        duration: 180,
      },
    ],
  },
];

const showTimes = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default showTimes;
