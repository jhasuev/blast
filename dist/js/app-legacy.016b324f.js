(function(e){function t(t){for(var r,c,u=t[0],i=t[1],d=t[2],s=0,l=[];s<u.length;s++)c=u[s],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&l.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(l.length)l.shift()();return a.push.apply(a,d||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={app:0},o={app:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"-legacy."+{"chunk-2296431d":"46814c86","chunk-249aa262":"5bd480da","chunk-2d0c1056":"aad65bda","chunk-2d2311b8":"9fb1ca1c","chunk-3c868b70":"2bb3739b","chunk-470d8baa":"d296bd2c","chunk-4bcad86d":"ebc7c1bc"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-249aa262":1,"chunk-3c868b70":1,"chunk-470d8baa":1,"chunk-4bcad86d":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2296431d":"31d6cfe0","chunk-249aa262":"6edf4c70","chunk-2d0c1056":"31d6cfe0","chunk-2d2311b8":"31d6cfe0","chunk-3c868b70":"3a9316c4","chunk-470d8baa":"51d25d67","chunk-4bcad86d":"883b0bcd"}[e]+".css",o=i.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var d=a[u],s=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(s===r||s===o))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){d=l[u],s=d.getAttribute("data-href");if(s===r||s===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete c[e],f.parentNode.removeChild(f),n(a)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){c[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=a);var d,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var l=new Error;d=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",l.name="ChunkLoadError",l.type=r,l.request=c,n[1](l)}o[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:s})}),12e4);s.onerror=s.onload=d,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=t,d=d.slice();for(var l=0;l<d.length;l++)t(d[l]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2290:function(e,t,n){"use strict";var r=n("1344");t["a"]=Object(r["a"])()},"41cb":function(e,t,n){"use strict";n("d3b7"),n("3ca3"),n("ddb0");var r=n("6c02"),c=[{path:"/",name:"home",component:function(){return n.e("chunk-470d8baa").then(n.bind(null,"bb51"))}},{path:"/result",name:"result",component:function(){return n.e("chunk-2d2311b8").then(n.bind(null,"eeac"))}},{path:"/game",name:"game",component:function(){return n.e("chunk-3c868b70").then(n.bind(null,"7d36"))}},{path:"/record",name:"record",component:function(){return n.e("chunk-2d0c1056").then(n.bind(null,"43ef"))}},{path:"/about",name:"about",component:function(){return n.e("chunk-4bcad86d").then(n.bind(null,"f820"))}},{path:"/:pathMatch(.*)*",name:"404",component:function(){return n.e("chunk-249aa262").then(n.bind(null,"8cdb"))}}];t["a"]=Object(r["a"])({routes:c,history:Object(r["b"])()})},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={ref:"ui",class:["ui"]},o=Object(r["g"])("i",{class:"ui__bg-layout"},null,-1),a={key:1,class:"preload-text"};function u(e,t,n,u,i,d){var s=Object(r["w"])("router-view");return i.downloaded?(Object(r["p"])(),Object(r["d"])("div",{key:0,class:["game-container",{"is-gaming":d.isGaming}]},[Object(r["g"])("div",c,[o,Object(r["g"])(s,null,{default:Object(r["C"])((function(e){var t=e.Component;return[Object(r["g"])(r["a"],{name:"slide",mode:"out-in"},{default:Object(r["C"])((function(){return[(Object(r["p"])(),Object(r["d"])(Object(r["x"])(t)))]})),_:2},1024)]})),_:1})],512),Object(r["g"])("div",{id:i.containerId,class:"game-container__inner"},null,8,["id"])],2)):(Object(r["p"])(),Object(r["d"])("div",a," Игра загружается ... "))}var i=n("1da1"),d=(n("96cf"),n("b0c0"),n("d3b7"),n("3ca3"),n("ddb0"),n("5530")),s=n("5502"),l=n("2290"),f={mounted:function(){var e=this;l["a"].on("vue:timeover",(function(){l["a"].emit("phaser:stopGaming"),e.$router.push({name:"result"})})),l["a"].on("vue:addScore",(function(t){e.addScore(t)})),l["a"].on("vue:startGame",(function(t){e.setScore(0)}))},methods:Object(d["a"])({},Object(s["b"])(["addScore","setScore"]))},p={name:"App",mixins:[f],data:function(){return{downloaded:!1,gameInstance:null,containerId:"game-container"}},computed:{isGaming:function(){return"game"===this.$route.name}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.e("chunk-2296431d").then(n.bind(null,"a1b8"));case 2:r=t.sent,e.downloaded=!0,e.stopHandlersFromUI(),e.$nextTick((function(){e.gameInstance=r.launch(e.containerId)}));case 6:case"end":return t.stop()}}),t)})))()},methods:{stopHandlersFromUI:function(){var e=this,t=this.$refs.ui;if(!t)return setInterval((function(){return e.stopHandlersFromUI()}),16);for(var n=["mousedown","mouseup","touchstart","touchmove","touchend","touchcancel"],r=0,c=n;r<c.length;r++){var o=c[r];t.addEventListener(o,(function(e){return e.stopPropagation()}))}}},destroyed:function(){this.gameInstance.destroy(!1)}};n("e9f9");p.render=u;var b=p,h=n("41cb"),m=(n("a9e3"),Object(s["a"])({state:{scores:{record:Number(localStorage.record||0),current:0}},getters:{getScore:function(e){return e.scores.current},getRecord:function(e){return e.scores.record}},mutations:{SET_RECORD:function(e,t){e.scores.record=t},ADD_SCORE:function(e,t){e.scores.current+=t},SET_SCORE:function(e,t){e.scores.current=t},SAVE:function(e){localStorage.record=e.scores.record}},actions:{addScore:function(e,t){var n=e.state,r=e.commit;r("ADD_SCORE",t),r("SET_RECORD",Math.max(n.scores.record,n.scores.current)),r("SAVE")},setScore:function(e,t){var n=e.commit;n("SET_SCORE",t)}}})),v={methods:{goToMenu:function(){this.$router.push({name:"home"})},goToGame:function(){this.$router.push({name:"game"})}}},g=Object(r["D"])("data-v-231986d9");Object(r["s"])("data-v-231986d9");var O={class:"popup"},j=Object(r["g"])("i",{class:"popup__bg"},null,-1),k={class:"popup__inner"},y={class:"popup__content"};Object(r["q"])();var _=g((function(e,t,n,c,o,a){return Object(r["p"])(),Object(r["d"])("div",O,[j,Object(r["g"])("div",k,[n.title?(Object(r["p"])(),Object(r["d"])("h3",{key:0,textContent:Object(r["z"])(n.title),class:"popup__title"},null,8,["textContent"])):Object(r["e"])("",!0),Object(r["g"])("div",y,[Object(r["v"])(e.$slots,"default",{},void 0,!0)])])])})),S={name:"Popup",props:{title:{type:String,default:""},bgClick:{type:Boolean,default:!0}}};n("e699");S.render=_,S.__scopeId="data-v-231986d9";var w=S;n("c1c3");Object(r["c"])(b).mixin(v).use(m).use(h["a"]).component("Popup",w).mount("#app")},"82c2":function(e,t,n){},"859f":function(e,t,n){},c1c3:function(e,t,n){},e699:function(e,t,n){"use strict";n("859f")},e9f9:function(e,t,n){"use strict";n("82c2")}});
//# sourceMappingURL=app-legacy.016b324f.js.map