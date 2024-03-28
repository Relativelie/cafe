import Salmon from 'assets/webp/about-us.webp';
import Eggs from 'assets/webp/about-us-2.webp';
import Image from './Image';
import Description from './Description';

const About = () => {
  return (
    <section aria-label='About' className='flex justify-center items-center gap-4'>
      <Image
        src={Salmon}
        alt='Grilled salmon fillet on a bed of spinach with a topping of diced vegetables in a dark soy-based sauce, accompanied by a glass of red wine in the background.'
      />
      <Description />
      <Image
        src={Eggs}
        alt='Open-faced sandwich with slices of avocado and a boiled egg on top, garnished with fresh herbs, served on a dark plate with rustic bread and a vintage lantern in the background.'
      />
    </section>
  );
};

export default About;
