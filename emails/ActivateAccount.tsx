import React from 'react';

const wrapperStyle: React.CSSProperties = {
  fontFamily: 'Arial, sans-serif',
  padding: '20px',
};

const titleStyle: React.CSSProperties = {
  color: '#333',
};

const messageStyle: React.CSSProperties = {
  color: '#666',
  lineHeight: '1.5',
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: '#5ffa7cc2',
  color: '#fff',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  textDecoration: 'none',
};

interface Props {
  customerName: string;
  activationLink: string;
}

const ActivateAccount: React.FC<Props> = ({ customerName, activationLink }) => {
  return (
    <div style={wrapperStyle}>
      <h1 style={titleStyle}>Welcome to Dibo Ruwa!</h1>
      <p style={messageStyle}>
        Hello {customerName},
        <br />
        We&#39;re excited to have you on board. To activate your account and start enjoying our services,
        simply click the button below:
      </p>
      <a href={activationLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        <button style={buttonStyle}>Activate Account</button>
      </a>
      <p style={messageStyle}>
        If the button doesn&#39;t work, you can also copy and paste the following link into your browser&#39;s address bar:
        <br />
        <em>{activationLink}</em>
      </p>
      <p style={messageStyle}>
        Welcome to the Dibo Ruwa family!
      </p>
      <p style={messageStyle}>
        If you have any questions or need assistance, feel free to contact our support team.
      </p>
      <p style={messageStyle}>
        Best Regards, <br />
        The Dibo Ruwa Team
      </p>
    </div>
  );
};

export default ActivateAccount;
