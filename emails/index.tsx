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
      <header style={{
    background: "#35f77f",
    padding: "30px 0",
    textAlign: "center",
    display: "flex",
    fontSize: "30px",
    justifyContent: "center",
    alignItems: "center",
  }}>Welcome</header>

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
      <header style={{
    background: "#35f77f",
    padding: "30px 0",
    textAlign: "center",
    display: "flex",
    fontSize: "30px",
    justifyContent: "center",
    alignItems: "center",
  }}>New Order Received!!!</header>

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
  itemsOrdered: string;
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

  return (
    <div style={emailStyles}>
      <header style={{
    background: "#35f77f",
    padding: "30px 0",
    textAlign: "center",
    display: "flex",
    fontSize: "30px",
    justifyContent: "center",
    alignItems: "center",
  }}>New Order Placed</header>

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
            Items Ordered: <strong>{itemsOrdered}</strong>{" "}
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
      <header style={{
    background: "#35f77f",
    padding: "30px 0",
    textAlign: "center",
    display: "flex",
    fontSize: "30px",
    justifyContent: "center",
    alignItems: "center",
  }}>
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
      <header style={{
    background: "#35f77f",
    padding: "30px 0",
    textAlign: "center",
    display: "flex",
    fontSize: "30px",
    justifyContent: "center",
    alignItems: "center",
  }}>
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
  itemsOrdered: string;
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
      <header style={{
    background: "#35f77f",
    padding: "30px 0",
    textAlign: "center",
    display: "flex",
    fontSize: "30px",
    justifyContent: "center",
    alignItems: "center",
  }}>
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
  itemsDelivered: string;
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
