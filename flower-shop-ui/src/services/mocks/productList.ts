import flowerMockImage from "static/images/flowerMock.png";
import flowerMockImage2 from "static/images/flowerMock2.png";
import { Categories } from "utils/enums";

export const productList = [
  {
    category: Categories.Flowers,
    id: 1,
    image: flowerMockImage,
    title: "Baltosios Heleboros",
    price: 3,
  },
  {
    category: Categories.Gifts,
    id: 2,
    image: flowerMockImage2,
    title: "Baltosios Plukės",
    price: 4,
  },
];
