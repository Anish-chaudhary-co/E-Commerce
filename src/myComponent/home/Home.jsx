import { useState } from "react";
import Navbar from "../frontpage/navbar";
import Introduction from "../frontpage/introduction";
import Category from "../category/category";
import FeaturedFilter from "../features/FeaturedFilter";
import Community from "../frontpage/community";
import Footer from "../frontpage/footer";

const Home = ({ setCategoryValue, categoryValue, selected, setSelected }) => {
  return (
      <div className="flex flex-col gap-10">
        <Navbar />
        <Introduction />
        <Category setCategoryValue={setCategoryValue} categoryValue={categoryValue} selected={selected} setSelected={setSelected}/>
        <FeaturedFilter />
        <Community />
        <Footer />
      </div>
  );
};

export default Home;
