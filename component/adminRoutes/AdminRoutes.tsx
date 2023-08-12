"use client";
// import { DashboradServices } from "@/constants";
import Card from "@/component/dahboardCard/Card";
import { Services } from "@/containers/dasboard(client)/client.tyles";

// export const DashboradServices = [
//   {
//     title: "Order Food",
//     image: assets.food,
//     url: "/food",
//   },
//   {
//     title: "Schedule Cleaning",
//     image: assets.broom,
//     url: "/cleaning",
//   },
//   {
//     title: "Laundry Pickup",
//     image: assets.soap,
//     url: "/laundry",
//   },
//   // {
//   //   title: "Order History",
//   //   image: assets.food,
//   //   url: "/",
//   // },
// ];

const AdminRoutes = () => {
  return (
    <Services>
      {/* {AdminServices.map((service, index) => (
            <span key={index} style={{ width: "100%" }}>
              <Card
                title={service.title}
                image={service.image}
                url={service.url}
              />
            </span>
          ))} */}
      cards
    </Services>
  );
};

export default AdminRoutes;
