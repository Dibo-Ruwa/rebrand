import { assets } from "@/public/assets";
import { Container, LoadingImg } from "./loader.styles";

const Loader = () => {
  return (
    <Container>
      <LoadingImg src={assets.favicon} width={70} height={50} alt="loader" />
    </Container>
  );
};

export default Loader;
