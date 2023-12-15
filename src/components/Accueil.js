import React from "react"
import TypedComponents from "../components/Typed"
import { MdOutlineExpandMore } from "react-icons/md";
import { MdClear, MdRemove, MdFullscreen } from 'react-icons/md';
import { Link as ScrollLink } from 'react-scroll';

export default function Accueil() {

  return (
    <section id="accueil-content">
      <div className="cover">
        <div className="text-editor-wrap">
          <div className="title-bar">
            <div className="icons-terminal"
            >
              <MdClear className="clear-terminal"
              />
              <MdRemove className="remove-terminal" />
              <MdFullscreen className="screen-terminal" />

            </div>
            <span className="title">soukaina-Larabi — bash — 80x
              <span className="terminal-height">100</span>
            </span>
          </div>
          <div className="text-body">
            <TypedComponents />
          </div>
        </div>
        <ScrollLink
          className="link-button"
          to="profil"
          smooth={true}
          duration={80}
          >
          <span style={{ marginBottom: "5px", display: "none" }}>Cliquez pour voir le profil</span>
          <MdOutlineExpandMore className="voirPlus" />
        </ScrollLink>






      </div>

    </section>
  )
}

