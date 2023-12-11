import React from "react"
import TypedComponents from "../components/Typed"
import { AiFillCloseCircle } from "react-icons/ai";
import { MdOutlineExpandMore } from "react-icons/md";

export default function Accueil() {
  
  return (
    <section id="accueil-content">
      <div className="cover">
        {/* <h1>Développeuse front-end</h1> */}
        <div className="text-editor-wrap">
          <div className="title-bar">
            <span className="icons-terminal"><AiFillCloseCircle /></span>
            <span className="title">soukaina-Larabi — bash — 80x
              <span className="terminal-height">100</span>
            </span>
          </div>
          <div className="text-body">
            <TypedComponents />
          </div>
        </div>
        <a className="link-button" href="#profil" style={{display:"flex",flexDirection:"column"}}>
      
      <MdOutlineExpandMore style={{
        width: "100px",
        height: "100px",
        color: "silver",
        marginBottom:"60px"

      }} />
        </a>
      </div>

    </section>
  )
}

