import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can integrate backend API for form submission
    console.log("Form Submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">🍃🥗GreenCooking🥗🍃</h1>

      <div className="row">
        <div className="col-md-6">
          <img src="\contact-us (1).webp" alt="Contact Us" className="img-fluid rounded shadow-lg" />
        </div>

        <div className="col-md-6">
          {submitted ? (
            <div className="alert alert-success text-center" role="alert">
              Thank you! Your message has been sent successfully.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-3 shadow-lg rounded bg-light">
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Your Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Your Message</label>
                <textarea
                  name="message"
                  className="form-control"
                  rows="4"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
