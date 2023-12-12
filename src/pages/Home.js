import React from "react";
import Accueil from "../components/Accueil";
import Profil from "../components/Profil";
import Parcours from "../components/Parcours";
import Competences from "../components/Competences";
import Portfolio from "../components/Portfolio";
import FooterProjet from "../components/FooterProjet";
import { FaCode } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake } from "@fortawesome/free-regular-svg-icons";
import { FaMailBulk } from "react-icons/fa";


export default function Home() {
    return (
        <>
            <Accueil />
            <section id="profil">
            <div className="paragraphe">

            <Profil 
            title="A Propos De Moi" image={<FaCode style={{
                width: "300px",
                height: "400px"
            }} />} 
            text1={<>
                Bienvenue sur mon portfolio en ligne{" "}
                <FontAwesomeIcon
                    icon={faHandshake}
                    shake
                    style={{ animationDuration: '2s', verticalAlign: 'middle' }}
                    size="2x"
                />
                . Je suis Soukaina Larabi, une développeuse Web junior passi, spécialisée dans le développement front-End. Mon parcours a débuté avec une formation approfondie en tant que Développeuse Web, où j'ai acquis des compétences solides dans divers aspects du développement web.
            </>} 
            text2="Fortement motivée par une volonté d'approfondir mes connaissances, j'ai ensuite suivi la formation de Développeur d'application JavaScript React chez OpenClassrooms. Cette expérience a renforcé mes compétences dans des technologies modernes telles que JavaScript et React, me permettant ainsi de concevoir des applications Web interactives et dynamiques." 
            text3="Avec une solide formation en développement Web, je suis prête à relever de nouveaux défis et à mettre en œuvre mes connaissances pour garantir le succès de vos projets. Ma passion pour le développement Web et ma créativité me permettent de proposer des solutions innovantes pour chaque projet."

/>
</div>
</section>
            <Competences />
            <Parcours />
            <Portfolio />
            <section id="contact">

            <Profil 
            title="Contactez-Moi" image={<FaMailBulk style={{
                width: "300px",
                height: "200px"

            }} />} 
            text1={<>
                Vous souhaitez me contacter ? Dans ce cas vous pouvez m'envoyer un mail à l'adresse <a className="text-muted"
                                href="mailto:soukaina.larabi44@gmail.com">soukaina.larabi44@gmail.com</a> Vous pouvez  aussi me contacter via les liens proposés,et je veillerai à vous répondre dans les plus brefs délais.
            </>} 
            text2=""
            text3=""/>
            </section>
             <FooterProjet style={{
                width: "400px",
                height: "200px"
            }} />
        </>
    )

}