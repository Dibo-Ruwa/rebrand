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
            Effortlessly Enjoy Gourmet
            <br /> Dishes in a Matter of Minutes
          </h3>

          <HeroList>
            <HeroListItem>
              <span className="dot" />
              Indulge in Chef-Quality Meals Without the Effort or Extra Charges
            </HeroListItem>
            <HeroListItem>
              <span className="dot" />
              Get Freshly Prepared Meals Delivered, Skip the Store and Cooking
            </HeroListItem>
            <HeroListItem>
              <span className="dot" />
              Delivered fresh and ready-to-eat, just heat and relish!
            </HeroListItem>
          </HeroList>
          <Button size="large" color="primary">
            Get a meal plan
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
