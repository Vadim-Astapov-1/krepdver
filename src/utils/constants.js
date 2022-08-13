import setImg from '../images/complete-set.png';
import pistol from '../images/pistol.png';

// example name
export const websiteLink = 'https://krepdver';
export const websiteName = 'Крепеж для установки межкомнатных дверей в Москве';
export const webPageNotFoundName = '404 Not Found';

export const productsList = [{
  id: 1,
  type: 'complete-set',
  article: 'МКС1-3Д',
  price: 650,
  description: 'Комплект крепежа для установки дверей весом полотна до 80 кг с возможностью легкой регулировки коробки в 3D плоскостях!',
  img: setImg,
},
{
  id: 2,
  type: 'complete-set',
  article: 'МКС1-3Д',
  price: 650,
  description: 'Комплект крепежа для установки дверей весом полотна до 80 кг с возможностью легкой регулировки коробки в 3D плоскостях!',
  img: setImg,
},
{
  id: 3,
  type: 'complete-set',
  article: 'МКС1-3Д',
  price: 650,
  description: 'Комплект крепежа для установки дверей весом полотна до 80 кг с возможностью легкой регулировки коробки в 3D плоскостях!',
  img: setImg,
},
{
  id: 4,
  type: 'complete-set',
  article: 'МКС1-3Д',
  price: 650,
  description: 'Комплект крепежа для установки дверей весом полотна до 80 кг с возможностью легкой регулировки коробки в 3D плоскостях!',
  img: setImg,
},
{
  id: 5,
  type: 'complete-set',
  article: 'МКС1-3Д',
  price: 650,
  description: 'Комплект крепежа для установки дверей весом полотна до 80 кг с возможностью легкой регулировки коробки в 3D плоскостях!',
  img: setImg,
},
{
  id: 6,
  type: 'complete-set',
  article: 'МКС1-3Д',
  price: 650,
  description: 'Комплект крепежа для установки дверей весом полотна до 80 кг с возможностью легкой регулировки коробки в 3D плоскостях!',
  img: setImg,
},
{
  id: 7,
  type: 'extra',
  article: '590004',
  price: 650,
  name: 'Fomeron - профессиональные пистолеты для монтажной пены PREMIUM-класса',
  descriptionList: [
    'Исключительная герметичность! Могут стоять с навинченным баллоном пены до 4х месяцев!',
    'Тефлоновые прокладки внутри не разъедаются ацетоном при промывке.',
    'Уникальная конструкция - регулировочный винт находится под большим пальцем, можно регулировать выход пены одной рукой, что особенно удобно при работе на высоте (например на стремянке).'
  ],
  img: pistol,
},
{
  id: 8,
  type: 'extra',
  article: '590004',
  price: 650,
  name: 'Fomeron - профессиональные пистолеты для монтажной пены PREMIUM-класса',
  descriptionList: [
    'Исключительная герметичность! Могут стоять с навинченным баллоном пены до 4х месяцев!',
    'Тефлоновые прокладки внутри не разъедаются ацетоном при промывке.',
    'Уникальная конструкция - регулировочный винт находится под большим пальцем, можно регулировать выход пены одной рукой, что особенно удобно при работе на высоте (например на стремянке).'
  ],
  img: pistol,
},];

export const productsRouters = productsList.map((item) => `/products/${item.id}`);
export const headerRouters = [
  '/',
];

export const footerRouters = [
  '/',
];
