import { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
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
      <div className="title">
        <h1>contact me</h1>
        <p>let's work together and make your project happen</p>
      </div>

      <div className="container">
        <div className="infoWrapper">
          <div className="info">
            <MdLocationOn className="icon" />
            <div className="text">
              <h2>Address</h2>
              <p>Maia, Portugal</p>
            </div>
          </div>
          <div className="info">
            <AiFillMessage className="icon" />
            <div className="text">
              <h2>Email</h2>
              <p>martajesus.work@gmail.com</p>
            </div>
          </div>
          <div className="info">
            <FaPhoneAlt className="icon" />
            <div className="text">
              <h2>Phone</h2>
              <p>916844313</p>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              aria-label="name"
              placeholder="Your name"
              name="yourName"
              onChange={handleChange}
              value={formData.yourName}
            />
            <input
              type="email"
              aria-label="email"
              placeholder="Your email"
              name="yourEmail"
              onChange={handleChange}
              value={formData.yourEmail}
            />
            <textarea
              type="text"
              arial-label="message"
              placeholder="Message"
              name="yourMessage"
              onChange={handleChange}
              value={formData.yourMessage}
            />
            <label>
              <input type="checkbox" name="agreement" onChange={handleChange} checked={formData.agreement} /> Please add
              me to your newsletter and let me know about your projects
            </label>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
