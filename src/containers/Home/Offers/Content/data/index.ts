import { Description, Offer } from './models';

export const offersDataEu: Array<Offer> = [
  {
    id: 1,
    title: 'Recipes',
    description: [
      new Description(
        'Explore a World of Flavors and Ingredients!',
        'Welcome to our Recipe Explorer page, your gateway to a culinary adventure. Whether you are a seasoned chef or a kitchen novice, this page is designed to satisfy your appetite for culinary creativity.',
      ),
      new Description(
        'Filter by Diet and Cuisine',
        'Tailor your culinary journey to your dietary preferences. Use our intuitive filtering system to discover recipes that align with your chosen diet, whether it is vegan, keto, or gluten-free. You can also filter by cuisine to narrow down your options.',
      ),
    ],
    poster: 'bg-recipe-poster ',
    endingQuote: 'Bon appétit!',
  },
  {
    id: 2,
    title: 'Recipe Analyst',
    description: [
      new Description(
        'Unlock the Power of Nutritional Knowledge!',
        'Welcome to our Recipe Analyzer page, your trusted source for understanding the nutritional value of the foods you love. Whether you are conscious of your dietary choices or simply curious about what is on your plate, this page empowers you with essential information.',
      ),
      new Description(
        'Explore Nutritional Insights',
        'Delve into the world of nutrition with ease. Simply enter the name or quantity of a food item, and our intuitive analyzer will provide you with a comprehensive breakdown of its nutritional content. From vitamins to minerals, carbohydrates to proteins, you will gain valuable insights into what you are consuming.',
      ),
    ],
    poster: 'bg-analyst-poster ',
    endingQuote: 'Eat well, live well!',
  },
];

export const offersDataRu: Array<Offer> = [
  {
    id: 1,
    title: 'Рецепты',
    description: [
      new Description(
        'Откройте для себя мир вкусов и ингредиентов!',
        'Добро пожаловать на нашу страницу Recipe Explorer, которая станет для вас путеводителем в мир кулинарных приключений. Будь вы опытным шеф-поваром или новичком на кухне, эта страница призвана удовлетворить ваш аппетит к кулинарному творчеству.',
      ),
      new Description(
        'Фильтр по диете и кухне',
        'Подберите кулинарное путешествие в соответствии с вашими диетическими предпочтениями. Используйте нашу интуитивно понятную систему фильтрации, чтобы найти рецепты, соответствующие выбранной вами диете, будь то веганская, кето или безглютеновая. Вы также можете отфильтровать рецепты по кухне, чтобы сузить выбор.',
      ),
    ],
    poster: 'bg-recipe-poster ',
    endingQuote: 'Bon appétit!',
  },
  {
    id: 2,
    title: 'Анализ рецептов',
    description: [
      new Description(
        'Откройте силу знаний о питании!',
        'Добро пожаловать на страницу "Анализатор рецептов" - ваш надежный источник информации о питательной ценности продуктов, которые вы любите. Если вы следите за своим питанием или просто интересуетесь тем, что находится в вашей тарелке, эта страница поможет вам получить необходимую информацию.',
      ),
      new Description(
        'Изучите информацию о питании',
        'Окунитесь в мир питания с легкостью. Просто введите название или количество продукта, и наш интуитивно понятный анализатор предоставит вам исчерпывающую информацию о его питательности.От витаминов до минералов, от углеводов до белков - вы получите ценные сведения о том, что вы потребляете.',
      ),
    ],
    poster: 'bg-analyst-poster ',
    endingQuote: 'Ешьте хорошо, живите хорошо!',
  },
];
