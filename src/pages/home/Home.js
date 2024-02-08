import React from "react";
import Header from "../../components/header/Header";
import SimpleSlider from "../../components/home-slidercomponent/slider.component";
import { Popularcategories } from "../../components/MPcategoriescomponent/categories.component";
import { HomeCards } from "../../components/cardscomonent/cards.component";
import { HowItWorks } from "../../components/htwcomponent/htw.component";
import { Footercomponent } from "../../components/footercomponent/footer.component";

const Home = () => {
  return (
    <div >
      <Header></Header>
      <SimpleSlider></SimpleSlider>

      <Popularcategories></Popularcategories>
      <HomeCards></HomeCards>
      <HowItWorks></HowItWorks>
      <Footercomponent></Footercomponent> 
    </div>
  );
};

export default Home;
