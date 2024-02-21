import React from "react";
import ContactContent from "../../components/ContactContent";
import ContactForm from "../../components/ContactForm";
import ServiceContactImg from "../../assets/img/ServiceContact.png";

const ServiceContact = (props) => {
  return (
    <>
      <section className="my-5 py-lg-5">
        <div className="container">
          <div className="row mx-0 justify-content-center">
            <div className="col-xl-11 col-xxl-9 ">
              <div className="row mx-0 align-items-center gap-lg-0 gap-4">
                <div className="col-lg-6 col-xl-6 col-xxl-5">
                  <ContactContent />
                </div>
                <div className="col-lg-6 col-xl-6 col-xxl-7">
                  {props.ServiceContact ? (
                    <img src={ServiceContactImg} className="img-fluid" alt="" />
                  ) : (
                    <ContactForm />
                  )}
 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceContact;
