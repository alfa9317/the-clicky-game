(this["webpackJsonpthe-clicky-game"]=this["webpackJsonpthe-clicky-game"]||[]).push([[0],{49:function(e){e.exports=JSON.parse('[{"id":1,"name":"Rick Sanchez","image":"gameImages/rick.png"},{"id":2,"name":"Beth Smith","image":"gameImages/beth.png"},{"id":3,"name":"Bird Person","image":"gameImages/bird-person.png"},{"id":4,"name":"Doofus Rick","image":"gameImages/doofus-rick.png"},{"id":5,"name":"Goldenfold","image":"gameImages/goldenfold.png"},{"id":6,"name":"Jerry Smith","image":"gameImages/jerry.png"},{"id":7,"name":"Jessica","image":"gameImages/jessica.png"},{"id":8,"name":"Mr. Meeseek","image":"gameImages/meeseeks.png"},{"id":9,"name":"Morty Smith","image":"gameImages/morty.png"},{"id":10,"name":"Mr. Poopybutthole","image":"gameImages/mr-poopybutthole.png"},{"id":11,"name":"Squanchy","image":"gameImages/squanchy.png"},{"id":12,"name":"Summer Smith","image":"gameImages/summer.png"}]')},60:function(e,a,t){"use strict";(function(e){t.d(a,"a",(function(){return N}));var n=t(19),c=t(17),o=t(24),r=t(0),i=t.n(r),m=t(92),l=t(93),s=t(85),g=t(95),p=t(86),d=t(21),u=t(97),b=t(88),h=t(94),f=t(29),j=t(96),O=t(91),E=t(62),k=t.n(E),x=t(90),y=t(98),w=t(99),v=t(61),I=t.n(v);function C(e){var a=e.children,t=Object(s.a)({disableHysteresis:!0,threshold:0});return i.a.cloneElement(a,{elevation:t?20:0})}var S=Object(g.a)((function(e){return{toolbarMargin:Object(o.a)(Object(o.a)({},e.mixins.toolbar),{},{marginBottom:"35px"}),logo:Object(c.a)({height:"90px"},e.breakpoints.down("sm"),{margin:"auto",textAlign:"center",maxWidth:"100%",maxHeight:"70%"}),logoContainer:Object(c.a)({padding:"0","&:hover":{backgroundColor:"transparent"},margin:"3px 10px 3px 50px"},e.breakpoints.down("sm"),{margin:"3px 0px 3px 0px",position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}),tabContainer:{marginLeft:"auto",marginRight:"60px"},tab:Object(o.a)(Object(o.a)({},e.typography.tab),{},{minWidth:10,marginLeft:"25px"}),menu:{backgroundColor:e.palette.common.blue,color:"white",borderRadius:"0px"},menuItem:Object(o.a)(Object(o.a)({},e.typography.tab),{},{opacity:.7,"&:hover":{opacity:1}}),drawerIcon:{color:"orange",height:"50px",width:"50px"},drawerIconContainer:{marginLeft:"auto"},drawer:{backgroundColor:e.palette.common.black,width:"40vw"},drawerItem:Object(o.a)(Object(o.a)({},e.typography.tab),{},{color:"white",opacity:.7}),drawerItemEstimate:{backgroundColor:e.palette.common.black},drawerItemSelected:{"& .MuiListItemText-root":{opacity:1}},appbar:{zIndex:e.zIndex.modal+1}}}));function N(a){var t=S(),c=Object(d.a)(),o=e.browser&&/iPad|iPhone|iPod/.test(navigator.userAgent),s=Object(p.a)(c.breakpoints.down("sm")),g=Object(r.useState)(!1),E=Object(n.a)(g,2),v=E[0],N=E[1],M=Object(r.useState)(0),P=Object(n.a)(M,2),R=P[0],T=P[1],B=[{name:"Home",link:"/",activeIndex:0},{name:"About The Game",link:"/about",activeIndex:1}];Object(r.useEffect)((function(){B.forEach((function(e){switch(window.location.hash){case"#".concat(e.link):R!==e.activeIndex&&T(e.activeIndex)}}))}),[R,B]);var F=i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{value:R,onChange:function(e,a){T(a)},indicatorColor:"secondary",className:t.tabContainer},B.map((function(e,a){return i.a.createElement(b.a,{key:"".concat(e).concat(a),className:t.tab,component:f.b,disableRipple:!0,to:e.link,label:e.name})})))),J=i.a.createElement(i.a.Fragment,null,i.a.createElement(j.a,{disableBackdropTransition:!o,disableDiscovery:o,open:v,onClose:function(){return N(!1)},onOpen:function(){return N(!0)},classes:{paper:t.drawer}},i.a.createElement("div",{className:t.toolbarMargin}),i.a.createElement(x.a,{disablePadding:!0},B.map((function(e){return i.a.createElement(y.a,{divider:!0,key:"".concat(e).concat(e.activeIndex),button:!0,component:f.b,to:e.link,selected:R===e.activeIndex,classes:{selected:t.drawerItemSelected},onClick:function(){N(!1),T(e.activeIndex)}},i.a.createElement(w.a,{className:t.drawerItem,disableTypography:!0},e.name))})))),i.a.createElement(O.a,{className:t.drawerIconContainer,onClick:function(){return N(!v)},disableRipple:!0},i.a.createElement(k.a,{className:t.drawerIcon})));return i.a.createElement(i.a.Fragment,null,i.a.createElement(C,null,i.a.createElement(m.a,{position:"fixed",className:t.appbar},i.a.createElement(l.a,{disableGutters:!0},i.a.createElement(h.a,{component:f.b,to:"#/",disableRipple:!0,className:t.logoContainer,onClick:function(){return T(0)}},i.a.createElement("img",{alt:"logo",src:I.a,className:t.logo})),s?J:F))),i.a.createElement("div",{className:t.toolbarMargin}))}}).call(this,t(76))},61:function(e,a,t){e.exports=t.p+"static/media/logo2CG.401501ca.png"},64:function(e,a,t){e.exports=t.p+"static/media/rick-and-morty-logo.07a38000.png"},68:function(e,a,t){e.exports=t(84)},73:function(e,a,t){},84:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),o=t(7),r=t.n(o),i=t(135),m=t(9),l=(t(73),t(65)),s=Object(l.a)({palette:{common:{black:"".concat("#000000"),blue:"".concat("#0f4c75")},primary:{main:"".concat("#000000")},secondary:{main:"".concat("#0f4c75")}},typography:{tab:{fontFamily:"Mukta",textTransform:"none",fontWeight:700,fontSize:"1.3rem"}}}),g=t(60),p=t(19),d=t(17),u=t(95),b=t(134),h=t(63),f=t.n(h),j=t(89),O=Object(u.a)((function(e){return{container:Object(d.a)({display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(2),width:e.spacing(20),height:e.spacing(20)},"&:hover":{transform:"scale(1.1)"}},e.breakpoints.down("sm"),{"& > *":{margin:e.spacing(1),width:e.spacing(10),height:e.spacing(10)}}),image:{width:"100%"}}}));function E(e){var a=O();return c.a.createElement("div",{className:a.container},c.a.createElement(j.a,{elevation:7},c.a.createElement("img",{alt:e.name,src:"".concat("/the-clicky-game","/").concat(e.image),className:a.image,onClick:function(){return e.handleClick(e.id)}})))}var k=t(64),x=t.n(k),y=t(49);var w=Object(u.a)((function(e){var a,t;return{logo:(a={width:"20rem",display:"block",margin:"0 auto",marginTop:"60px",marginBottom:"30px"},Object(d.a)(a,e.breakpoints.down("sm"),{width:"15rem"}),Object(d.a)(a,e.breakpoints.down("xs"),{width:"12rem"}),a),gameContainer:(t={margin:"10%",padding:"20%",marginTop:"0%",background:"#ebecf1",height:"70%",display:"flex",flexFlow:"row wrap"},Object(d.a)(t,"padding","20px"),Object(d.a)(t,"justifyContent","space-around"),Object(d.a)(t,"alignContent","flex-start"),Object(d.a)(t,"overflow","auto"),t)}}));function v(){var e=w(),a=Object(n.useState)(!1),t=Object(p.a)(a,2),o=(t[0],t[1],Object(n.useState)(0)),r=Object(p.a)(o,2),i=(r[0],r[1],Object(n.useState)("Click an image to begin!!")),m=Object(p.a)(i,2),l=(m[0],m[1],Object(n.useState)(0)),s=Object(p.a)(l,2),g=s[0],d=s[1],u=Object(n.useState)(0),h=Object(p.a)(u,2),j=(h[0],h[1],Object(n.useState)(0)),O=Object(p.a)(j,2),k=(O[0],O[1],Object(n.useState)(y)),v=Object(p.a)(k,2),I=(v[0],v[1],Object(n.useState)(y)),C=Object(p.a)(I,2),S=C[0],N=C[1],M=function(e){var a;N(((a=S).sort((function(e,a){return.5-Math.random()})),a)),d(g+1),console.log(e)};return Object(n.useEffect)((function(){console.log("Eso ".concat(S))})),c.a.createElement(c.a.Fragment,null,c.a.createElement(f.a,null,c.a.createElement("img",{alt:"rick and morty logo",src:x.a,className:e.logo})),c.a.createElement("div",{className:e.gameContainer},c.a.createElement(b.a,{container:!0,justify:"center",spacing:1},c.a.createElement(b.a,{item:!0},"Score: ".concat(g)),c.a.createElement(b.a,{item:!0},c.a.createElement(b.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:1},S.map((function(e){return c.a.createElement(b.a,{item:!0},c.a.createElement(E,{handleClick:M,id:e.id,key:e.id,name:e.name,image:e.image}))})))))))}function I(e){return c.a.createElement("div",null,c.a.createElement("h1",null,"About Page"))}var C=function(e){return c.a.createElement(i.a,{theme:s},c.a.createElement(g.a,null),c.a.createElement(m.a,{exact:!0,path:"/",component:v}),c.a.createElement(m.a,{path:"/about",component:I}))},S=t(29);r.a.render(c.a.createElement(S.a,null,c.a.createElement(C,null)),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.3666c899.chunk.js.map