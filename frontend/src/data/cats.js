import absolutecat from "../assets/cats/absolutecat.jpg"
import arabcat from "../assets/cats/arabcat.jpg"
import aurameowl from "../assets/cats/aurameowl.jpg"
import bananacat from "../assets/cats/bananacat.jpg"
import brainrotcat from "../assets/cats/brainrotcat.jpg"
import burgercat from "../assets/cats/burgercat.jpg"
import businesscat from "../assets/cats/businesscat.jpg"
import catwithoranges from "../assets/cats/catwithoranges.jpg"
import chineesecat from "../assets/cats/chineesecat.jpg"
import christmascat from "../assets/cats/christmascat.jpg"
import christmasmeowl from "../assets/cats/christmasmeowl.jpg"
import crazycat from "../assets/cats/crazycat.jpg"
import deercat from "../assets/cats/deercat.jpg"
import fbicat from "../assets/cats/fbicat.jpg"
import fnafcat from "../assets/cats/fnafcat.jpg"
import frenchcat from "../assets/cats/frenchcat.jpg"
import glorycat from "../assets/cats/glorycat.jpg"
import jogacat from "../assets/cats/jogacat.jpg"
import knightcat from "../assets/cats/knightcat.jpg"
import mccat from "../assets/cats/mccat.jpg"
import oliviecat from "../assets/cats/oliviecat.jpg"
import punkcat from "../assets/cats/punkcat.jpg"
import rabbitcat from "../assets/cats/rabbitcat.jpg"
import richcat from "../assets/cats/richcat.jpg"
import sk8cat from "../assets/cats/sk8cat.jpg"
import smokingcat from "../assets/cats/smokingcat.jpg"
import suncat from "../assets/cats/suncat.jpg"
import swagcat from "../assets/cats/swagcat.jpg"
import sybaucat from "../assets/cats/sybaucat.jpg"
import warcat from "../assets/cats/warcat.jpg"



const products = [
  {
    productId: 1,
    name: "Absolute Cat",
    description: "Absolute!",
    price: 15.0,
    popularity: "85",
    imageUrl: absolutecat,
  },
  {
    productId: 2,
    name: "Arab Cat",
    description: "Kebab!",
    price: 4.5,
    popularity: "40",
    imageUrl: arabcat,
  },
  {
    productId: 3,
    name: "Aura Meowl",
    description: "💀💀💀AURA💀💀💀",
    price: 100.0,
    popularity: "98",
    imageUrl: aurameowl,
  },
  {
    productId: 4,
    name: "Banana Cat",
    description: "banana",
    price: 5.0,
    popularity: "72",
    imageUrl: bananacat,
  },
  {
    productId: 5,
    name: "Brainrot Cat",
    description: "Crazy",
    price: 7.5,
    popularity: "88",
    imageUrl: brainrotcat,
  },
  {
    productId: 6,
    name: "Burger Cat",
    description: "Catsburger!",
    price: 2.0,
    popularity: "79",
    imageUrl: burgercat,
  },
  {
    productId: 7,
    name: "Business Cat",
    description: "Hey Business? - Yeah, yeah, money",
    price: 8.0,
    popularity: "55",
    imageUrl: businesscat,
  },
  {
    productId: 8,
    name: "Cat With Oranges",
    description: "Christmas Vibe",
    price: 3.0,
    popularity: "52",
    imageUrl: catwithoranges,
  },
  {
    productId: 9,
    name: "Chinees Cat",
    description: "with noodles",
    price: 8.0,
    popularity: "100",
    imageUrl: chineesecat,
  },
  {
    productId: 10,
    name: "Christmas Cat",
    description: "Merry Christmas",
    price: 5.0,
    popularity: "65",
    imageUrl:christmascat,
  },
  {
    productId: 11,
    name: "Crazy Cat",
    description: "That's crazy",
    price: 9.0,
    popularity: "98",
    imageUrl: crazycat,
  },
  {
    productId: 12,
    name: "Deer Cat",
    description: "Deer",
    price: 5.0,
    popularity: "70",
    imageUrl: deercat,
  },
  {
    productId: 13,
    name: "FBI Cat",
    description: "Secret Agent",
    price: 5.0,
    popularity: "70",
    imageUrl: fbicat,
  },
  {
    productId: 14,
    name: "Fnaf Cat",
    description: "Scary",
    price: 5.0,
    popularity: "50",
    imageUrl: fnafcat,
  },
  {
    productId: 15,
    name: "French Cat",
    description: "with baguette",
    price: 10.0,
    popularity: "99",
    imageUrl: frenchcat,
  },
  {
    productId: 16,
    name: "Glory Cat",
    description: "King",
    price: 9.0,
    popularity: "99",
    imageUrl: glorycat,
  },
  {
    productId: 17,
    name: "Joga Cat",
    description: "Meow",
    price: 6.0,
    popularity: "60",
    imageUrl: jogacat,
  },
  {
    productId: 18,
    name: "Knight Cat",
    description: "Protector",
    price: 4.0,
    popularity: "50",
    imageUrl: knightcat,
  },
  {
    productId: 19,
    name: "McCat",
    description: "Yo",
    price: 6.0,
    popularity: "60",
    imageUrl: mccat,
  },
  {
    productId: 20,
    name: "Olivie Cat",
    description: "Yum",
    price: 6.0,
    popularity: "60",
    imageUrl: oliviecat,
  },
  {
    productId: 21,
    name: "Punk Cat",
    description: "meow",
    price: 6.0,
    popularity: "60",
    imageUrl: punkcat,
  },
  {
    productId: 22,
    name: "Rabbit Cat",
    description: "Likes carrots",
    price: 6.0,
    popularity: "60",
    imageUrl: rabbitcat,
  },
  {
    productId: 23,
    name: "Rich Cat",
    description: "money!",
    price: 6.0,
    popularity: "60",
    imageUrl: richcat,
  },
  {
    productId: 24,
    name: "Sk8 Cat",
    description: "Meowk",
    price: 6.0,
    popularity: "60",
    imageUrl: sk8cat,
  },
  {
    productId: 25,
    name: "Smoking Cat",
    description: "okak",
    price: 6.0,
    popularity: "60",
    imageUrl: smokingcat,
  },
  {
    productId: 26,
    name: "Sun Cat",
    description: "Loves Sun",
    price: 6.0,
    popularity: "60",
    imageUrl: suncat,
  },
  {
    productId: 27,
    name: "SWAG Cat",
    description: "Style",
    price: 6.0,
    popularity: "60",
    imageUrl: swagcat,
  },
  {
    productId: 28,
    name: "Sybau Cat",
    description: "SYBAU🤞",
    price: 6.0,
    popularity: "60",
    imageUrl: sybaucat,
  },
  {
    productId: 29,
    name: "War Cat",
    description: "💀",
    price: 6.0,
    popularity: "60",
    imageUrl: warcat,
  },
  {
    productId: 30,
    name: "Christmase Meowl",
    description: "Happy Holidays!",
    price: 6.0,
    popularity: "60",
    imageUrl: christmasmeowl,
  },
];

export default products;