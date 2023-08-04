const jwt = require("jsonwebtoken");

const secretKey = 'blloooppooop';

const generateToken = (userId: string, expiresIn: string) => {
  const token = jwt.sign({ userId }, secretKey, { expiresIn });

  return token;
};

const verifyMailToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return {
      valid: true,
      payload: decoded,
    };
  } catch (error: any) {
    return {
      valid: false,
      error: error.message,
    };
  }
};

const generateActivationToken = (userId: string) => {
  // Generate the token based on user ID and purpose
  const token = generateToken(userId, "1d");
  const activationLink = `https://yourdomain.com/activate-account/${token}`;

  return `
            <h1>Activate Your Account</h1>
            <p>Click the link below to activate your account:</p>
            <a href="${activationLink}">Activate</a>
          `;
};

const generateResetPasswordToken = (userId: string) => {
  // Generate the token based on user ID and purpose (you can use a library like 'jsonwebtoken' for this)
  const token = "your_token_generation_logic";
  const resetPasswordLink = `https://yourdomain.com/reset-password/${token}`;

  return `
            <h1>Reset Your Password</h1>
            <p>Click the link below to reset your password:</p>
            <a href="${resetPasswordLink}">${resetPasswordLink}</a>
          `;
};

export { generateResetPasswordToken, generateActivationToken, verifyMailToken, generateToken };
