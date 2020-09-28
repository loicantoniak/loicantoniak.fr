import React from "react";

export default function Form() {
  return (
    <form>
      <input
        className="form-input"
        type="text"
        placeholder="Loïc Antoniak"
        required
        size="40"
      />
      <input
        className="form-input"
        type="email"
        required
        placeholder="loic.antoniak@gmail.com"
        size="40"
      />
      <input
        className="form-input"
        type="text"
        required
        placeholder="Entretien d'embauche"
        size="40"
      />
      <textarea
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
