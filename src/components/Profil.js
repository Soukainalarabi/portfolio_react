import React from "react";



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