import { useForm, ValidationError } from "@formspree/react";
import React from "react";
import Banner from "../../Assets/Images/contact-banner.jpeg";
import Meta from "../../components/Meta/Meta";
import "./Contact.scss";

const Contact = () => {
  const [state, handleSubmit] = useForm("xwkjqgyg");
  return (
    <>
      <Meta title={"Contact Us"} />
      <section className="contact">
        <div className="row m-0">
          <div className="col-12 p-0 h-75">
            <img src={Banner} className="w-100 h-50" alt="" />
          </div>
          <div className="col-12 col-md-6 p-0 m-0">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28263734.263713006!2d89.8447438461152!3d25.35809662449912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1679609870956!5m2!1sen!2sbd"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 col-md-6 p-3 p-sm-5 form">
            <p className="text-white fw-bold text-center fs-5 pb-1 pb-sm-4">
              Send us your beautiful thoughts 😊
            </p>
            <form onSubmit={handleSubmit}>
              <p className="fw-bold text-white mb-2">Name</p>
              <input
                type="text"
                name="FirstName"
                className="form-control mb-3"
                id="validationTooltip01"
                placeholder="Full name ✍🏻"
                required
              />
              <p className="fw-bold text-white mb-2">Email</p>
              <input
                type="email"
                name="Email"
                className="form-control mb-3"
                placeholder="Your E-mail 📧"
                id="validationTooltipUsername"
                aria-describedby="validationTooltipUsernamePrepend"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <p className="fw-bold text-white mb-2">Message</p>
              <input
                type="text"
                name="Message"
                className="form-control pt-5 pb-5 text-center mb-3"
                placeholder="Type your message here... 👩🏻‍💻"
                id="validationTooltip05"
                required
              />
              {state.succeeded ? (
                <p className="text-success mb-0 text-center">
                  Message sent successfully ✅
                </p>
              ) : (
                ""
              )}
              <button
                className="button4 mt-4 d-block mx-auto mx-md-0"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
