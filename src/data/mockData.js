import { tokens } from "../theme";

export const mockDataTeam = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    age: 35,
    phone: "(665)121-5454",
    access: "admin",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    age: 42,
    phone: "(421)314-2288",
    access: "manager",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    age: 45,
    phone: "(422)982-6739",
    access: "user",
  },

];

export const energyData = [
  {
    id: 1,
    device: "Refrigerator",
    deviceType: "Appliance",
    energyCost: "30 PLN/month",
    maxPower: "200 W",
    status: "ON",
  },
  {
    id: 2,
    device: "Air Conditioner",
    deviceType: "HVAC",
    energyCost: "120 PLN/month",
    maxPower: "1500 W",
    status: "OFF",
  },
  {
    id: 3,
    device: "LED Bulb",
    deviceType: "Lighting",
    energyCost: "5 PLN/month",
    maxPower: "10 W",
    status: "ON",
  },
  {
    id: 4,
    device: "Washing Machine",
    deviceType: "Appliance",
    energyCost: "45 PLN/month",
    maxPower: "500 W",
    status: "OFF",
  },
  {
    id: 5,
    device: "Television",
    deviceType: "Electronics",
    energyCost: "15 PLN/month",
    maxPower: "150 W",
    status: "ON",
  },
  {
    id: 6,
    device: "Laptop",
    deviceType: "Electronics",
    energyCost: "10 PLN/month",
    maxPower: "65 W",
    status: "OFF",
  },
  {
    id: 7,
    device: "Microwave Oven",
    deviceType: "Appliance",
    energyCost: "25 PLN/month",
    maxPower: "1200 W",
    status: "OFF",
  },
  {
    id: 8,
    device: "Heater",
    deviceType: "HVAC",
    energyCost: "80 PLN/month",
    maxPower: "1800 W",
    status: "ON",
  },
  {
    id: 9,
    device: "Desktop PC",
    deviceType: "Electronics",
    energyCost: "20 PLN/month",
    maxPower: "400 W",
    status: "ON",
  },
  {
    id: 10,
    device: "Ceiling Fan",
    deviceType: "HVAC",
    energyCost: "8 PLN/month",
    maxPower: "75 W",
    status: "OFF",
  },
]

export const mockLineData = [
  {
    id: "japan",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "plane",
        y: 101,
      },
      {
        x: "helicopter",
        y: 75,
      },
      {
        x: "boat",
        y: 36,
      },
      {
        x: "train",
        y: 216,
      },
      {
        x: "subway",
        y: 35,
      },
      {
        x: "bus",
        y: 236,
      },
      {
        x: "car",
        y: 88,
      },
      {
        x: "moto",
        y: 232,
      },
      {
        x: "bicycle",
        y: 281,
      },
      {
        x: "horse",
        y: 1,
      },
      {
        x: "skateboard",
        y: 35,
      },
      {
        x: "others",
        y: 14,
      },
    ],
  },
  {
    id: "france",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "plane",
        y: 212,
      },
      {
        x: "helicopter",
        y: 190,
      },
      {
        x: "boat",
        y: 270,
      },
      {
        x: "train",
        y: 9,
      },
      {
        x: "subway",
        y: 75,
      },
      {
        x: "bus",
        y: 175,
      },
      {
        x: "car",
        y: 33,
      },
      {
        x: "moto",
        y: 189,
      },
      {
        x: "bicycle",
        y: 97,
      },
      {
        x: "horse",
        y: 87,
      },
      {
        x: "skateboard",
        y: 299,
      },
      {
        x: "others",
        y: 251,
      },
    ],
  },
  {
    id: "us",
    color: tokens("dark").redAccent[200],
    data: [
      {
        x: "plane",
        y: 191,
      },
      {
        x: "helicopter",
        y: 136,
      },
      {
        x: "boat",
        y: 91,
      },
      {
        x: "train",
        y: 190,
      },
      {
        x: "subway",
        y: 211,
      },
      {
        x: "bus",
        y: 152,
      },
      {
        x: "car",
        y: 189,
      },
      {
        x: "moto",
        y: 152,
      },
      {
        x: "bicycle",
        y: 8,
      },
      {
        x: "horse",
        y: 197,
      },
      {
        x: "skateboard",
        y: 107,
      },
      {
        x: "others",
        y: 170,
      },
    ],
  },
];

