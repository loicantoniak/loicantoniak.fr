import React from "react";
import "./DownloadButton.css";
import CV from "../../../assets/documents/cv.pdf";

export default function DownloadButton() {
  return (
    <div className="downloadButton">
      <a target="blank" href={CV} className="btn-download">
        <span>TÉLÉCHARGER MON CV</span>
      </a>
    </div>
  );
}
