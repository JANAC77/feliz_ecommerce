import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaCheckCircle,
  FaSpinner,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  // Replace with your EmailJS credentials
  const EMAILJS_SERVICE_ID = "service_ifl3ed5";
  const EMAILJS_TEMPLATE_ID = "template_5j7z96a";
  const EMAILJS_PUBLIC_KEY = "zLqIambnLhX-FjQAL";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
    interestedIn: "",
  });

  const services = [
    "Modular Kitchen",
    "Bedroom Design",
    "Living Room Design",
    "Pooja Room",
    "Kids Bedroom",
    "Study Room",
    "Wardrobe Design",
    "Full Home Interiors",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        message: formData.message,
        interestedIn: formData.interestedIn,
        time: new Date().toLocaleString(),
      };

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      );

      if (result.text === "OK") {
        setSubmitStatus({
          type: "success",
          message: "Thank you! We will get back to you within 24 hours.",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          message: "",
          interestedIn: "",
        });
      }
    } catch (error) {
      console.error("Email send error:", error);
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again or call us directly.",
      });
    } finally {
      setIsSubmitting(false);
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: "", message: "" });
      }, 5000);
    }
  };

  return (
    <div className="contact-page">
      {/* Banner Section */}
      <div className="page-banner">
        <div className="banner-bg">
          <img src="/images/image17.webp" alt="Contact Us" />
        </div>
        <div className="banner-overlay"></div>
        <div className="container banner-content">
          <h1>Contact Us</h1>
          <p>Get a Free Consultation for Your Dream Home</p>
        </div>
      </div>

      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>
                We'd love to hear from you. Send us a message and we'll respond
                within 24 hours.
              </p>

              <div className="info-card">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4>Visit Us</h4>
                  <p>
                    1461, 5th Block, MS Ramaiah North City,
                    <br />
                    Near Manyata Tech Park, Nagavara,
                    <br />
                    Bengaluru, Karnataka 560077
                  </p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <FaPhone />
                </div>
                <div>
                  <h4>Call Us</h4>
                  <p>+91 96200 00929</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <h4>Email Us</h4>
                  <p>felizinteriors1@gmail.com</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <FaClock />
                </div>
                <div>
                  <h4>Working Hours</h4>
                  <p>
                    Monday - Saturday: 9:30 AM - 7:00 PM
                    <br />
                    Sunday: By Appointment
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
              <h3>Send us a Message</h3>

              {/* Status Message */}
              {submitStatus.message && (
                <div className={`status-message ${submitStatus.type}`}>
                  {submitStatus.type === "success" ? <FaCheckCircle /> : null}
                  {submitStatus.message}
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="address"
                      placeholder="Your Location / Address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <select
                    name="interestedIn"
                    value={formData.interestedIn}
                    onChange={handleChange}
                    required
                  >
                    <option value="">I'm interested in...</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Tell us about your dream home..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="spinner" /> Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Google Map */}
          <div className="map-container">
            <iframe
              title="Feliz Interiors Location"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7773.771343185821!2d77.61783478392046!3d13.042948608424304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s1461%2C%205th%20Block%2C%20MS%20Ramaiah%20North%20City%2C%20Manayata%20Tech%20Park%2C%20Nagavara%2C%20Bengaluru%2C%20Karnataka%20560077!5e0!3m2!1sen!2sin!4v1774341810535!5m2!1sen!2sin"              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
