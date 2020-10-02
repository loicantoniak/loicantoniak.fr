import React from "react";
import './Map.css'

export default function Map() {
  return (
    <div>
      <div className="google_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83334.61114835297!2d3.9850489227423593!3d49.25352993099871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e974334a533b09%3A0x40a5fb99a3b45c0!2sReims!5e0!3m2!1sfr!2sfr!4v1576081535341!5m2!1sfr!2sfr"
          width="100%"
          height="500"
          frameBorder="0"
          allowFullScreen=""
          title="reims"
        ></iframe>
      </div>
    </div>
  );
}
