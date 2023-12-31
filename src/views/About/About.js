import React from "react";
// import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
// import Footer from "../../components/Footer/Footer";
import Collapse from "../../components/Collapse/Collapse";
import "./About.scss";

import imgBannerAbout from "../../assets/images/bannierApropos.png";

function About() {
  return (
    <>
      {/* <Header /> */}
      <Banner src={imgBannerAbout} />
      <section className="about_collapses">
        <div className="about_collapses_content">
          <Collapse
            title="Fiabilité"
            content="Les annonces postées sur Kasa garantissent une fiabilité totale.
                    Les photos sont conformes aux logements, et toutes les informations
                    sont régulièrement vérifiées par nos équipes."
          />
        </div>
        <div className="about_collapses_content">
          <Collapse
            title="Respect"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa.
                    Tout comportement discriminatoire ou de perturbation du voisinage
                    entraînera une exclusion de note plateforme."
          />
        </div>
        <div className="about_collapses_content">
          <Collapse
            title="Service"
            content="Nos équipes se tiennent à votre disposition pour vous fournir une
                    expérience parfaite. N'hésitez pas à nous contacter si vous avez
                    la moindre question."
          />
        </div>
        <div className="about_collapses_content">
          <Collapse
            title="Sécurité"
            content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
                    pour les voyageurs, chaque logement correspond aux critères de sécurité
                    établis par nos services. En laissant une note aussi bien à l'hôte qu'au
                    locataire, cela permet à nos équipes de vérifier que les standards sont
                    bien respectés. Nous organisons également des ateliers sur la sécurité
                    domestique pour nos hôtes."
          />
        </div>
      </section>
      {/* <AboutContent /> */}
      {/* <Footer /> */}
    </>
  );
}

export default About;
