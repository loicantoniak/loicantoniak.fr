import React from "react";
import "./DownloadButton.css";

export default function DownloadButton() {
  return (
    <div className="downloadButton">
      <a target="blank" href="https://firebasestorage.googleapis.com/v0/b/loicantoniak-portfolio.appspot.com/o/documents%2FCV%20Lo%C3%AFc%20Antoniak%20-%20D%C3%A9veloppeur%20front-end.pdf?alt=media&token=7075b603-f7d5-4fa3-883a-ae21a02f7cf8" className="btn-download">
        <span>TÉLÉCHARGER MON CV</span>
      </a>
    </div>
  );
}