export const mockTemperatureData = [
  {
    id: "outdoor",
    color: tokens("dark").greenAccent[500],
    data: [
      { x: "January", y: 5 },
      { x: "February", y: 6 },
      { x: "March", y: 10 },
      { x: "April", y: 15 },
      { x: "May", y: 20 },
      { x: "June", y: 24 },
      { x: "July", y: 28 },
      { x: "August", y: 30 },
      { x: "September", y: 26 },
      { x: "October", y: 20 },
      { x: "November", y: 14 },
      { x: "December", y: 8 },
    ],
  },
  {
    id: "indoor",
    color: tokens("dark").blueAccent[300],
    data: [
      { x: "January", y: 20 },
      { x: "February", y: 20 },
      { x: "March", y: 21 },
      { x: "April", y: 22 },
      { x: "May", y: 23 },
      { x: "June", y: 24 },
      { x: "July", y: 24 },
      { x: "August", y: 24 },
      { x: "September", y: 23 },
      { x: "October", y: 22 },
      { x: "November", y: 21 },
      { x: "December", y: 20 },
    ],
  },
];



export const mockDataApp = [
  {
    id: 1,
    name: "Jan Kowalski",
    email: "janKowalski@gmail.com",
    password: "123456",
    role: "user",
    creationDate: "2024-16-11"
  },
  {
    id: 2,
    name: "Piotr Bóbr",
    email: "piotrBobr@interia.pl",
    password: "hasło",
    role: "admin",
    creationDate: "2020-04-20"
  },
  {
    id: 3,
    name: "Anna Nowak",
    email: "annaNowak@gmail.com",
    password: "password123",
    role: "user",
    creationDate: "2022-03-14"
  },
  {
    id: 4,
    name: "Kamil Kowalczyk",
    email: "kamilKowalczyk@wp.pl",
    password: "kamil123",
    role: "admin",
    creationDate: "2021-07-12"
  },
  {
    id: 5,
    name: "Maria Wiśniewska",
    email: "mariaWisniewska@o2.pl",
    password: "wiśnia2024",
    role: "user",
    creationDate: "2024-01-01"
  },
  {
    id: 6,
    name: "Adam Zieliński",
    email: "adamZielinski@gmail.com",
    password: "zielonyLisc",
    role: "user",
    creationDate: "2023-10-15"
  },
  {
    id: 7,
    name: "Joanna Lewandowska",
    email: "joannaLewandowska@interia.pl",
    password: "joasia321",
    role: "user",
    creationDate: "2020-08-24"
  },
  {
    id: 8,
    name: "Marek Chmielewski",
    email: "marekChmiel@o2.pl",
    password: "chmiel2021",
    role: "user",
    creationDate: "2021-06-10"
  },
  {
    id: 9,
    name: "Agnieszka Pawlak",
    email: "agnieszkaP@wp.pl",
    password: "agnieszka89",
    role: "user",
    creationDate: "2023-12-05"
  },
  {
    id: 10,
    name: "Tomasz Wojciechowski",
    email: "tomaszWojciechowski@gmail.com",
    password: "tomek321",
    role: "user",
    creationDate: "2022-09-30"
  },
  {
    id: 11,
    name: "Katarzyna Kwiatkowska",
    email: "katarzynaKw@o2.pl",
    password: "kwiat123",
    role: "user",
    creationDate: "2024-02-14"
  },
  {
    id: 12,
    name: "Paweł Król",
    email: "pawelKrol@wp.pl",
    password: "krol1234",
    role: "user",
    creationDate: "2020-05-11"
  }
];








export const mockDataContacts = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    age: 35,
    phone: "(665)121-5454",
    address: "0912 Won Street, Alabama, SY 10001",
    city: "New York",
    zipCode: "10001",
    registrarId: 123512,
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    age: 42,
    phone: "(421)314-2288",
    address: "1234 Main Street, New York, NY 10001",
    city: "New York",
    zipCode: "13151",
    registrarId: 123512,
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    age: 45,
    phone: "(422)982-6739",
    address: "3333 Want Blvd, Estanza, NAY 42125",
    city: "New York",
    zipCode: "87281",
    registrarId: 4132513,
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    age: 16,
    phone: "(921)425-6742",
    address: "1514 Main Street, New York, NY 22298",
    city: "New York",
    zipCode: "15551",
    registrarId: 123512,
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    age: 31,
    phone: "(421)445-1189",
    address: "11122 Welping Ave, Tenting, CD 21321",
    city: "Tenting",
    zipCode: "14215",
    registrarId: 123512,
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    age: 150,
    phone: "(232)545-6483",
    address: "1234 Canvile Street, Esvazark, NY 10001",
    city: "Esvazark",
    zipCode: "10001",
    registrarId: 123512,
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    age: 44,
    phone: "(543)124-0123",
    address: "22215 Super Street, Everting, ZO 515234",
    city: "Evertin",
    zipCode: "51523",
    registrarId: 123512,
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    age: 36,
    phone: "(222)444-5555",
    address: "4123 Ever Blvd, Wentington, AD 142213",
    city: "Esteras",
    zipCode: "44215",
    registrarId: 512315,
  },
  {
    id: 9,
    name: "Harvey Roxie",
    email: "harveyroxie@gmail.com",
    age: 65,
    phone: "(444)555-6239",
    address: "51234 Avery Street, Cantory, ND 212412",
    city: "Colunza",
    zipCode: "111234",
    registrarId: 928397,
  },
  {
    id: 10,
    name: "Enteri Redack",
    email: "enteriredack@gmail.com",
    age: 42,
    phone: "(222)444-5555",
    address: "4123 Easer Blvd, Wentington, AD 142213",
    city: "Esteras",
    zipCode: "44215",
    registrarId: 533215,
  },
  {
    id: 11,
    name: "Steve Goodman",
    email: "stevegoodmane@gmail.com",
    age: 11,
    phone: "(444)555-6239",
    address: "51234 Fiveton Street, CunFory, ND 212412",
    city: "Colunza",
    zipCode: "1234",
    registrarId: 92197,
  },
];

