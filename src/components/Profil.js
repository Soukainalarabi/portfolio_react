import React from "react";
import PropTypes from "prop-types"


export default function Profil({title,image,text1,text2,text3}) {
    return (
        <>
                <div className="containere">
                    <h1>{title} </h1>
                </div>
                <div className="container">
                    <div className="profil-content">
                       {image}
                        <div className="profil-text">

                            <p>
                               {text1}</p>

                            <p>    {text2}</p>

                            <p>   {text3}
                            </p>
                        </div>
                    </div>
                </div>
                </>
    );
}
Profil.propTypes={
    title:PropTypes.string,
    image:PropTypes.node,// PropTypes.node pour accepter des composants React en tant que texte
    text1:PropTypes.node,
    text2:PropTypes.node,
    text3:PropTypes.node,
}
Profil.defaultProps={
    title:"",
    image:"",
    text1:"",
    text2:"",
     text3:"",
 }