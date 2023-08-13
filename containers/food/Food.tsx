import HeroContainer from "@/component/shared/HeroContainer";
import {
  Container,
  HWWCard,
  HWWList,
  HWWSecetion,
  HeroImage,
  HeroImageContainer,
  HeroList,
  HeroListItem,
  MenuContainer,
  MenuSection,
  MenuTitle,
} from "./Food.styles";
import Button from "@/component/ui/button/Button";
import MoreServices from "@/component/shared/MoreServices";
import { assets } from "@/public/assets";
import { HWW } from "@/constants";
import ProductList from "@/component/ProductList/ProductList";

const Food = () => {
  return (
    <Container>
      <HeroContainer bg="primary-20">
        <div className="hero__text">
          <h3 className="title">
          Delicious Meals, 
            <br />Delivered Effortlessly by Diboruwa
          </h3>

          <HeroList>
            <HeroListItem>
              <span className="dot" />
              Browse & Choose - Explore our menu filled with delectable choices from top eateries.
            </HeroListItem>
            <HeroListItem>
              <span className="dot" />
              Place Your Order - Pick your favorites, add to cart, and check out with ease.
            </HeroListItem>
            <HeroListItem>
              <span className="dot" />
              Savor the Taste - Sit back and relax as fresh, delicious meals are delivered to your door.
            </HeroListItem>
          </HeroList>
          <Button size="large" color="primary">
            Order Now
          </Button>
        </div>

        <HeroImageContainer>
          <div className="image">
            <HeroImage
              src={assets.food_hero}
              width={600}
              height={400}
              alt=".."
            />
          </div>
        </HeroImageContainer>
      </HeroContainer>

      <HWWSecetion>
        <h3 className="title">How we work</h3>

        <HWWList>
          {HWW.map((step, index) => (
            <div className="card" key={index}>
              <HWWCard>
                <div className="image"></div>
                <h3 className="title">{step.title}</h3>
                <p>{step.content}</p>
              </HWWCard>
            </div>
          ))}
        </HWWList>
      </HWWSecetion>

      <MenuSection>
        <ProductList />
      </MenuSection>

      <MoreServices />
    </Container>
  );
};

export default Food;
