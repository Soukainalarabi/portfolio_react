import React from "react";
import { useNavigate } from "react-router-dom";
import Cards from "./Cards";
import chouette from "../assets/Capture chouette.WebP"
import portfolio from "../assets/capture_portfolio.WebP"
import groupomania from "../assets/groupomania.WebP"
import fishEye from "../assets/projetFish.WebP"
import petitPlats from "../assets/projetPlats.WebP"
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { RiJavascriptFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";



export default function Portfolio() {
    const navigate = useNavigate()

    const handleCardClick = (projetDetails) => {
        if (projetDetails === "projet") {
            navigate("/projet")

        }
        if (projetDetails === "projet2") {
            navigate("/projet2")

        }
    };
    return (
        <section id="portfolio">
            <div className="containere">

                <h1>Portfolio </h1>
            </div>

            <div className="container">
                <div className="row">

                   
                    <Cards projetLink="https://github.com/Soukainalarabi/les_petits_plats_react" coverProject={petitPlats} title1=" les petits plats | application SPA"
                    title2="Projet de formation"
                        icon1={<TiHtml5 />}
                        icon2={<IoLogoCss3 />}
                        icon3={<RiJavascriptFill />}
                        icon4={<FaGithub />} />
                     <Cards projetLink="https://github.com/Soukainalarabi/portfolio_react" 
                        coverProject={portfolio} title1="Portfolio | application SPA"
                        title2="Site web développeur"
                        icon1={< FaNode />}
                        icon2={<FaVuejs />}
                        icon3={<SiMysql />}
                        icon4={<FaGithub />}
                    />
                    <Cards projetDetails="projet"
                        onClick={() => handleCardClick("projet")}
                        coverProject={chouette}
                        title1=" La Chouette Agence | Optimisation SEO"
                        title2="Projet de formation"
                        icon1={<TiHtml5 />}
                        icon2={<IoLogoCss3 />}
                        icon3={<RiJavascriptFill />}
                        icon4={<FaGithub />}
                    />
                     <Cards projetDetails="projet1.html" coverProject={fishEye} title1=" FishEye | Plateforme de photographes "
                        title2="Projet de formation" icon1={<TiHtml5 />}
                        icon2={<IoLogoCss3 />}
                        icon3={<RiJavascriptFill />}
                        icon4={<FaGithub />} />
                    <Cards projetDetails="projet2"
                        onClick={() => handleCardClick("projet2")}
                        coverProject={groupomania} title1=" Groupomania |  Réseau social d’entreprise"
                        title2="Projet de formation"
                        icon1={< FaNode />}
                        icon2={<FaVuejs />}
                        icon3={<SiMysql />}
                        icon4={<FaGithub />}
                    />
                   

                </div>
            </div>
        </section>
    )
}