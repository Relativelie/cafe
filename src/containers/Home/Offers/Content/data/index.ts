import { Description, Offer } from './models';

const offersData: Array<Offer> = [
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

export default offersData;
