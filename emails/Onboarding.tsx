import React from 'react';

const wrapperStyle: React.CSSProperties = {
  fontFamily: 'Arial, sans-serif',
  textAlign: 'center',
  padding: '20px',
};

const titleStyle: React.CSSProperties = {
  color: '#333',
};

const messageStyle: React.CSSProperties = {
  color: '#666',
  lineHeight: '1.5',
};

const signatureStyle: React.CSSProperties = {
  fontStyle: 'italic',
  color: '#1df590',
};

interface Props {
  customerName: string;
}

const OnboardingTemplate: React.FC<Props> = ({ customerName }) => {
  return (
    <div style={wrapperStyle}>
      <h1 style={titleStyle}>Welcome to the Dibo Ruwa Family!</h1>
      <p style={messageStyle}>
        Hello {customerName},
        <br />
        You&apos;ve made a fantastic decision! Welcome to the Dibo Ruwa family, where convenience meets quality.
        Whether you&apos;re here for our mouth-watering meals, impeccable cleaning, or our premium laundry services,
        we promise to deliver the best.
      </p>
      <p style={messageStyle}>
        A big thank you for joining us! If you have any questions or need assistance, our team is here to help.
      </p>
      <p style={messageStyle}>
        Cheers to an easier life with Dibo Ruwa!
      </p>
      <p style={signatureStyle}>
        Warm Regards, <br />
        The Dibo Ruwa Team
      </p>
    </div>
  );
};

export default OnboardingTemplate;
