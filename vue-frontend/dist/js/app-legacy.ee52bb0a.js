(function(){"use strict";var e={6043:function(e,t,n){var r=n(5957),o=(n(6992),n(8674),n(9601),n(7727),n(9963)),u=n(2728),a=n(3002),i=n(6252),s=n(3577),c=n(1457),l=n(2452),f=n(4066),d=n(9246),p=n(8944),m=n(7506),h=n(1492),v=n(9357),y=n(4007),g=n(1669),w=n(9003),b=n(3379),k=n(7737),R=n(941),x=n(8610),S=(0,i.Uk)("Home"),_=(0,i.Uk)("mdi-logout"),O=(0,i.Uk)("Los"),j=(0,i._)("p",null,"Du bist 1 Pimmel",-1);function P(e,t,n,r,o,u){var a=(0,i.up)("router-link"),P=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(c.q,{theme:"dark",class:"game-container"},{default:(0,i.w5)((function(){return[(0,i.Wm)(l.L,{density:"compact"},{default:(0,i.w5)((function(){return[(0,i.Wm)(y.C),e.player?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i.Wm)(f.o,null,{default:(0,i.w5)((function(){return[(0,i.Uk)("Hallo "+(0,s.zw)(e.player),1)]})),_:1}),(0,i.Wm)(y.C),(0,i.Wm)(d.T,{text:""},{default:(0,i.w5)((function(){return[(0,i.Wm)(a,{to:{name:"Home"}},{default:(0,i.w5)((function(){return[S]})),_:1})]})),_:1}),(0,i.Wm)(d.T,{class:"mr-3",onClick:e.logout},{default:(0,i.w5)((function(){return[(0,i.Wm)(k.t,null,{default:(0,i.w5)((function(){return[_]})),_:1})]})),_:1},8,["onClick"])],64)):(0,i.kq)("",!0),(0,i.Wm)(m.J,{inset:"",vertical:""})]})),_:1}),(0,i.Wm)(R.O,null,{default:(0,i.w5)((function(){return[e.player?((0,i.wg)(),(0,i.j4)(P,{key:0})):((0,i.wg)(),(0,i.j4)(v.O,{key:1},{default:(0,i.w5)((function(){return[(0,i.Wm)(g.K,null,{default:(0,i.w5)((function(){return[(0,i.Wm)(w.o,null,{default:(0,i.w5)((function(){return[(0,i.Wm)(b.D,{cols:"12",md:"4"},{default:(0,i.w5)((function(){return[(0,i.Wm)(x.h,{modelValue:e.newPlayer,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.newPlayer=t}),label:"Name",required:""},null,8,["modelValue"])]})),_:1})]})),_:1}),(0,i.Wm)(w.o,null,{default:(0,i.w5)((function(){return[(0,i.Wm)(b.D,{cols:"12",md:"4"},{default:(0,i.w5)((function(){return[(0,i.Wm)(d.T,{color:"deep-purple lighten-2",text:"",onClick:e.registerPlayer},{default:(0,i.w5)((function(){return[O]})),_:1},8,["onClick"])]})),_:1})]})),_:1})]})),_:1})]})),_:1}))]})),_:1}),(0,i.Wm)(h.c,null,{default:(0,i.w5)((function(){return[(0,i.Wm)(p._,{elevation:"0",rounded:"0",width:"100%",class:"bg-grey text-center"},{default:(0,i.w5)((function(){return[j]})),_:1})]})),_:1})]})),_:1})}var Z=n(8534),E=(n(5666),n(1539),n(8783),n(3948),n(2695)),T=(0,i.aZ)({name:"App",data:function(){return{newPlayer:""}},mixins:[E.Z],mounted:function(){var e=this;return(0,Z.Z)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=localStorage.getItem("player"),!n){t.next=4;break}return t.next=4,Promise.all([e.$store.commit("setPlayer",n),e.$store.dispatch("fetchRounds")]);case 4:case"end":return t.stop()}}),t)})))()},methods:{registerPlayer:function(){var e=this;return(0,Z.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.$store.commit("setPlayer",e.newPlayer),e.$store.dispatch("fetchRounds")]);case 2:case"end":return t.stop()}}),t)})))()},logout:function(){this.$store.commit("setPlayer",null)}}}),C=n(3744);const D=(0,C.Z)(T,[["render",P]]);var W=D,L=n(2119),H=[{path:"/",name:"Home",component:function(){return n.e(177).then(n.bind(n,4900))}},{path:"/game/:roundId",name:"Game",component:function(){return n.e(757).then(n.bind(n,1745))}}],N=(0,L.p7)({history:(0,L.PO)("/"),routes:H}),A=N,z=(n(8862),n(8637)),F=n(5518),I=(0,z.MT)({state:{player:null,rounds:[],currentRound:null},mutations:{setPlayer:function(e,t){e.player=t,"string"===typeof t?localStorage.setItem("player",t):localStorage.removeItem("player")},setRounds:function(e,t){e.rounds=t},setCurrentRound:function(e,t){e.currentRound=t,null!==t?localStorage.setItem("currentRound",JSON.stringify(t)):localStorage.removeItem("currentRound")}},getters:{getPlayer:function(e){return e.player},getRounds:function(e){return e.rounds},getCurrentRound:function(e){return e.currentRound}},actions:{fetchRounds:function(e){return(0,Z.Z)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=new F.H,t.next=3,n.GET("/api/rounds");case 3:r=t.sent,r.response&&e.commit("setRounds",r.response);case 5:case"end":return t.stop()}}),t)})))()},fetchRound:function(e,t){return(0,Z.Z)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=new F.H,n.next=3,r.GET("/api/rounds/".concat(t));case 3:o=n.sent,o.response&&e.commit("setCurrentRound",o.response);case 5:case"end":return n.stop()}}),n)})))()}},modules:{}}),U=(n(6375),n(4824)),G=(0,U.Rd)();function M(){return q.apply(this,arguments)}function q(){return q=(0,Z.Z)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.e(461).then(n.t.bind(n,5933,23));case 2:t=e.sent,t.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}});case 4:case"end":return e.stop()}}),e)}))),q.apply(this,arguments)}n(343);M(),u.kL.register.apply(u.kL,(0,r.Z)(u.zX)),(0,o.ri)(W).use(A).use(I).use(G).use(a.ZP,{position:a.Vr.BOTTOM_LEFT}).mount("#app")},2695:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(4648),o=n(8637),u=n(3002),a=n(5518),i=n(6252),s=n(3577),c={class:"v-spinner",style:{position:"relative",fontSize:0}};function l(e,t,n,r,o,u){return(0,i.wg)(),(0,i.iD)("div",c,[(0,i._)("div",{class:"v-pacman v-pacman1",style:(0,s.j5)(u.spinnerStyle1)},null,4),(0,i._)("div",{class:"v-pacman v-pacman2",style:(0,s.j5)([u.spinnerStyle,u.animationStyle,o.spinnerDelay2])},null,4),(0,i._)("div",{class:"v-pacman v-pacman3",style:(0,s.j5)([u.spinnerStyle,u.animationStyle,o.spinnerDelay3])},null,4),(0,i._)("div",{class:"v-pacman v-pacman4",style:(0,s.j5)([u.spinnerStyle,u.animationStyle,o.spinnerDelay4])},null,4),(0,i._)("div",{class:"v-pacman v-pacman5",style:(0,s.j5)([u.spinnerStyle,u.animationStyle,o.spinnerDelay5])},null,4)])}n(2222);var f={name:"Loader",props:{color:{type:String,default:"#5dc596"},size:{type:String,default:"25px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},data:function(){return{spinnerDelay2:{animationDelay:"0.25s"},spinnerDelay3:{animationDelay:"0.50s"},spinnerDelay4:{animationDelay:"0.75s"},spinnerDelay5:{animationDelay:"1s"}}},computed:{spinnerStyle:function(){return{backgroundColor:this.color,width:this.size,height:this.size,margin:this.margin,borderRadius:this.radius}},border1:function(){return"".concat(this.size," solid transparent")},border2:function(){return"".concat(this.size," solid ").concat(this.color)},spinnerStyle1:function(){return{width:0,height:0,borderTop:this.border2,borderRight:this.border1,borderBottom:this.border2,borderLeft:this.border2,borderRadius:this.size}},animationStyle:function(){return{width:"10px",height:"10px",transform:"translate(0,".concat(-parseFloat(this.size)/4,"px"),position:"absolute",top:"25px",left:"100px",animationName:"v-pacmanStretchDelay",animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear",animationFillMode:"both"}}}},d=n(3744);const p=(0,d.Z)(f,[["render",l]]);var m=p,h={data:function(){return{restClient:new a.H,loading:!1}},components:{Loader:m},computed:(0,r.Z)({},(0,o.Se)({rounds:"getRounds",player:"getPlayer",currentRound:"getCurrentRound"})),methods:{showToast:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{type:u.wD.INFO},n=(0,u.pm)();n(e,t)}}}},5518:function(e,t,n){n.d(t,{H:function(){return s}});var r=n(4648),o=n(8534),u=n(3087),a=n(2833),i=(n(5666),n(1539),n(8862),n(8783),n(3948),n(285),n(1637),function e(t,n){(0,u.Z)(this,e),this.response={},this.response=t,this.error=n}),s=function(){function e(){(0,u.Z)(this,e),this.defaultHeaders={"content-type":"application/json"}}return(0,a.Z)(e,[{key:"GET",value:function(){var e=(0,o.Z)(regeneratorRuntime.mark((function e(t){var n,o,u=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:{},e.prev=1,e.next=4,fetch(t,{headers:(0,r.Z)((0,r.Z)({},this.defaultHeaders),n),method:"get"});case 4:return o=e.sent,e.abrupt("return",this.handleResponse(o));case 8:return e.prev=8,e.t0=e["catch"](1),e.abrupt("return",this.handleError(e.t0));case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"POST",value:function(){var e=(0,o.Z)(regeneratorRuntime.mark((function e(t,n){var o,u,a=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=a.length>2&&void 0!==a[2]?a[2]:{},e.prev=1,e.next=4,fetch(t,{headers:(0,r.Z)((0,r.Z)({},this.defaultHeaders),o),method:"post",body:JSON.stringify(n)});case 4:return u=e.sent,e.abrupt("return",this.handleResponse(u));case 8:return e.prev=8,e.t0=e["catch"](1),e.abrupt("return",this.handleError(e.t0));case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"PUT",value:function(){var e=(0,o.Z)(regeneratorRuntime.mark((function e(t,n){var o,u,a=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=a.length>2&&void 0!==a[2]?a[2]:{},e.prev=1,e.next=4,fetch(t,{headers:(0,r.Z)((0,r.Z)({},this.defaultHeaders),o),method:"put",body:JSON.stringify(n)});case 4:return u=e.sent,e.abrupt("return",this.handleResponse(u));case 8:return e.prev=8,e.t0=e["catch"](1),e.abrupt("return",this.handleError(e.t0));case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"DELETE",value:function(){var e=(0,o.Z)(regeneratorRuntime.mark((function e(t){var n,o,u=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:{},e.prev=1,e.next=4,fetch(t,{headers:(0,r.Z)((0,r.Z)({},this.defaultHeaders),n),method:"delete"});case 4:return o=e.sent,e.abrupt("return",this.handleResponse(o));case 8:return e.prev=8,e.t0=e["catch"](1),e.abrupt("return",this.handleError(e.t0));case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"handleError",value:function(e){return new i(null,e)}},{key:"handleResponse",value:function(){var e=(0,o.Z)(regeneratorRuntime.mark((function e(t){var n,r,o,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.status>=200&&t.status<300)||t.redirected){e.next=5;break}return e.next=3,t.json();case 3:return n=e.sent,e.abrupt("return",new i(n,null));case 5:if(302!==t.status&&200!==t.status||!t.redirected){e.next=20;break}return e.prev=6,r=t.clone(),e.next=10,r.json();case 10:return o=e.sent,e.abrupt("return",new i(o,null));case 14:return e.prev=14,e.t0=e["catch"](6),e.next=18,t.text();case 18:return u=e.sent,e.abrupt("return",new i(u,null));case 20:return e.t1=i,e.next=23,t.json();case 23:return e.t2=e.sent,e.t3={message:"Got bad response or redirect from REST API.",response:e.t2},e.abrupt("return",new e.t1(null,e.t3));case 26:case"end":return e.stop()}}),e,null,[[6,14]])})));function t(t){return e.apply(this,arguments)}return t}()}],[{key:"DOWNLOAD",value:function(){var e=(0,o.Z)(regeneratorRuntime.mark((function e(t,n){var r,o,u,a,i,s=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=s.length>2&&void 0!==s[2]?s[2]:{},e.next=3,fetch(t,{headers:r,method:"GET"});case 3:if(o=e.sent,!(o.status>=200&&o.status<300)||o.redirected){e.next=16;break}return e.next=7,o.blob();case 7:u=e.sent,a=window.URL.createObjectURL(u),i=document.createElement("a"),i.href=a,i.download=n,i.click(),i.remove(),e.next=17;break;case 16:throw new Error("Failed downloading resource");case 17:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()}]),e}()}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var u=t[r]={exports:{}};return e[r](u,u.exports,n),u.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,u){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],u=e[l][2];for(var i=!0,s=0;s<r.length;s++)(!1&u||a>=u)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(i=!1,u<a&&(a=u));if(i){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}u=u||0;for(var l=e.length;l>0&&e[l-1][2]>u;l--)e[l]=e[l-1];e[l]=[r,o,u]}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var u=Object.create(null);n.r(u);var a={};e=e||[null,t({}),t([]),t(t)];for(var i=2&o&&r;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((function(e){a[e]=function(){return r[e]}}));return a["default"]=function(){return r},n.d(u,a),u}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+{177:"home",461:"webfontloader",757:"game"}[e]+"-legacy."+{177:"83251b6e",461:"a9841f04",757:"6011b15a"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+{143:"app",757:"game",998:"chunk-vendors"}[e]+"."+{143:"382c0b80",757:"dbd8c9f5",998:"11815113"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-frontend:";n.l=function(r,o,u,a){if(e[r])e[r].push(o);else{var i,s;if(void 0!==u)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+u){i=f;break}}i||(s=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+u),i.src=r),e[r]=[o];var d=function(t,n){i.onerror=i.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),s&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var u=function(u){if(o.onerror=o.onload=null,"load"===u.type)n();else{var a=u&&("load"===u.type?"missing":u.type),i=u&&u.target&&u.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=i,o.parentNode.removeChild(o),r(s)}};return o.onerror=o.onload=u,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],u=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(u===e||u===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],u=o.getAttribute("data-href");if(u===e||u===t)return o}},r=function(r){return new Promise((function(o,u){var a=n.miniCssF(r),i=n.p+a;if(t(a,i))return o();e(r,i,o,u)}))},o={143:0};n.f.miniCss=function(e,t){var n={757:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var u=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=u);var a=n.p+n.u(t),i=new Error,s=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var u=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+u+": "+a+")",i.name="ChunkLoadError",i.type=u,i.request=a,o[1](i)}};n.l(a,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,u,a=r[0],i=r[1],s=r[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(s)var l=s(n)}for(t&&t(r);c<a.length;c++)u=a[c],n.o(e,u)&&e[u]&&e[u][0](),e[a[c]]=0;return n.O(l)},r=self["webpackChunkvue_frontend"]=self["webpackChunkvue_frontend"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6043)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.ee52bb0a.js.map