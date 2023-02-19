import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";

import "../CSS/Contacts.css";

export default function Contacts() {
  const [formData, setFormData] = useState({
    yourName: "",
    yourEmail: "",
    yourMessage: "",
    agreement: false,
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      const { name, value, type, checked } = event.target;

      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <main id="contacts">
      <div className="contactTitle">
        <h1>contact me</h1>
        <p>let's work together and make your project happen</p>
      </div>

      <div className="container">
        <div className="contactInfo">
          <div className="info">
            <MdLocationOn className="icon" />
            <div className="contactText">
              <h2>Address</h2>
              <p>Maia, Portugal</p>
            </div>
          </div>
          <div className="info">
            <AiFillMessage className="icon" />
            <div className="contactText">
              <h2>Email</h2>
              <p>martajesus.work@gmail.com</p>
            </div>
          </div>
          <div className="info">
            <FaPhoneAlt className="icon" />
            <div className="contactText">
              <h2>Phone</h2>
              <p>916844313</p>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form onSubmit={handleSubmit}>
            <div className="inputBox">
              <input
                type="text"
                aria-label="name"
                placeholder="Your name"
                name="yourName"
                onChange={handleChange}
                value={formData.yourName}
              />
            </div>
            <div className="inputBox">
              <input
                type="email"
                aria-label="email"
                placeholder="Your email"
                name="yourEmail"
                onChange={handleChange}
                value={formData.yourEmail}
              />
            </div>
            <div className="inputBox">
              <textarea
                type="text"
                arial-label="message"
                placeholder="Message"
                name="yourMessage"
                onChange={handleChange}
                value={formData.yourMessage}
              />
            </div>
            <label>
              <input type="checkbox" name="agreement" onChange={handleChange} checked={formData.agreement} /> Please add
              me to your newsletter and let me know about your projects
            </label>
            <div>
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
