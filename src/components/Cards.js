import React from "react"
import { Image } from "react-bootstrap"

export default function Cards({ projetDetails, coverProject, title ,onClick ,icon1,icon2,icon3,icon4}) {
    
    return (
        <>

            <div className="col-6" onClick={onClick}>
                <div className="card" >
                    <Image
                        className="card-border"
                        src={coverProject}
                        alt="Project 1"
                        style={{ objectFit: "cover", width: "100%", height: "225px" }}
                    />

                    <div className="card-body text-center">
                        <p className="card-text">
                            {title}              </p>

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
            </div>

         

        </>
    )
}