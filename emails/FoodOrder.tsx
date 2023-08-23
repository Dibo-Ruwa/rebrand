import React from 'react';

interface OrderConfirmationProps {
  customerName: string;
  orderItem: {
    orderItems: {
      title: string;
      quantity: number;
      total: number;
    }[];
    total: number;
    estimatedDeliveryTime: string;
  };
}

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({
  customerName,
  orderItem: { orderItems, total, estimatedDeliveryTime },
}) => {
  const containerStyle: React.CSSProperties = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#4feca0',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '24px',
    marginBottom: '15px',
  };

  const tableStyle: React.CSSProperties = {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '10px',
  };

  const tableCellStyle: React.CSSProperties = {
    border: '1px solid #ddd',
    padding: '8px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Your Order is Confirmed!</h1>
      <p>Hello {customerName},</p>
      <p>Thank you for your order! We&#39;ve received your payment and your items are now being prepared.</p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableCellStyle}>Item</th>
            <th style={tableCellStyle}>Quantity</th>
            <th style={tableCellStyle}>Total</th>
          </tr>
        </thead>
        <tbody>
          {orderItems.map((item, index) => (
            <tr key={index}>
              <td style={tableCellStyle}>{item.title}</td>
              <td style={tableCellStyle}>{item.quantity}</td>
              <td style={tableCellStyle}>{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total Amount: {total}</p>
      <p>Estimated Delivery Time: {estimatedDeliveryTime}</p>
      <p>Sit back and relax, your items are on their way!</p>
      <p>Cheers,<br />The Dibo Ruwa Team</p>
    </div>
  );
};

export default OrderConfirmation;
