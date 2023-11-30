import React from "react";
import { useNavigate } from "react-router-dom";
import Cards from "./Cards";
import chouette from "../assets/Capture chouette.WebP"
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
    const navigate=useNavigate()

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
                    
                    <Cards projetDetails="projet1.html" coverProject={fishEye} title=" FishEye est un site "
                        icon1={<TiHtml5/>}
                        icon2={<IoLogoCss3/>}
                        icon3={<RiJavascriptFill/>}
                        icon4={<FaGithub/>} />
                    <Cards projetDetails="projet1.html" coverProject={petitPlats} title=" les petits plats est un site"
                        icon1={<TiHtml5/>}
                        icon2={<IoLogoCss3/>}
                        icon3={<RiJavascriptFill/>}
                        icon4={<FaGithub/>}/>
                    <Cards projetDetails="projet"
                        onClick={() => handleCardClick("projet")}
                        coverProject={chouette}
                        title=" La Chouette Agence Optimisation SEO"
                        icon1={<TiHtml5/>}
                        icon2={<IoLogoCss3/>}
                        icon3={<RiJavascriptFill/>}
                        icon4={<FaGithub/>}
                         />
                    <Cards projetDetails="projet2" 
                    onClick={()=>handleCardClick("projet2")}
                    coverProject={groupomania} title=" Groupomania , Création d'un réseau social d’entreprise" 
                    icon1={< FaNode/>}
                        icon2={<FaVuejs/>}
                        icon3={<SiMysql/>}
                        icon4={<FaGithub/>}
                    />
              
                </div>
            </div>
        </section>
    )
}