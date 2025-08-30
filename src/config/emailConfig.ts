// Email Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Add an email service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Create a .env file in your project root with your credentials

export const emailConfig = {
  // EmailJS Configuration
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'personal',
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_vt2lbz8',
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'h8eG7hrdIQ4R7_e-E',
  
  // Recipient email
  recipientEmail: 'kaijameschen2017@gmail.com',
  
  // Email template variables (these should match your EmailJS template)
  templateVariables: {
    to_email: 'kaijameschen2017@gmail.com',
    from_name: '{{from_name}}',
    from_email: '{{from_email}}',
    subject: '{{subject}}',
    message: '{{message}}',
  }
};

