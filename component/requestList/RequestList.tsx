"use client";
import React, { useEffect } from "react";
import styled from "styled-components";
import useQuote, { Quote } from "@/hooks/useQuote";
import { EyeOpenIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

// Styled Components
const RequestHistoryContainer = styled.div`
  padding: 0 8%;
  h1 {
    margin: 30px 0;
  }
`;

const RequestListingContainer = styled.div`
  overflow-x: scroll;
`;
const RequestListing = styled.div`
  border: 1px solid var(--primary-20);
  border-radius: 20px;
  overflow: hidden;
`;

const RequestRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  padding: 10px 25px;

  transition: all 0.3s ease;

  &:hover {
    background-color: var(--color4-20);
  }
  &.header {
    background-color: var(--primary-20);
  }
`;

const ColumnHeader = styled.div`
  font-weight: bold;
  text-transform: capitalize;
  padding: 8px;
`;

const ColumnData = styled.div`
  padding: 8px;

  button {
    outline: none;
    border: none;
    background: none;
    font-size: 20px;
    color: var(--primary);
  }
`;

// Request History Component
const RequestList: React.FC = () => {
  const { quotes, getQuotes, getQuoteById } = useQuote(); // Use the useQuote hook

  const router = useRouter();

  useEffect(() => {
    getQuotes(); // Fetch quotes when the component mounts
  }, []);

  const handleRequestClick = (quoteId: string) => {
    router.push(`/dashboard/requests/${quoteId}`);
  };

  return (
    <RequestHistoryContainer>
      <h1>Request History</h1>

      <RequestListingContainer>
        {quotes.length >= 1 && (
          <RequestListing>
            <RequestRow className="header">
              <ColumnHeader>Type</ColumnHeader>
              <ColumnHeader>Email</ColumnHeader>
              <ColumnHeader>PaymentId</ColumnHeader>
              <ColumnHeader>Status</ColumnHeader>
              <ColumnHeader>Total</ColumnHeader>
              <ColumnHeader></ColumnHeader>
            </RequestRow>
            {quotes.map((quote: any) => (
              <RequestRow key={quote._id}>
                <ColumnData>{quote.type}</ColumnData>
                <ColumnData>{quote.user.email.slice(0, 10)}</ColumnData>
                <ColumnData>
                  {quote.paymentId ? quote.paymentId : "--"}
                </ColumnData>
                <ColumnData>{quote.status}</ColumnData>
                <ColumnData>{quote.total ? quote.total : "--"}</ColumnData>
                <ColumnData>
                  <button onClick={() => handleRequestClick(quote._id)}>
                    <EyeOpenIcon />
                  </button>
                </ColumnData>
              </RequestRow>
            ))}
          </RequestListing>
        )}
      </RequestListingContainer>
    </RequestHistoryContainer>
  );
};

export default RequestList;
