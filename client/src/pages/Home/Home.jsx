import React from 'react';
import Categories from '../../components/Categories/Categories';
import FeatureSection from '../../components/FeatureSection/FeatureSection';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import ServiceFeature from '../../components/ServiceFeature/ServiceFeature';
import Slider from '../../components/Slider/Slider';

const Home = () => {
  return (
    <div className="home mt-24">
      <Slider />
      <FeatureSection />
      <FeaturedProducts type='featured' categories='Sticker' />
      <Categories />
      <FeaturedProducts type='trending' categories='Bookmark' />
      <ServiceFeature />
    </div>
  )
}

export default Home