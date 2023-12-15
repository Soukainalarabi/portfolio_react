import "./timeline.css"
import react from "../../assets/react.WebP"
import code from "../../assets/code.WebP"
import cles from "../../assets/cles.WebP"

export default function Timeline() {
    return (
      <>
      <div className="container">
        <ul className="timeline">
          <li>
            <div className="timeline-badge">
              <img
                src={react}
                width="30"
                height="35"
                alt="React"
              />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="timeline-title">
                  Formation Développeur d'application - JavaScript React
                </h4>
                <h6>OpenClassrooms | Paris</h6>
                <p>
                  <small className="text-muted"> 1 an - 10 projets réalisés </small>
                </p>
              </div>
              <div className="timeline-body">
                <ul>
                  <li>Choisir une solution technique adaptée au client et travailler en mode Agile.</li>
                  <li>Créer des applications web dynamiques avec Javascript et React.</li>
                  <li>Résoudre des problèmes techniques avec un langage de programmation et des algorithmes.</li>
                  <li>Refactoriser du code pour qu’il soit plus moderne et optimisé.</li>
                  <li>Mettre en œuvre des test unitaires et d’intégration et débugger le code.</li>
                  <li>Communiquer avec le back-end de l’application grâce à une API.</li>
                </ul>
              </div>
            </div>
          </li>

          <li className="timeline-inverted">
            <div className="timeline-badge">
              <img
                src={code}
                width="25"
                height="25"
                alt="Code"
              />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="timeline-title">Formation Développeur Web</h4>
                <h6>OpenClassrooms | Paris</h6>
                <p>
                  <small className="text-muted"> 6 mois - 6 projets réalisés </small>
                </p>
              </div>
              <div className="timeline-body">
                <ul>
                  <li>
                    <strong>Intégration d'une maquette</strong> en site web ( HTML5 / CSS3 )
                  </li>
                  <li>
                    <strong>Dynamisation d'une page web - </strong>animations CSS ( HTML5 / SASS )
                  </li>
                  <li>
                    <strong>Optimisation du référencement SEO</strong> d'un site web existant ( HTML5 / CSS3 / JavaScript )
                  </li>
                  <li>
                    <strong>Création d'un site de e-commerce</strong> ( JavaScript )
                  </li>
                  <li>
                    <strong>Construction d'une API sécurisée</strong> pour une application d'avis gastronomiques ( Node JS, Express JS, Mongo DB )
                  </li>
                  <li>
                    <strong>Création d'un réseau social d’entreprise</strong> ( Vue JS, Node JS / Express JS, mySQL )
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="timeline-badge">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 172 172">
                <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}>
                  <path d="M0,172v-172h172v172z" fill="none"></path>
                  <path d="M86,172c-47.49649,0 -86,-38.50351 -86,-86v0c0,-47.49649 38.50351,-86 86,-86v0c47.49649,0 86,38.50351 86,86v0c0,47.49649 -38.50351,86 -86,86z"></path>
                  <g fill="#000000">
                    <path d="M145.0304,32.336v107.328l-43.9535,-107.328zM66.579,117.06877h19.421l9.20069,22.59523h19.421l-28.62169,-70.29716zM26.9696,32.336v107.328l43.9535,-107.328z"></path>
                  </g>
                </g>
              </svg>
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="timeline-title">Formation chef de projet multimédia</h4>
                <h6>École IESA multimédia | Paris</h6>
                <p>
                  <small className="text-muted"> 2018–2019 </small>
                </p>
              </div>
              <div className="timeline-body">
                <ul>
                  <li>
                    <strong>Graphisme</strong> Photoshop, Illustrateur, Indesign
                    <p>
                      Création d'un logo, une charte graphique. Réalisation d'une affiche, flyer, une bannière. Mise en page d'articles, de brochures.
                    </p>
                  </li>
                  <li>
                    <strong>Vidéo</strong> Premiere Pro, After Effect, Audition
                    <p>
                      Scénario, story board, réalisation, montage vidéo.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li className="timeline-inverted">
            <div className="timeline-badge warning">
              <img
                src="data:image/WebP;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAABtUlEQVRoge2ZTU7DMBBGXyG3IF734iz4qZRNKWLBjQDRXgAWqaUk2LHHcRLTzpNmY7lfZpyxPZmCoiiKoiilY4AdcAJ+hHYCGmC7or4IA3wmODK0r7PW0vpidhmcsfa0gr6YlDTz2XEFfTGhh+yBO6AGDhHzpfpSmz3gujPXlB7wJjJgiUbu+VJGY7rJ/LDiSQn4hTaNN7hX044b4DWDvs9S9YOM7dkQrj29tH6Pq0vpGIYreCDuLdiUk77h3Po99JS+dHIEPCw8/j2hysbuOd+eKqrSiiFncf+9gn6PmJR+j5gTy9sK+mK2tB/XU1f/A/d1M7d+Eob24/qY4MgReAw4M7e+oihXhvalE0z70gvpi9G+9EQL6ds+dwhfH3wyLqftF1JNe2DY8aYz7mvKh/Rn7WnF4HK661QFPJyt6ozXnt+G9IsPGNpAq8GY71+IkP6sPa0YXE43/A2wS0U/1SUB5z4jxPiEn3EHfQvcCxxaNOApPa0x8SwrvRaa0sQdWqmndJH3cMy1lHpKF3ktdVuzrsLDcGGFR8495lvMELPdw9qXnoD2pRfQT0L70oqiKIqiTOYXLGa0P+RmAZgAAAAASUVORK5CYII="
                width="30"
                height="30"
                alt="Licence"
              />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="timeline-title">Licence Professionnelle</h4>
                <h6>École Normale Supérieure de Casablanca</h6>
                <p>
                  <small className="text-muted"> 2016–2017 </small>
                </p>
              </div>
              <div className="timeline-body">
                <p>Enseignement mathématiques.</p>
              </div>
            </div>
          </li>

          <li>
            <div className="timeline-badge">
              <img
                src={cles}
                width="30"
                height="30"
                alt="Cryptography"
              />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="timeline-title">DEUG</h4>
                <h6>École Normale Supérieure de Casablanca</h6>
                <p>
                  <small className="text-muted"> 2014–2016 </small>
                </p>
              </div>
              <div className="timeline-body">
                <p>Cryptographie mathématiques et sécurité d'information.</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      </> 
    )
}