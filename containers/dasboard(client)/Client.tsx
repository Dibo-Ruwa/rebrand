import { DashboradServices } from "@/constants";
import { Container, EmptyServices, Services } from "./client.tyles";
import Card from "@/component/dahboardCard/Card";

const Client = () => {
  return (
    <Container>
      <Services>
        {DashboradServices.map((service, index) => (
          <span key={index} style={{width: "100%"}}>
            <Card
              title={service.title}
              image={service.image}
              url={service.url}
            />
          </span>
        ))}
      </Services>

      <EmptyServices>
        <div className="image"></div>
        <h3>Oh No!!</h3>
        <p>You have no services yet.</p>
      </EmptyServices>
    </Container>
  );
};

export default Client;
