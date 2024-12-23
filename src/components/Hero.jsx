import { Link } from 'react-router-dom';
import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.webp';

const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
      <div>
        <h1 className='text-4xl max-w-2xl font-bold tracking-tight sm:text-6xl'>
          We are changing the way people shop.
        </h1>
        <p className='max-w-xl mt-8 text-lg leading-8'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur
          accusantium ratione officiis labore qui! Est sequi nostrum, laboriosam
          veniam similique odio, nihil labore corrupti illum minima, alias omnis
          sit a!
        </p>
        <div className='mt-10'>
          <Link to='/products' className='btn btn-primary'>
            Our Products
          </Link>
        </div>
      </div>
      <div className='hidden  h-[28rem] lg:carousel carousel-center   p-4 space-x-4 bg-neutral rounded-box'>
        {carouselImages.map((image) => {
          return (
            <div key={image} className='carousel-item'>
              <img
                src={image}
                className='rounded-box h-full w-80  object-cover'
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
