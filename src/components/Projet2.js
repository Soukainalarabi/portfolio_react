import React from "react"
import { Link } from "react-router-dom"
import FooterProjet from "./FooterProjet"
import groupomania from "../assets/groupomania.WebP"
import archi from "../assets/architecture.WebP"
import inscription from "../assets/inscription.WebP"
import modifier from "../assets/modifier.WebP"
import publication from "../assets/publication.WebP"
import connexion from "../assets/connexion.WebP"
import accueil from "../assets/accueil.WebP"
import commentaire from "../assets/commentaire.WebP"
import deconnexion from "../assets/deconnexion.WebP"
import model from "../assets/model.WebP"
import { Image } from "react-bootstrap"

export default function Projet() {

    return (
        <>
            <div>
                <Image
                    src={groupomania}
                    className="img-fluid"
                    alt="background du site la chouette agence"
                />
                <div className="container-form">
                    <h1 className="card-title text-center" style={{ color: "#ffd7d7" }}>
                        Groupomania        </h1>
                    <h2 className="card-text text-center">
                        Création d'un réseau social d’entreprise        </h2>
                    <section className="contextProjet">
                        <h2 className="card-title" style={{ color: "#ffd7d7" }}>Contexte du projet</h2>
                        <p className="text-start">Le projet consiste à construire un réseau social interne pour les employés de
                            Groupomania. Le but de cet outil est de faciliter les interactions entre collègues.</p>
                    </section>
                    <section className="mission">
                        <h3 className="card-title" style={{ color: "#ffd7d7" }}>
                            La Mission
                        </h3>
                        <p className="text-start">
                            Développer le backend d'une application d'avis gastronomique          </p>
                    </section>
                    <section className="outils">
                        <h3 className="card-title" style={{ color: "#ffd7d7" }}>
                            Spécification technique           </h3>
                        <p className="text-start"><strong>Backend:</strong>Serveur Node.js,Framework Express,Base de données MYSQL</p>
                        <p className="text-start"><strong>Frontend:</strong> Vue js,axios,moment,Bootstrap</p>
                        <p className="text-start"><strong>Référencement:</strong> Lighthouse</p>
                    </section>
                    <section className="archi">
                        <h2 className="card-title" style={{ color: "#ffd7d7" }}>Architecture technique de l’application </h2>

                        <p className="text-start"> L'architecture de l'application est répartie en trois grands bricks:</p>
                        <ul>
                            <li>la première c'est l'application front-end; </li>
                            <li> la deuxième c'est l'application back-end
                            </li>
                            <li> la troisième c'est la base de données
                            </li>

                        </ul>

                        Ces trois bricks sont connectés entre eux :
                        <ul>
                            <li>Dans l'application front-end toutes les requêtes HTTP seront interprétées par l'index.html puis ils
                                se redirigent selon la requête définie dans le HTTP vers le composant qui est l'élément le plus
                                important dans l'architecture de vue js et si on a des appels Rest on utilise la bibliothèque axios.
                            </li>
                            <li>Au niveau de l'application back-end, on a le middleware qui contient le fichier auth.js où se fait
                                l'authentification de l'utilisateur, ici on valide le Token récupéré depuis le header avec Jwt et si
                                le token n'est pas validé on retourne 401 ainsi lefichier multer.js où on a crée une constante
                                storage à passer à multer comme configuration qui contient la logique nécessaire pour indiquer à
                                multer ou enregistrer l'image entrante.Après si tout est bien passé il va se rediriger vers les
                                controllers où se trouve le code métier et pour faire les requêtes vers la base de données , on fait
                                appel à Sequelize ce dernier va faire des requêtes Sql directes vers la base de données Mysql </li>
                        </ul>


                        <Image src={archi} className="rounded mx-auto d-block " width="500px"
                            alt="Architecture technique de l'application" />
                    </section>

                    <section className="model">
                        <h2 className="card-title" style={{ color: "#ffd7d7" }}>Model Physique</h2>

                        <p className="text-start"> Après la réalisation du modèle conceptuel et le modèle logique voila notre modèle
                            physique qui nous montre les différentes relations entre les tables</p>
                        <p className="text-start">Ici un commentaire appartient à
                            un utilisateur, une publication appartient aussi à un utilisateur et une publication peut contenir
                            plusieurs commentaires</p>

                        <Image src={model} className="rounded mx-auto d-block " width="500px"
                            alt="Le Model Physique de l'application" />
                    </section>
                    <section className="projet">
                        <h2 className="card-title" style={{ color: "#ffd7d7" }}>Composition du site </h2>
                        <ol className="text-start">
                            <li className="fs-3"> Page d'inscription

                            </li>
                            <p className="text-start"> Pour accéder au réseau social, l'utilisateur devra créer un compte, ce qui
                                l'enregistrera de manière sécurisée dans notre base de données mySQL (email et mot de passe
                                cryptés).
                            </p>
                            <Image src={inscription} className="rounded mx-auto d-block "
                                alt="capture d'écran de la page d'inscription du site" width="500px" height="500px" />
                            <li className="fs-3"> Page de connexion

                            </li>
                            <p className="text-start"> Apres l'inscription l'utilisateur sera rediriger vers la page de connexion pour
                                acceder a la page d'accueil .
                            </p>
                            <Image src={connexion} className="rounded mx-auto d-block "
                                alt="capture d'écran de la page de connexion du site" width="500px" height="500px" />

                            <li className="fs-3"> La page d'accueil
                            </li>
                            <p className="text-start"> Une fois authentifié, l'utilisateur est dirigé vers la page d'accueil ou il
                                récupère toutes les publications les plus récentes avec leurs commentaires.

                            </p>
                            <Image src={accueil}
                                className="rounded mx-auto d-block "
                                alt="capture d'écran de la page d'accueil du site" width="500px" height="500px" />

                            <ul>
                                <li>Créer une publication
                                </li>
                                <p className="text-start"> l'utilisateur a la possibilité de créer une publication qui peut contenir un
                                    texte,titre ou une image.
                                </p>
                                <Image src={publication}
                                    className="rounded mx-auto d-block "
                                    alt="capture d'écran de la création d'une publication dans le site" width="500px"
                                    height="500px" />


                                <li> Modifier / Supprimer une publication
                                </li>
                                <p className="text-start"> l'utilisateur a la possibilité de modifier et de supprimer juste ses
                                    publications en cliquant sur les trois points à droite qui apparaissent justes sur celles qui
                                    peuvent les modifier ainsi les supprimer.
                                </p>
                                <Image src={modifier}
                                    className="rounded mx-auto d-block "
                                    alt="capture d'écran de la modification et la suppression d'une publication dans le site"
                                    width="500px" height="500px" />
                                <li>Créer/ Modifier / Supprimer un commentaire
                                </li>
                                <p className="text-start"> l'utilisateur a la possibilité de commenter n'importe quelle
                                    publication.L'utilisateur a la possibilité de modifier et de supprimer juste ses
                                    commentaires en cliquant sur modifier ou supprimer qui s'affichent au-dessous du commentaire
                                    juste si l'utilisateur peut les modifier ainsi les supprimer.
                                </p>
                                <Image src={commentaire}
                                    className="rounded mx-auto d-block "
                                    alt="capture d'écran de la modification et la suppression d'un commentaire dans le site"
                                    width="500px" height="500px" />
                                <li>Se déconnecter / Supprimer un compte
                                </li>
                                <p className="text-start"> l'utilisateur a la possibilité de se déconnecter .l'utilisateur a la
                                    possibilité de supprimer son compte définitivement du coup si jamais il voudra se reconnecter il
                                    sera obligé de passer par la page d'inscription car son mail n'existera plus dans la base de
                                    données.
                                </p>
                                <Image src={deconnexion} className="rounded mx-auto d-block "
                                    alt="capture d'écran de la déconnexion et la suppression du compte d'un utilisateur dans le site"
                                    width="500px" height="500px" />
                            </ul>



                        </ol>
                    </section>
                    <section className="mission">
                        <h2 className="card-title" style={{ color: "#ffd7d7" }}>Tests Unitaires</h2>
                        <p className="text-start">Pour vérifier le bon fonctionnement des différentes étapes de l'application,
                            j'ai rédigé un plan de tests unitaires où sont détaillés :

                        </p>
                        <ul className="text-start">
                            <li> les différents points à tester : les actions demandées.</li>
                            <li> la façon dont doit se comporter l'application : les résultats attendus.</li>

                        </ul>
                        <Link className="btn btn-outline" style={{ backgroundColor: "#ffd7d7!important" }} to="https://soukainalarabi.github.io/portfolio/pdf/P5_larabi_plan_test.pdf"
                            download>
                            <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                            Voir le pdf </Link>
                    </section>
                    <section className="projetGit">

                        <h2 className="card-title" style={{ color: "#ffd7d7" }}>Consulter le projet
                        </h2>
                        <p className="text-start">Pour ce projet, j'ai utilisé le logiciel de versionning Git.



                            Retrouvez le code source sur <a href="https://github.com/Soukainalarabi/projet-7"
                                style={{ color: "#ffd7d7" }}>mon
                                repositories GitHub</a></p>

                    </section>

                </div>
                <FooterProjet />

            </div >

        </>
    )
}