export const energyConsumptionData = [
  {
    month: "January",
    consumption: 350,
    consumptionColor: "hsl(229, 70%, 50%)",
    livingRoom: 100,
    bedroom: 80,
    kitchen: 90,
    bathroom: 80,
  },
  {
    month: "February",
    consumption: 300,
    consumptionColor: "hsl(307, 70%, 50%)",
    livingRoom: 90,
    bedroom: 70,
    kitchen: 80,
    bathroom: 60,
  },
  {
    month: "March",
    consumption: 400,
    consumptionColor: "hsl(72, 70%, 50%)",
    livingRoom: 120,
    bedroom: 100,
    kitchen: 100,
    bathroom: 80,
  },
  {
    month: "April",
    consumption: 450,
    consumptionColor: "hsl(257, 70%, 50%)",
    livingRoom: 130,
    bedroom: 110,
    kitchen: 120,
    bathroom: 90,
  },
  {
    month: "May",
    consumption: 500,
    consumptionColor: "hsl(190, 70%, 50%)",
    livingRoom: 140,
    bedroom: 120,
    kitchen: 130,
    bathroom: 110,
  },
  {
    month: "June",
    consumption: 550,
    consumptionColor: "hsl(208, 70%, 50%)",
    livingRoom: 150,
    bedroom: 130,
    kitchen: 140,
    bathroom: 130,
  },
  {
    month: "July",
    consumption: 600,
    consumptionColor: "hsl(87, 70%, 50%)",
    livingRoom: 160,
    bedroom: 140,
    kitchen: 150,
    bathroom: 150,
  },
  {
    month: "August",
    consumption: 580,
    consumptionColor: "hsl(141, 70%, 50%)",
    livingRoom: 155,
    bedroom: 135,
    kitchen: 145,
    bathroom: 145,
  },
  {
    month: "September",
    consumption: 520,
    consumptionColor: "hsl(224, 70%, 50%)",
    livingRoom: 140,
    bedroom: 120,
    kitchen: 130,
    bathroom: 130,
  },
  {
    month: "October",
    consumption: 480,
    consumptionColor: "hsl(334, 70%, 50%)",
    livingRoom: 130,
    bedroom: 110,
    kitchen: 120,
    bathroom: 120,
  },
  {
    month: "November",
    consumption: 400,
    consumptionColor: "hsl(54, 70%, 50%)",
    livingRoom: 110,
    bedroom: 90,
    kitchen: 100,
    bathroom: 100,
  },
  {
    month: "December",
    consumption: 420,
    consumptionColor: "hsl(285, 70%, 50%)",
    livingRoom: 115,
    bedroom: 95,
    kitchen: 105,
    bathroom: 105,
  },
];



export const mockDataInvoices = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    cost: "21.24",
    phone: "(665)121-5454",
    date: "03/12/2022",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    cost: "1.24",
    phone: "(421)314-2288",
    date: "06/15/2021",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    cost: "11.24",
    phone: "(422)982-6739",
    date: "05/02/2022",
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    cost: "80.55",
    phone: "(921)425-6742",
    date: "03/21/2022",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    cost: "1.24",
    phone: "(421)445-1189",
    date: "01/12/2021",
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    cost: "63.12",
    phone: "(232)545-6483",
    date: "11/02/2022",
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    cost: "52.42",
    phone: "(543)124-0123",
    date: "02/11/2022",
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    cost: "21.24",
    phone: "(222)444-5555",
    date: "05/02/2021",
  },
];

export const mockTransactions = [
  {
    txId: "01e4dsa",
    user: "johndoe",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.45",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "51034szv",
    user: "goodmanave",
    date: "2022-11-05",
    cost: "200.95",
  },
  {
    txId: "0a123sb",
    user: "stevebower",
    date: "2022-11-02",
    cost: "13.55",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "120s51a",
    user: "wootzifer",
    date: "2019-04-15",
    cost: "24.20",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.45",
  },
];

