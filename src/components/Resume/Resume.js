import React from "react";
import "./Resume.css";
import Profil from './Profil/Profil'
import Skills from './Skills/Skills'
import Experience from './Experience/Experience'
import Training from './Training/Training'
import Services from './Services/Services'
import Footer from '../Footer/Footer'

export default function Resume() {
  return (
    <div className="content-blocks">
      <div className="content">
        <Profil />
        <Skills />
        <Experience />
        <Training />
        <Services />
        <Footer />
      </div>
    </div>
  );
}
