import React from "react"
import TypedComponents from "../components/Typed"
import { MdOutlineExpandMore } from "react-icons/md";
import { MdClear, MdRemove, MdFullscreen } from 'react-icons/md';

export default function Accueil() {

  return (
    <section id="accueil-content">
      <div className="cover">
        <div className="text-editor-wrap">
          <div className="title-bar">
            <div className="icons-terminal" style={{ width: "20%" }}>
              <MdClear style={{
                fill: "black",
                backgroundColor: "red",
                borderRadius: '50%',
                marginRight: '6px'
              }} />
              <MdRemove style={{
                backgroundColor: "#ffff00ba", fill: "black", borderRadius: '50%', marginRight: '6px'
              }} />
              <MdFullscreen style={{ backgroundColor: "green", fill: "black", borderRadius: '50%', marginRight: '6px' }} />

            </div>
            <span className="title">soukaina-Larabi — bash — 80x
              <span className="terminal-height">100</span>
            </span>
          </div>
          <div className="text-body">
            <TypedComponents />
          </div>
        </div>
        <a className="link-button" href="#profil" style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ marginBottom: "5px", display:"none" }}>Cliquez pour voir le profil</span>
          <MdOutlineExpandMore
            style={{
              width: "100px",
              height: "100px",
              color: "silver",
              marginBottom: "60px"
            }}
          />
        </a>
      </div>

    </section>
  )
}

