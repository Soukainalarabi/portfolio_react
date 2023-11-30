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
                . Je suis Soukaina Larabi, une développeuse Web junior passionnée,
                spécialisée dans le développement frontend, avec une solide formation en
                tant que Développeur d'application JavaScript React chez OpenClassrooms.
            </>} 
            text2="Mon parcours m'a permis d'acquérir une expertise approfondie dans des technologies modernes telles que JavaScript et React, me permettant de concevoir des applications Web interactives et dynamiques. En complément, j'ai suivi une formation en Développeur Web pour élargir mes compétences et rester à la pointe des dernières avancées du secteur." 
            text3="Aujourd'hui, je suis prête à relever de nouveaux défis et à mettre en pratique mes connaissances pour contribuer au succès de vos projets. Ma passion pour le développement Web et ma créativité me permettent d'apporter des solutions innovantes à chaque projet.

N'hésitez pas à me contacter pour discuter de vos besoins en matière de création de sites internet, de développement spécifique ou d'applications web. Ensemble, nous pouvons transformer vos idées en réalité numérique et créer des expériences utilisateur exceptionnelles."/>
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