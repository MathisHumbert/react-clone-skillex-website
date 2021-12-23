import images from '../images';

// console.log(images);

const findPassionData = [
  {
    id: 1,
    mobileImg: images.mobileHome_1,
    desktopImg: images.desktopHome_1,
    title1: 'Wrinting',
    title2: 'Course',
  },
  {
    id: 2,
    mobileImg: images.mobileHome_2,
    desktopImg: images.desktopHome_2,
    title1: 'Wrinting',
    title2: 'Course',
  },
  {
    id: 3,
    mobileImg: images.mobileHome_3,
    desktopImg: images.desktopHome_3,
    title1: 'Business',
    title2: 'Course',
  },
];

const categoriesHeading = [
  {
    id: 1,
    title: 'All categories',
  },
  {
    id: 2,
    title: 'Entertainment',
  },
  {
    id: 3,
    title: 'Lifestyle',
  },
  {
    id: 4,
    title: 'Writting',
  },
  {
    id: 5,
    title: 'Business',
  },
  {
    id: 6,
    title: 'Food',
  },
];

const categoriesImages = [
  {
    id: 1,
    img: images.categories_1,
    title: 'Sales Marketing',
    date: '4 month',
  },
  {
    id: 2,
    img: images.categories_2,
    title: 'Data analytics',
    date: '3 month',
  },
  {
    id: 3,
    img: images.categories_3,
    title: 'Copywriting Pro',
    date: '2 month',
  },
  {
    id: 4,
    img: images.categories_4,
    title: 'Design art',
    date: '4 month',
  },
];

export { findPassionData, categoriesHeading, categoriesImages };
