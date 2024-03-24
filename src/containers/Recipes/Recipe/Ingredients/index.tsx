import IngredientsImage from './Image';
import { IngredientsList } from './IngredientsList';
import Title from './Title';

type IngredientsProps = {
  image: string;
  ingredients: Array<string>;
};

const Ingredients: React.FC<IngredientsProps> = ({ image, ingredients }) => {
  return (
    <section
      className='flex justify-center items-center gap-12 pb-8 md:pb-0'
      aria-labelledby='Recipe ingredients'
    >
      <IngredientsImage image={image} />
      <div className='flex flex-col gap-8'>
        <Title count={ingredients.length} />
        <IngredientsList ingredients={ingredients} />
      </div>
    </section>
  );
};

export default Ingredients;
