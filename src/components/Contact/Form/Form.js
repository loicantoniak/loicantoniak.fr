import React from "react";
import emailjs from "emailjs-com";

export default function Form() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_portfolio",
        e.target,
        "user_btbpi0L2zR6vCzcWNhkEZ"
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
  }

  return (
    <form onSubmit={sendEmail}>
      <input
        className="form-input"
        type="text"
        placeholder="Loïc Antoniak"
        required
        size="40"
        name="name"
      />
      <input
        className="form-input"
        type="email"
        required
        placeholder="loic.antoniak@gmail.com"
        size="40"
        name="email"
      />
      <input
        className="form-input"
        type="text"
        required
        placeholder="Entretien d'embauche"
        size="40"
        name="subject"
      />
      <textarea
        name="message"
        cols="40"
        rows="10"
        className="form-input"
        required
        placeholder="Nous aimerions vous rencontrer afin de..."
      ></textarea>
      <button type="submit" className="btn">
        ENVOYER
      </button>
    </form>
  );
}
