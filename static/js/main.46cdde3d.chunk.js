(this.webpackJsonpignite=this.webpackJsonpignite||[]).push([[0],{137:function(e,n,t){"use strict";t.r(n);var a,c,i,r,s,o,d,b,l,j,u,m,g,h=t(0),p=t.n(h),O=t(72),f=t.n(O),x=t(13),v=t(35),w=t(46),y=t.n(w),k=t(65),E=t(47),_=t.n(E),C="https://api.rawg.io/api/",S=function(){var e=(new Date).getMonth()+1;return e<10?"0".concat(e):e},D=(new Date).getFullYear(),I=S(),L=S(),A="".concat(D,"-").concat(I,"-").concat(L),G="".concat(D-1,"-").concat(I,"-").concat(L),T="".concat(D+1,"-").concat(I,"-").concat(L),z="e1347f35d01f4979b52bdf64192766f7",F="games?key=".concat(z,"&dates").concat(G,",").concat(A,"&ordering=-rating&page_size=10"),N="games?key=".concat(z,"&dates=").concat(A,",").concat(T,"&ordering=-added&page_size=10"),H="games?key=".concat(z,"&dates=").concat(G,",").concat(D,"&ordering=-released&page_size=10"),P=function(e){return"".concat(C,"games/").concat(e,"/screenshots?key=").concat(z)},R=function(e){return"".concat(C,"games?key=").concat(z,"&search=").concat(e,"&page_size=9")},M=t(14),X=t(138),B=t(49),J={hidden:{opacity:0},show:{opacity:1,transition:{duration:.75}},exit:{opacity:0,transition:{duration:.75}}},U={hidden:{opacity:0,scale:.5},show:{opacity:1,scale:1,transition:{duration:.75}},exit:{opacity:0,transition:{duration:.75}}},V=t(2),Y=Object(M.b)(X.a.div)(a||(a=Object(x.a)(["\nmin-height: 30vh;\nbox-shadow: 0px 5px 30px rgba(0,0,0,.2);\ntext-align: center;\nborder-radius: 1rem;\ncursor: pointer;\noverflow: hidden;\n    img{\n        width:100%;\n        height: 40vh;\n        object-fit: cover;\n    }\n"]))),q=function(e){var n=e.name,t=e.released,a=e.image,c=e.id,i=c.toString(),r=Object(v.b)();return Object(V.jsx)(Y,{layoutId:i,onClick:function(){document.body.style.overflow="hidden",r(function(e){return function(){var n=Object(k.a)(y.a.mark((function n(t){var a,c,i;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"LOADING_DETAIL"}),a="",n.next=4,_.a.get(a+(r=e,"".concat(C,"games/").concat(r,"?key=").concat(z)));case 4:return c=n.sent,n.next=7,_.a.get(a+P(e));case 7:i=n.sent,t({type:"GET_DETAIL",payload:{game:c.data,screen:i.data}});case 9:case"end":return n.stop()}var r}),n)})));return function(e){return n.apply(this,arguments)}}()}(c))},variants:U,initial:"hidden",animate:"show",children:Object(V.jsxs)(B.b,{to:"/ignite/game/".concat(c),children:[Object(V.jsx)(X.a.h3,{children:n}),Object(V.jsx)("p",{children:t}),Object(V.jsx)(X.a.img,{layoutId:"image ".concat(i),src:a,alt:n})]})})},K=t(8),Q=t.p+"static/media/playstation.18cc4b9c.svg",W=t.p+"static/media/steam.d7b8819f.svg",Z=t.p+"static/media/xbox.3e7db735.svg",$=t.p+"static/media/nintendo.f579be04.svg",ee=t.p+"static/media/apple.5757c37e.svg",ne=t.p+"static/media/gamepad.c9269ef5.svg",te=Object(M.b)(X.a.div)(c||(c=Object(x.a)(["\n    margin: 3rem 0rem;\n"]))),ae=Object(M.b)(X.a.div)(i||(i=Object(x.a)(["\n    display: flex;\n    justify-content: space-evenly;\n    img{\n        margin-left: 3rem;\n    }\n"]))),ce=Object(M.b)(X.a.div)(r||(r=Object(x.a)(["\n    text-align: center;\n"]))),ie=Object(M.b)(X.a.div)(s||(s=Object(x.a)(["\n    display:flex;\n    align-items: center;\n    justify-content: space-between;\n    @media(max-width: 800px) {\n    flex-direction: column;\n  }\n"]))),re=Object(M.b)(X.a.div)(o||(o=Object(x.a)(["\n    margin-top: 3rem;\n    img{\n        width: 100%;\n        height: 60%;\n        object-fit: cover;\n    }\n"]))),se=Object(M.b)(X.a.div)(d||(d=Object(x.a)(["\n    width: 80%;\n    border-radius: 1rem;\n    padding: 2rem 5rem;\n    background: white;\n    left: 10%;\n    color: black;\n    position: absolute;\n    z-index: 10;\n    img{\n        width:100%;\n    }\n"]))),oe=Object(M.b)(X.a.div)(b||(b=Object(x.a)(["\n    width: 100%;\n    min-height: 100vh;\n    overflow-y: scroll;\n    background: rgba(0,0,0,.5);\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 5;\n    &::-webkit-scrollbar{\n        width: 0.5rem;\n    }\n    &::-webkit-scrollbar-thumb{\n        background-color: #ff7676;\n    }\n    &::-webkit-scrollbar-track{\n        background: white;\n    }\n"]))),de=function(e){var n=e.pathId,t=Object(K.e)(),a=function(e){switch(e){case"PlayStation 4":case"PlayStation 5":return Q;case"Xbox One":return Z;case"PC":return W;case"macOS":case"iOS":return ee;case"Nintendo Switch":return $;default:return ne}},c=Object(v.c)((function(e){return e.detail})),i=c.screen,r=c.game,s=c.isLoading;return Object(V.jsx)(V.Fragment,{children:!s&&Object(V.jsx)(oe,{className:"shadow",onClick:function(e){e.target.classList.contains("shadow")&&(document.body.style.overflow="auto",t.push("/ignite/"))},children:Object(V.jsxs)(se,{layoutId:n,children:[Object(V.jsxs)(ie,{children:[Object(V.jsxs)("div",{className:"rating",children:[Object(V.jsx)(X.a.h3,{children:r.name}),Object(V.jsxs)("p",{children:["Rating: ",r.rating]})]}),Object(V.jsxs)(ce,{children:[Object(V.jsx)("h3",{children:"Plataforms"}),Object(V.jsx)(ae,{children:r.platforms.map((function(e){return Object(V.jsx)("img",{alt:e.platform.name,src:a(e.platform.name)},e.platform.id)}))})]})]}),Object(V.jsx)(re,{children:Object(V.jsx)(X.a.img,{layoutId:"image ".concat(n),src:r.background_image,alt:"image"})}),Object(V.jsx)(te,{children:Object(V.jsxs)("p",{children:[" ",r.description_raw," "]})}),Object(V.jsx)("div",{className:"gallery",children:i.results.map((function(e){return Object(V.jsx)(X.a.img,{src:e.image,alt:"game"},e.id)}))})]})})})},be=t(107),le=t.p+"static/media/logo.9b6b8655.svg",je=Object(M.b)(X.a.nav)(l||(l=Object(x.a)(["\n    padding: 3rem 5rem;\n    text-align: center;\n    input{\n        width: 30%;\n        font-size:1.4rem;\n        padding: 0.5rem;\n        border: none;\n        margin-top: 1rem;\n        box-shadow: 0px 0px 30px rgba(0,0,0,.3);\n        font-weight: bold;\n    }\n    button{\n        font-size: 1.5rem;\n        border: none;\n        padding: 0.5rem 2rem;\n        cursor: pointer;\n        background: #ff7676;\n        color: white;\n    }\n"]))),ue=Object(M.b)(X.a.div)(j||(j=Object(x.a)(["\n    display: flex;\n    justify-content: center;\n    padding: 1rem;\n    cursor: pointer;\n    width: auto;\n    img{\n        height: 2rem;\n        width: 2rem;\n    }\n"]))),me=function(){var e=Object(h.useState)(""),n=Object(be.a)(e,2),t=n[0],a=n[1],c=Object(v.b)();return Object(V.jsxs)(je,{variants:J,initial:"hidden",animate:"show",children:[Object(V.jsxs)(ue,{onClick:function(){c({type:"CLEAR_SEARCHED"})},children:[Object(V.jsx)("img",{src:le,alt:"logo"}),Object(V.jsx)("h1",{children:"Ignite"})]}),Object(V.jsxs)("form",{className:"search",children:[Object(V.jsx)("input",{value:t,type:"text",onChange:function(e){a(e.target.value)}}),Object(V.jsx)("button",{onClick:function(e){var n;e.preventDefault(),c((n=t,function(){var e=Object(k.a)(y.a.mark((function e(t){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get(R(n));case 2:a=e.sent,t({type:"FETCH_SEARCHED",payload:{searched:a.data.results}});case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),[]),a("")},type:"submit",children:"Search"})]})]})},ge=t(139),he=t(140),pe=Object(M.b)(X.a.div)(u||(u=Object(x.a)(["\n padding: 0rem 5rem;\n h2{\n     padding: 3rem 0rem;\n }\n"]))),Oe=Object(M.b)(X.a.div)(m||(m=Object(x.a)(["\n    min-height: 80vh;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n    grid-column-gap: 3rem;\n    grid-row-gap: 5rem;\n"]))),fe=function(){var e=Object(K.f)().pathname.split("/")[2],n=Object(v.b)();Object(h.useEffect)((function(){n(function(){var e=Object(k.a)(y.a.mark((function e(n){var t,a,c,i;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="",e.next=3,_.a.get(t+"".concat(C).concat(F));case 3:return a=e.sent,e.next=6,_.a.get(t+"".concat(C).concat(N));case 6:return c=e.sent,e.next=9,_.a.get(t+"".concat(C).concat(H));case 9:i=e.sent,n({type:"FETCH_GAMES",payload:{popular:a.data.results,upcoming:c.data.results,newGames:i.data.results}});case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}),[]);var t=Object(v.c)((function(e){return e.games})),a=t.popular,c=t.newGames,i=t.upComing,r=t.searched;return Object(V.jsxs)(pe,{variants:J,initial:"hidden",animate:"show",children:[Object(V.jsx)(me,{}),Object(V.jsxs)(ge.a,{type:"corssfade",children:[Object(V.jsx)(he.a,{children:e&&Object(V.jsx)(de,{pathId:e})}),r.length?Object(V.jsxs)("div",{children:[Object(V.jsx)("h2",{children:"Searched Games"}),Object(V.jsx)(Oe,{children:r.map((function(e){return Object(V.jsx)(q,{name:e.name,released:e.released,id:e.id,image:e.background_image},e.id)}))})]}):"",Object(V.jsx)("h2",{children:"Upcoming Games"}),Object(V.jsx)(Oe,{children:i.map((function(e){return Object(V.jsx)(q,{name:e.name,released:e.released,id:e.id,image:e.background_image},e.id)}))}),Object(V.jsx)("h2",{children:"Popular Games"}),Object(V.jsx)(Oe,{children:a.map((function(e){return Object(V.jsx)(q,{name:e.name,released:e.released,id:e.id,image:e.background_image},e.id)}))}),Object(V.jsx)("h2",{children:"New Games"}),Object(V.jsx)(Oe,{children:c.map((function(e){return Object(V.jsx)(q,{name:e.name,released:e.released,id:e.id,image:e.background_image},e.id)}))})]})]})},xe=Object(M.a)(g||(g=Object(x.a)(["\n    *{\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n    html{\n        &::-webkit-scrollbar{\n            width: 0.5rem;\n        }\n        &::-webkit-scrollbar-thumb{\n            background-color: darkgray;\n        }\n    }\n    body{\n        font-family: 'Montserrat', sand-serif;\n        width: 100%;\n    }\n    h2{\n        font-size: 2.5rem;\n        font-family: 'Abril Fatface', cursive;\n        font-weight: lighter;\n    }\n    h3{\n        font-size: 1.3rem;\n        color: #333;\n        padding: 1.5rem 0rem;\n    }\n    p{\n        font-size: 1.2rem;\n        line-height: 200%;\n        color: #696969;\n    }\n    a{\n        text-decoration: none;\n        color: #333;\n    }\n    img{\n        display: block;\n    }\n    input{\n        font-family: 'Montserrat', sans-serif;\n        font-weight: bold;\n    }\n"]))),ve=function(){return Object(V.jsxs)("div",{children:[Object(V.jsx)(xe,{}),Object(V.jsx)(K.a,{path:["/ignite/game/:id","/ignite/"],children:Object(V.jsx)(fe,{})})]})},we=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,141)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,i=n.getLCP,r=n.getTTFB;t(e),a(e),c(e),i(e),r(e)}))},ye=t(42),ke=t(24),Ee={popular:[],newGames:[],upComing:[],searched:[]},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"FETCH_GAMES":return Object(ke.a)(Object(ke.a)({},e),{},{popular:n.payload.popular,upComing:n.payload.upcoming,newGames:n.payload.newGames});case"FETCH_SEARCHED":return Object(ke.a)(Object(ke.a)({},e),{},{searched:n.payload.searched});case"CLEAR_SEARCHED":return Object(ke.a)(Object(ke.a)({},e),{},{searched:[]});default:return Object(ke.a)({},e)}},Ce={game:{platforms:[]},screen:{results:[]},isLoading:!0},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"GET_DETAIL":return Object(ke.a)(Object(ke.a)({},e),{},{game:n.payload.game,screen:n.payload.screen,isLoading:!1});case"LOADING_DETAIL":return Object(ke.a)(Object(ke.a)({},e),{},{isLoading:!0});default:return Object(ke.a)({},e)}},De=Object(ye.c)({games:_e,detail:Se}),Ie=t(106),Le=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ye.d,Ae=Object(ye.e)(De,Le(Object(ye.a)(Ie.a)));f.a.render(Object(V.jsx)(p.a.StrictMode,{children:Object(V.jsx)(v.a,{store:Ae,children:Object(V.jsx)(B.a,{children:Object(V.jsx)(ve,{})})})}),document.getElementById("root")),we()}},[[137,1,2]]]);
//# sourceMappingURL=main.46cdde3d.chunk.js.map