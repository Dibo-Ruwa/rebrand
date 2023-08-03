"use client";
import { DashboradServices } from "@/constants";
import { Container, EmptyServices, Services } from "./client.tyles";
import Card from "@/component/dahboardCard/Card";
import useOrder from "@/hooks/useOrder";
import OrderList from "@/component/orderListing/OrderList";

const Client = () => {
  const { orders } = useOrder();
  return (
    <Container>
     

      {orders ? (
        <OrderList />
      ) : (
        <EmptyServices>
          <div className="image"></div>
          <h3>Oh No!!</h3>
          <p>You have no services yet.</p>
        </EmptyServices>
      )}
    </Container>
  );
};

export default Client;
