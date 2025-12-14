import { useState } from "react";
import "../Styles/contact.scss";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="contact-page">
      <h1 className="contact-page__title">GET IN TOUCH WITH US</h1>

      <article className="contact-form">
        <form onSubmit={handleSubmit} className="contact-form__form">
          <div className="contact-form__group">
            <label htmlFor="name">
              Full name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-form__group">
            <label htmlFor="email">
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-form__group">
            <label htmlFor="subject">
              Subject <span className="required">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-form__group">
            <label htmlFor="message">
              Message <span className="required">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              required
            />
          </div>

          <button type="submit" className="contact-form__submit">
            Submit
          </button>
        </form>
      </article>
      <p className="contact-page__footer">
        Visit our sister companies <a href="#">Home Sound</a> and{" "}
        <a href="#">The Movie Rooms</a> part of the HiFi Horizon Group.
      </p>
    </div>
  );
}
