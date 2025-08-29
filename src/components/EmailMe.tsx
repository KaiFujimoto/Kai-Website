import React, { forwardRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { sendEmail } from "../redux/emailSlice";
import { Email } from "../constants/constants";

const EmailMe = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, successMessage } = useSelector(
    (state: RootState) => state.email
  );

  const [formData, setFormData] = useState<Email>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(sendEmail(formData));
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="inner-section fade-in" ref={ref}>
      <div className="section title">Email Me</div>
      <div className="inner body">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Email"}
          </button>
          {successMessage && (
            <div className="form-message success">{successMessage}</div>
          )}
          {error && <div className="form-message error">{error}</div>}
        </form>
      </div>
    </div>
  );
});

export default EmailMe;
