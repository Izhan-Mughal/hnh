import React from "react";

const ContactForm = () => {
  return (
    <>
      <form id="contactForm">
        <div className="row mx-0 gap-lg-0 gap-3">
          <div className="col-lg-6">
            <label className="lato fw-bold text__dark" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="John David"
            />
          </div>
          <div className="col-lg-6">
            <label className="lato fw-bold text__dark" htmlFor="Email">
              Email
            </label>
            <input
              type="text"
              name="Email"
              id="Email"
              placeholder="JohnDavid@email.com"
            />
          </div>
          <div className="col-lg-6 mt-lg-4">
            <label className="lato fw-bold text__dark" htmlFor="Phone">
              Phone
            </label>
            <input
              type="tel"
              name="Phone"
              id="Phone"
              placeholder="+907 123 213"
            />
          </div>
          <div className="col-lg-6 mt-lg-4">
            <label className="lato fw-bold text__dark" htmlFor="Company">
              Company (website){" "}
            </label>
            <input
              type="text"
              placeholder="company.com"
              name="Company"
              id="Company"
            />
          </div>
          <div className="col-lg-12 mt-lg-4">
            <label className="lato fw-bold text__dark" htmlFor="Message">
              Message{" "}
            </label>
            <textarea
              type="text"
              name="Message"
              id="Message"
              placeholder="Enter Message"
            ></textarea>
          </div>
          <div className="col-lg-12 mt-lg-4">
            <button className="btn rounded-pill px-4 py-2 bg__dark text__light">
              <span className="d-block py-1">Send Message</span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
