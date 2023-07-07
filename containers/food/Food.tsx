import HeroContainer from "@/component/shared/HeroContainer";
import {
  Container,
  HWWCard,
  HWWList,
  HWWSecetion,
  HeroImageContainer,
  HeroList,
  HeroListItem,
  MenuContainer,
  MenuSection,
  MenuTitle,
} from "./Food.styles";
import Button from "@/component/ui/button/Button";

const HWW = [
  {
    image: "h",
    title: "Choose your plan",
    content:
      "Choose a meal schedule that works for you; when you want it, how you want it. It takes less than 5 minutes.",
  },
  {
    image: "h",
    title: "We Cook and Deliver",
    content:
      "We cook up your picks from our rich menu and deliver them to you on schedule. At no extra delivery costs.",
  },
  {
    image: "h",
    title: "You Heat and Eat",
    content:
      "With Just 5 Minutes of Heating, Your Meal Is Good to Go, or Refrigerate It for a Later Tasty Treat",
  },
];

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

        <HeroImageContainer></HeroImageContainer>
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
        <MenuSection>
          <MenuTitle>Current Menu</MenuTitle>
          <MenuContainer></MenuContainer>
        </MenuSection>
      </MenuSection>
    </Container>
  );
};

export default Food;
