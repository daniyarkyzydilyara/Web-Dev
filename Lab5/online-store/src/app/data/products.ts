import { Category, Product } from '../models/models';

export const CATEGORIES: Category[] = [
  { id: 1, name: 'Smartphones' },
  { id: 2, name: 'Laptops' },
  { id: 3, name: 'Headphones' },
  { id: 4, name: 'Appliances' },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    categoryId: 1,
    name: 'iPhone 17 Pro',
    likes: 0,
    price: 545000,
    rating: 4.9,
    description:
      'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.',
    link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pc3/p95/64168416.png?format=gallery-medium',
    ],
  },
  {
    id: 2,
    categoryId: 1,
    name: 'Nokia 105 2023 SS',
    likes: 0,
    price: 20990,
    rating: 4.8,
    description:
      'Представляем Nokia 105 2023 SS — надёжный и простой в использовании мобильный телефон, который идеально подходит для повседневных задач. Этот классический моноблок сочетает в себе компактные размеры и долговечный аккумулятор, что делает его отличным выбором для тех, кто ценит функциональность и удобство.',
    link: 'https://kaspi.kz/shop/p/nokia-105-2023-ss-chernyi-113897214/?c=750000000',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h20/h5c/84198371360798.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h20/h5c/84198371360798.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hc0/h0c/84198371426334.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/he7/h37/84198371491870.jpg?format=gallery-medium',
    ],
  },
  {
    id: 3,
    categoryId: 1,
    name: 'iPhone 16 Pro Max',
    likes: 0,
    price: 720805,
    rating: 5,
    description:
      'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета. Это самое производительное устройство в линейке Apple iPhone с масштабным дисплеем, потрясающей производительностью и невероятной внешней эргономикой. Iphone 16 pro max – настоящий титан в своем семействе. Флагманская модель с тончайшими рамками корпуса обладает эргономичным дизайном, высокой ударо- и влагозащитой. Дополнена передней панелью Ceramic Shield последнего поколения и задней – из особого текстурированного стекла с матовой поверхностью. В серии несколько вариантов смартфонов – на 1Тб, на 256Гб, а также iphone 16 pro max 512GB в черном, титановом, белом цвете и новом нежном оттенке Desert Titanium.',
    link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h96/ha4/87295491735582.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h3c/h66/87295491768350.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/heb/hcc/87295491801118.png?format=gallery-medium',
    ],
  },
  {
    id: 4,
    categoryId: 1,
    name: 'iPhone 15',
    likes: 0,
    price: 725000,
    rating: 5,
    description:
      'Apple iPhone 15 - смартфон, сочетающий в себе передовую оптику, мощный процессор, долгоиграющую батарею и запоминающийся дизайн. Смартфон получил динамический остров, на который выводятся уведомления и другая важная информация.',
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hbf/h6b/86275143598110.jpg?format=gallery-medium',
    ],
  },
  {
    id: 5,
    categoryId: 1,
    name: 'Redmi Note 14 Pro',
    likes: 0,
    price: 156881,
    rating: 4.9,
    description:
      'Смартфон Xiaomi Redmi Note 14 Pro обладает качествами настоящего лидера во всем. Передовая камера профессионального уровня 200 Мп дарит потрясающие возможности для фото и видео съемки. Наслаждайтесь супер-четкой и яркой картинкой на 6.67-дюймовом AMOLED дисплее с частотой обновления 120 Гц. Мощный процессор Helio G100 Ultra демонстрирует превосходное быстродействие, продвинутая система охлаждения LiquidCool позволяет легко преодолевать пиковые нагрузки. А мощная зарядка 45 Вт за считанные минуты способна зарядить батарею на целый день работы.',
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-14-pro-8-gb-256-gb-chernyi-133335702/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p64/p81/67214865.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p65/p99/45808873.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p81/p99/45808874.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pb9/p99/45808876.jpg?format=gallery-medium',
    ],
  },
  {
    id: 6,
    categoryId: 2,
    name: 'Ноутбук PRYME N5095',
    likes: 0,
    price: 189990,
    rating: 5,
    description: 'Ноутбук PRYME N5095 15.6” — оптимальное решение для учёбы и работы',
    link: 'https://kaspi.kz/shop/p/pryme-n5095-15-6-16-gb-ssd-512-gb-win-11-pro-fhk14bk25-133963600/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p77/pfd/45122459.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p0b/pfb/45122460.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pee/pfa/45122461.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pd2/pfa/45122462.jpg?format=gallery-medium',
    ],
  },
  {
    id: 7,
    categoryId: 2,
    name: 'MacBook Air 13',
    likes: 0,
    price: 439986,
    rating: 5,
    description:
      'Первый чип, разработанный специально для Mac. Поразительно, но система на чипе Apple M1 вмещает 16 миллиардов транзис­торов и объединяет центральный и графи­ческий процессоры, систему Neural Engine, контроллеры ввода-вывода и множество других компонентов. Чип Apple M1 позволяет использовать на Mac уникальные технологии и обеспечивает невероятную производи­тельность в сочетании с лучшей в отрасли энергоэффективностью. Это не просто ещё один шаг для Mac — это принципиально новый уровень возможностей.',
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h0a/h85/64213178351646.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hdb/hb3/64213181169694.jpg?format=gallery-medium',
    ],
  },
  {
    id: 8,
    categoryId: 2,
    name: 'Ноутбук HYDRA Home H20',
    likes: 0,
    price: 135000,
    rating: 5,
    description: `Ноутбуки HYDRA это Казахстанский бренд электроники и гаджетов для дома. HYDRA H20 стоит, как обычный ноутбук для повседневного использования, однако это устройство достаточно мощное. Данная модель, оснащенная полноценным 4-х ядерным процессором Intel N4200, оперативной памятью объемом 12 ГБ и SSD накопителем емкостью 512 ГБ. Ноутбуки HYDRA оснащен множеством передовых технологий, но лучше всего работает самый простой подход. Именно поэтому наши ноутбуки снабжаются идеальным соотношением (Процессор – ОЗУ – SSD). Данный ноутбук идеально подойдет для учёбы\ работы\ для рядовых сотрудников малых предприятий\ бухгалтеров и ещё множество других задач.
Идеология Компании HYDRA это производительность и качество за доступные деньги.
Данный ноутбук превзойдет ваши ожидания.`,
    link: 'https://kaspi.kz/shop/p/hydra-home-h20-15-6-12-gb-ssd-512-gb-win-11-mkii-115019992/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pcf/p46/69607281.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pec/p46/69607282.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p08/p47/69607283.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p7d/p51/36556289.jpg?format=gallery-medium',
    ],
  },
  {
    id: 9,
    categoryId: 2,
    name: 'Ноутбук Liman N95',
    likes: 0,
    price: 199000,
    rating: 5,
    description: 'Ноутбук LIMAN : Ваш идеальный выбор для офиса и учёбы',
    link: 'https://kaspi.kz/shop/p/liman-n95-15-6-16-gb-ssd-512-gb-win-11-pro-z14202401662191nym-119401105/?c=750000000',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hec/h9d/86034443698206.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h8b/h1f/86034443763742.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/ha6/h00/86034443829278.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h2b/h72/86034443894814.jpg?format=gallery-medium',
    ],
  },
  {
    id: 10,
    categoryId: 2,
    name: 'Ноутбук Acer Gadget ETBook Plus E10',
    likes: 0,
    price: 152180,
    rating: 5,
    description:
      'Acer Gadget ETBook Plus E10 — универсальный ноутбук для работы, учебы и развлечений, сочетающий в себе производительность, портативность и стильный дизайн.',
    link: 'https://kaspi.kz/shop/p/acer-gadget-etbook-plus-e10-15-6-8-gb-ssd-256-gb-win-11-cw1629-143979932/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p1f/pe5/58192572.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p03/pe5/58192573.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pe6/pe4/58192574.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pe6/pe4/58192575.jpg?format=gallery-medium',
    ],
  },
  {
    id: 11,
    categoryId: 3,
    name: 'Наушники Apple EarPods Lightning',
    likes: 0,
    price: 9753,
    rating: 4.5,
    description:
      'В отличие от круглой формы обычных наушников-вкладышей, конструкция новых наушников EarPods продиктована геометрией ушной раковины. Именно поэтому для многих пользователей они будут удобнее любых других наушников-вкладышей. Динамики наушников EarPods специально спроектированы так, чтобы обеспечить минимальные потери звука и наилучшее звучание.',
    link: 'https://kaspi.kz/shop/p/naushniki-apple-earpods-lightning-belyi-4801876/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p6a/p23/108964618.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hff/h5c/63764029243422.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h49/h9c/63764029636638.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hb2/h57/63764030029854.jpg?format=gallery-medium',
    ],
  },
  {
    id: 12,
    categoryId: 3,
    name: 'Наушники Air pro 2',
    likes: 0,
    price: 2250,
    rating: 5,
    description:
      'Представляем наушники Air Pro 2 — идеальный выбор для тех, кто ценит высокое качество звука и комфорт в использовании.',
    link: 'https://kaspi.kz/shop/p/naushniki-air-pro-2-belyi-118366664/?c=750000000',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h44/h92/85730021769246.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h44/h92/85730021769246.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/he4/h13/85730021834782.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h61/ha2/85730021900318.jpg?format=gallery-medium',
    ],
  },
  {
    id: 13,
    categoryId: 3,
    name: 'Наушники GERLAX GH-34',
    likes: 0,
    price: 2769,
    rating: 4.5,
    description:
      'Наушники GERLAX GH-34 — это идеальный выбор для тех, кто ценит высокое качество звука и удобство использования',
    link: 'https://kaspi.kz/shop/p/naushniki-gerlax-gh-34-chernyi-119492193/?c=750000000',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h33/hfc/86037848064030.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h33/hfc/86037848064030.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h52/h6d/86037848129566.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h15/h72/86037848195102.png?format=gallery-medium',
    ],
  },
  {
    id: 14,
    categoryId: 3,
    name: 'Наушники HYDRA Home Minor',
    likes: 0,
    price: 4990,
    rating: 5,
    description:
      'Представляем вам наушники HYDRA Minor — идеальный выбор для тех, кто ценит комфорт и высокое качество звука в любом месте и в любое время. Эти беспроводные наушники обеспечивают чистый звук и долгую работу без проводов.',
    link: 'https://kaspi.kz/shop/p/naushniki-hydra-home-minor-bezhevyi-120724130/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pe0/p7f/46750474.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p8b/p7f/46750477.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p6f/p7f/46750478.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pae/p7c/46750482.jpg?format=gallery-medium',
    ],
  },
  {
    id: 15,
    categoryId: 3,
    name: 'Наушники Apple AirPods 4',
    likes: 0,
    price: 69213,
    rating: 4.9,
    description:
      'Обновленные беспроводные наушники Apple AirPods 4 с персонализированным пространственным аудио и адаптивным эквалайзером сделают музыку неотъемлемой частью твоей жизни. Функция динамического отслеживания точно реагирует на каждое движение головы и создает трехмерное живое звучание, сравнимое с воспроизведением в настоящем концертном зале. Обновленные алгоритмы сенсорного управления дают возможность максимально точно регулировать громкость. Более мощный аккумулятор позволяет слушать музыку до 5 часов без подзарядки, и ты сможешь еще до 5 раз подзарядиться от зарядного кейса.',
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-4-belyi-124333372/?c=750000000',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pec/pd7/97865769.jpeg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h9f/had/87309385662494.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium',
    ],
  },
  {
    id: 16,
    categoryId: 4,
    name: 'Аэрогриль Merlin FD-1017B',
    likes: 0,
    price: 54990,
    rating: 5,
    description:
      'Аэрогриль FD-1017B — современное решение для приготовления вкусных и полезных блюд с минимальными усилиями. С мощностью 2100 Вт и объёмом 16 литров, этот аэрогриль позволяет готовить для всей семьи, сохраняя при этом все полезные вещества и ароматы.',
    link: 'https://kaspi.kz/shop/p/merlin-fd-1017b-16-l-cherno-serebristyi-150681417/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pd2/pd6/89142749.jpeg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p18/pde/89142750.jpeg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pae/pda/89142751.jpeg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p45/pd7/89142752.jpeg?format=gallery-medium',
    ],
  },
  {
    id: 17,
    categoryId: 4,
    name: 'Морозильник Leadbros BC/BD-217AT',
    likes: 0,
    price: 89990,
    rating: 4.9,
    description:
      'Морозильный ларь Leadbros BC/BD-217AT это специальное устройство, предназначенное для хранения и заморозки большого количества товаров и замороженных продуктов (мясные или рыбные полуфабрикаты, напитки, мороженое, овощные нарезки и многое другое.',
    link: 'https://kaspi.kz/shop/p/leadbros-bc-bd-217at-217-l-belyi-105632244/?c=750000000',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h9d/h20/64348814868510.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h18/hbf/64348819161118.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hbd/hfb/64348823453726.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h3a/h77/64348836954142.jpg?format=gallery-medium',
    ],
  },
  {
    id: 18,
    categoryId: 4,
    name: 'Кухонные весы Generic SF-400',
    likes: 0,
    price: 699,
    rating: 5,
    description:
      'Современные электронные кухонные весы имеют элегантную платформу из пластика. Весы выполнены в белом корпусе. Предел взвешивания 10 кг.',
    link: 'https://kaspi.kz/shop/p/generic-sf-400-102531445/?c=750000000',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h47/ha1/64094073815070.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h47/ha1/64094073815070.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hcf/ha8/64094074798110.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h5a/h8f/64094077124638.jpg?format=gallery-medium',
    ],
  },
  {
    id: 19,
    categoryId: 4,
    name: 'Настольная плита Kitfort КТ-125',
    likes: 0,
    price: 34990,
    rating: 5,
    description:
      'Индукционная плитка Kitfort КТ-125 представляет собой один из новых экологически чистых кухонных приборов, разработанных по новейшим европейским, американским и японским технологиям. Она соответствует требованиям государственного стандарта и подходит для приготовления любых блюд. Плитка КТ-125 выполнена в пластиковом корпусе с рабочей поверхностью из стеклокерамики и обладает максимальной мощностью 1600 Вт. Плита КТ-125 имеет очень высокий коэффициент полезного действия (до 94 %), что существенно сокращает затраты на электроэнергию. Для индукционной плиты подходит посуда с дном из ферромагнитных материалов: стальная, чугунная, эмалированная посуда, посуда из нержавеющей стали, а также любая другая, предназначенная для индукционного нагрева (обычно такая посуда имеет специальную маркировку). Рекомендуемый диаметр дна составляет 12-18 см, хотя возможно использовать посуду и других диаметров, вплоть до 7 см. Плита КТ-125 выдерживает вес не более 10 кг.',
    link: 'https://kaspi.kz/shop/p/nastol-naja-plita-kitfort-kt-125-chernyi-101390537/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p27/pb1/52096867.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p43/pb1/52096868.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p5f/pb1/52096869.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p04/pb4/52096872.jpg?format=gallery-medium',
    ],
  },
  {
    id: 20,
    categoryId: 4,
    name: 'Кухонный измельчитель BSM BS 7915',
    likes: 0,
    price: 4582,
    rating: 5,
    description:
      'Кухонный измельчитель BSM BS 7915 — незаменимый помощник на вашей кухне, который сочетает высокую мощность и стильный дизайн. С его помощью вы сможете быстро и легко измельчать продукты, экономя время на готовку.',
    link: 'https://kaspi.kz/shop/p/bsm-bs-7915-serebristyi-103238688/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h43/he9/64193487929374.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h43/he9/64193487929374.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h43/he9/64193487929374.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h43/he9/64193487929374.jpg?format=gallery-medium',
    ],
  },
];
