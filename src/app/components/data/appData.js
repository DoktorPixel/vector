import calendar from '/public/logo/calendar.png';
import area from '/public/logo/area.png';
import full from '/public/logo/full.png';
import stack from '/public/logo/stack.png';
import services from '/public/logo/services.png';
import certificate from '/public/logo/certificate.png';

import arselor from '/public/logo/customers/arselor.jpg';
import boskay from '/public/logo/customers/boskay.png';
import celsa from '/public/logo/customers/celsa.png';
import erdemir from '/public/logo/customers/erdemir.png';
import metinvest from '/public/logo/customers/metinvest.jpg';
import tatmetal from '/public/logo/customers/tatmetal.png';
import ugmk from '/public/logo/customers/ugmk.png';

export const customersData = {
  'customers-image': [
    { img: arselor },
    { img: boskay },
    { img: celsa },
    { img: erdemir },
    { img: metinvest },
    { img: tatmetal },
    { img: ugmk }
  ]
};

export const cardData = [
  {
    image: calendar,
    title: 'На ринку з 1995 року',
    subtitle:
      'Багаторічна успішна робота в галузі металоторгівлі на ринку України'
  },
  {
    image: area,
    title: '20 тис м² відкритих складських площ',
    subtitle:
      'Великі можливості з вивантаження, зберігання та навантаження металопрокату'
  },
  {
    image: full,
    title: '5 тис м² критих складських площ',
    subtitle:
      'Великі можливості з вивантаження, зберігання та навантаження металопрокату'
  },
  {
    image: stack,
    title: 'Більше 250 найменувань прокату',
    subtitle: 'Великий асортимент для максимального задоволення попиту покупців'
  },
  {
    image: services,
    title: 'Якісний сервіс для кожного клієнта',
    subtitle:
      'Пропонуємо широкий вибір металопрокату різних розмірів та форм оптом та в роздрібних кількостях.'
  },
  {
    image: certificate,
    title: 'Сертифікована продукція',
    subtitle:
      'Гарантуємо якість нашої продукції та готові видати сертифікати нашим клієнтам.'
  }
];

export const whyData = [
  {
    number: '1500 +',
    description: 'Постійних покупців складають нашу базу клієнтів'
  },
  {
    number: '2000 +',
    description: 'Тонн металу ми в середньому відвантажуємо щомісяця'
  },
  {
    number: '30 +',
    description: 'Великих забудовників та виробників працюють з нами'
  },
  {
    number: '91 %',
    description: 'Клієнтів після першої покупки повертаються до нас повторно'
  }
];
