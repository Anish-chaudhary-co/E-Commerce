import { useState } from "react";
import Navbar from "../frontpage/navbar";
import Introduction from "../frontpage/introduction";
import Category from "../category/category";
import FeaturedFilter from "../features/FeaturedFilter";
import Community from "../frontpage/community";
import Footer from "../frontpage/footer";

const Home = () => {
  return (
      <div className="flex flex-col gap-10">
        <Navbar />
        <Introduction />
        <Category />
        <FeaturedFilter />
        <Community />
        <Footer />
      </div>
  );
};

export default Home;
