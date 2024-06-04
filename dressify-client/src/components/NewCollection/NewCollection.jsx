import { Link } from 'react-router-dom';
import t1 from '../../assets/New/t-shirt-1.webp';
import t2 from '../../assets/New/t-shirt-2.webp';
import t3 from '../../assets/New/t-shirt-3.webp';
import t4 from '../../assets/New/t-shirt-4.webp';
import t5 from '../../assets/New/t-shirt-5.webp';

const NewCollection = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="my-8 text-4xl font-bold text-center mb-12">New <span className='text-pink-700'>D</span>rops</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-y-12 gap-x-4 mx-4 justify-center items-center ">
        <div>
            <img src={t1} alt="t-shirt" />
            <h2 className="text-lg">I{"'"}m a product</h2>
            <p className="font-medium">$15.00</p>
        </div>
        <div>
            <img src={t2} alt="t-shirt" />
            <h2 className="text-lg">I{"'"}m a product</h2>
            <p className="font-medium">$15.00</p>
        </div>
        <div>
            <img src={t3} alt="t-shirt" />
            <h2 className="text-lg">I{"'"}m a product</h2>
            <p className="font-medium">$15.00</p>
        </div>
        <div>
            <img src={t4} alt="t-shirt" />
            <h2 className="text-lg">I{"'"}m a product</h2>
            <p className="font-medium">$15.00</p>
        </div>
        <div>
            <img src={t5} alt="t-shirt" />
            <h2 className="text-lg">I{"'"}m a product</h2>
            <p className="font-medium">$15.00</p>
        </div>
        <div>
            <img src={t1} alt="t-shirt" />
            <h2 className="text-lg">I{"'"}m a product</h2>
            <p className="font-medium">$15.00</p>
        </div>
      </div>
      <div className='text-center mt-8'>
      <Link to='/allProducts' className='btn bg-pink-700 text-white text-xl font-semibold'>View All Products</Link>
      </div>
    </div>
  );
};

export default NewCollection;
