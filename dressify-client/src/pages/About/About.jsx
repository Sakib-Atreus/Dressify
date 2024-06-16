import { Link } from 'react-router-dom';
import about from '../../assets/WithUs/woman_shopping.png'
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <div className="hero min-h-screen bg-white pt-12">
      <Helmet>
        <title>Dressify | About</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse mb-16">
        <img
          src={about}
          className="max-w-full rounded-lg "
        />


        <div>
          <h1 className="text-7xl text-pink-700 font-bold">Dressify</h1>
          <h1 className="text-7xl text-pink-700 font-bold opacity-40">Shop Fusion</h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti corrupti porro distinctio odio dolor dolorem eum repudiandae. Perspiciatis repellat temporibus iste necessitatibus quod praesentium consequatur eaque ducimus ipsum ipsam, quis saepe architecto! Aliquam quos nulla, nobis eligendi animi repellat! Aperiam nisi eum debitis maiores perferendis officia qui unde? Dolorum dolorem debitis nulla!
          </p>
          <Link to="/home"><button className="btn bg-pink-600 text-white">Get Started</button></Link>
        </div>
      </div>
    </div>
  );
};

export default About;