import { motion } from 'framer-motion';
import w1 from '../../assets/WithUs/natural.png';
import w2 from '../../assets/WithUs/quality.png';
import w3 from '../../assets/WithUs/shipping.png';
import p1 from '../../assets/WithUs/women1.png';
import p2 from '../../assets/WithUs/woman_shopping.png';
import { Link } from 'react-router-dom';

const ShopWithUs = () => {
    return (
        <div className='text-center font-Poppins my-12 mt-32'>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 bg-pink-100 mb-24'>
                <motion.img 
                    className='w-full h-[350px]' 
                    src={p2} 
                    alt="" 
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                />
                <motion.div 
                    className='text-right mt-6'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h2 className='text-2xl font-bold uppercase text-left opacity-50 font-sans'>Best Savings On</h2>
                    <h2 className='text-6xl font-bold uppercase text-left mt-4 text-pink-700 opacity-70 font-sans'>New Arrival</h2>
                    <p className='text-md text-gray-400 my-4 text-right'>Lorem ipsum dolor sit amet consectetur, <br />adipisicing elit. Laudantium asperiores enim <br /> consequatur minima amet maiores?</p>
                    <Link to='/allProducts' className='btn bg-pink-700 text-white text-xl font-semibold'>Shop Now</Link>
                </motion.div>
                <motion.img 
                    className='w-full h-full' 
                    src={p1} 
                    alt="" 
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                />
            </div>
            <motion.h1 
                className='text-[#262626] text-3xl font-bold uppercase'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
            >
                Why <span className='text-pink-700'>Shop</span> With Us
            </motion.h1>
            <motion.p 
                className='text-gray-400 text-sm my-6'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
            >
                Inspired by hydration and Japan{"'"}s Product pages and their <br /> descriptions are the cornerstone of any good eCommerce store. The main reason why is pretty self-explanatory - <br /> it{"'"}s how potential customers learn about your products<br /> authentically.
            </motion.p>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 mt-6'>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 2 }}
                >
                    <img className='w-16 h-16 text-center mx-auto' src={w1} alt="" />
                    <h2 className='text-[#262626] text-xl font-semibold my-2'>Fast Delivery</h2>
                    <p className='text-[#505050] text-sm my-4'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Congue amet <br />aenean sed enim <br /> odio. </p>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 2.5 }}
                >
                    <img className='w-16 h-16 text-center mx-auto' src={w2} alt="" />
                    <h2 className='text-[#262626] text-xl font-semibold my-2'>Best Quality</h2>
                    <p className='text-[#505050] text-sm my-4'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Congue amet <br />aenean sed enim <br /> odio. </p>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 3 }}
                >
                    <img className='w-16 h-16 text-center mx-auto' src={w3} alt="" />
                    <h2 className='text-[#262626] text-xl font-semibold my-2'>Free Shipping</h2>
                    <p className='text-[#505050] text-sm my-4'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Congue amet <br />aenean sed enim <br /> odio. </p>
                </motion.div>
            </div>
        </div>
    );
};

export default ShopWithUs;
