import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GrContact } from "react-icons/gr";
import FooterProjet from "./FooterProjet";


export default function Contact() {
    return (
        <>
            <section id="contact">
                <div className="containere">

                    <h1>Contactez-Moi</h1>
                </div>


                <Container>
                    <Row>
                        <Col>
                            Vous souhaitez me contacter ? Dans ce cas vous pouvez m'envoyer un mail à l'adresse <a className="text-muted"
                                href="mailto:soukaina.larabi44@gmail.com">soukaina.larabi44@gmail.com</a> Vous pouvez  aussi me contacter via les liens proposés,et je veillerai à vous répondre dans les plus brefs délais.</Col>
                        <GrContact />

                    </Row>

                </Container>
            </section>
            <FooterProjet style={{
                width: "400px",
                height: "200px"
            }} />
        </>
    )
}