import React from "react";
import cv from "../assets/cvLarabi.jpg"
import { Image } from "react-bootstrap";
import cvPdf from "../assets/cv-larabi.pdf"
export default function Competences() {
    return (
        <section id="competences">
            <div className="containere">

                <h1>Compétences </h1>
            </div>
            <div className="container">
                <div className="SkillBox">
                    <p>Front-End</p>

                    <div className="SkillBar">
                        <div id="Skill-HTML">
                            <span className="Skill-Area ">HTML</span>
                        </div>
                    </div>

                    <div className="SkillBar">
                        <div id="Skill-CSS">
                            <span className="Skill-Area ">CSS/CSS3</span>
                        </div>
                    </div>
                    <div className="SkillBar">
                        <div id="Skill-BOOT">
                            <span className="Skill-Area ">Bootstrap</span>
                        </div>
                    </div>
                    <div className="SkillBar">
                        <div id="Skill-jQuery">
                            <span className="Skill-Area ">Javascript</span>
                        </div>
                    </div>
                    <div className="SkillBar">
                        <div id="Skill-C">
                            <span className="Skill-Area ">React</span>
                        </div>
                    </div>
                    <div className="SkillBar">
                        <div id="Skill-C">
                            <span className="Skill-Area ">Redux</span>
                        </div>
                    </div>
                    <p>Back-End</p>

                    <div className="SkillBar">
                        <div id="Skill-JS">
                            <span className="Skill-Area ">Node js</span>
                        </div>
                    </div>

                    <div className="SkillBar">
                        <div id="Skill-XML">
                            <span className="Skill-Area ">mySQL

                            </span>
                        </div>
                    </div>
                    <p>Design</p>

                    <div className="SkillBar">
                        <div id="Skill-PHP">
                            <span className="Skill-Area ">Adobe Indesign</span>
                        </div>
                    </div>

                    <div className="SkillBar">
                        <div id="Skill-VBNET">
                            <span className="Skill-Area ">Adobe Photoshop</span>
                        </div>
                    </div>
                    <div className="SkillBar">
                        <div id="Skill-JAVA">
                            <span className="Skill-Area ">Adobe Illustrator</span>
                        </div>
                    </div>

                    <div className="SkillBar">
                        <div id="Skill-SQL">
                            <span className="Skill-Area ">Figma </span>
                        </div>
                    </div>
                </div>
                <Image src={cv} alt="le cv en image" />
                {/* <Button href={cvPdf} variant="secondary" size="lg" className="cvPdf">
  <a download={cvPdf}>Télécharger mon Cv</a>
</Button> */}
<button className="btn cvPdf"><a href={cvPdf} alt="CV en ligne de Soukaina Larabi" target="_blank" download="" rel="noreferrer">Télécharger CV</a></button>
            </div>
        </section>
    )
}