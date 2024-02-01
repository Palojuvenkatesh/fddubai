

import "./App.css";

import Header from "./components/header/Header";
import SimpleSlider from "./components/home-slidercomponent/slider.component";
import { Popularcategories } from "./components/MPcategoriescomponent/categories.component";
import { HomeCards } from "./components/cardscomonent/cards.component";
import { Footercomponent } from "./components/footercomponent/footer.component";
import { HowItWorks } from "./components/htwcomponent/htw.component";
import { Loginuser } from "./featurecomponent/loginusercomponent/loginuser.component";
import { Signup } from "./featurecomponent/signupcomponent/signup.component";
import { LoginPage } from "./featurecomponent/loginpagecomponent/loginpage.component";
import { Loginvendor } from "./featurecomponent/loginvendorcomponent/loginvendor.component";

const App = () => {
  return (
    // <Routes>
    //   <Route exact path="/" element={<Home />} />
    // </Routes>
    <div>
      <Header></Header>
      <SimpleSlider></SimpleSlider>

      <Popularcategories></Popularcategories>
      <HomeCards></HomeCards>
      <HowItWorks></HowItWorks>
      <Footercomponent></Footercomponent> 
      {/* <Loginuser></Loginuser>
      <Signup></Signup>
      
      {/* <Loginvendor></Loginvendor> */}
    </div>
  );
};

export default App;
