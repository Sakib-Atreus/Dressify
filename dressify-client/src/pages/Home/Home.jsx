import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import ProductCompanyName from "../../components/ProductCompanyName/ProductCompanyName";
import DressSource from "../../components/DressSource/DressSource";
import Testimonials from "../../components/Testimonials/Testimonials";
import TopCollection from "../../components/TopCollections/TopCollection";
import NewCollection from "../../components/NewCollection/NewCollection";
import ShopWithUs from "../../components/ShopWithUS/ShopWithUs";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Dressify | Home</title>
      </Helmet>
      <Banner></Banner>
      <TopCollection></TopCollection>
      <NewCollection></NewCollection>
      <ShopWithUs></ShopWithUs>
      <DressSource></DressSource>
      <Testimonials></Testimonials>
      <ProductCompanyName></ProductCompanyName>
    </div>
  );
};

export default Home;
