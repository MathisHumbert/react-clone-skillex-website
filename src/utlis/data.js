import images from '../images';
import {
  FaFacebookF,
  FaBehance,
  FaLinkedinIn,
  FaInstagram,
  FaDribbble,
} from 'react-icons/fa';

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

const skillsData = [
  {
    id: 1,
    logo: images.leadership,
    title: 'Leadership',
    text: 'Fully committed to the success company',
  },
  {
    id: 2,
    logo: images.responsibility,
    title: 'Responsibility',
    text: 'Employees will alaways be my top priority',
  },
  {
    id: 3,
    logo: images.flexibility,
    title: 'Flexibility',
    text: 'The ability to switch is an important skill',
  },
];

const reviewsData = [
  {
    id: 1,
    img: images.customer_1,
    text: 'The explanations are clear, the teachers are responsible and friendly, and the homework is real practice',
    name: 'Rob Zuber',
    job: 'CEO',
  },
  {
    id: 2,
    img: images.customer_2,
    text: 'I learned a lot of new things, I immediately apply my knowledge in my work, found myself a new client',
    name: 'Melanle Pickett',
    job: 'IT Manager',
  },
  {
    id: 3,
    img: images.customer_3,
    text: 'I really like the speakers of the course and the quality of the lectures. There is always feedback',
    name: 'Regis Wilson',
    job: 'Engineer',
  },
  {
    id: 4,
    img: images.customer_4,
    text: 'A new profession is a lot of vivid impressions. Today I was at the presentation of the regional business award',
    name: 'Emma Watson',
    job: 'Cook',
  },
  {
    id: 5,
    img: images.customer_5,
    text: 'The course shows all the stages of the work of an SMM marketer. And also excellent practice',
    name: 'Emma Watson',
    job: 'Cook',
  },
  {
    id: 6,
    img: images.customer_6,
    text: 'On the course "Data Analyst in Python" everything is very interesting and informative, very detailed material',
    name: 'Chris Hemsworth',
    job: 'Analyst',
  },
  {
    id: 7,
    img: images.customer_7,
    text: 'For several months I studied one of the most popular programming languages on the course "Java developer"',
    name: 'Elizabeth Stone',
    job: 'Developer',
  },
];

const links = [
  {
    id: 1,
    text: 'Find passion',
  },
  {
    id: 2,
    text: 'Categories',
  },
  {
    id: 1,
    text: 'Skills',
  },
  {
    id: 1,
    text: 'Customer',
  },
];

const icons = [
  {
    icon: <FaFacebookF />,
    url: 'https://www.facebook.com/halolabteam/',
  },
  {
    icon: <FaBehance />,
    url: 'https://www.behance.net/halolab',
  },
  {
    icon: <FaLinkedinIn />,
    url: 'https://www.linkedin.com/company/halolabteam/',
  },
  {
    icon: <FaInstagram />,
    url: 'https://www.instagram.com/halolabteam/',
  },
  {
    icon: <FaDribbble />,
    url: 'https://dribbble.com/halolab /',
  },
];

export {
  findPassionData,
  categoriesHeading,
  categoriesImages,
  skillsData,
  reviewsData,
  links,
  icons,
};
