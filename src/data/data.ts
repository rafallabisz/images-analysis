import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import { Image } from 'modules/submitBrand/SubmitBrandTypes';

const images: Image[] = [
  {
    id: 1,
    link: img1,
    brands: [
      {
        id: 1,
        name: 'Adidas',
        checked: false,
      },
      {
        id: 2,
        name: 'Nike',
        checked: false,
      },
      {
        id: 3,
        name: 'Puma',
        checked: false,
      },
      {
        id: 4,
        name: 'Orlen',
        checked: false,
      },
      {
        id: 5,
        name: 'TVP',
        checked: false,
      },
    ],
  },
  {
    id: 2,
    link: img2,
    brands: [
      {
        id: 1,
        name: 'Adidas',
        checked: false,
      },
      {
        id: 2,
        name: 'Nike',
        checked: false,
      },
      {
        id: 3,
        name: 'Puma',
        checked: false,
      },
      {
        id: 4,
        name: 'Orlen',
        checked: false,
      },
      {
        id: 5,
        name: 'TVP',
        checked: false,
      },
    ],
  },
  {
    id: 3,
    link: img3,
    brands: [
      {
        id: 1,
        name: 'Adidas',
        checked: false,
      },
      {
        id: 2,
        name: 'Nike',
        checked: false,
      },
      {
        id: 3,
        name: 'Puma',
        checked: false,
      },
      {
        id: 4,
        name: 'Orlen',
        checked: false,
      },
      {
        id: 5,
        name: 'TVP',
        checked: false,
      },
    ],
  },
];

const data = {
  images,
};

export default data;
