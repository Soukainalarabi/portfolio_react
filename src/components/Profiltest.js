import React from "react";
import { FaCode } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake } from "@fortawesome/free-regular-svg-icons";


export default function Profil() {
    return (
        <section id="profil">
            <div className="paragraphe">
                <div className="containere">
                    <h1>A Propos De Moi </h1>
                </div>
                <div className="container">
                    <div className="profil-content">
                        <FaCode style={{
                            width: "300px",
                            height: "400px"
                        }} />
                        <div className="profil-text">

                            <p>
                                Bienvenue sur mon portfolio en ligne <FontAwesomeIcon icon={faHandshake} shake style={{ animationDuration: '2s', verticalAlign: 'middle' }} size="2x" />
                                . Je suis Soukaina Larabi une développeuse Web junior passionnée, spécialisée dans le développement frontend, avec une solide formation en tant que Développeur d'application JavaScript React chez OpenClassrooms.</p>

                            <p>    Mon parcours m'a permis d'acquérir une expertise approfondie dans des technologies modernes telles que JavaScript et React, me permettant de concevoir des applications Web interactives et dynamiques. En complément, j'ai suivi une formation en Développeur Web pour élargir mes compétences et rester à la pointe des dernières avancées du secteur.</p>

                            <p>   Aujourd'hui, je suis prête à relever de nouveaux défis et à mettre en pratique mes connaissances pour contribuer au succès de vos projets. Ma passion pour le développement Web et ma créativité me permettent d'apporter des solutions innovantes à chaque projet.

                                N'hésitez pas à me contacter pour discuter de vos besoins en matière de création de sites internet, de développement spécifique ou d'applications web. Ensemble, nous pouvons transformer vos idées en réalité numérique et créer des expériences utilisateur exceptionnelles.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}