const users = [
  {
    _id: "5ed82ef2fadbef1c4f1c115e",
    index: 0,
    guid: "87d38be2-00e2-4545-bdda-b951707feca9",
    isActive: true,
    balance: "$3,357.02",
    picture: "http://placehold.it/32x32",
    age: 36,
    eyeColor: "green",
    name: {
      first: "Deana",
      last: "Lewis",
    },
    company: "BUZZNESS",
    email: "deana.lewis@buzzness.io",
    phone: "+1 (903) 547-2409",
    address: "335 Chase Court, Graball, Guam, 6843",
    about:
      "Labore laborum et ullamco ullamco fugiat aliquip officia anim dolor magna ea occaecat ut. Officia ipsum Lorem proident nulla non aliqua nisi minim do enim culpa. Officia ipsum ad in est. Et proident consectetur id est ut enim Lorem Lorem pariatur id adipisicing non aliquip. Consectetur fugiat et laboris deserunt aute deserunt.",
    registered: "Saturday, February 7, 2015 5:32 PM",
    latitude: "28.590884",
    longitude: "-47.957849",
    tags: ["non", "eiusmod", "exercitation", "laborum", "occaecat"],
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    friends: [
      {
        id: 0,
        name: "Fowler Patrick",
      },
      {
        id: 1,
        name: "Maude Fisher",
      },
      {
        id: 2,
        name: "Bullock Mendoza",
      },
    ],
    greeting: "Hello, Deana! You have 7 unread messages.",
    favoriteFruit: "strawberry",
  },
  {
    _id: "5ed82ef2afab158d552a6831",
    index: 1,
    guid: "c7c9f619-6efa-4ec6-b083-7380de1be950",
    isActive: false,
    balance: "$3,482.28",
    picture: "http://placehold.it/32x32",
    age: 25,
    eyeColor: "brown",
    name: {
      first: "Case",
      last: "Bailey",
    },
    company: "NORSUP",
    email: "case.bailey@norsup.biz",
    phone: "+1 (832) 453-3688",
    address: "246 Bradford Street, Zarephath, Washington, 9810",
    about:
      "Proident ipsum cupidatat laborum anim ut culpa et aliqua. Anim ex mollit laboris consectetur nulla. Duis incididunt enim sunt sint ullamco veniam ea.",
    registered: "Thursday, June 2, 2016 4:35 PM",
    latitude: "5.376151",
    longitude: "108.335297",
    tags: ["ad", "excepteur", "pariatur", "sint", "commodo"],
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    friends: [
      {
        id: 0,
        name: "Maryellen Sullivan",
      },
      {
        id: 1,
        name: "Frankie Perkins",
      },
      {
        id: 2,
        name: "Ballard Odonnell",
      },
    ],
    greeting: "Hello, Case! You have 5 unread messages.",
    favoriteFruit: "banana",
  },
  {
    _id: "5ed82ef266cf162a7f7f644a",
    index: 2,
    guid: "7ea6c668-c7f2-45c5-80ff-115f64af1d6a",
    isActive: false,
    balance: "$1,971.84",
    picture: "http://placehold.it/32x32",
    age: 24,
    eyeColor: "green",
    name: {
      first: "Gonzalez",
      last: "Reilly",
    },
    company: "ISOTRONIC",
    email: "gonzalez.reilly@isotronic.us",
    phone: "+1 (807) 403-3625",
    address: "433 Robert Street, Gerton, West Virginia, 9372",
    about:
      "Est qui consequat aliquip amet elit excepteur aute aliquip. Magna fugiat adipisicing enim laboris voluptate tempor velit. Amet id proident velit in occaecat irure nostrud deserunt non laboris minim elit dolore. In mollit consectetur elit nulla qui consequat culpa. Nulla aliquip consequat non exercitation est.",
    registered: "Wednesday, November 13, 2019 9:30 PM",
    latitude: "35.26918",
    longitude: "132.457101",
    tags: ["consectetur", "ut", "nulla", "nulla", "eiusmod"],
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    friends: [
      {
        id: 0,
        name: "George Hudson",
      },
      {
        id: 1,
        name: "Burks Flowers",
      },
      {
        id: 2,
        name: "Oneal Skinner",
      },
    ],
    greeting: "Hello, Gonzalez! You have 5 unread messages.",
    favoriteFruit: "strawberry",
  },
  {
    _id: "5ed82ef25452665048b6b7f5",
    index: 3,
    guid: "5e479b9b-2e25-46b6-ba99-c340e8a7b086",
    isActive: false,
    balance: "$2,036.06",
    picture: "http://placehold.it/32x32",
    age: 39,
    eyeColor: "brown",
    name: {
      first: "Sue",
      last: "Andrews",
    },
    company: "HALAP",
    email: "sue.andrews@halap.co.uk",
    phone: "+1 (885) 441-3440",
    address: "522 Pineapple Street, Trinway, Louisiana, 9842",
    about:
      "Ea consectetur reprehenderit laborum sunt tempor id dolore. Quis laborum tempor quis tempor mollit mollit tempor magna. Anim et adipisicing laborum aliquip et do dolor tempor adipisicing voluptate eiusmod eu cillum. Minim ad esse officia excepteur velit sint exercitation deserunt eu ea enim.",
    registered: "Friday, April 27, 2018 1:03 AM",
    latitude: "51.430465",
    longitude: "-103.385045",
    tags: ["deserunt", "dolore", "consectetur", "nisi", "aliquip"],
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    friends: [
      {
        id: 0,
        name: "Burt Lawrence",
      },
      {
        id: 1,
        name: "Eaton Armstrong",
      },
      {
        id: 2,
        name: "Barr Gay",
      },
    ],
    greeting: "Hello, Sue! You have 6 unread messages.",
    favoriteFruit: "strawberry",
  },
  {
    _id: "5ed82ef27d293e85e83a594a",
    index: 4,
    guid: "63359783-1644-4f6b-815a-6c7af344903b",
    isActive: false,
    balance: "$2,893.62",
    picture: "http://placehold.it/32x32",
    age: 34,
    eyeColor: "brown",
    name: {
      first: "Pacheco",
      last: "Francis",
    },
    company: "EURON",
    email: "pacheco.francis@euron.name",
    phone: "+1 (970) 435-2952",
    address: "677 Hendrickson Street, Wheaton, Kentucky, 7956",
    about:
      "Irure nulla aliquip mollit et sunt cupidatat elit quis enim in amet amet sunt cupidatat. Amet duis exercitation quis cupidatat ex reprehenderit pariatur aute sint excepteur laboris irure eiusmod. Ut dolore voluptate duis duis laborum aliqua Lorem id officia nisi velit aute exercitation veniam. Elit excepteur dolore ex deserunt cillum ex voluptate amet consectetur enim qui cillum voluptate qui.",
    registered: "Tuesday, February 18, 2020 12:45 PM",
    latitude: "50.011426",
    longitude: "-54.178626",
    tags: ["proident", "ea", "ut", "tempor", "cupidatat"],
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    friends: [
      {
        id: 0,
        name: "Pate Anderson",
      },
      {
        id: 1,
        name: "Cervantes Duran",
      },
      {
        id: 2,
        name: "Castaneda Kennedy",
      },
    ],
    greeting: "Hello, Pacheco! You have 6 unread messages.",
    favoriteFruit: "apple",
  },
  {
    _id: "5ed82ef267d0f0cf82b8f517",
    index: 5,
    guid: "15ed0c78-63a4-4cf3-a2b8-7d8c03648c3f",
    isActive: true,
    balance: "$1,429.82",
    picture: "http://placehold.it/32x32",
    age: 30,
    eyeColor: "green",
    name: {
      first: "Maureen",
      last: "Hawkins",
    },
    company: "QUINEX",
    email: "maureen.hawkins@quinex.com",
    phone: "+1 (886) 582-3615",
    address: "356 Jamison Lane, Waterloo, Minnesota, 9435",
    about:
      "Anim laboris occaecat non minim velit exercitation officia dolor cillum occaecat ex sit. Nostrud nostrud aliqua deserunt eiusmod deserunt laborum et. Minim adipisicing exercitation officia consequat labore sit qui labore commodo incididunt do ut pariatur ullamco.",
    registered: "Sunday, July 22, 2018 3:50 PM",
    latitude: "29.974397",
    longitude: "152.853901",
    tags: ["veniam", "amet", "ea", "aliquip", "incididunt"],
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    friends: [
      {
        id: 0,
        name: "Newman Dejesus",
      },
      {
        id: 1,
        name: "Leila Henry",
      },
      {
        id: 2,
        name: "Reyna Randolph",
      },
    ],
    greeting: "Hello, Maureen! You have 7 unread messages.",
    favoriteFruit: "strawberry",
  },
  {
    _id: "5ed82ef2791389789bf53a67",
    index: 6,
    guid: "b5ca7c19-4ef3-4325-b4aa-3c2ef3f57269",
    isActive: false,
    balance: "$2,836.19",
    picture: "http://placehold.it/32x32",
    age: 22,
    eyeColor: "brown",
    name: {
      first: "Mclean",
      last: "Meadows",
    },
    company: "PROXSOFT",
    email: "mclean.meadows@proxsoft.net",
    phone: "+1 (976) 491-2278",
    address: "312 Degraw Street, Hendersonville, Rhode Island, 6665",
    about:
      "Ad labore aliquip exercitation enim velit dolor est proident voluptate sunt esse. Laboris consequat Lorem cillum proident pariatur officia velit exercitation ad commodo minim. Est qui sunt officia Lorem enim aliqua magna eiusmod sint fugiat. Culpa aliquip cillum fugiat ad duis qui deserunt excepteur.",
    registered: "Tuesday, June 12, 2018 3:34 AM",
    latitude: "-65.319945",
    longitude: "-29.123728",
    tags: ["laborum", "laborum", "elit", "enim", "elit"],
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    friends: [
      {
        id: 0,
        name: "Alyce Shepherd",
      },
      {
        id: 1,
        name: "Taylor Boyd",
      },
      {
        id: 2,
        name: "Arnold Hobbs",
      },
    ],
    greeting: "Hello, Mclean! You have 8 unread messages.",
    favoriteFruit: "banana",
  },
  {
    _id: "5ed82ef2a0427c3355d2dab3",
    index: 7,
    guid: "a5f024c0-5889-4cd2-b3cf-4bfbf79ef125",
    isActive: false,
    balance: "$1,366.81",
    picture: "http://placehold.it/32x32",
    age: 21,
    eyeColor: "brown",
    name: {
      first: "Floyd",
      last: "Torres",
    },
    company: "MOBILDATA",
    email: "floyd.torres@mobildata.org",
    phone: "+1 (888) 583-3721",
    address: "871 Kosciusko Street, Eggertsville, Connecticut, 1172",
    about:
      "Duis dolore aute sunt culpa veniam nulla. Mollit quis sunt sunt culpa nostrud dolore incididunt elit nisi duis id ullamco ea ad. Cillum adipisicing elit veniam nisi dolore ex sit. Fugiat labore irure veniam anim consequat exercitation ex cillum id ad ullamco. Commodo non anim voluptate nostrud reprehenderit elit adipisicing reprehenderit reprehenderit quis qui incididunt consectetur.",
    registered: "Friday, October 14, 2016 12:36 AM",
    latitude: "-19.365632",
    longitude: "91.682311",
    tags: ["nostrud", "enim", "qui", "elit", "aliquip"],
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    friends: [
      {
        id: 0,
        name: "Opal Ball",
      },
      {
        id: 1,
        name: "Karina Pollard",
      },
      {
        id: 2,
        name: "Dillard Lucas",
      },
    ],
    greeting: "Hello, Floyd! You have 5 unread messages.",
    favoriteFruit: "strawberry",
  },
  {
    _id: "5ed82ef2c0222eed8baf2686",
    index: 8,
    guid: "dcfa8eff-3e50-4302-a9fa-2e5f2ae193c4",
    isActive: true,
    balance: "$1,186.04",
    picture: "http://placehold.it/32x32",
    age: 28,
    eyeColor: "green",
    name: {
      first: "Sonya",
      last: "Wooten",
    },
    company: "HINWAY",
    email: "sonya.wooten@hinway.ca",
    phone: "+1 (988) 595-2446",
    address: "953 Arlington Place, Alamo, Mississippi, 9552",
    about:
      "Consectetur et do mollit consequat sit culpa incididunt dolor nisi. Anim consectetur pariatur sit amet ipsum. Consequat quis enim exercitation tempor proident cillum duis. Lorem dolore occaecat nostrud cupidatat laborum sint. Tempor officia ex adipisicing adipisicing qui amet in eiusmod nulla proident sint occaecat aliquip.",
    registered: "Saturday, September 26, 2015 10:58 AM",
    latitude: "34.037136",
    longitude: "140.648455",
    tags: ["adipisicing", "quis", "sit", "cillum", "consectetur"],
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    friends: [
      {
        id: 0,
        name: "Lynnette Hyde",
      },
      {
        id: 1,
        name: "Isabelle Jennings",
      },
      {
        id: 2,
        name: "Heath Jacobs",
      },
    ],
    greeting: "Hello, Sonya! You have 9 unread messages.",
    favoriteFruit: "apple",
  },
];

function getUsers(query = null) {
  return users;
}

function getUser(id) {
  const user = users.find((u) => u._id === id);
  return user;
}

function addNewUser(user) {
  const newUser = {
    ...user,
    _id: String(Math.random()),
  };
  users.push(newUser);
  return newUser;
}

module.exports = {
  getUser,
  getUsers,
  addNewUser,
};
