(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f50e5ee"],{"057f":function(t,e,n){var r=n("fc6a"),o=n("241c").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return o(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?s(t):o(r(t))}},"0af0":function(t,e,n){},"0b42":function(t,e,n){var r=n("e8b5"),o=n("68ee"),i=n("861d"),a=n("b622"),s=a("species");t.exports=function(t){var e;return r(t)&&(e=t.constructor,o(e)&&(e===Array||r(e.prototype))?e=void 0:i(e)&&(e=e[s],null===e&&(e=void 0))),void 0===e?Array:e}},1086:function(t,e,n){},"16aa":function(t,e,n){},"1dde":function(t,e,n){var r=n("d039"),o=n("b622"),i=n("2d00"),a=o("species");t.exports=function(t){return i>=51||!r((function(){var e=[],n=e.constructor={};return n[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2032:function(t,e,n){"use strict";n("1086")},2217:function(t,e,n){},"27d0":function(t,e,n){},"2dbe":function(t,e,n){},"428f":function(t,e,n){var r=n("da84");t.exports=r},4867:function(t,e,n){"use strict";n("27d0")},"4de7":function(t,e,n){},"4df4":function(t,e,n){"use strict";var r=n("0366"),o=n("7b0b"),i=n("9bdd"),a=n("e95a"),s=n("68ee"),c=n("07fa"),u=n("8418"),f=n("9a1f"),l=n("35a1");t.exports=function(t){var e=o(t),n=s(this),d=arguments.length,p=d>1?arguments[1]:void 0,m=void 0!==p;m&&(p=r(p,d>2?arguments[2]:void 0,2));var b,h,v,g,y,w,S=l(e),C=0;if(!S||this==Array&&a(S))for(b=c(e),h=n?new this(b):Array(b);b>C;C++)w=m?p(e[C],C):e[C],u(h,C,w);else for(g=f(e,S),y=g.next,h=n?new this:[];!(v=y.call(g)).done;C++)w=m?i(g,p,[v.value,C],!0):v.value,u(h,C,w);return h.length=C,h}},6013:function(t,e,n){},"65f0":function(t,e,n){var r=n("0b42");t.exports=function(t,e){return new(r(t))(0===e?0:e)}},"746f":function(t,e,n){var r=n("428f"),o=n("1a2d"),i=n("e538"),a=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||a(e,t,{value:i.f(t)})}},"77b8":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("NavBar",{staticClass:"home-nav"},[n("div",{attrs:{slot:"center"},slot:"center"},[t._v("孙壮的购物商场")])]),n("TabControl",{directives:[{name:"show",rawName:"v-show",value:t.isTabFixed,expression:"isTabFixed"}],ref:"tabcontrol1",staticClass:"Fixed-TabControl",attrs:{titles:["流行","新款","精选"]},on:{tabClick:t.tabClick}}),n("Scroll",{ref:"scroll",staticClass:"content",attrs:{probeType:3,pullupLoad:!0},on:{scroll:t.contentScroll,pullingUp:t.loadMore}},[n("HomeSwiper",{attrs:{banners:t.banners},on:{"~imgLoad":function(e){return t.swiperImgLoad.apply(null,arguments)}}}),n("RecommendView",{attrs:{recommends:t.recommends}}),n("FeatureView"),n("TabControl",{ref:"tabcontrol2",attrs:{titles:["流行","新款","精选"]},on:{tabClick:t.tabClick}}),n("GoodsList",{attrs:{goods:t.goods[t.currentType].list}})],1),n("BackTop",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],nativeOn:{click:function(e){return t.backClick.apply(null,arguments)}}})],1)},o=[];function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t){if(Array.isArray(t))return i(t)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function s(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}n("fb6a"),n("b0c0");function c(t,e){if(t){if("string"===typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(t){return a(t)||s(t)||c(t)||u()}var l=n("a2e7"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-carousel",{attrs:{height:"100%"}},t._l(t.banners,(function(e,r){return n("el-carousel-item",{directives:[{name:"show",rawName:"v-show",value:t.banners,expression:"banners"}],key:r},[n("a",{attrs:{href:e.link}},[n("div",{attrs:{id:"bannerImg"}},[n("img",{attrs:{src:e.image,alt:e.title},on:{load:t.imgLoad}})])])])})),1)],1)},p=[],m={props:{banners:{type:Array,default:function(){return[]}}},data:function(){return{}},components:{},computed:{},mounted:function(){},updated:function(){var t=document.querySelector("#bannerImg").offsetHeight;document.querySelector(".el-carousel").style.height=t+"px",window.onresize=function(){var t=document.querySelector("#bannerImg").offsetHeight;document.querySelector(".el-carousel").style.height=t+"px"}},created:function(){},methods:{imgLoad:function(){this.$emit("imgLoad")}}},b=m,h=(n("e9fd"),n("2877")),v=Object(h["a"])(b,d,p,!1,null,"0c3ba5ef",null),g=v.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recommend"},t._l(t.recommends,(function(e){return n("div",{key:e.sort,staticClass:"recommend-box"},[n("a",{attrs:{href:e.link}},[n("img",{attrs:{src:e.image,alt:""}}),n("div",{staticClass:"recommend-text"},[t._v(t._s(e.title))])])])})),0)},w=[],S={props:{recommends:{type:Array,default:function(){return[]}}},data:function(){return{}},computed:{},mounted:function(){},methods:{},components:{}},C=S,_=(n("2032"),Object(h["a"])(C,y,w,!1,null,"c7395a08",null)),x=_.exports,O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"feature"},[r("a",{attrs:{href:"https://act.mogujie.com/zzlx67"}},[r("img",{attrs:{src:n("a821"),alt:""}})])])}],$={props:{},data:function(){return{}},computed:{},mounted:function(){},methods:{},components:{}},T=$,j=(n("4867"),Object(h["a"])(T,O,k,!1,null,"7b4cb834",null)),A=j.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-control"},t._l(t.titles,(function(e,r){return n("div",{key:r,staticClass:"tab-control-item",class:{avtive:t.Current===r},on:{click:function(e){return t.itemClick(r)}}},[n("span",[t._v(t._s(e))])])})),0)},E=[],L={props:{titles:{type:Array,default:function(){return[]}}},data:function(){return{Current:0}},computed:{},mounted:function(){},methods:{itemClick:function(t){this.Current=t,this.$emit("tabClick",t)}},components:{}},G=L,N=(n("f9f6"),Object(h["a"])(G,I,E,!1,null,"ee1c85b0",null)),P=N.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"goods"},t._l(t.goods,(function(t,e){return n("GoodsListItem",{key:e,attrs:{goodsItem:t}})})),1)},B=[],q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"goosItem",on:{click:t.itemClick}},[n("img",{attrs:{src:t.goodsItem.show.img,alt:t.goodsItem.title,title:t.goodsItem.title},on:{load:t.imgLoad}}),n("div",[n("p",[t._v(t._s(t.goodsItem.title))]),n("span",{staticClass:"price"},[t._v("￥"+t._s(t.goodsItem.price))]),n("span",{staticClass:"cfav el-icon-star-off"},[t._v(t._s(t.goodsItem.cfav))])])])},H=[],J={props:{goodsItem:{type:Object,default:function(){return[]}}},data:function(){return{}},computed:{},mounted:function(){},methods:{imgLoad:function(){this.$bus.$emit("itemImgLoad")},itemClick:function(){this.$router.push("/detail/"+this.goodsItem.iid)}},components:{}},M=J,V=(n("983b"),Object(h["a"])(M,q,H,!1,null,"9b2f4e2a",null)),Y=V.exports,z={props:{goods:{type:Array,default:function(){return[]}}},data:function(){return{}},computed:{},mounted:function(){},methods:{},components:{GoodsListItem:Y}},D=z,R=(n("caac"),Object(h["a"])(D,F,B,!1,null,"3a7952ee",null)),U=R.exports,Q=n("9cd2"),W=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},K=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"back-top"},[n("div",{staticClass:"back-top-img"})])}],X={props:{},data:function(){return{}},computed:{},mounted:function(){},methods:{},components:{}},Z=X,tt=(n("c767"),Object(h["a"])(Z,W,K,!1,null,"2489858c",null)),et=tt.exports,nt=n("1bab");function rt(){return Object(nt["a"])({url:"/home/multidata"})}function ot(t,e){return Object(nt["a"])({url:"/home/data",params:{type:t,page:e}})}var it={props:{},data:function(){return{banners:[],recommends:[],goods:{pop:{page:0,list:[]},new:{page:0,list:[]},sell:{page:0,list:[]}},currentType:"pop",isShow:!1,tabOffsetTop:0,isTabFixed:!1,saveY:0}},activated:function(){this.$refs.scroll.refresh(),this.$refs.scroll.scrollTo(0,this.saveY,0)},deactivated:function(){this.saveY=this.$refs.scroll.getScrollY()},created:function(){this.GhomeData(),this.Ggoods("pop"),this.Ggoods("new"),this.Ggoods("sell")},mounted:function(){var t=this.debounce(this.$refs.scroll.refresh,500);this.$bus.$on("itemImgLoad",(function(){t()}))},methods:{GhomeData:function(){var t=this;rt().then((function(e){t.banners=e.data.banner.list,t.recommends=e.data.recommend.list}))},Ggoods:function(t){var e=this,n=this.goods[t].page+1;ot(t,n).then((function(n){var r;(r=e.goods[t].list).push.apply(r,f(n.data.list)),e.goods[t].page=1,e.$refs.scroll.finishPullUp()}))},tabClick:function(t){this.currentType=0==t?"pop":1==t?"new":"sell",this.$refs.tabcontrol1.Current=t,this.$refs.tabcontrol2.Current=t,this.$refs.scroll.scrollTo(0,5-this.tabOffsetTop,2e3)},backClick:function(){this.$refs.scroll.scrollTo(0,0,1e3)},contentScroll:function(t){this.isShow=-t.y>1200,this.isTabFixed=-t.y>this.tabOffsetTop},loadMore:function(){this.Ggoods(this.currentType)},debounce:function(t,e){var n=null;return function(){for(var r=this,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];n&&clearTimeout(n),n=setTimeout((function(){t.apply(r,i)}),e)}},swiperImgLoad:function(){this.tabOffsetTop=this.$refs.tabcontrol2.$el.offsetTop-40}},computed:{},components:{NavBar:l["a"],HomeSwiper:g,RecommendView:x,FeatureView:A,TabControl:P,GoodsList:U,Scroll:Q["a"],BackTop:et}},at=it,st=(n("cdfe"),Object(h["a"])(at,r,o,!1,null,"089cc357",null));e["default"]=st.exports},8418:function(t,e,n){"use strict";var r=n("a04b"),o=n("9bf2"),i=n("5c6c");t.exports=function(t,e,n){var a=r(e);a in t?o.f(t,a,i(0,n)):t[a]=n}},"983b":function(t,e,n){"use strict";n("4de7")},"9bdd":function(t,e,n){var r=n("825a"),o=n("2a62");t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(a){o(t,"throw",a)}}},a4d3:function(t,e,n){"use strict";var r=n("23e7"),o=n("da84"),i=n("d066"),a=n("c430"),s=n("83ab"),c=n("4930"),u=n("d039"),f=n("1a2d"),l=n("e8b5"),d=n("1626"),p=n("861d"),m=n("d9b5"),b=n("825a"),h=n("7b0b"),v=n("fc6a"),g=n("a04b"),y=n("577e"),w=n("5c6c"),S=n("7c73"),C=n("df75"),_=n("241c"),x=n("057f"),O=n("7418"),k=n("06cf"),$=n("9bf2"),T=n("d1e7"),j=n("6eeb"),A=n("5692"),I=n("f772"),E=n("d012"),L=n("90e3"),G=n("b622"),N=n("e538"),P=n("746f"),F=n("d44e"),B=n("69f3"),q=n("b727").forEach,H=I("hidden"),J="Symbol",M="prototype",V=G("toPrimitive"),Y=B.set,z=B.getterFor(J),D=Object[M],R=o.Symbol,U=i("JSON","stringify"),Q=k.f,W=$.f,K=x.f,X=T.f,Z=A("symbols"),tt=A("op-symbols"),et=A("string-to-symbol-registry"),nt=A("symbol-to-string-registry"),rt=A("wks"),ot=o.QObject,it=!ot||!ot[M]||!ot[M].findChild,at=s&&u((function(){return 7!=S(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=Q(D,e);r&&delete D[e],W(t,e,n),r&&t!==D&&W(D,e,r)}:W,st=function(t,e){var n=Z[t]=S(R[M]);return Y(n,{type:J,tag:t,description:e}),s||(n.description=e),n},ct=function(t,e,n){t===D&&ct(tt,e,n),b(t);var r=g(e);return b(n),f(Z,r)?(n.enumerable?(f(t,H)&&t[H][r]&&(t[H][r]=!1),n=S(n,{enumerable:w(0,!1)})):(f(t,H)||W(t,H,w(1,{})),t[H][r]=!0),at(t,r,n)):W(t,r,n)},ut=function(t,e){b(t);var n=v(e),r=C(n).concat(mt(n));return q(r,(function(e){s&&!lt.call(n,e)||ct(t,e,n[e])})),t},ft=function(t,e){return void 0===e?S(t):ut(S(t),e)},lt=function(t){var e=g(t),n=X.call(this,e);return!(this===D&&f(Z,e)&&!f(tt,e))&&(!(n||!f(this,e)||!f(Z,e)||f(this,H)&&this[H][e])||n)},dt=function(t,e){var n=v(t),r=g(e);if(n!==D||!f(Z,r)||f(tt,r)){var o=Q(n,r);return!o||!f(Z,r)||f(n,H)&&n[H][r]||(o.enumerable=!0),o}},pt=function(t){var e=K(v(t)),n=[];return q(e,(function(t){f(Z,t)||f(E,t)||n.push(t)})),n},mt=function(t){var e=t===D,n=K(e?tt:v(t)),r=[];return q(n,(function(t){!f(Z,t)||e&&!f(D,t)||r.push(Z[t])})),r};if(c||(R=function(){if(this instanceof R)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?y(arguments[0]):void 0,e=L(t),n=function(t){this===D&&n.call(tt,t),f(this,H)&&f(this[H],e)&&(this[H][e]=!1),at(this,e,w(1,t))};return s&&it&&at(D,e,{configurable:!0,set:n}),st(e,t)},j(R[M],"toString",(function(){return z(this).tag})),j(R,"withoutSetter",(function(t){return st(L(t),t)})),T.f=lt,$.f=ct,k.f=dt,_.f=x.f=pt,O.f=mt,N.f=function(t){return st(G(t),t)},s&&(W(R[M],"description",{configurable:!0,get:function(){return z(this).description}}),a||j(D,"propertyIsEnumerable",lt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:R}),q(C(rt),(function(t){P(t)})),r({target:J,stat:!0,forced:!c},{for:function(t){var e=y(t);if(f(et,e))return et[e];var n=R(e);return et[e]=n,nt[n]=e,n},keyFor:function(t){if(!m(t))throw TypeError(t+" is not a symbol");if(f(nt,t))return nt[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!s},{create:ft,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:pt,getOwnPropertySymbols:mt}),r({target:"Object",stat:!0,forced:u((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(h(t))}}),U){var bt=!c||u((function(){var t=R();return"[null]"!=U([t])||"{}"!=U({a:t})||"{}"!=U(Object(t))}));r({target:"JSON",stat:!0,forced:bt},{stringify:function(t,e,n){var r,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(r=e,(p(e)||void 0!==t)&&!m(t))return l(e)||(e=function(t,e){if(d(r)&&(e=r.call(this,t,e)),!m(e))return e}),o[1]=e,U.apply(null,o)}})}if(!R[M][V]){var ht=R[M].valueOf;j(R[M],V,(function(){return ht.apply(this,arguments)}))}F(R,J),E[H]=!0},a630:function(t,e,n){var r=n("23e7"),o=n("4df4"),i=n("1c7e"),a=!i((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:a},{from:o})},a821:function(t,e,n){t.exports=n.p+"img/21fgsd.a146e730.jpg"},b727:function(t,e,n){var r=n("0366"),o=n("44ad"),i=n("7b0b"),a=n("07fa"),s=n("65f0"),c=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,f=4==t,l=6==t,d=7==t,p=5==t||l;return function(m,b,h,v){for(var g,y,w=i(m),S=o(w),C=r(b,h,3),_=a(S),x=0,O=v||s,k=e?O(m,_):n||d?O(m,0):void 0;_>x;x++)if((p||x in S)&&(g=S[x],y=C(g,x,w),t))if(e)k[x]=y;else if(y)switch(t){case 3:return!0;case 5:return g;case 6:return x;case 2:c.call(k,g)}else switch(t){case 4:return!1;case 7:c.call(k,g)}return l?-1:u||f?f:k}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},c767:function(t,e,n){"use strict";n("2217")},caac:function(t,e,n){"use strict";n("16aa")},cdfe:function(t,e,n){"use strict";n("6013")},d28b:function(t,e,n){var r=n("746f");r("iterator")},e01a:function(t,e,n){"use strict";var r=n("23e7"),o=n("83ab"),i=n("da84"),a=n("1a2d"),s=n("1626"),c=n("861d"),u=n("9bf2").f,f=n("e893"),l=i.Symbol;if(o&&s(l)&&(!("description"in l.prototype)||void 0!==l().description)){var d={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new l(t):void 0===t?l():l(t);return""===t&&(d[e]=!0),e};f(p,l);var m=p.prototype=l.prototype;m.constructor=p;var b=m.toString,h="Symbol(test)"==String(l("test")),v=/^Symbol\((.*)\)[^)]+$/;u(m,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=b.call(t);if(a(d,t))return"";var n=h?e.slice(7,-1):e.replace(v,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:p})}},e538:function(t,e,n){var r=n("b622");e.f=r},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},e9fd:function(t,e,n){"use strict";n("2dbe")},f9f6:function(t,e,n){"use strict";n("0af0")},fb6a:function(t,e,n){"use strict";var r=n("23e7"),o=n("e8b5"),i=n("68ee"),a=n("861d"),s=n("23cb"),c=n("07fa"),u=n("fc6a"),f=n("8418"),l=n("b622"),d=n("1dde"),p=d("slice"),m=l("species"),b=[].slice,h=Math.max;r({target:"Array",proto:!0,forced:!p},{slice:function(t,e){var n,r,l,d=u(this),p=c(d),v=s(t,p),g=s(void 0===e?p:e,p);if(o(d)&&(n=d.constructor,i(n)&&(n===Array||o(n.prototype))?n=void 0:a(n)&&(n=n[m],null===n&&(n=void 0)),n===Array||void 0===n))return b.call(d,v,g);for(r=new(void 0===n?Array:n)(h(g-v,0)),l=0;v<g;v++,l++)v in d&&f(r,l,d[v]);return r.length=l,r}})}}]);
//# sourceMappingURL=chunk-4f50e5ee.3d231ca3.js.map