(this["webpackJsonpmonks-react"]=this["webpackJsonpmonks-react"]||[]).push([[0],{11:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),o=c(5),r=c.n(o),s=(c(11),c(6)),l=c(2);var i=function(){var e={num:[4,7],rps:.1,radius:[5,40],life:[1.5,3],v:[2,3],tha:[-40,40],alpha:[.6,0],scale:[.1,.4],position:"all",color:["#4d4dff"],cross:"dead",random:15};return Math.random()>.85&&(e=Object.assign(e,{onParticleUpdate:function(e,t){e.beginPath(),e.rect(t.p.x,t.p.y,2*t.radius,2*t.radius),e.fillStyle=t.color,e.fill(),e.closePath()}})),Object(l.jsx)(s.a,{type:"custom",config:e,bg:!0})};var d=function(){return Object(l.jsx)("ul",{id:"social",children:[{href:"https://www.facebook.com/nervousmonks/",icon:"fa-facebook"},{href:"https://www.instagram.com/nervousmonks/",icon:"fa-instagram"},{href:"https://soundcloud.com/nervousmonks",icon:"fa-soundcloud"},{href:"https://nervousmonks.bandcamp.com/releases",icon:"fa-bandcamp"}].map((function(e){var t=e.href,c=e.icon;return Object(l.jsx)("li",{className:"d-inline-block",children:Object(l.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:Object(l.jsx)("i",{className:"fab ".concat(c)})})},c)}))})};var m=function(e){var t=e.embedId;return Object(l.jsx)("iframe",{width:"853",height:"480",src:"https://www.youtube.com/embed/".concat(t),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"})};var u=function(){for(var e=[],t=0;t<300;t++)e.push(Object(l.jsx)("div",{},Math.floor(Date.now()+t)));return Object(l.jsx)("div",{id:"red-particles",children:e})},h=c.p+"static/media/logo-red.4c34478d.png",j=c.p+"static/media/logo-regular.494a582c.png";var b=function(){var e="Nervous Monks",t=[{name:"regular",element:null,header:Object(l.jsx)("img",{className:"nm-logo",src:j,alt:e})},{name:"neon",element:Object(l.jsx)(i,{}),header:Object(l.jsx)("h1",{children:e})},{name:"red",element:Object(l.jsx)(u,{}),header:Object(l.jsx)("img",{className:"nm-logo",src:h,alt:e})}],c=t[Math.floor(Math.random()*t.length)],a=c.header,n=c.name,o=c.element;return Object(l.jsxs)("div",{id:"home",className:"App ".concat(n),children:[o,Object(l.jsxs)("nav",{className:"container",children:[a,Object(l.jsx)(d,{}),Object(l.jsx)("h2",{className:"contact",children:Object(l.jsx)("a",{href:"mailto:nervousmonks@gmail.com",children:"Contact"})})]}),Object(l.jsx)("section",{className:"container media youtube music-video mt-5",children:Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col-12",children:Object(l.jsx)(m,{embedId:"9XjjFLAchb0"})})})}),Object(l.jsx)("section",{className:"container media soundcloud mt-5",children:Object(l.jsx)("div",{className:"row d-flex justify-content-center",children:Object(l.jsx)("div",{className:"col-12 col-md-8 col-lg-6",children:Object(l.jsx)("iframe",{src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/448310646&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",title:"SoundCloud Player",width:"100%",height:"450",scrolling:"no",frameBorder:"no",allow:"autoplay"})})})})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,o=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),o(e),r(e)}))};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),f()}},[[13,1,2]]]);
//# sourceMappingURL=main.13b57ede.chunk.js.map