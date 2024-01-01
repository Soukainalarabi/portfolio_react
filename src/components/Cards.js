import React from "react"
import { Image } from "react-bootstrap"
import PropTypes from "prop-types"

export default function Cards({  coverProject, title1,title2 ,onClick ,icon1,icon2,icon3,icon4,projetLink}) {
    
    return (
        <>
            <div className="col-6" >
            <a href={projetLink} target="_blank" rel="noopener noreferrer"  onClick={onClick}>
                <div className="card"  >
                    <Image
                        className="card-border"
                        src={coverProject}
                        alt="Project 1"
                        loading="lazy"
                      
                    />
                    <div className="card-body text-center">
                        <p className="card-text1">
                            {title1}              </p>
                            <p className="card-text2">
                            {title2}              </p>    
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="tech-icon">
                                {icon1}                                {icon2}
                                {icon3}
                                {icon4}
                            </div>
                        </div>
                        <div className="btn-group">
                            <button type="button" className="btn btn-outline">
                                Voir le projet
                            </button>
                        </div>
                    </div>
                </div>
                </a>
            </div>

         

        </>
    )
}
Cards.propTypes={
    coverProject:PropTypes.string,
    title1:PropTypes.string,
    title2:PropTypes.string,
    onClick:PropTypes.func,
    icon1:PropTypes.node,
    icon2:PropTypes.node,
    icon3:PropTypes.node,
    icon4:PropTypes.node,
    projetLink:PropTypes.string,
}
Cards.defaultProps = {
   coverProject: "",
    title1: "",       
     title2: "",       
     onClick: () => {}, 
     icon1: null,     
     icon2: null,      
     icon3: null,      
     icon4: null,      
     projetLink: "#"
   };