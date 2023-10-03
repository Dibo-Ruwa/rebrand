import React from "react";

export const AdminEmailComponent: React.FC<{
  adminFirstName: string;
  partnerFullName: string;
  partnerBusinessName: string;
  partnerContactInfo: string;
  registrationDate: string;
  adminEmail: string;
  yourName: string;
}> = ({
  adminFirstName,
  partnerFullName,
  partnerBusinessName,
  partnerContactInfo,
  registrationDate,
  adminEmail,
  yourName,
}) => {
  const emailStyles = {
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
    lineHeight: "1.6",
    display: "grid",
    gap: "15px",
  };

  const contentStyles = {
    padding: "20px",
    listStyle: "none",
  };
  const listStyles = {
    padding: "20px",
    margin: "20px 0",
    listStyle: "none",
    border: "2px solid rgba(53, 247, 127, 0.37)",
    width: "auto",
  };

  return (
    <div style={emailStyles}>
      <header
        style={{
          background: "#35f77f",
          padding: "30px 0",
          textAlign: "center",
          display: "flex",
          fontSize: "30px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        New Partner Notification!!!
      </header>
      <div style={contentStyles}>
        <p>
          Hey <strong>{adminFirstName}</strong>,
        </p>
        <p>
          We have some exciting news to share - a new partner has registered
          with us! Here are the preliminary details:
        </p>
        <ul style={listStyles}>
          <li>
            Partner Name: <strong>{partnerFullName}</strong>
          </li>
          <li>
            Business Name: <strong>{partnerBusinessName}</strong>
          </li>
          <li>
            Contact Information: <strong>{partnerContactInfo}</strong>
          </li>
          <li>
            Registration Date: <strong>{registrationDate}</strong>
          </li>
        </ul>
        <p>
          To facilitate a smooth onboarding process, could you please review the
          details and activate their account? In case any technical assistance
          is required, feel free to coordinate with the technical team.
        </p>
        <p>
          Thank you for ensuring a seamless integration process for our new
          partners.
        </p>
        <p>Best regards, {yourName}</p>
      </div>
    </div>
  );
};

export const PartnerWelcomeEmailComponent: React.FC<{
  partnerFirstName: string;
  partnerEmail: string;
}> = ({ partnerFirstName, partnerEmail }) => {
  const emailStyles = {
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
    lineHeight: "1.6",
  };
  const headerStyles = {
    background: "#35f77f",
    padding: "30px 0",
    textAlign: "center",
    display: "flex",
    fontSize: "30px",
    justifyContent: "center",
    alignItems: "center",
  };

  const contentStyles = {
    padding: "20px",
    listStyle: "none",
    display: "grid",
    gap: "10px",
  };

  const listStyles = {
    padding: "20px",
    margin: "20px 0",
    listStyle: "none",
    border: "2px solid rgba(53, 247, 127, 0.37)",
    width: "auto",
    display: "grid",
    gap: "10px",
  };

  return (
    <div style={emailStyles}>
      <header
        style={{
          background: "#35f77f",
          padding: "30px 0",
          textAlign: "center",
          display: "flex",
          fontSize: "30px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Welcome
      </header>

      <div style={contentStyles}>
        <p>
          Hello <strong>{partnerFirstName}</strong>,
        </p>
        <p>Warm greetings from Dibo Ruwa!</p>
        <p>
          We are thrilled to have you onboard as our latest partner. Dibo Ruwa
          prides itself on building lasting partnerships, offering top-quality
          services, and emphasizing environmental sustainability.
        </p>
        <p>Here&#39;s what you can expect next:</p>
        <ul style={listStyles}>
          <li>
            <strong> Onboarding Session:</strong>
            Our team will reach out soon to schedule an orientation, where
            we&#39;ll walk you through our platform and answer any questions you
            might have.
          </li>
          <li>
            <strong>Access to Resources:</strong>
            You will have access to our suite of partner resources to make our
            collaboration seamless.
          </li>
          <li>
            <strong> Continuous Support:</strong>
            Our dedicated support team is here to assist you at any step of the
            way. Should you have any technical queries, they&#39;re just a call
            or email away.
          </li>
        </ul>
        <p>
          In the meantime, please ensure that all your details with us are
          accurate. This helps in fostering a smooth working relationship.
        </p>
        <p>
          Welcome to our community! We&#39;re confident that together, we&#39;ll
          create exceptional experiences for our customers and bring forward the
          spirit of innovation and sustainability that defines Dibo Ruwa.
        </p>
        <p>Looking forward to a fruitful association.</p>
        <p>Warm Regards, The Dibo Ruwa Team</p>
      </div>
    </div>
  );
};

export const PartnerVerificationEmailComponent: React.FC<{
  partnerFirstName: string;
  signInLink: string;
  supportEmail: string;
  supportPhoneNumber: string;
}> = ({ partnerFirstName, signInLink, supportEmail, supportPhoneNumber }) => {
  const emailStyles = {
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
    lineHeight: "1.6",
  };

  const contentStyles = {
    padding: "20px",
    listStyle: "none",
    display: "grid",
    gap: "10px",
  };

  const buttonStyles = {
    backgroundColor: "#35f77f",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    textDecoration: "none",
    width: "max-content",
  };

  return (
    <div style={emailStyles}>
      <header
        style={{
          background: "#35f77f",
          display: "flex",

          fontSize: "30px",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h3>Verification Successful!</h3>
      </header>

      <div style={contentStyles}>
        <p>
          Hello <strong>{partnerFirstName}</strong> ,
        </p>
        <p>
          Great news! Your partnership verification with Dibo Ruwa is now
          complete. We&#39;re excited to have you on board and can&#39;t wait to
          see all the incredible value you&#39;ll bring to our platform.
        </p>
        <p>
          Now that you&#39;re verified, you can sign in to your partner
          dashboard to start managing and fulfilling orders seamlessly.
        </p>
        <a href={signInLink} style={buttonStyles}>
          Sign In to Your Dashboard
        </a>
        <p>
          <strong> Note:</strong>
          The button will contain a direct link to the partner&#39;s
          dashboard/sign-in page.
        </p>
        <p>
          If you encounter any challenges or have questions about using the
          dashboard, our support team is here to assist you. Contact us at
          {supportEmail} or {supportPhoneNumber}.
        </p>
        <p>
          Welcome to the Dibo Ruwa family. Let&#39;s create amazing experiences
          together!
        </p>
        <p>Best wishes, The Dibo Ruwa Team</p>
      </div>
    </div>
  );
};

export const PartnerOrderNotificationComponent: React.FC<{
  partnerFirstName: string;
  customerFullName: string;
  orderNumber: string;
  itemsOrdered: string;
  totalAmount: string;
  customerAddress: string;
  orderTimestamp: string;
  orderLink: string;
}> = ({
  partnerFirstName,
  customerFullName,
  orderNumber,
  itemsOrdered,
  totalAmount,
  customerAddress,
  orderTimestamp,
  orderLink,
}) => {
  const emailStyles = {
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
    lineHeight: "1.6",
  };

  const headerStyles = {
    background: "#35f77f",
    padding: "30px 0",
    textAlign: "center",
    display: "flex",
    fontSize: "30px",
    justifyContent: "center",
    alignItems: "center",
  };

  const contentStyles = {
    padding: "20px",
    listStyle: "none",
    display: "grid",
    gap: "10px",
  };

  const listStyles = {
    padding: "20px",
    margin: "20px 0",
    listStyle: "none",
    border: "2px solid rgba(53, 247, 127, 0.37)",
    width: "auto",
    display: "grid",
    gap: "10px",
  };

  const buttonStyles = {
    backgroundColor: "#35f77f",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    textDecoration: "none",
    width: "max-content",
  };

  return (
    <div style={emailStyles}>
      <header
        style={{
          background: "#35f77f",
          padding: "30px 0",
          textAlign: "center",
          display: "flex",
          fontSize: "30px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        New Order Received!!!
      </header>

      <div style={contentStyles}>
        <p>Hello {partnerFirstName},</p>
        <p>
          Good news! You&#39;ve received a new order from {customerFullName}.
        </p>
        <p>
          <strong>Order Details:</strong>
        </p>
        <ul style={listStyles}>
          <li>
            Customer Name: <strong>{customerFullName}</strong>{" "}
          </li>
          <li>
            Order ID: <strong>#{orderNumber}</strong>{" "}
          </li>
          <li>
            Items Ordered: <strong>{itemsOrdered}</strong>{" "}
          </li>
          <li>
            Total Amount: <strong>{totalAmount}</strong>{" "}
          </li>
          <li>
            Delivery Address: <strong>{customerAddress}</strong>{" "}
          </li>
          <li>
            Order Date & Time: <strong>{orderTimestamp}</strong>{" "}
          </li>
        </ul>
        <a href={orderLink} style={buttonStyles}>
          View & Manage Order
        </a>
        <p>Note: The button links directly to the order in your dashboard.</p>
        <p>
          For any queries or assistance, feel free to reach out to our support
          team.
        </p>
        <p>Best Regards, Dibo Ruwa Support</p>
      </div>
    </div>
  );
};

export const AdminOrderNotificationComponent: React.FC<{
  customerFullName: string;
  orderNumber: string;
  itemsOrdered: any;
  totalAmount: string;
  customerAddress: string;
  partnerFullName: string;
  orderTimestamp: string;
  adminDashboardLink: string;
}> = ({
  customerFullName,
  orderNumber,
  itemsOrdered,
  totalAmount,
  customerAddress,
  partnerFullName,
  orderTimestamp,
  adminDashboardLink,
}) => {
  const emailStyles = {
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
    lineHeight: "1.6",
  };

  const headerStyles = {
    background: "#35f77f",
    padding: "30px 0",
    textAlign: "center",
    display: "flex",
    fontSize: "30px",
    justifyContent: "center",
    alignItems: "center",
  };

  const contentStyles = {
    padding: "20px",
    listStyle: "none",
    display: "grid",
    gap: "10px",
  };

  const listStyles = {
    padding: "20px",
    margin: "20px 0",
    listStyle: "none",
    border: "2px solid rgba(53, 247, 127, 0.37)",
    width: "auto",
    display: "grid",
    gap: "10px",
  };

  const buttonStyles = {
    backgroundColor: "#35f77f",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    textDecoration: "none",
    width: "max-content",
  };

  const tableStyles = {
    border: "2px solid rgba(156, 245, 190, 0.37)", // Green border
    borderRadius: "20px", // Border radius
    width: "100%", // Make the table take up 100% width
  };

  const headerCellStyle = {
    background: "#35f77f", // Header cell background color
    color: "#fff", // Header cell text color
    padding: "10px", // Header cell padding
  };

  const cellStyle = {
    padding: "10px", // Cell padding
  };

  return (
    <div style={emailStyles}>
      <header
        style={{
          background: "#35f77f",
          padding: "30px 0",
          textAlign: "center",
          display: "flex",
          fontSize: "30px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        New Order Placed
      </header>

      <div style={contentStyles}>
        <p>Admin Team,</p>
        <p>
          We&#39;ve received a new order placed by {customerFullName} and it has
          been assigned to {partnerFullName} for fulfillment.
        </p>
        <p>
          <strong>Order Summary:</strong>
        </p>
        <ul style={listStyles}>
          <li>
            Order ID: <strong>#{orderNumber}</strong>{" "}
          </li>
          <li>
            <table style={tableStyles}>
              <thead>
                <tr>
                  <th style={headerCellStyle}>Item</th>
                  <th style={headerCellStyle}>Price</th>
                  <th style={headerCellStyle}>Quantity</th>
                  <th style={headerCellStyle}>Total</th>
                </tr>
              </thead>
              <tbody>
                {itemsOrdered.map((item: any) => (
                  <tr key={item._id}>
                    <td style={cellStyle}>{item.title}</td>
                    <td style={cellStyle}>${item.price}</td>
                    <td style={cellStyle}>{item.quantity}</td>
                    <td style={cellStyle}>${item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </li>
          <li>
            Total Amount: <strong>{totalAmount}</strong>
          </li>
          <li>
            Delivery Address: <strong>{customerAddress}</strong>
          </li>
          <li>
            Assigned Partner: <strong>{partnerFullName}</strong>
          </li>
          <li>
            Order Date & Time: <strong>{orderTimestamp}</strong>
          </li>
        </ul>
        <a href={adminDashboardLink} style={buttonStyles}>
          Access Admin Dashboard
        </a>
        <p>
          Note: The button links directly to the order in the admin dashboard.
        </p>
        <p>
          Thank you for ensuring our customers receive the best service
          possible.
        </p>
        <p>Warm Regards, Dibo Ruwa Operations</p>
      </div>
    </div>
  );
};

export const AdminOrderCancelNotificationComponent: React.FC<{
  orderNumber: string;
  customerFullName: string;
  itemsOrdered: string;
  totalAmount: string;
  customerAddress: string;
  partnerFullName: string;
  // cancellationReason: string;
  orderTimestamp: string;
  adminDashboardLink: string;
}> = ({
  orderNumber,
  customerFullName,
  itemsOrdered,
  totalAmount,
  customerAddress,
  partnerFullName,
  // cancellationReason,
  orderTimestamp,
  adminDashboardLink,
}) => {
  const emailStyles = {
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
    lineHeight: "1.6",
  };

  const headerStyles = {
    background: "#35f77f",
    padding: "30px 0",
    textAlign: "center",
    display: "flex",
    fontSize: "30px",
    justifyContent: "center",
    alignItems: "center",
  };

  const contentStyles = {
    padding: "20px",
    listStyle: "none",
    display: "grid",
    gap: "10px",
  };

  const listStyles = {
    padding: "20px",
    margin: "20px 0",
    listStyle: "none",
    border: "2px solid rgba(53, 247, 127, 0.37)",
    width: "auto",
    display: "grid",
    gap: "10px",
    // width: "max-content",
  };

  const buttonStyles = {
    backgroundColor: "#35f77f",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    textDecoration: "none",
    width: "max-content",
  };

  return (
    <div style={emailStyles}>
      <header
        style={{
          background: "#35f77f",
          padding: "30px 0",
          textAlign: "center",
          display: "flex",
          fontSize: "30px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Order Cancelled by Partner - Immediate Action Required
      </header>

      <div style={contentStyles}>
        <p>Dear Admin Team,</p>
        <p>
          We wish to bring to your attention that Order ID{" "}
          <strong>#{orderNumber} </strong> has been cancelled by our partner,{" "}
          <strong>{partnerFullName}</strong> . This order requires immediate
          reassignment to ensure our customer receives their order in a timely
          manner.
        </p>
        <p>
          <strong>Order Details:</strong>
        </p>
        <ul style={listStyles}>
          <li>
            Customer Name: <strong> {customerFullName}</strong>
          </li>
          <li>Items Ordered: {itemsOrdered}</li>
          <li>
            Total Amount: <strong>{totalAmount}</strong>{" "}
          </li>
          <li>
            Delivery Address: <strong> {customerAddress}</strong>
          </li>
          <li>
            Original Partner: <strong>{partnerFullName}</strong>{" "}
          </li>
          {/* <li>Cancellation Reason: {cancellationReason}</li> */}
          <li>
            Order Date & Time: <strong>{orderTimestamp}</strong>{" "}
          </li>
        </ul>
        <a href={adminDashboardLink} style={buttonStyles}>
          Reassign Order in Admin Dashboard
        </a>
        <p>
          <strong> Note:</strong>
          The button links directly to the order in the admin dashboard,
          facilitating quick action.
        </p>
        <p>
          Thank you for your swift attention to this matter. Let&#39;s ensure
          our customers experience minimal inconvenience.
        </p>
        <p>Best Regards, Dibo Ruwa Operations</p>
      </div>
    </div>
  );
};

export const PartnerOrderAssignmentNotificationComponent: React.FC<{
  partnerFirstName: string;
  orderNumber: string;
  customerFullName: string;
  itemsOrdered: string;
  totalAmount: string;
  customerAddress: string;
  orderTimestamp: string;
  partnerDashboardLink: string;
}> = ({
  partnerFirstName,
  orderNumber,
  customerFullName,
  itemsOrdered,
  totalAmount,
  customerAddress,
  orderTimestamp,
  partnerDashboardLink,
}) => {
  const emailStyles = {
    fontFamily: "Arial, sans-serif",
    fontSize: "14px",
    lineHeight: "1.6",
  };

  const buttonStyles = {
    backgroundColor: "#007BFF",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    textDecoration: "none",
  };

  return (
    <div style={emailStyles}>
      <header
        style={{
          background: "#35f77f",
          padding: "30px 0",
          textAlign: "center",
          display: "flex",
          fontSize: "30px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        New Order Assigned to You
      </header>
      <p>Hello {partnerFirstName},</p>
      <p>
        We are reaching out to inform you that a new order has been assigned to
        you. Please review the details below and ensure timely fulfillment to
        uphold our commitment to customer satisfaction.
      </p>
      <p>
        <strong>Order Details:</strong>
      </p>
      <ul>
        <li>Order ID: #{orderNumber}</li>
        <li>Customer Name: {customerFullName}</li>
        <li>Items Ordered: {itemsOrdered}</li>
        <li>Total Amount: {totalAmount}</li>
        <li>Delivery Address: {customerAddress}</li>
        <li>Order Date & Time: {orderTimestamp}</li>
      </ul>
      <a href={partnerDashboardLink} style={buttonStyles}>
        View & Manage Order
      </a>
      <p>
        Note: The button will direct you to the specific order in your
        dashboard.
      </p>
      <p>
        If you encounter any challenges or require assistance, do not hesitate
        to contact our admin team. We&#39;re here to support you every step of
        the way.
      </p>
      <p>
        Thank you for your dedication and hard work. Together, we continue to
        provide exceptional service to our valued customers.
      </p>
      <p>Warm Regards, Dibo Ruwa Operations</p>
    </div>
  );
};

export const DispatchStatusNotificationComponent: React.FC<{
  customerFirstName: string;
  orderNumber: string;
  itemsOrdered: any;
  totalAmount: string;
  estimatedDeliveryDate: string;
  contactNumber: string;
}> = ({
  customerFirstName,
  orderNumber,
  itemsOrdered,
  totalAmount,
  estimatedDeliveryDate,
  contactNumber,
}) => {
  const emailStyles = {
    fontFamily: "Arial, sans-serif",
    fontSize: "14px",
    lineHeight: "1.6",
  };

  return (
    <div style={emailStyles}>
      <header
        style={{
          background: "#35f77f",
          padding: "30px 0",
          textAlign: "center",
          display: "flex",
          fontSize: "30px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Your Order #{orderNumber} Has Been Dispatched!
      </header>
      <p>Dear {customerFirstName},</p>
      <p>
        Great news! Your order with Dibo Ruwa has been dispatched and is on its
        way to you!
      </p>
      <p>
        <strong>Order Details:</strong>
      </p>
      <ul>
        <li>Order ID: #{orderNumber}</li>
        <li>Items Ordered: {itemsOrdered}</li>
        <li>Total Amount: {totalAmount}</li>
        <li>Estimated Delivery Date: {estimatedDeliveryDate}</li>
      </ul>
      <p>
        Should you have any inquiries or wish to know more about your
        delivery&#39;s progress, please feel free to contact us directly at
        {contactNumber}. Our team is always here to assist you.
      </p>
      <p>
        Thank you for choosing Dibo Ruwa. We appreciate your trust in us and
        hope to continue being your preferred choice.
      </p>
      <p>Warm Regards, The Dibo Ruwa Team</p>
    </div>
  );
};

export const DeliveredStatusNotificationComponent: React.FC<{
  customerFirstName: string;
  orderNumber: string;
  itemsDelivered: any;
  totalAmount: string;
  deliveryDate: string;
  contactNumber: string;
}> = ({
  customerFirstName,
  orderNumber,
  itemsDelivered,
  totalAmount,
  deliveryDate,
  contactNumber,
}) => {
  const emailStyles = {
    fontFamily: "Arial, sans-serif",
    fontSize: "14px",
    lineHeight: "1.6",
  };

  const buttonStyles = {
    backgroundColor: "#007BFF",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    textDecoration: "none",
  };

  return (
    <div style={emailStyles}>
      <p>
        <strong>Subject:</strong> Your Order #{orderNumber} Has Been Delivered!
      </p>
      <p>Dear {customerFirstName},</p>
      <p>
        We&#39;re pleased to inform you that your order from Dibo Ruwa has been
        successfully delivered. We hope everything is in order and up to your
        expectations!
      </p>
      <p>
        <strong>Order Details:</strong>
      </p>
      <ul>
        <li>Order ID: #{orderNumber}</li>
        <li>Items Delivered: {itemsDelivered}</li>
        <li>Total Amount: {totalAmount}</li>
        <li>Delivery Date: {deliveryDate}</li>
      </ul>
      <p>
        At Dibo Ruwa, we continuously strive to enhance our services. Your
        feedback is invaluable to us. If you could take a moment to share your
        experience, it would help us serve you better in the future.
      </p>
      <a href="#" style={buttonStyles}>
        Share Your Feedback
      </a>
      <p>Note: The button links directly to a feedback form or page.</p>
      <p>
        For any queries, concerns, or further assistance, please don&#39;t
        hesitate to contact us at {contactNumber}. We&#39;re always here to
        help.
      </p>
      <p>
        Thank you for choosing Dibo Ruwa, and we look forward to serving you
        again!
      </p>
      <p>Warmest Regards, The Dibo Ruwa Team</p>
    </div>
  );
};

export const AdminQuoteRequestNotification: React.FC<{
  fullName: string;
  userEmail: string;
  userContact: string;
  serviceType: string;
  description: string;
  timestamp: string;
}> = ({
  fullName,
  userEmail,
  userContact,
  serviceType,
  description,
  timestamp,
}) => {
  const adminEmailStyle: React.CSSProperties = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "cyan",
    padding: "20px",
    color: "white",
    textAlign: "center",
    fontSize: "18px",
  };
  return (
    <div style={adminEmailStyle}>
      <p>Admin Team,</p>
      <p>
        We have received a new quote request for our {serviceType} services from{" "}
        {fullName}.
      </p>
      <p>Request Details:</p>
      <ul>
        <li>User Name: {fullName}</li>
        <li>User Email: {userEmail}</li>
        <li>User Contact: {userContact}</li>
        <li>Service Type: {serviceType}</li>
        <li>Description/Notes: {description}</li>
        <li>Request Date & Time: {timestamp}</li>
      </ul>
      <p>
        Please ensure the request is addressed promptly, and a comprehensive
        quote is provided to the user. Your prompt action is appreciated.
      </p>
      <p>Best Regards, Dibo Ruwa Operations Team</p>
    </div>
  );
};

export const UserQuoteRequestConfirmation: React.FC<{
  firstName: string;
  serviceType: string | undefined;
  description: string | undefined;
  timestamp: string;
  turnaroundTime: string;
  adminContact: string;
}> = ({
  firstName,
  serviceType,
  description,
  timestamp,
  turnaroundTime,
  adminContact,
}) => {
  const userEmailStyle: React.CSSProperties = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "cyan",
    padding: "20px",
    color: "white",
    textAlign: "center",
    fontSize: "18px",
  };
  return (
    <div style={userEmailStyle}>
      <p>Hello {firstName},</p>
      <p>
        Thank you for expressing interest in our {serviceType} services.
        We&#39;ve received your request for a quote and are currently reviewing
        the details.
      </p>
      <p>Your Request Details:</p>
      <ul>
        <li>Service Type: {serviceType}</li>
        <li>Description/Notes: {description}</li>
        <li>Request Date & Time: {timestamp}</li>
      </ul>
      <p>
        Our team is committed to providing you with a comprehensive and
        competitive quote. You can expect to hear back from us within{" "}
        {turnaroundTime}.
      </p>
      <p>
        If you have any immediate questions or require further information,
        please don&#39;t hesitate to contact us at {adminContact}.
      </p>
      <p>
        Thank you for considering Dibo Ruwa for your {serviceType} needs.
        We&#39;re eager to serve you!
      </p>
      <p>Warm Regards, The Dibo Ruwa Team</p>
    </div>
  );
};

export const AdminLaundryQuoteRequest: React.FC<{
  adminName: string;
  userName: string;
  userEmail: string;
  userContact: string;
  userAddress: string;
  laundryItems: any;
}> = ({
  adminName,
  userName,
  userEmail,
  userContact,
  userAddress,
  laundryItems,
}) => {
  const adminEmailStyle: React.CSSProperties = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "cyan",
    padding: "20px",
    color: "white",
    textAlign: "center",
    fontSize: "18px",
  };
  return (
    <div style={adminEmailStyle}>
      <p>Hello {adminName},</p>
      <p>
        We&#39;ve received a new quote request for laundry services from{" "}
        {userName}, with the following details:
      </p>
      <p>Customer Information:</p>
      <ul>
        <li>Name: {userName}</li>
        <li>Email: {userEmail}</li>
        <li>Contact Number: {userContact}</li>
        <li>Address: {userAddress}</li>
      </ul>
      <p>Laundry Items for Quotation:</p>
      <ul>
        {laundryItems.map((item: any, index: any) => (
          <li key={index}>
            {item.nae} - {item.amount}
          </li>
        ))}
      </ul>
      <p>
        Please prepare a quote for the above-mentioned items and send it to the
        customer at the earliest convenience.
      </p>
      <p>Warm regards,</p>
    </div>
  );
};

export const AdminHomeCleaningQuoteRequest: React.FC<{
  adminName: string;
  userName: string;
  userEmail: string;
  userContact: string;
  userAddress: string;
  homeCleaningAreas: any;
}> = ({
  adminName,
  userName,
  userEmail,
  userContact,
  userAddress,
  homeCleaningAreas,
}) => {
  const adminEmailStyle: React.CSSProperties = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "cyan",
    padding: "20px",
    color: "white",
    textAlign: "center",
    fontSize: "18px",
  };

  return (
    <div style={adminEmailStyle}>
      <p>Hello {adminName},</p>
      <p>
        We&#39;ve received a new quote request for home cleaning services from{" "}
        {userName}, with the following details:
      </p>
      <p>Customer Information:</p>
      <ul>
        <li>Name: {userName}</li>
        <li>Email: {userEmail}</li>
        <li>Contact Number: {userContact}</li>
        <li>Address: {userAddress}</li>
      </ul>
      <p>Areas/Items for Home Cleaning Quotation:</p>
      <ul>
        {homeCleaningAreas.map((area: any, index: any) => (
          <li key={index}>
            {area.name} - {area.amount}
          </li>
        ))}
      </ul>
      <p>
        Please prepare a quote for the above-mentioned areas/items and send it
        to the customer at the earliest convenience.
      </p>
      <p>Warm regards,</p>
    </div>
  );
};

export const MovingRequestEmail: React.FC<{
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  currentAddress: string;
  destinationAddress: string;
  preferredDate: string;
  // itemsForMoving: string[];
  // specialInstructions: string;
  companyName: string;
}> = ({
  customerName,
  customerEmail,
  customerPhone,
  currentAddress,
  destinationAddress,
  preferredDate,
  // itemsForMoving,
  // specialInstructions,
  companyName,
}) => {
  const emailStyle: React.CSSProperties = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f0f0f0", // Background color
    padding: "20px",
  };

  const headerStyle: React.CSSProperties = {
    backgroundColor: "#007bff", // Header background color
    color: "white", // Header text color
    padding: "10px",
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center",
  };

  const contentStyle: React.CSSProperties = {
    backgroundColor: "white", // Content background color
    padding: "20px",
  };
  return (
    <div style={emailStyle}>
      <div style={headerStyle}>New Moving Request from {customerName}</div>
      <div style={contentStyle}>
        <p>Hello Admin,</p>
        <p>
          We have received a new moving request from the website. Please find
          the details below:
        </p>
        <p>Customer Information:</p>
        <ul>
          <li>Name: {customerName}</li>
          <li>Email Address: {customerEmail}</li>
          <li>Phone Number: {customerPhone}</li>
          <li>Current Address: {currentAddress}</li>
          <li>Destination Address: {destinationAddress}</li>
          <li>Preferred Moving Date: {preferredDate}</li>
        </ul>
        {/* {itemsForMoving.length > 0 && (
          <>
            <p>List of Items for Moving:</p>
            <ul>
              {itemsForMoving.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        )}
        {specialInstructions && (
          <p>Special Instructions: {specialInstructions}</p>
        )} */}
        <p>
          Please ensure that the moving team is informed and a quote is prepared
          for the customer based on the details provided. It would be prudent to
          reach out to the customer as soon as possible to confirm details,
          provide the quote, and schedule the move.
        </p>
        <p>Thank you,</p>
        <p>{companyName} Support Team</p>
      </div>
    </div>
  );
};




export const PasswordRecoveryEmail: React.FC<{
  userName: string;
  passwordResetLink: string;
}> = ({ userName, passwordResetLink }) => {
  const emailStyle: React.CSSProperties = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f0f0', // Background color
    padding: '20px',
  };
  
  const headerStyle: React.CSSProperties = {
    backgroundColor: '#007bff', // Header background color
    color: 'white', // Header text color
    padding: '10px',
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
  };
  
  const contentStyle: React.CSSProperties = {
    backgroundColor: 'white', // Content background color
    padding: '20px',
  };
  return (
    <div style={emailStyle}>
      <div style={headerStyle}>Password Recovery</div>
      <div style={contentStyle}>
        <p>Hello {userName},</p>
        <p>We received a request to reset your password for your Dibo Ruwa account. If you didn&#39;t make this request, please ignore this email.</p>
        <p>To set a new password, click the link below:</p>
        <p><a href={passwordResetLink}>{passwordResetLink}</a></p>
        <p>This link will expire in 24 hours, so be sure to use it right away.</p>
        <p>Stay safe, and always ensure you use a strong, unique password for your accounts.</p>
        <p>Best,</p>
        <p>The Dibo Ruwa Team</p>
      </div>
    </div>
  );
};





export const SubscriptionConfirmationEmail: React.FC<{
  customerName: string;
  serviceName: string;
  planName: string;
  startDate: string;
  endDate: string;
}> = ({ customerName, serviceName, planName, startDate, endDate }) => {
  
const emailStyle: React.CSSProperties = {
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f0f0f0', // Background color
  padding: '20px',
};

const headerStyle: React.CSSProperties = {
  backgroundColor: '#007bff', // Header background color
  color: 'white', // Header text color
  padding: '10px',
  fontSize: '24px',
  fontWeight: 'bold',
  textAlign: 'center',
};

const contentStyle: React.CSSProperties = {
  backgroundColor: 'white', // Content background color
  padding: '20px',
};
  return (
    <div style={emailStyle}>
      <div style={headerStyle}>Your Subscription with Dibo Ruwa is Confirmed!</div>
      <div style={contentStyle}>
        <p>Hello {customerName},</p>
        <p>Great choice! We&#39;re thrilled to have you onboard. Your subscription for {serviceName} is now confirmed. Get ready for a hassle-free and delightful experience.</p>
        <p>Details:</p>
        <ul>
          <li>Service: {serviceName}</li>
          <li>Plan: {planName}</li>
          <li>Subscription Period: {startDate} to {endDate}</li>
        </ul>
        <p>Thank you for trusting Dibo Ruwa. We&#39;re excited to serve you!</p>
        <p>Warmly,</p>
        <p>The Dibo Ruwa Team</p>
      </div>
    </div>
  );
};




const DaysToSubscriptionExpiryEmail: React.FC<{
  customerName: string;
  serviceName: string;
  daysToExpiry: number;
}> = ({ customerName, serviceName, daysToExpiry }) => {
  
const emailStyle: React.CSSProperties = {
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f0f0f0', // Background color
  padding: '20px',
};

const headerStyle: React.CSSProperties = {
  backgroundColor: '#007bff', // Header background color
  color: 'white', // Header text color
  padding: '10px',
  fontSize: '24px',
  fontWeight: 'bold',
  textAlign: 'center',
};

const contentStyle: React.CSSProperties = {
  backgroundColor: 'white', // Content background color
  padding: '20px',
};
  return (
    <div style={emailStyle}>
      <div style={headerStyle}>Heads up! Your Dibo Ruwa Subscription Ends in {daysToExpiry} Days</div>
      <div style={contentStyle}>
        <p>Hello {customerName},</p>
        <p>Just a quick note to remind you that your {serviceName} subscription with Dibo Ruwa is coming to an end in {daysToExpiry} days.</p>
        <p>Want uninterrupted service? Consider renewing your subscription. Head to our website or get in touch if you need any assistance.</p>
        <p>Thank you for choosing Dibo Ruwa. We hope to continue serving you!</p>
        <p>Best,</p>
        <p>The Dibo Ruwa Team</p>
      </div>
    </div>
  );
};

