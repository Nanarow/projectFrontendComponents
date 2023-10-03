import {
  Boardgame,
  GameBill,
  Bill,
  Room,
  RoomBill,
  RoomType,
  User,
  Member,
  MemberType,
  MemberBill,
} from "../interfaces";

export const tempRoomType: RoomType[] = [
  {
    id: 0,
    name: "",
    capacity: "",
    price: 0,
  },
];

// export const BoardgameList: Boardgame[] = [
//   {
//     id: 0,
//     title: "Exploding Kittens Original",
//     numberOfPlayers: "2 - 5",
//     minAge: "7+",
//     playTime: 10,
//     genre: "Animals Card Game Humor",
//     rentalPrice: 50, // 5%
//     quantityInStock: 18,
//     quantityInRental: 2,
//     deposit: 200, //20%
//     src: "https://www.gameology.com.au/cdn/shop/products/8_a5e882b8-5842-4c06-8dd5-51c10fedf074_590x.progressive.jpg?v=1624577317",
//     tutorial: "https://youtu.be/rcVpTb-iPoQ",
//   },
//   {
//     id: 1,
//     title: "Smash Up The Bigger Geekier Box",
//     numberOfPlayers: "2 - 4",
//     minAge: "12+",
//     playTime: 45,
//     genre: "Card Game Fantasy Horror Humor Science Fiction",
//     rentalPrice: 117,
//     quantityInStock: 1,
//     quantityInRental: 1,
//     deposit: 467,
//     src: "https://www.gameology.com.au/cdn/shop/files/1e678_348x.progressive.jpg?v=1695347714",
//     tutorial: "https://youtu.be/7rgWdXy0HOA?si=qd2uBPnJkgnmfU1O",
//   },
//   {
//     id: 2,
//     title: "Flamecraft",
//     numberOfPlayers: "1 - 5",
//     minAge: "10+",
//     playTime: 60,
//     genre: "Animals Card Game City Building Fantasy",
//     rentalPrice: 125,
//     quantityInStock: 3,
//     quantityInRental: 2,
//     deposit: 503,
//     src: "https://www.gameology.com.au/cdn/shop/products/5f59f_348x.progressive.jpg?v=1665814719",
//     tutorial: "https://youtu.be/c6NHtw-C-Ro",
//   },
//   {
//     id: 3,
//     title: "Zombicide White Death",
//     numberOfPlayers: "1 - 6+",
//     minAge: "14+",
//     playTime: 30,
//     genre: "Adventure Fantasy Fighting Horror Medieval Miniatures",
//     rentalPrice: 302,
//     quantityInStock: 0,
//     quantityInRental: 0,
//     deposit: 1208,
//     src: "https://www.gameology.com.au/cdn/shop/files/913a7_348x.progressive.jpg?v=1695300522",
//     tutorial: "https://www.youtube.com/watch?v=Z9Y2j4-E_K0",
//   },
//   {
//     id: 4,
//     title: "Cascadia",
//     numberOfPlayers: "1 - 4",
//     minAge: "10+",
//     playTime: 30,
//     genre: "Animals Puzzle",
//     rentalPrice: 104,
//     quantityInStock: 10,
//     quantityInRental: 3,
//     deposit: 417,
//     src: "https://www.gameology.com.au/cdn/shop/products/22a8d_348x.progressive.jpg?v=1654309086",
//     tutorial: "https://youtu.be/w-r_TekunQI",
//   },
//   {
//     id: 5,
//     title: "Everdell",
//     numberOfPlayers: "1 - 4",
//     minAge: "13+",
//     playTime: 40,
//     genre: "Animals Card Game City Building Fantasy",
//     rentalPrice: 169,
//     quantityInStock: 10,
//     quantityInRental: 7,
//     deposit: 676,
//     src: "https://www.gameology.com.au/cdn/shop/products/1_68de69f7-dcb3-4a7e-b4c4-b7178816643e_348x.progressive.jpg?v=1569177494",
//     tutorial: "https://youtu.be/1b9zQz7COxs",
//   },
//   {
//     id: 6,
//     title: "Root",
//     numberOfPlayers: "2 - 4",
//     minAge: "10+",
//     playTime: 60,
//     genre: "Animals Fantasy Wargame",
//     rentalPrice: 135,
//     quantityInStock: 10,
//     quantityInRental: 10,
//     deposit: 539,
//     src: "https://www.gameology.com.au/cdn/shop/products/2_6fb8f36d-8762-43bb-82e6-489f3d59d9ca_348x.progressive.JPG?v=1545198116",
//     tutorial: "https://youtu.be/G08TDwBbV7o",
//   },
//   {
//     id: 7,
//     title: "Exit the Game Advent Calendar - The Silent Storm",
//     numberOfPlayers: "1 - 4",
//     minAge: "10+",
//     playTime: 45,
//     genre: "Puzzle",
//     rentalPrice: 94,
//     quantityInStock: 0,
//     quantityInRental: 0,
//     deposit: 377,
//     src: "https://www.gameology.com.au/cdn/shop/products/85f51_295x.progressive.jpg?v=1677913320",
//     tutorial: "https://www.youtube.com/watch?v=eO1DrBfQzVg",
//   },
//   {
//     id: 8,
//     title: "Secret Hitler",
//     numberOfPlayers: "2 - 99",
//     minAge: "13+",
//     playTime: 45,
//     genre: "Bluffing Card Game Deduction Humor Party Game",
//     rentalPrice: 127,
//     quantityInStock: 10,
//     quantityInRental: 8,
//     deposit: 489,
//     src: "https://www.gameology.com.au/cdn/shop/products/1_18469626-e36b-499d-be31-1272d2a6fe13_348x.progressive.JPG?v=1638144053",
//     tutorial: "https://youtu.be/mbGXIDYdtas",
//   },
//   {
//     id: 9,
//     title: "Carcassonne",
//     numberOfPlayers: "2 - 5",
//     minAge: "7+",
//     playTime: 30,
//     genre: "City Building Medieval",
//     rentalPrice: 88,
//     quantityInStock: 10,
//     quantityInRental: 2,
//     deposit: 352,
//     src: "https://www.gameology.com.au/cdn/shop/files/Carcassonne3rdEdition_GameBox_348x.progressive.jpg?v=1683846522",
//     tutorial: "https://youtu.be/CFvJUb-Ia1A",
//   },
//   {
//     id: 10,
//     title: "Azul",
//     numberOfPlayers: "2 - 4",
//     minAge: "8+",
//     playTime: 30,
//     genre: "Abstract Strategy",
//     rentalPrice: 99,
//     quantityInStock: 10,
//     quantityInRental: 10,
//     deposit: 395,
//     src: "https://www.gameology.com.au/cdn/shop/products/1_afe2c3ce-be60-44f3-9243-c5446389ba02_348x.progressive.jpg?v=1568357696",
//     tutorial: "https://youtu.be/NK73VT0oFZM",
//   },
//   {
//     id: 11,
//     title: "Settlers of Catan 5th Edition",
//     numberOfPlayers: "5 - 6",
//     minAge: "10+",
//     playTime: 120,
//     genre: "Negotiation",
//     rentalPrice: 66, // 5%
//     quantityInStock: 10,
//     quantityInRental: 4,
//     deposit: 266, //20%
//     src: "https://www.gameology.com.au/cdn/shop/products/C_CATAN_BASE_5-6EXT_SS_348x.progressive.png.jpg?v=1519900511",
//     tutorial: "https://youtu.be/IHETxD99c4Q",
//   },
//   {
//     id: 12,
//     title: "7 Wonders Duel",
//     numberOfPlayers: "2 - 2",
//     minAge: "10+",
//     playTime: 30,
//     genre: "Card Game City Building Economic",
//     rentalPrice: 66,
//     quantityInStock: 10,
//     quantityInRental: 1,
//     deposit: 266,
//     src: "https://www.gameology.com.au/cdn/shop/products/J2-2_7WONDDUEL_SH_348x.progressive.jpg?v=1568357703",
//     tutorial: "https://youtu.be/SxQkMRUvCJ8",
//   },
//   {
//     id: 13,
//     title: "Settlers of Catan 5th Edition Cities & Knights Expansion",
//     numberOfPlayers: "3 - 4",
//     minAge: "12+",
//     playTime: 90,
//     genre: "Medieval Negotiation",
//     rentalPrice: 144,
//     quantityInStock: 10,
//     quantityInRental: 2,
//     deposit: 575,
//     src: "https://www.gameology.com.au/cdn/shop/products/C_CATAN_CITIES_CORE_SH_348x.progressive.png.jpg?v=1519900562",
//     tutorial: "https://youtu.be/pPyUO4E77j8",
//   },
//   {
//     id: 14,
//     title: "One Night Ultimate Werewolf",
//     numberOfPlayers: "3 - 10",
//     minAge: "8+",
//     playTime: 10,
//     genre: "Bluffing Card Game Deduction Horror Party Game",
//     rentalPrice: 68,
//     quantityInStock: 10,
//     quantityInRental: 10,
//     deposit: 273,
//     src: "https://www.gameology.com.au/cdn/shop/products/1_6bc8bcb4-bccd-49eb-953f-32600bd6d91a_348x.progressive.jpg?v=1528540891",
//     tutorial: "https://youtu.be/XsP6LvZQpLk",
//   },
//   {
//     id: 15,
//     title: "Betrayal at House on the Hill",
//     numberOfPlayers: "3 - 6+",
//     minAge: "12+",
//     playTime: 60,
//     genre: "Adventure Exploration Horror Miniatures",
//     rentalPrice: 140,
//     quantityInStock: 6,
//     quantityInRental: 0,
//     deposit: 561,
//     src: "https://www.gameology.com.au/cdn/shop/products/1_48df8bef-4ef2-481a-91ca-80486127a29f_348x.progressive.JPG?v=1568357720",
//     tutorial: "https://www.youtube.com/watch?v=9qkiJQHHRGk",
//   },
//   {
//     id: 16,
//     title: "Wavelength",
//     numberOfPlayers: "2 - 12",
//     minAge: "14+",
//     playTime: 30,
//     genre: "Party Game",
//     rentalPrice: 99,
//     quantityInStock: 10,
//     quantityInRental: 5,
//     deposit: 395,
//     src: "https://www.gameology.com.au/cdn/shop/products/1_34f20051-b47b-426a-82fa-1bd960d83a4d_348x.progressive.jpg?v=1580346791",
//     tutorial: "https://youtu.be/KuL_R60_320",
//   },
//   {
//     id: 17,
//     title: "Disney Villainous Core Game Set Board Game",
//     numberOfPlayers: "2 - 6+",
//     minAge: "10+",
//     playTime: 50,
//     genre: "Card Game Fantasy Medieval Movies / TV / Radio theme Novel-based",
//     rentalPrice: 185,
//     quantityInStock: 10,
//     quantityInRental: 2,
//     deposit: 741,
//     src: "https://www.gameology.com.au/cdn/shop/products/1_277e9c5b-dac3-4b63-aec0-9d346d44d061_348x.progressive.jpg?v=1569311228",
//     tutorial: "https://youtu.be/I1JoAR9icU0",
//   },
//   {
//     id: 18,
//     title: "Mysterium",
//     numberOfPlayers: "2 - 6+",
//     minAge: "10+",
//     playTime: 45,
//     genre: "Deduction Horror Party Game",
//     rentalPrice: 120,
//     quantityInStock: 10,
//     quantityInRental: 3,
//     deposit: 480,
//     src: "https://www.gameology.com.au/cdn/shop/products/1_1306dd56-042b-41cd-a6a4-9f5abd387b9a_348x.progressive.jpg?v=1540461975",
//     tutorial: "https://youtu.be/Bw2Xz9wp4KI",
//   },
//   {
//     id: 19,
//     title: "Dragonwood",
//     numberOfPlayers: "2 - 4",
//     minAge: "8+",
//     playTime: 20,
//     genre: "Adventure Card Game Dice Fantasy",
//     rentalPrice: 43,
//     quantityInStock: 10,
//     quantityInRental: 4,
//     deposit: 172,
//     src: "https://www.gameology.com.au/cdn/shop/products/1_09620b9a-f016-432e-b685-872f12fa29c7_348x.progressive.jpg?v=1528540633",
//     tutorial: "https://youtu.be/GIK81rKyi4I",
//   },
//   {
//     id: 20,
//     title: "Stardew Valley The Board Game",
//     numberOfPlayers: "1 - 4",
//     minAge: "13+",
//     playTime: 45,
//     genre: "Animals",
//     rentalPrice: 135,
//     quantityInStock: 10,
//     quantityInRental: 2,
//     deposit: 539,
//     src: "https://www.gameology.com.au/cdn/shop/files/0_bdf17a68-d3d5-4420-8c7b-d797e6e002bc_348x.progressive.jpg?v=1684904878",
//     tutorial: "https://youtu.be/K62uUalsJTU",
//   },
//   {
//     id: 21,
//     title: "Throw Throw Burrito",
//     numberOfPlayers: "2 - 6",
//     minAge: "7+",
//     playTime: 15,
//     genre: "Card Game Party Game",
//     rentalPrice: 65,
//     quantityInStock: 10,
//     quantityInRental: 0,
//     deposit: 259,
//     src: "https://www.gameology.com.au/cdn/shop/products/1_b9ec45df-9b4f-44bb-9175-e9d998d436a4_348x.progressive.jpg?v=1567132859",
//     tutorial: "https://youtu.be/I4Kq-H902uo",
//   },
//   {
//     id: 22,
//     title: "Arboretum New Edition",
//     numberOfPlayers: "2 - 4",
//     minAge: "8+",
//     playTime: 30,
//     genre: "Bluffing Card Game",
//     rentalPrice: 52, // 5%
//     quantityInStock: 10,
//     quantityInRental: 1,
//     deposit: 208, //20%
//     src: "https://www.gameology.com.au/cdn/shop/products/1_7b4919dd-c232-4a0c-91e4-a0979a0d2093_348x.progressive.jpg?v=1543967377",
//     tutorial: "https://youtu.be/mmiXSOG1BtQ",
//   },
//   {
//     id: 23,
//     title: "D&D Dungeon Mayhem Card Game",
//     numberOfPlayers: "2 - 4",
//     minAge: "8+",
//     playTime: 10,
//     genre: "Card Game Fantasy Fighting",
//     rentalPrice: 32,
//     quantityInStock: 10,
//     quantityInRental: 0,
//     deposit: 129,
//     src: "https://www.gameology.com.au/cdn/shop/products/1_0978ede7-8837-4d81-a74c-81ab6936484f_348x.progressive.jpg?v=1542941031",
//     tutorial: "https://youtu.be/n_TxuCf6ks4",
//   },
// ];
