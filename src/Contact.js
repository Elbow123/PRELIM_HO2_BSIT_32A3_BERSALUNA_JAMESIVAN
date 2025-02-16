import React from "react";

const Contact = () => {
  return (
    <div className="container-section" id="contact">
      <h2>Contact Me</h2>
      <form>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Your Email"
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Subject</label>
          <input type="text" className="form-control" placeholder="Subject" />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            className="form-control"
            rows="4"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
