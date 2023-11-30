import React from "react"
import chouette from "../assets/Capture chouette.WebP"
import { Image } from "react-bootstrap"
import { Link } from "react-router-dom"
import FooterProjet from "./FooterProjet"

export default function Projet(){
 

    return(
      <>
        <div>
      <Image
        src={chouette}
        className="img-fluid"
        alt="background du site la chouette agence"
      />
      <div className="container-form">
        <h1 className="card-title text-center" style={{ color: "#f3976c" }}>
          La Chouette Agence
        </h1>
        <h2 className="card-text text-center">
          Optimisation du référencement SEO
        </h2>
        <section className="mission">
          <h3 className="card-title" style={{ color: "#f3976c" }}>
            La Mission
          </h3>
          <p className="text-start">
            Optimiser le référencement SEO d'un site web existant.
          </p>
        </section>
        <section className="outils">
          <h3 className="card-title" style={{ color: "#f3976c" }}>
            Les outils utilisés
          </h3>
          <ul className="text-start">
            <li> Outils de codage : HTML5 , CSS3 ,Javascript.</li>
            <li>
              Outils de référencement : GTmetrix , Google PageSpeed ,Lighthouse.
            </li>
            <li> Outils de versionning : Git.</li>
          </ul>
        </section>
        <section className="optimisation">
          <h3 className="card-title" style={{ color: "#f3976c" }}>
            Mes actions d'optimisations :{" "}
          </h3>
          <p className="text-start"> D'après l'analyse du site, j'ai établi des recommandations d'optimisation
                portant principalement sur la vitesse, le poids des pages du site , le respect des normes W3C.
            </p>
            <ul className="text-start">
                <li> Optimiser l’utilisation des mots clés : Effectuer des recherches à l’aide de l’outil Answer
                    The Public.
                </li>
                <li>Optimiser l’URL</li>
                <li> Définir des balises canoniques , les balises Open Graph
                    et les balises méta</li>
                <li> Créer les fichier « robots.txt » et le « sitemap.xml » pour
                    indiquer aux moteurs de recherches les pages et fichiers
                    qu’ils pourront indexer.</li>
                <li>Structurer et hiérarchiser le code HTML</li>
                <li>Définir un fichier « .htaccess » qui contiendra le cache du
                    navigateur ceci permettra de moins souvent recharger les ressources qui sont stable</li>
                <li>Optimiser la vitesse (alléger les pages): compresser et minifier le code</li>
                <li>Accessibilité ( améliorer le visuel):revoir tous ce qui concerne le contraste
                </li>
                <li>Retravailler les images :
                    <ul>
                        <li>Le choix des images aux formats nouvelle génération comme
                            WebP et AVIF.</li>
                        <li>Encoder les images de manière efficace</li>
                        <li>Dimensionner correctement les images</li>
                    </ul>
                </li>
                <li>Améliorer le responsive du site</li>
            </ul>
        </section>
        <section className="comparaison">
          <h2 className="card-title" style={{ color: "#f3976c" }}>
            Comparaison entre les deux versions
          </h2>
          <p className="text-start">Ce document contient une comparaison entre la version initiale du site et la
                version finale après la mise en place des recommandations ainsi des captures d'écran des résultats
                obtenus par les différents outils de référencement.

            </p>



            <Link className=" btn btn-outline " style= {{ backgroundColor:"#f3976c !important"}} to="https://soukainalarabi.github.io/portfolio/pdf/P4_03_optimisation.pdf"
                download>
                <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                Rapport d'optimisation </Link>
        </section>
        <section className="resultat">
          <h3 className="card-title" style={{ color: "#f3976c" }}>
            Les résultats obtenus
          </h3>
          <p className="text-start">Après la mise en place de ces actions :

            </p>
            <ul className="text-start">
                <li> le poids des pages du site est passé de 3.98 à 0.50MB</li>
                <li> la vitesse de chargement est passé de 1.6 à 0.6 secondes.
                    .</li>
                <li> Aucune erreur détectait via le validateur W3C au niveau du CSS et HTML sachant qu'on avait
                    plusieurs erreurs avant.</li>
            </ul>

        </section>
        <section className="projetGit">
          <h3 className="card-title" style={{ color: "#f3976c" }}>
            Consulter le projet
          </h3>
          <p className="text-start">Pour l'ensemble de ce projet j'ai utilisé le logiciel de versionning Git. Les
                deux versions du projet sont hébergés gratuitement avec GitHub Pages.Vous pouvez ainsi
                comparer <Link to="https://soukainalarabi.github.io/soukainalarabi_4_20210916_start/"
                    style={{color:"#f3976c"}}>le site
                    avant optimisation </Link> et <Link to="https://soukainalarabi.github.io/projet4/"
                    style={{color:"#f3976c"}}>le site après
                    optimisation </Link> Retrouvez le code source des deux étapes de ce projet sur mon espace
                GitHub :

                <Link to="https://github.com/Soukainalarabi/soukainalarabi_4_20210916_start" 
                style={{color:"#f3976c"}}></Link>

            </p>
            <ul className="text-start">
                <li> <Link to="https://github.com/Soukainalarabi/soukainalarabi_4_20210916_start"
                        style={{color:"#f3976c"}}>Code existant,
                        avant les optimisations</Link></li>
                <li><Link to="https://github.com/Soukainalarabi/projet4" style={{color:"#f3976c"}}>Code aprés les
                        optimisations
                        apportées</Link> </li>

            </ul>
        </section>

      </div>
      <FooterProjet/>
    </div>
    </>
    )
}