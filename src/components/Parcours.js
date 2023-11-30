import React from "react";
import {  MDBContainer } from "mdb-react-ui-kit";
import Timeline from "./Timeline";


export default function Parcours() {
    return (
        <section id="parcours">
            <div className="containere">

                <h1>Parcours</h1>
            </div>
                <MDBContainer fluid className="py-5">
                  <Timeline/>
                </MDBContainer>
        </section>
    );
}