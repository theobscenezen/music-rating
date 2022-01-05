"use strict";(self["webpackChunkvue_frontend"]=self["webpackChunkvue_frontend"]||[]).push([[757],{469:function(e,t,l){l.d(t,{y:function(){return n}});class n{constructor(){this.player="",this.lyrics=2,this.production=2,this.creativity=2.5,this.groove=2,this.underdogness=2,this.earworm=2,this.round=""}static fromData(e){const t=new n;return t._id=e._id,t.createdAt=e.createdAt,t.player=e.player,t.lyrics=e.lyrics,t.production=e.production,t.creativity=e.creativity,t.groove=e.groove,t.underdogness=e.underdogness,t.earworm=e.earworm,t.round=e.round,t}get isValid(){return 0!==this.production&&0!==this.creativity&&0!==this.groove&&0!==this.underdogness&&0!==this.earworm}}},2678:function(e,t,l){l.r(t),l.d(t,{default:function(){return Ae}});var n=l(6252),a=l(3577),r=l(9246),s=l(8944),i=l(7695),o=l(7563),u=l(5911),d=l(6334),c=l(7506),v=l(7074),m=l(2139),p=l(2716),h=l(6719);const f=(0,h.a)({name:"VListItemAvatar",props:{left:Boolean,right:Boolean,...(0,p.Q)()},setup(e,t){let{slots:l}=t;return()=>(0,n.Wm)(e.tag,{class:["v-list-item-avatar",{"v-list-item-avatar--start":e.left,"v-list-item-avatar--end":e.right}]},l,8,["class"])}});var g=l(5988);const y=(0,g.J)("v-list-item-header"),w=(0,g.J)("v-list-item-subtitle"),b=(0,g.J)("v-list-item-title");var _=l(6454),S=l(8942),W=l(4203),k=l(6947),C=l(8247),R=l(3664),x=l(2323),V=l(9748),F=l(7284),T=l(2262),D=l(1316),U=l(6533),O=l(8676);const P=e=>{let{id:t,value:l,opened:n,parents:a}=e;if(l){const e=new Set;e.add(t);let l=a.get(t);while(null!=l)e.add(l),l=a.get(l);return e}return n.delete(t),n},I=e=>{let{id:t,value:l,opened:n,parents:a}=e;if(l){let e=a.get(t);n.add(t);while(null!=e)n.add(e),e=a.get(e);return n}return n.delete(t),n},A={select:e=>{let{id:t,value:l,selected:n}=e;return n.set(t,l?"on":"off"),n},in:(e,t,l)=>{let n=new Map;for(const a of e||[])n=A.select({id:a,value:!0,selected:new Map(n),children:t,parents:l});return n},out:e=>{const t=[];for(const[l,n]of e.entries())"on"===n&&t.push(l);return t}},M=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const t={select:t=>{let{id:l,value:n,selected:a,children:r}=t;return r.has(l)?a:e?new Map([[l,n?"on":"off"]]):(a.set(l,n?"on":"off"),a)},in:(e,l,n)=>{let a=new Map;for(const r of null!=e?e:[])a=t.select({id:r,value:!0,selected:new Map(a),children:l,parents:n});return a},out:A.out};return t},z={select:e=>{let{id:t,value:l,selected:n,children:a,parents:r}=e;const s=[t];while(s.length){const e=s.shift();n.set(e,l?"on":"off"),a.has(e)&&s.push(...a.get(e))}let i=r.get(t);while(i){const e=a.get(i),t=e.every((e=>"on"===n.get(e))),l=e.every((e=>!n.has(e)||"off"===n.get(e)));n.set(i,t?"on":l?"off":"indeterminate"),i=r.get(i)}return n},in:(e,t,l)=>{let n=new Map;for(const a of e||[])n=z.select({id:a,value:!0,selected:new Map(n),children:t,parents:l});return n},out:(e,t)=>{const l=[];for(const[n,a]of e.entries())"on"!==a||t.has(n)||l.push(n);return l}},B=e=>t=>{let{id:l,value:n,active:a}=t;const r=e?new Set:a;return n?r.add(l):r.delete(l),r},H=Symbol.for("vuetify:nested"),$={id:(0,T.iH)(null),root:{register:()=>null,unregister:()=>null,parents:(0,T.iH)(new Map),children:(0,T.iH)(new Map),open:()=>null,select:()=>null,opened:(0,T.iH)(new Set),selected:(0,T.iH)(new Map),active:(0,T.iH)(new Set),activate:()=>null,selectedValues:(0,T.iH)([])}},J=(0,U.U)({selectStrategy:[String,Function],openStrategy:[String,Function],activeStrategy:[String,Function],opened:Array,selected:Array,active:Array},"nested"),L=e=>{let t=!1;const l=(0,T.iH)(new Map),a=(0,T.iH)(new Map),r=(0,D.z)(e,"opened",e.opened,(e=>new Set(e)),(e=>[...e.values()])),s=(0,D.z)(e,"active",e.active,(e=>new Set(e)),(e=>[...e.values()])),i=(0,T.Fl)((()=>{if("object"===typeof e.activeStrategy)return e.activeStrategy;switch(e.activeStrategy){case"single":return B(!0);case"multiple":default:return B()}})),o=(0,T.Fl)((()=>{if("object"===typeof e.selectStrategy)return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return M(!0);case"leaf":return M();case"independent":return A;case"classic":default:return z}})),u=(0,T.Fl)((()=>{if("function"===typeof e.openStrategy)return e.openStrategy;switch(e.openStrategy){case"single":return P;case"multiple":default:return I}})),d=(0,D.z)(e,"selected",e.selected,(e=>o.value.in(e,l.value,a.value)),(e=>o.value.out(e,l.value,a.value)));(0,n.Jd)((()=>{t=!0}));const c={id:(0,T.iH)(null),root:{opened:r,selected:d,active:s,selectedValues:(0,T.Fl)((()=>{const e=[];for(const[t,l]of d.value.entries())"on"===l&&e.push(t);return e})),register:(e,t,n)=>{t&&a.value.set(e,t),n&&l.value.set(e,[]),null!=t&&l.value.set(t,[...l.value.get(t)||[],e])},unregister:e=>{if(t)return;l.value.delete(e);const n=a.value.get(e);if(n){var i;const t=null!=(i=l.value.get(n))?i:[];l.value.set(n,t.filter((t=>t!==e)))}a.value.delete(e),r.value.delete(e),s.value.delete(e),d.value.delete(e)},open:(e,t,n)=>{const s=u.value({id:e,value:t,opened:new Set(r.value),children:l.value,parents:a.value,event:n});s&&(r.value=s)},select:(e,t,n)=>{const r=o.value.select({id:e,value:t,selected:new Map(d.value),children:l.value,parents:a.value,event:n});r&&(d.value=r)},activate:(e,t,n)=>{const r=i.value({id:e,value:t,active:new Set(s.value),children:l.value,parents:a.value,event:n});r&&(s.value=r)},children:l,parents:a}};return(0,n.JJ)(H,c),c.root},E=e=>{const t=(0,n.f3)(H,$),l=(0,T.Fl)((()=>{var t;return null!=(t=e.value)?t:(0,O.sq)().toString()})),a={...t,id:l,parent:(0,T.Fl)((()=>t.root.parents.value.get(l.value))),select:(e,n)=>t.root.select(l.value,e,n),isSelected:(0,T.Fl)((()=>"on"===t.root.selected.value.get(l.value))),activate:(e,n)=>t.root.activate(l.value,e,n),isActive:(0,T.Fl)((()=>t.root.active.value.has(l.value)))};return t.root.register(l.value,t.id.value,!1),(0,n.Jd)((()=>{t.root.unregister(l.value)})),a},Z=e=>{const t=(0,n.f3)(H,$),l=(0,T.Fl)((()=>{var t;return null!=(t=e.value)?t:(0,O.sq)().toString()})),a={...t,id:l,open:(e,n)=>t.root.open(l.value,e,n),isOpen:(0,T.Fl)((()=>t.root.opened.value.has(l.value))),isSelected:(0,T.Fl)((()=>"on"===t.root.selected.value.get(l.value))),isIndeterminate:(0,T.Fl)((()=>"indeterminate"===t.root.selected.value.get(l.value)))};return t.root.register(l.value,t.id.value,!0),(0,n.Jd)((()=>{t.root.unregister(l.value)})),(0,n.JJ)(H,a),a};var G=l(6054);const N=(0,h.a)({name:"VListSubheader",props:{color:String,inset:Boolean,...(0,p.Q)()},setup(e,t){let{slots:l}=t;const{textColorClasses:a,textColorStyles:r}=(0,G.rY)((0,T.Vh)(e,"color"));return()=>(0,n.Wm)(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset},a.value],style:{textColorStyles:r}},{default:()=>[l.default&&(0,n.Wm)("div",{class:"v-list-subheader__text"},[l.default()])]},8,["class","style"])}});var Q=l(9963),Y=l(8975);const q=(0,h.a)({name:"VListGroupItems",props:{open:Boolean,items:Array},setup(e,t){let{slots:l}=t;const a=ne(),r=te(a.hasPrepend);return()=>(0,n.Wm)(Y.Fx,null,{default:()=>[(0,n.wy)((0,n.Wm)("div",{class:"v-list-group__items",style:{"--v-list-depth":r.value}},[(0,n.Wm)(K,{items:e.items},l,8,["items"])],4),[[Q.F8,e.open]])]})}}),j=(0,h.e)()({name:"VListGroup",props:{value:null,collapseIcon:{type:String,default:"$collapse"},expandIcon:{type:String,default:"$expand"},items:Array,...(0,p.Q)()},setup(e,t){let{slots:l}=t;const{isOpen:a,open:r}=Z(e),s=ae(),i=e=>{r(!a.value,e)},o=(0,T.Fl)((()=>({onClick:i,appendIcon:a.value?e.collapseIcon:e.expandIcon,class:"v-list-group__header"})));return()=>{var t;return(0,n.Wm)(e.tag,{class:["v-list-group",{"v-list-group--prepend":null==s?void 0:s.hasPrepend.value}]},{default:()=>[null==(t=l.header)?void 0:t.call(l,o.value),(0,n.Wm)(q,{items:e.items,open:a.value},l,8,["items","open"])],_:1},8,["class"])}}}),K=(0,h.e)()({name:"VListChildren",props:{items:Array},setup(e,t){let{slots:l}=t;return()=>{var t,a,r;return null!=(t=null==(a=l.default)?void 0:a.call(l))?t:null==(r=e.items)?void 0:r.map((e=>{let{children:t,...a}=e;const{value:r,...s}=a;return t?(0,n.Wm)(j,{value:r,items:t},{...l,header:e=>l.header?l.header({...s,...e}):(0,n.Wm)(re,(0,n.dG)(s,e),null,16)},8,["value","items"]):l.item?l.item(a):(0,n.Wm)(re,a,l,16)}))}}});var X=l(3099);const ee=Symbol.for("vuetify:depth"),te=e=>{const t=(0,n.f3)(ee,(0,T.iH)(-1)),l=(0,T.Fl)((()=>t.value+1+(null!=e&&e.value?1:0)));return(0,n.JJ)(ee,l),l},le=Symbol.for("vuetify:list"),ne=()=>{const e=(0,n.f3)(le,{hasPrepend:(0,T.iH)(!1),updateHasPrepend:()=>null}),t={hasPrepend:(0,T.iH)(!1),updateHasPrepend:e=>{e&&(t.hasPrepend.value=e)}};return(0,n.JJ)(le,t),e},ae=()=>(0,n.f3)(le,null),re=((0,h.e)()({name:"VList",props:{color:String,disabled:Boolean,lines:{type:String,default:"one"},nav:Boolean,subheader:{type:[Boolean,String],default:!1},items:Array,...J({selectStrategy:"leaf",openStrategy:"multiple",activeStrategy:"single"}),...(0,_.m)(),...(0,S.f)(),...(0,W.x)(),...(0,k.c)(),...(0,C.I)(),...(0,p.Q)(),...(0,x.x$)()},emits:{"update:selected":e=>!0,"update:opened":e=>!0,"update:active":e=>!0},setup(e,t){let{slots:l}=t;const{themeClasses:a}=(0,x.Fg)(e),{backgroundColorClasses:r,backgroundColorStyles:s}=(0,G.Y5)((0,T.Vh)(e,"color")),{borderClasses:i}=(0,_.P)(e,"v-list"),{densityClasses:o}=(0,S.t)(e,"v-list"),{dimensionStyles:u}=(0,W.$)(e),{elevationClasses:d}=(0,k.Y)(e),{roundedClasses:c}=(0,C.b)(e,"v-list"),{open:v,select:m,activate:p}=L(e),h=te();return ne(),(0,X.L)((()=>{const t="string"===typeof e.subheader||l.subheader;return(0,n.Wm)(e.tag,{class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--subheader":e.subheader,"v-list--subheader-sticky":"sticky"===e.subheader,[`v-list--${e.lines}-line`]:!0},a.value,r.value,i.value,o.value,d.value,c.value],style:[s.value,u.value,{"--v-list-depth":h.value}]},{default:()=>[t&&(l.subheader?l.subheader():(0,n.Wm)(N,null,{default:()=>[e.subheader]})),(0,n.Wm)(K,{items:e.items},l,8,["items"])],_:1},8,["class","style"])})),{open:v,select:m,activate:p}}}),(0,h.e)()({name:"VListItem",directives:{Ripple:F.H},props:{active:Boolean,activeColor:String,activeClass:String,appendAvatar:String,appendIcon:String,disabled:Boolean,link:Boolean,prependAvatar:String,prependIcon:String,subtitle:String,title:String,value:null,...(0,_.m)(),...(0,S.f)(),...(0,W.x)(),...(0,k.c)(),...(0,C.I)(),...(0,R.GN)(),...(0,p.Q)(),...(0,x.x$)(),...(0,V.bk)({variant:"text"})},setup(e,t){var l;let{attrs:a,slots:r}=t;const s=(0,R.nB)(e,a),i=(0,T.Fl)((()=>{var t;return null!=(t=e.value)?t:s.href.value})),{activate:o,isActive:u,select:d,isSelected:c,root:v,parent:p}=E(i),h=ae(),g=(0,T.Fl)((()=>{var t;return e.active||(null==(t=s.isExactActive)?void 0:t.value)||u.value})),F=null!=(l=e.activeColor)?l:e.color,D=(0,T.Fl)((()=>({color:g.value?F:e.color,textColor:e.textColor,variant:e.variant})));(0,n.bv)((()=>{var e;null!=(e=s.isExactActive)&&e.value&&null!=p.value&&v.open(p.value,!0)}));const{themeClasses:U}=(0,x.Fg)(e),{borderClasses:O}=(0,_.P)(e,"v-list-item"),{colorClasses:P,colorStyles:I,variantClasses:A}=(0,V.c1)(D,"v-list-item"),{densityClasses:M}=(0,S.t)(e,"v-list-item"),{dimensionStyles:z}=(0,W.$)(e),{elevationClasses:B}=(0,k.Y)(e),{roundedClasses:H}=(0,C.b)(e,"v-list-item"),$=(0,T.Fl)((()=>({isActive:g.value,activate:o,select:d,isSelected:c.value})));return()=>{var t;const l=s.isLink.value?"a":e.tag,a=r.title||e.title,i=r.subtitle||e.subtitle,d=!(!a&&!i),c=!!(r.append||e.appendAvatar||e.appendIcon),v=!!(r.prepend||e.prependAvatar||e.prependIcon),p=!e.disabled&&(s.isClickable.value||e.link||null!=e.value);return null==h||h.updateHasPrepend(v),(0,n.wy)((0,n.Wm)(l,{class:["v-list-item",{"v-list-item--active":g.value,"v-list-item--disabled":e.disabled,"v-list-item--link":p,"v-list-item--prepend":!v&&(null==h?void 0:h.hasPrepend.value),[`${e.activeClass}`]:g.value&&e.activeClass},U.value,O.value,P.value,M.value,B.value,H.value,A.value],style:[I.value,z.value],href:s.href.value,tabindex:p?0:void 0,onClick:p&&(t=>{var l;null==(l=s.navigate)||l.call(s,t),null!=e.value&&o(!u.value,t)})},{default:()=>[(0,V.Ux)(p||g.value,"v-list-item"),v&&(r.prepend?r.prepend($.value):(0,n.Wm)(f,{left:!0},{default:()=>[(0,n.Wm)(m.V,{density:e.density,icon:e.prependIcon,image:e.prependAvatar},null,8,["density","icon","image"])]},8,["left"])),d&&(0,n.Wm)(y,null,{default:()=>[a&&(0,n.Wm)(b,null,{default:()=>[r.title?r.title():e.title]}),i&&(0,n.Wm)(w,null,{default:()=>[r.subtitle?r.subtitle():e.subtitle]})],_:1}),null==(t=r.default)?void 0:t.call(r,$.value),c&&(r.append?r.append($.value):(0,n.Wm)(f,{right:!0},{default:()=>[(0,n.Wm)(m.V,{density:e.density,icon:e.appendIcon,image:e.appendAvatar},null,8,["density","icon","image"])]},8,["right"]))],_:1},8,["class","style","href","tabindex","onClick"]),[[(0,n.Q2)("ripple"),p]])}}}));var se=l(2283),ie=l(1349);const oe=(0,h.a)({name:"VRating",props:{name:String,itemAriaLabel:{type:String,default:"$vuetify.rating.ariaLabel.item"},activeColor:String,color:String,clearable:Boolean,disabled:Boolean,emptyIcon:{type:String,default:"$ratingEmpty"},fullIcon:{type:String,default:"$ratingFull"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,modelValue:{type:Number,default:0},itemLabels:Array,itemLabelPosition:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},ripple:Boolean,...(0,S.f)(),...(0,se.Z)(),...(0,p.Q)(),...(0,x.x$)()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:l}=t;const{t:a}=(0,ie.bU)(),{themeClasses:s}=(0,x.Fg)(e),i=(0,D.z)(e,"modelValue"),o=(0,T.Fl)((()=>(0,O.MT)(Number(e.length),1))),u=(0,T.Fl)((()=>o.value.flatMap((t=>e.halfIncrements?[t-.5,t]:[t])))),d=(0,T.iH)(-1),c=(0,T.iH)(-1),v=(0,T.iH)();let m=!1;const p=(0,T.Fl)((()=>u.value.map((t=>{var l;const n=e.hover&&d.value>-1,a=i.value>=t,r=d.value>=t,s=n?r:a,o=s?e.fullIcon:e.emptyIcon,u=null!=(l=e.activeColor)?l:e.color,c=a||r?u:e.color;return{isFilled:a,isHovered:r,icon:o,color:c}})))),h=(0,T.Fl)((()=>[0,...u.value].map((t=>{function l(){d.value=t}function n(){d.value=-1}function a(){var e;0===t&&0===i.value?null==(e=v.value)||e.focus():c.value=t}function r(){m||(c.value=-1)}function s(){e.disabled||e.readonly||(i.value=i.value===t&&e.clearable?0:t)}return{onMouseenter:e.hover?l:void 0,onMouseleave:e.hover?n:void 0,onFocus:a,onBlur:r,onClick:s}}))));function f(){m=!0}function g(){m=!1}const y=(0,T.Fl)((()=>{var t;return null!=(t=e.name)?t:`v-rating-${(0,O.sq)()}`}));function w(t){var s,o;let{value:u,index:d,showStar:c=!0}=t;const{onMouseenter:m,onMouseleave:w,onFocus:b,onBlur:_,onClick:S}=h.value[d+1],W=`${y.value}-${String(u).replace(".","-")}`,k={color:null==(s=p.value[d])?void 0:s.color,density:e.density,disabled:e.disabled,icon:null==(o=p.value[d])?void 0:o.icon,ripple:e.ripple,size:e.size,tag:"span",variant:"plain"};return(0,n.Wm)(n.HY,null,[(0,n.Wm)("label",{for:W,class:{"v-rating__item--half":e.halfIncrements&&u%1>0,"v-rating__item--full":e.halfIncrements&&u%1===0},onMousedown:f,onMouseup:g,onMouseenter:m,onMouseleave:w},[(0,n.Wm)("span",{class:"v-rating__hidden"},[a(e.itemAriaLabel,u,e.length)]),c?l.item?l.item({...p.value,props:k,value:u,index:d}):(0,n.Wm)(r.T,k,null,16):void 0],42,["for","onMousedown","onMouseup","onMouseenter","onMouseleave"]),(0,n.Wm)("input",{class:"v-rating__hidden",name:y.value,id:W,type:"radio",value:u,checked:i.value===u,onClick:S,onFocus:b,onBlur:_,ref:0===d?v:void 0,readonly:e.readonly,disabled:e.disabled},null,40,["name","id","value","checked","onClick","onFocus","onBlur","readonly","disabled"])])}return()=>{var t;const a=!(null==(t=e.itemLabels)||!t.length);return(0,n.Wm)(e.tag,{class:["v-rating",{"v-rating--hover":e.hover,"v-rating--readonly":e.readonly},s.value]},{default:()=>[(0,n.Wm)(w,{value:0,index:-1,showStar:!1},null,8,["index"]),o.value.map(((t,r)=>{var s,i;return(0,n.Wm)("div",{class:"v-rating__wrapper"},[a?l["item-label"]?l["item-label"]():null!=(s=e.itemLabels)&&s[r]?(0,n.Wm)("span",null,[null==(i=e.itemLabels)?void 0:i[r]]):(0,n.Wm)("span",null,[(0,n.Uk)(" ")]):void 0,(0,n.Wm)("div",{class:["v-rating__item",{"v-rating__item--focused":Math.ceil(c.value)===t}]},[e.halfIncrements?(0,n.Wm)(n.HY,null,[(0,n.Wm)(w,{value:t-.5,index:2*r},null,8,["value","index"]),(0,n.Wm)(w,{value:t,index:2*r+1},null,8,["value","index"])]):(0,n.Wm)(w,{value:t,index:r},null,8,["value","index"])],2)])}))],_:1},8,["class"])}}});var ue=l(8610);const de=(0,n._)("p",{class:"text-center mt-3 mb-2"},"Bitte warte, während die anderen noch Voten...",-1),ce={class:"text-center mb-8"},ve={class:"mx-4 mt-16"},me=(0,n._)("h2",null,"Deine Eingaben:",-1),pe=(0,n.Uk)("Kreativität: "),he=(0,n.Uk)("Ohrwurmfaktor: "),fe=(0,n.Uk)("Groove: "),ge=(0,n.Uk)("Lyrics: "),ye=(0,n.Uk)("Produktion: "),we=(0,n.Uk)("Underdog-Faktor: "),be={class:"ma-4 mt-16"},_e=(0,n.Uk)("Spielerzahl ändern"),Se=(0,n.Uk)("Kreativität"),We=(0,n.Uk)("Ohrwurmfaktor"),ke=(0,n.Uk)("Groove"),Ce=(0,n.Uk)("Lyrics"),Re=(0,n.Uk)("Produktion"),xe=(0,n.Uk)("Underdog-Faktor"),Ve=(0,n.Uk)("Abstimmen"),Fe={key:2};function Te(e,t,l,m,p,h){const f=(0,n.up)("loader"),g=(0,n.up)("v-list-item-content");return e.loading?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[(0,n.Wm)(f),e.submitted&&!e.gameFinalized?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[de,(0,n._)("p",ce,(0,a.zw)(e.currentRound.currentRecord.votes.length)+" / "+(0,a.zw)(e.currentRound.playerCount)+" Spieler haben bereits abgestimmt. ("+(0,a.zw)(e.playersVoted)+")",1),(0,n._)("div",ve,[me,(0,n._)("p",null,(0,a.zw)(e.currentRound.currentRecord.artist)+" - "+(0,a.zw)(e.currentRound.currentRecord.title),1),(0,n.Wm)(s._,{class:"mx-auto",tile:""},{default:(0,n.w5)((()=>[(0,n.Wm)(re,null,{default:(0,n.w5)((()=>[(0,n.Wm)(g,null,{default:(0,n.w5)((()=>[(0,n.Wm)(b,null,{default:(0,n.w5)((()=>[pe,(0,n._)("strong",null,(0,a.zw)(e.voteDTO.creativity),1)])),_:1}),(0,n.Wm)(b,null,{default:(0,n.w5)((()=>[he,(0,n._)("strong",null,(0,a.zw)(e.voteDTO.earworm),1)])),_:1}),(0,n.Wm)(b,null,{default:(0,n.w5)((()=>[fe,(0,n._)("strong",null,(0,a.zw)(e.voteDTO.groove),1)])),_:1}),(0,n.Wm)(b,null,{default:(0,n.w5)((()=>[ge,(0,n._)("strong",null,(0,a.zw)(e.voteDTO.lyrics),1)])),_:1}),(0,n.Wm)(b,null,{default:(0,n.w5)((()=>[ye,(0,n._)("strong",null,(0,a.zw)(e.voteDTO.production),1)])),_:1}),(0,n.Wm)(b,null,{default:(0,n.w5)((()=>[we,(0,n._)("strong",null,(0,a.zw)(e.voteDTO.underdogness),1)])),_:1})])),_:1})])),_:1})])),_:1})]),(0,n._)("div",be,[(0,n.Wm)(ue.h,{modelValue:e.newPlayerCount,"onUpdate:modelValue":t[0]||(t[0]=t=>e.newPlayerCount=t),label:"Anzahl Spieler",type:"number",required:""},null,8,["modelValue"]),(0,n.Wm)(r.T,{color:"lighten-2",text:"",onClick:e.changePlayerCount,disabled:0===e.newPlayerCount},{default:(0,n.w5)((()=>[_e])),_:1},8,["onClick","disabled"])])],64)):(0,n.kq)("",!0)],64)):e.gameFinalized?((0,n.wg)(),(0,n.iD)("h2",Fe,"Abschlussstatistiken")):((0,n.wg)(),(0,n.j4)(s._,{key:1,class:"mx-4 my-12 pt-4 pb-4 pl-2 pr-2","max-width":"374"},{default:(0,n.w5)((()=>[e.currentRound?.currentRecord?.imageUrl?((0,n.wg)(),(0,n.j4)(v.f,{key:0,class:"mb-4",height:"250",src:e.currentRound?.currentRecord?.imageUrl},null,8,["src"])):(0,n.kq)("",!0),(0,n.Wm)(i.E,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,a.zw)(e.currentRound?.currentRecord?.title),1)])),_:1}),(0,n.Wm)(o.Q,{class:"mb-4"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,a.zw)(e.currentRound?.currentRecord?.artist),1)])),_:1}),(0,n.Wm)(c.J,{class:"mx-4"}),(0,n.Wm)(i.E,null,{default:(0,n.w5)((()=>[Se])),_:1}),(0,n.Wm)(u.Z,null,{default:(0,n.w5)((()=>[(0,n.Wm)(oe,{modelValue:e.voteDTO.creativity,"onUpdate:modelValue":t[1]||(t[1]=t=>e.voteDTO.creativity=t),density:"default",color:"yellow",clearable:"","half-increments":""},null,8,["modelValue"])])),_:1}),(0,n.Wm)(c.J,{class:"mx-4"}),(0,n.Wm)(i.E,null,{default:(0,n.w5)((()=>[We])),_:1}),(0,n.Wm)(u.Z,null,{default:(0,n.w5)((()=>[(0,n.Wm)(oe,{modelValue:e.voteDTO.earworm,"onUpdate:modelValue":t[2]||(t[2]=t=>e.voteDTO.earworm=t),density:"default",color:"yellow",clearable:"","half-increments":""},null,8,["modelValue"])])),_:1}),(0,n.Wm)(c.J,{class:"mx-4"}),(0,n.Wm)(i.E,null,{default:(0,n.w5)((()=>[ke])),_:1}),(0,n.Wm)(u.Z,null,{default:(0,n.w5)((()=>[(0,n.Wm)(oe,{modelValue:e.voteDTO.groove,"onUpdate:modelValue":t[3]||(t[3]=t=>e.voteDTO.groove=t),density:"default",color:"yellow",clearable:"","half-increments":""},null,8,["modelValue"])])),_:1}),(0,n.Wm)(c.J,{class:"mx-4"}),(0,n.Wm)(i.E,null,{default:(0,n.w5)((()=>[Ce])),_:1}),(0,n.Wm)(u.Z,null,{default:(0,n.w5)((()=>[(0,n.Wm)(oe,{modelValue:e.voteDTO.lyrics,"onUpdate:modelValue":t[4]||(t[4]=t=>e.voteDTO.lyrics=t),density:"default",color:"yellow",clearable:"","half-increments":""},null,8,["modelValue"])])),_:1}),(0,n.Wm)(c.J,{class:"mx-4"}),(0,n.Wm)(i.E,null,{default:(0,n.w5)((()=>[Re])),_:1}),(0,n.Wm)(u.Z,null,{default:(0,n.w5)((()=>[(0,n.Wm)(oe,{modelValue:e.voteDTO.production,"onUpdate:modelValue":t[5]||(t[5]=t=>e.voteDTO.production=t),density:"default",color:"yellow",clearable:"","half-increments":""},null,8,["modelValue"])])),_:1}),(0,n.Wm)(c.J,{class:"mx-4"}),(0,n.Wm)(i.E,null,{default:(0,n.w5)((()=>[xe])),_:1}),(0,n.Wm)(u.Z,null,{default:(0,n.w5)((()=>[(0,n.Wm)(oe,{modelValue:e.voteDTO.underdogness,"onUpdate:modelValue":t[6]||(t[6]=t=>e.voteDTO.underdogness=t),density:"default",color:"yellow",clearable:"","half-increments":""},null,8,["modelValue"])])),_:1}),(0,n.Wm)(d.h,null,{default:(0,n.w5)((()=>[(0,n.Wm)(r.T,{color:"deep-purple lighten-2",text:"",disabled:!e.voteDTO.isValid,onClick:e.submitVote},{default:(0,n.w5)((()=>[Ve])),_:1},8,["disabled","onClick"])])),_:1})])),_:1}))}var De=l(2695),Ue=l(469),Oe=(0,n.aZ)({name:"Game",data:()=>({voteDTO:new Ue.y,polling:null,submitted:!1,gameFinalized:!1,currentRecordBackup:"",newPlayerCount:0}),mixins:[De.Z],async mounted(){await this.fetchCurrentRound(),await this.startNewRound(),this.newPlayerCount=this.currentRound?.playerCount},methods:{async fetchCurrentRound(){this.loading=!0;const{roundId:e}=this.$route.params;await this.$store.dispatch("fetchRound",e),this.loading=!1},async startNewRound(){if(this.currentRecordBackup=this.currentRound?.currentRecord?._id,null===this.currentRound.currentRecord)return this.showToast("Das Spiel ist abgeschlossen!"),this.gameFinalized=!0,void this.showStats();if(this.currentRound?.currentRecord?.votes){const e=this.currentRound.currentRecord.votes.find((e=>e.player===this.player));if(e)return this.voteDTO=Ue.y.fromData(e),this.showToast("Dein Voting existiert bereits."),this.loading=!0,this.submitted=!0,void await this.startPolling()}this.voteDTO=new Ue.y,this.currentRound&&this.player&&(this.voteDTO.round=this.currentRound._id,this.voteDTO.player=this.player),this.loading=!1,this.submitted=!1},async submitVote(){this.currentRound&&(this.loading=!0,this.submitted=!0,await this.restClient.POST(`/api/rounds/${this.currentRound._id}/submit`,this.voteDTO),await this.startPolling())},async startPolling(){await this.$store.dispatch("fetchRound",this.currentRound._id),this.polling=setInterval((async()=>{this.currentRound&&(await this.$store.dispatch("fetchRound",this.currentRound._id),this.currentRecordBackup!==this.currentRound?.currentRecord?._id&&(this.showToast("Neues Album kommt!"),this.endPolling(),this.startNewRound()),null===this.currentRound.currentRecord&&(this.showToast("Das Spiel ist beendet!"),this.gameFinalized=!0,this.showStats()))}),3e3)},endPolling(){clearInterval(this.polling)},async changePlayerCount(){await this.restClient.POST(`/api/rounds/${this.currentRound?._id}`,{_id:this.currentRound._id,playerCount:this.newPlayerCount})},async showStats(){await this.restClient.GET(`/api/rounds/${this.currentRound?._id}/stats`);this.loading=!1}},beforeUnmount(){this.endPolling()},computed:{playersVoted(){const e=this.currentRound?.currentRecord?.votes.map((e=>e.player));return e.join(", ")}}}),Pe=l(3744);const Ie=(0,Pe.Z)(Oe,[["render",Te]]);var Ae=Ie}}]);
//# sourceMappingURL=game.aac1f948.js.map