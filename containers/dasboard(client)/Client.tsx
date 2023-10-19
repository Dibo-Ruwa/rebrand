"use client";
import { Container, EmptyServices } from "./client.tyles";
import useOrder from "@/hooks/useOrder";
import OrderList from "@/component/orderListing/OrderList";

import { useSession } from "next-auth/react";
import { useEffect } from "react";

const Client = () => {
  const { data: session } = useSession();
  const { orders, getOrders } = useOrder();

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <Container>
      {session && orders ? (
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
