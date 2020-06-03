(this["webpackJsonppersonal-homepage"]=this["webpackJsonppersonal-homepage"]||[]).push([[0],{35:function(e,a,t){e.exports=t.p+"static/media/profile.d6c7705a.jpg"},37:function(e,a,t){e.exports=t.p+"static/media/publications.c7b28949.tsv"},39:function(e,a,t){e.exports=t(54)},53:function(e,a,t){},54:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(14),c=t.n(l),i=t(15),o=t(4),s=t(57),m=t(58);function p(){var e=Object(o.f)();return r.a.createElement(s.a,{collapseOnSelect:!0,expand:"md",className:"header",fixed:"top"},r.a.createElement("div",{className:"container"},r.a.createElement(s.a.Brand,{className:"brand",as:i.b,to:"/"},"LUCAS MAY PETRY"),r.a.createElement(s.a.Toggle,{"aria-controls":"menu"}),r.a.createElement(s.a.Collapse,{id:"menu",className:"justify-content-end"},r.a.createElement(m.a,{className:"menu-popup"},r.a.createElement(m.a.Item,{className:"/"===e.pathname?"active":null},r.a.createElement(m.a.Link,{as:i.b,to:"/"},"Home")),r.a.createElement(m.a.Item,{className:"/research"===e.pathname?"active":null},r.a.createElement(m.a.Link,{as:i.b,to:"/research"},"Research"))))))}var u=t(17),E=t(25),f=t(35),d=t.n(f);function h(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null),r.a.createElement("div",{className:"main-container container"},r.a.createElement("div",{className:"text-center"},r.a.createElement("img",{className:"profile-img",src:d.a,alt:""})),r.a.createElement("p",{className:"text-justify"},"I earned my B.S. (2018) and M.S. (2020) degrees in Computer Science from ",r.a.createElement("a",{href:"http://ufsc.br"},"Federal University of Santa Catarina")," (UFSC) in Florian\xf3polis, Brazil. I was a visiting graduate research student at the ",r.a.createElement("a",{href:"https://bigdata.cs.dal.ca/"},"Institute for Big Data Analytics"),", ",r.a.createElement("a",{href:"http://dal.ca/"},"Dalhousie University")," in Halifax, Canada (Jan. 2019 to Jan. 2020), funded by the Emerging Leaders in the Americas Program (ELAP). I also studied abroad at ",r.a.createElement("a",{href:"http://ucdavis.edu"},"University of California")," in Davis, USA, from 2015 to 2016."),r.a.createElement("p",{className:"text-justify"},"My career and research interests span from classical machine learning techniques to deep learning, especially in Natural Language Processing (NLP) and Geographical Information Science (GIS). I love collaboration and learning!"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"text-right"},r.a.createElement("a",{className:"social-link",href:"mailto:lucas.petry@posgrad.ufsc.br"},r.a.createElement(E.a,{size:50})),r.a.createElement("a",{className:"social-link",href:"http://linkedin.com/in/lucasmaypetry",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(u.b,{size:50})),r.a.createElement("a",{className:"social-link",href:"http://github.com/lucaspetry",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(u.a,{size:50})),r.a.createElement("a",{className:"social-link",href:"https://scholar.google.com/citations?user=nKGT_csAAAAJ",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(E.b,{size:50})),r.a.createElement("a",{className:"social-link",href:"https://www.researchgate.net/profile/Lucas_May_Petry",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(u.d,{size:50})),r.a.createElement("a",{className:"social-link",href:"https://orcid.org/0000-0003-1462-4538",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(u.c,{size:50})))))}var g=t(38),b=t(36),k=t.n(b),v=t(37),y=t.n(v);function _(){var e=Object(n.useState)([]),a=Object(g.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){fetch(y.a).then((function(e){e.body.getReader().read().then((function(e){var a=new TextDecoder("utf-8").decode(e.value);k.a.parse(a,{delimiter:"\t",header:!0,complete:function(e){l(e.data.filter((function(e){return""!==e.id})).sort((function(e,a){return e.year>a.year?-1:1})))}})}))})),l([])}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null),r.a.createElement("div",{className:"main-container container"},r.a.createElement("ul",{className:"papers"},t.map((function(e){return r.a.createElement("li",{key:e.id,className:"papers-item"},r.a.createElement("span",null,e.authors,"."),r.a.createElement("br",null),r.a.createElement("span",{style:{fontWeight:"bold"}},e.title,"."),r.a.createElement("br",null),r.a.createElement("span",{style:{fontStyle:"italic"}},e.vehicle," (",e.year,")."),r.a.createElement("br",null),""!==e.link_publication?r.a.createElement("span",null,"[ ",r.a.createElement("a",{href:e.link_publication,target:"_blank",rel:"noopener noreferrer"},"publication")," ]"):"",""!==e.link_preprint?r.a.createElement("span",null,"[ ",r.a.createElement("a",{href:String(e.link_preprint).includes("http")?e.link_preprint:""+e.link_preprint,target:"_blank",rel:"noopener noreferrer"},"preprint")," ]"):"",""!==e.link_presentation?r.a.createElement("span",null,"[ ",r.a.createElement("a",{href:String(e.link_presentation).includes("http")?e.link_presentation:""+e.link_presentation,target:"_blank",rel:"noopener noreferrer"},"presentation")," ]"):"",""!==e.link_source_code?r.a.createElement("span",null,"[ ",r.a.createElement("a",{href:e.link_source_code,target:"_blank",rel:"noopener noreferrer"},"source code")," ]"):"")})))))}function N(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null),r.a.createElement("div",{className:"main-container container"},"Coming soon..."))}function S(){return r.a.createElement(i.a,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",exact:!0,component:h}),r.a.createElement(o.a,{path:"/research",component:_}),r.a.createElement(o.a,{path:"/projects",component:N})))}t(52),t(53);function w(){return r.a.createElement(S,null)}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.eedcd891.chunk.js.map