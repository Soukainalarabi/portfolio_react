import React from "react";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";

export default function FooterProjet() {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">

            <div className="col-md-5 d-flex align-items-center justify-content-center text-center">
                <span className="text-muted">&copy; 2023 Soukaina Larabi,Développeuse web</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex justify-content-center text-center">
                <li className="ms-3">
                    <a className="text-muted" href="https://github.com/Soukainalarabi">
                        <FaGithub />
                    </a>
                </li>
                <li className="ms-3">
                    <a className="text-muted" href="https://www.linkedin.com/in/soukaina-er-raji-b6b456175/"><FaLinkedin /></a>
                </li>
                <li className="ms-3">
                    <a className="text-muted" href="pdf/cvSoukainaLarabi.pdf" download><FaFileDownload /></a></li>
            </ul>
        </footer >
    )
}