import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { UpButton, FullScreenLoader } from 'components';
import { getNextRecipes } from 'services/recipes';
import { useAppSelector } from 'utils/storeHooks';
import MatchesError from './MatchesError';
import { RecipesItems } from './ResipesItems';

const RecipesList: React.FC = () => {
  const { nextPage, recipes } = useAppSelector((state) => state.recipes);
  const [trigger, { isLoading }] = getNextRecipes.useLazyQuery();

  const { ref, inView } = useInView({
    triggerOnce: false,
    fallbackInView: true,
  });

  useEffect(() => {
    if (inView && !isLoading && nextPage) {
      trigger(nextPage);
    }
  }, [inView]);

  return (
    <div className='relative mt-8 p-4'>
      {inView && <FullScreenLoader />}

      <div className='fixed bottom-[15vh] z-10'>
        <UpButton />
      </div>

      {
        <div className='flex justify-center flex-wrap gap-x-4 xl:gap-x-8 gap-y-10'>
          {recipes ? <RecipesItems /> : <MatchesError />}
        </div>
      }
      {nextPage && <div ref={ref} className='mb-4' />}
    </div>
  );
};

export default RecipesList;
