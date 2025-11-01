import dogeImg from "@/assets/coins/doge.png";
import shibImg from "@/assets/coins/shib.png";
import pepeImg from "@/assets/coins/pepe.png";
import flokiImg from "@/assets/coins/floki.png";
import safemoonImg from "@/assets/coins/safemoon.png";

export interface SubCoin {
  name: string;
  price: string;
  change: number;
}

export interface Coin {
  id: string;
  image: string;
  name: string;
  symbol: string;
  price: string;
  change: number;
  volume: string;
  subCoins: SubCoin[];
}

export const coins: Coin[] = [
  {
    id: "1",
    image: dogeImg,
    name: "Dogecoin",
    symbol: "DOGE",
    price: "$0.08234",
    change: 5.23,
    volume: "$892M",
    subCoins: [
      { name: "Baby Doge", price: "$0.00000234", change: 12.5 },
      { name: "Doge 2.0", price: "$0.00234", change: -3.2 },
      { name: "Super Doge", price: "$0.0523", change: 8.7 },
    ],
  },
  {
    id: "2",
    image: shibImg,
    name: "Shiba Inu",
    symbol: "SHIB",
    price: "$0.00001234",
    change: -2.45,
    volume: "$654M",
    subCoins: [
      { name: "Leash", price: "$0.234", change: 4.2 },
      { name: "Bone", price: "$0.123", change: -1.5 },
      { name: "Shib Classic", price: "$0.00234", change: 15.3 },
    ],
  },
  {
    id: "3",
    image: pepeImg,
    name: "Pepe",
    symbol: "PEPE",
    price: "$0.000234",
    change: 15.67,
    volume: "$423M",
    subCoins: [
      { name: "Pepe 2.0", price: "$0.000123", change: 22.1 },
      { name: "Rare Pepe", price: "$0.00456", change: 9.8 },
      { name: "Lord Pepe", price: "$0.00089", change: -5.2 },
    ],
  },
  {
    id: "4",
    image: flokiImg,
    name: "Floki Inu",
    symbol: "FLOKI",
    price: "$0.00003456",
    change: 8.92,
    volume: "$234M",
    subCoins: [
      { name: "Baby Floki", price: "$0.00000567", change: 18.4 },
      { name: "Floki Viking", price: "$0.00012", change: 6.7 },
      { name: "Floki Moon", price: "$0.00234", change: -2.1 },
    ],
  },
  {
    id: "5",
    image: safemoonImg,
    name: "SafeMoon",
    symbol: "SAFEMOON",
    price: "$0.000567",
    change: -4.32,
    volume: "$178M",
    subCoins: [
      { name: "SafeMoon V2", price: "$0.00123", change: -1.8 },
      { name: "SafeMoon Inu", price: "$0.000234", change: 11.2 },
      { name: "Ultra SafeMoon", price: "$0.000789", change: 3.5 },
    ],
  },
];
