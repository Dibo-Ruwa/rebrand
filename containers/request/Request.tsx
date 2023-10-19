"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useQuote from "@/hooks/useQuote";
import moment from "moment";
import Loader from "@/component/ui/loader/Loader";

const QuoteContainer = styled.div`
  margin: 0 auto;
  padding: 2% 8%;
  border-radius: 8px;
`;

const QuoteHeader = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const QuoteDetail = styled.p`
  font-size: 16px;
  margin-bottom: 8px;
`;

const ErrorMessage = styled.p`
  color: red;
`;

const PayButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

const Modal = styled.div<{ show: boolean }>`
  display: ${(props) => (props.show ? "block" : "none")};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`;

const QuotePage = ({ id }: { id: string }) => {
  const { quote, getQuoteById, payQuote, loading, error } = useQuote();

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (id) {
      getQuoteById(id);
    }
  }, [id]);

  const handlePay = () => {
    if (quote) {
      //       payQuote(quote.paymentId, quote.total);
      setShowModal(true);
    }
  };

  return (
    <QuoteContainer>
      {loading ? (
        <Loader />
      ) : (
        quote !== null && (
          <div>
            <QuoteHeader>Quote Details</QuoteHeader>
            <QuoteDetail>
              <strong>Type: </strong> {quote.type}
            </QuoteDetail>
            <QuoteDetail>
              <strong>From: </strong> {quote.from}
            </QuoteDetail>
            <QuoteDetail>
              <strong>To: </strong> {quote.to || "N/A"}
            </QuoteDetail>
            <QuoteDetail>
              <strong>Total: </strong> {quote.total || "N/A"}
            </QuoteDetail>
            <QuoteDetail>
              <strong>Date: </strong>{" "}
              {moment(quote.date).format("YYYY DD MMMM")}
            </QuoteDetail>

            <QuoteDetail>
              <strong>Status: </strong> {quote.status}
            </QuoteDetail>
            {quote.isPaid && (
              <QuoteDetail>
                <strong>Payment Reference: </strong> {quote.refId || "N/A"}
              </QuoteDetail>
            )}
            {!quote.isPaid && <PayButton onClick={handlePay}>Pay</PayButton>}
          </div>
        )
      )}

      {/* <Modal show={showModal}>
        <ModalContent>
          <p>Payment Successful!</p>
          <button onClick={() => setShowModal(false)}>Close</button>
        </ModalContent>
      </Modal> */}
    </QuoteContainer>
  );
};

export default QuotePage;
