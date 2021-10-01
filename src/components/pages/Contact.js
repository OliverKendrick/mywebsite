import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../../App.css";
import Footer from "../Footer";

const Result = () => {
  return (
    <p>Your message has been successfully sent. i will contact you soon</p>
  );
};

function Contact(props) {
  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nbn0zhj",
        "template_hfjwako",
        e.target,
        "user_sNQAkiMV3pv0IHiD3NL4v"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  setTimeout(() => {
    showResult(false);
  }, 5000);
  return (
    <>
      <form action="" onSubmit={sendEmail}>
        <div class="formWord">
          <h2>
            {" "}
            Get in Touch
            <i class="fas fa-envelope"></i>
          </h2>
          <span>Full Name</span>
          <br />
          <input class="input100" type="text" name="fullName" required />
          <br />
          <span>Phone Number</span>
          <br />
          <input class="input100" type="text" name="phone" required />
          <br />
          <span>Enter Email</span>
          <br />
          <input class="input100" type="text" name="email" required />
          <br />
        </div>
        <div class="formWord">
          <span>Message</span>
          <br />
          <textarea name="message" required></textarea>
          <br />
          <button>SUBMIT</button>

          <div class="row">{result ? <Result /> : null}</div>
        </div>
      </form>
      <Footer />
    </>
  );
}

export default Contact;
