"use strict";(self.webpackChunkportfolio_react=self.webpackChunkportfolio_react||[]).push([[495],{2825:(e,s,i)=>{i.d(s,{Z:()=>r});i(2791);var t=i(6355),a=i(5312),l=i(184);function r(){return(0,l.jsxs)("footer",{className:"d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top",children:[(0,l.jsx)("div",{className:"col-md-5 d-flex align-items-center justify-content-center text-center",children:(0,l.jsx)("span",{className:"text-muted",children:" Soukaina Larabi,D\xe9veloppeuse web"})}),(0,l.jsxs)("ul",{className:"nav col-md-4 justify-content-end list-unstyled d-flex justify-content-center text-center",children:[(0,l.jsx)("li",{className:"ms-3",children:(0,l.jsx)("a",{className:"text-muted",href:"https://github.com/Soukainalarabi",children:(0,l.jsx)(t.hJX,{})})}),(0,l.jsx)("li",{className:"ms-3",children:(0,l.jsx)("a",{className:"text-muted",href:"https://www.linkedin.com/in/soukaina-er-raji-b6b456175/",children:(0,l.jsx)(t.ltd,{})})}),(0,l.jsx)("li",{className:"ms-3",children:(0,l.jsx)("a",{className:"text-muted",href:a,download:!0,children:(0,l.jsx)(t.ZJh,{})})})]})]})}},5186:(e,s,i)=>{i.r(s),i.d(s,{default:()=>f});i(2791);var t=i(1087),a=i(2825),l=i(3761);const r=i.p+"static/media/architecture.36d6f295a6a9e74ca788.WebP",n=i.p+"static/media/inscription.86ef24965d5abdf581e1.WebP",c=i.p+"static/media/modifier.c422a4fbd088a951722a.WebP",d=i.p+"static/media/publication.c0596c98877c959b06b1.WebP",o=i.p+"static/media/connexion.742915f7b6005aaa2a84.WebP",u=i.p+"static/media/accueil.4636138f817724c99034.WebP",p=i.p+"static/media/commentaire.c76d485c816e9eadf49e.WebP",m=i.p+"static/media/deconnexion.6a344df96f88aef9281d.WebP",x=i.p+"static/media/model.ca19c7fa24e68153604f.WebP";var h=i(4523),j=i(184);function f(){return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)("div",{children:[(0,j.jsx)(h.Z,{src:l,loading:"lazy",className:"img-fluid",alt:"background du site la chouette agence"}),(0,j.jsxs)("div",{className:"container-form",children:[(0,j.jsx)("h1",{className:"card-title text-center",style:{color:"#ffd7d7"},children:"Groupomania        "}),(0,j.jsx)("h2",{className:"card-text text-center",children:"Cr\xe9ation d'un r\xe9seau social d\u2019entreprise        "}),(0,j.jsxs)("section",{className:"contextProjet",children:[(0,j.jsx)("h2",{className:"card-title",style:{color:"#ffd7d7"},children:"Contexte du projet"}),(0,j.jsx)("p",{className:"text-start",children:"Le projet consiste \xe0 construire un r\xe9seau social interne pour les employ\xe9s de Groupomania. Le but de cet outil est de faciliter les interactions entre coll\xe8gues."})]}),(0,j.jsxs)("section",{className:"mission",children:[(0,j.jsx)("h3",{className:"card-title",style:{color:"#ffd7d7"},children:"La Mission"}),(0,j.jsx)("p",{className:"text-start",children:"D\xe9velopper le backend d'une application d'avis gastronomique          "})]}),(0,j.jsxs)("section",{className:"outils",children:[(0,j.jsx)("h3",{className:"card-title",style:{color:"#ffd7d7"},children:"Sp\xe9cification technique           "}),(0,j.jsxs)("p",{className:"text-start",children:[(0,j.jsx)("strong",{children:"Backend:"}),"Serveur Node.js,Framework Express,Base de donn\xe9es MYSQL"]}),(0,j.jsxs)("p",{className:"text-start",children:[(0,j.jsx)("strong",{children:"Frontend:"})," Vue js,axios,moment,Bootstrap"]}),(0,j.jsxs)("p",{className:"text-start",children:[(0,j.jsx)("strong",{children:"R\xe9f\xe9rencement:"})," Lighthouse"]})]}),(0,j.jsxs)("section",{className:"archi",children:[(0,j.jsx)("h2",{className:"card-title",style:{color:"#ffd7d7"},children:"Architecture technique de l\u2019application "}),(0,j.jsx)("p",{className:"text-start",children:" L'architecture de l'application est r\xe9partie en trois grands bricks:"}),(0,j.jsxs)("ul",{children:[(0,j.jsx)("li",{children:"la premi\xe8re c'est l'application front-end; "}),(0,j.jsx)("li",{children:" la deuxi\xe8me c'est l'application back-end"}),(0,j.jsx)("li",{children:" la troisi\xe8me c'est la base de donn\xe9es"})]}),"Ces trois bricks sont connect\xe9s entre eux :",(0,j.jsxs)("ul",{children:[(0,j.jsx)("li",{children:"Dans l'application front-end toutes les requ\xeates HTTP seront interpr\xe9t\xe9es par l'index.html puis ils se redirigent selon la requ\xeate d\xe9finie dans le HTTP vers le composant qui est l'\xe9l\xe9ment le plus important dans l'architecture de vue js et si on a des appels Rest on utilise la biblioth\xe8que axios."}),(0,j.jsx)("li",{children:"Au niveau de l'application back-end, on a le middleware qui contient le fichier auth.js o\xf9 se fait l'authentification de l'utilisateur, ici on valide le Token r\xe9cup\xe9r\xe9 depuis le header avec Jwt et si le token n'est pas valid\xe9 on retourne 401 ainsi lefichier multer.js o\xf9 on a cr\xe9e une constante storage \xe0 passer \xe0 multer comme configuration qui contient la logique n\xe9cessaire pour indiquer \xe0 multer ou enregistrer l'image entrante.Apr\xe8s si tout est bien pass\xe9 il va se rediriger vers les controllers o\xf9 se trouve le code m\xe9tier et pour faire les requ\xeates vers la base de donn\xe9es , on fait appel \xe0 Sequelize ce dernier va faire des requ\xeates Sql directes vers la base de donn\xe9es Mysql "})]}),(0,j.jsx)(h.Z,{src:r,loading:"lazy",className:"rounded mx-auto d-block ",width:"500px",alt:"Architecture technique de l'application"})]}),(0,j.jsxs)("section",{className:"model",children:[(0,j.jsx)("h2",{className:"card-title",style:{color:"#ffd7d7"},children:"Model Physique"}),(0,j.jsx)("p",{className:"text-start",children:" Apr\xe8s la r\xe9alisation du mod\xe8le conceptuel et le mod\xe8le logique voila notre mod\xe8le physique qui nous montre les diff\xe9rentes relations entre les tables"}),(0,j.jsx)("p",{className:"text-start",children:"Ici un commentaire appartient \xe0 un utilisateur, une publication appartient aussi \xe0 un utilisateur et une publication peut contenir plusieurs commentaires"}),(0,j.jsx)(h.Z,{src:x,loading:"lazy",className:"rounded mx-auto d-block ",width:"500px",alt:"Le Model Physique de l'application"})]}),(0,j.jsxs)("section",{className:"projet",children:[(0,j.jsx)("h2",{className:"card-title",style:{color:"#ffd7d7"},children:"Composition du site "}),(0,j.jsxs)("ol",{className:"text-start",children:[(0,j.jsx)("li",{className:"fs-3",children:" Page d'inscription"}),(0,j.jsx)("p",{className:"text-start",children:" Pour acc\xe9der au r\xe9seau social, l'utilisateur devra cr\xe9er un compte, ce qui l'enregistrera de mani\xe8re s\xe9curis\xe9e dans notre base de donn\xe9es mySQL (email et mot de passe crypt\xe9s)."}),(0,j.jsx)(h.Z,{src:n,loading:"lazy",className:"rounded mx-auto d-block ",alt:"capture d'\xe9cran de la page d'inscription du site",width:"500px",height:"500px"}),(0,j.jsx)("li",{className:"fs-3",children:" Page de connexion"}),(0,j.jsx)("p",{className:"text-start",children:" Apres l'inscription l'utilisateur sera rediriger vers la page de connexion pour acceder a la page d'accueil ."}),(0,j.jsx)(h.Z,{src:o,loading:"lazy",className:"rounded mx-auto d-block ",alt:"capture d'\xe9cran de la page de connexion du site",width:"500px",height:"500px"}),(0,j.jsx)("li",{className:"fs-3",children:" La page d'accueil"}),(0,j.jsx)("p",{className:"text-start",children:" Une fois authentifi\xe9, l'utilisateur est dirig\xe9 vers la page d'accueil ou il r\xe9cup\xe8re toutes les publications les plus r\xe9centes avec leurs commentaires."}),(0,j.jsx)(h.Z,{src:u,loading:"lazy",className:"rounded mx-auto d-block ",alt:"capture d'\xe9cran de la page d'accueil du site",width:"500px",height:"500px"}),(0,j.jsxs)("ul",{children:[(0,j.jsx)("li",{children:"Cr\xe9er une publication"}),(0,j.jsx)("p",{className:"text-start",children:" l'utilisateur a la possibilit\xe9 de cr\xe9er une publication qui peut contenir un texte,titre ou une image."}),(0,j.jsx)(h.Z,{src:d,loading:"lazy",className:"rounded mx-auto d-block ",alt:"capture d'\xe9cran de la cr\xe9ation d'une publication dans le site",width:"500px",height:"500px"}),(0,j.jsx)("li",{children:" Modifier / Supprimer une publication"}),(0,j.jsx)("p",{className:"text-start",children:" l'utilisateur a la possibilit\xe9 de modifier et de supprimer juste ses publications en cliquant sur les trois points \xe0 droite qui apparaissent justes sur celles qui peuvent les modifier ainsi les supprimer."}),(0,j.jsx)(h.Z,{src:c,loading:"lazy",className:"rounded mx-auto d-block ",alt:"capture d'\xe9cran de la modification et la suppression d'une publication dans le site",width:"500px",height:"500px"}),(0,j.jsx)("li",{children:"Cr\xe9er/ Modifier / Supprimer un commentaire"}),(0,j.jsx)("p",{className:"text-start",children:" l'utilisateur a la possibilit\xe9 de commenter n'importe quelle publication.L'utilisateur a la possibilit\xe9 de modifier et de supprimer juste ses commentaires en cliquant sur modifier ou supprimer qui s'affichent au-dessous du commentaire juste si l'utilisateur peut les modifier ainsi les supprimer."}),(0,j.jsx)(h.Z,{src:p,loading:"lazy",className:"rounded mx-auto d-block ",alt:"capture d'\xe9cran de la modification et la suppression d'un commentaire dans le site",width:"500px",height:"500px"}),(0,j.jsx)("li",{children:"Se d\xe9connecter / Supprimer un compte"}),(0,j.jsx)("p",{className:"text-start",children:" l'utilisateur a la possibilit\xe9 de se d\xe9connecter .l'utilisateur a la possibilit\xe9 de supprimer son compte d\xe9finitivement du coup si jamais il voudra se reconnecter il sera oblig\xe9 de passer par la page d'inscription car son mail n'existera plus dans la base de donn\xe9es."}),(0,j.jsx)(h.Z,{src:m,loading:"lazy",className:"rounded mx-auto d-block ",alt:"capture d'\xe9cran de la d\xe9connexion et la suppression du compte d'un utilisateur dans le site",width:"500px",height:"500px"})]})]})]}),(0,j.jsxs)("section",{className:"mission",children:[(0,j.jsx)("h2",{className:"card-title",style:{color:"#ffd7d7"},children:"Tests Unitaires"}),(0,j.jsx)("p",{className:"text-start",children:"Pour v\xe9rifier le bon fonctionnement des diff\xe9rentes \xe9tapes de l'application, j'ai r\xe9dig\xe9 un plan de tests unitaires o\xf9 sont d\xe9taill\xe9s :"}),(0,j.jsxs)("ul",{className:"text-start",children:[(0,j.jsx)("li",{children:" les diff\xe9rents points \xe0 tester : les actions demand\xe9es."}),(0,j.jsx)("li",{children:" la fa\xe7on dont doit se comporter l'application : les r\xe9sultats attendus."})]}),(0,j.jsxs)(t.rU,{className:"btn btn-outline",style:{backgroundColor:"#ffd7d7!important"},to:"https://soukainalarabi.github.io/portfolio/pdf/P5_larabi_plan_test.pdf",download:!0,children:[(0,j.jsx)("i",{className:"fa fa-file-pdf-o","aria-hidden":"true"}),"Voir le pdf "]})]}),(0,j.jsxs)("section",{className:"projetGit",children:[(0,j.jsx)("h2",{className:"card-title",style:{color:"#ffd7d7"},children:"Consulter le projet"}),(0,j.jsxs)("p",{className:"text-start",children:["Pour ce projet, j'ai utilis\xe9 le logiciel de versionning Git. Retrouvez le code source sur ",(0,j.jsx)("a",{href:"https://github.com/Soukainalarabi/projet-7",style:{color:"#ffd7d7"},children:"mon repositories GitHub"})]})]})]}),(0,j.jsx)(a.Z,{})]})})}},5312:(e,s,i)=>{e.exports=i.p+"static/media/cv-larabi.b4cc11f16fbe97a755ab.pdf"},3761:(e,s,i)=>{e.exports=i.p+"static/media/groupomania.2a6112039765f616e9fd.WebP"}}]);
//# sourceMappingURL=495.e30af686.chunk.js.map