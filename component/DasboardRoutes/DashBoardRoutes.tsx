"use client";
import { DashboradServices } from "@/constants";
import Card from "@/component/dahboardCard/Card";
import { Services } from "@/containers/dasboard(client)/client.tyles";

const DashboardRoutes = () => {

  return (
          <Services>
          {DashboradServices.map((service, index) => (
            <span key={index} style={{ width: "100%" }}>
              <Card
                title={service.title}
                image={service.image}
                url={service.url}
              />
            </span>
          ))}
        </Services>
  );
};

export default DashboardRoutes;
