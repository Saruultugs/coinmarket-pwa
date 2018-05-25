webpackJsonp([1],[,,,function(t,e,a){"use strict";var n=a(4);e.a={mixins:[n.a],name:"app"}},function(t,e,a){"use strict";e.a={methods:{debug:function(t){console.log("debug",t)},go:function(t){"Post"===t.name&&this.$bar.start(),this.$router.push(t)},goBack:function(){this.$router.go(-1)},showLoading:function(){this.$root.$data.shared.loading=!0},hideLoading:function(){this.$root.$data.shared.loading=!1}},computed:{loading:function(){return this.$root.$data.shared.loading}}}},function(t,e,a){"use strict";var n=a(4),s=a(19),o=a.n(s),i=a(20),r=a.n(i),c=a(21),l=a.n(c),u=a(23),d=new r.a,p=new l.a(window.navigator.userAgent);e.a={name:"List",mixins:[n.a],data:function(){return{tickers:null,global:null,selectedUnit:this.$root.$data.shared.isZh?"cny":"usd",selectedChange:"24h",lastUpdated:new Date,showError:!1,keyword:"",customAmount:.1}},methods:{setData:function(t){this.tickers=t.tickers,this.global=t.global},setUnit:function(){localStorage.setItem("unit",this.selectedUnit)},setChange:function(){localStorage.setItem("change",this.selectedChange)},connect:function(){var t=this,e=u.a?"ws://"+window.location.hostname+":8443":"wss://coin.bch123.org:8443",a=new WebSocket(e);this.showLoading(),a.onopen=function(t){console.log("websocket on open")},a.onmessage=function(e){console.log("ws get msg"),t.hideLoading(),t.setData(JSON.parse(e.data)),t.lastUpdated=new Date},a.onclose=function(e){console.log("Socket is closed. Reconnect will be attempted in 1 second.",e.reason),setTimeout(function(){t.connect()},1e3)},a.onerror=function(t){console.error("Socket encountered error: ",t.message,"Closing socket"),a.close()}},marketCap:function(t,e){var a={cny:"¥"+o()(t/Math.pow(10,8)).format("0,000.00")+"亿",usd:"$"+o()(e/Math.pow(10,9)).format("0,000.00")+"B"};return/cny|usd/.test(this.selectedUnit)?a[this.selectedUnit]:a[this.$root.$data.shared.isZh?"cny":"usd"]}},computed:{locale:function(){return this.$root.$data.shared.isZh?"zh_CN":"en_US"},filterTickers:function(){var t=this;return this.tickers&&this.tickers.filter(function(e){return new RegExp(t.keyword.trim().toUpperCase()).test(e.symbol)})}},filters:{format:function(t,e){return"btc"===e?o()(t*Math.pow(10,6)).format("0,000,000.00"):o()(t).format("0,0.00")},timeFormat:function(t,e){return d.format(t,e)}},created:function(){var t=localStorage.getItem("unit"),e=localStorage.getItem("change");t&&(this.selectedUnit=t),e&&(this.selectedChange=e),this.connect()},mounted:function(){p.mobile()||this.$refs.search.focus()}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(1),s=a(10),o=a(14),i=a(25);n.a.config.productionTip=!1,n.a.use(i.a);var r={isZh:/zh/.test(window.navigator.language),loading:!0},c={zh:{list:{updateTime:"更新时间",rank:"排名",symbol:"名称",price:"最新价",change:"涨跌",marketCap:"市值",error:"请求超时，请稍后刷新重试",totalMarketCap:"总市值",btcDominance:"BTC占比",instantFilter:"即时过滤",supportDeveloper:"支持开发者"}},en:{list:{updateTime:"last update",rank:"Rank",symbol:"Symbol",price:"Price",change:"Change",marketCap:"Market Cap",error:"Timeout, please retry",totalMarketCap:"Market Cap",btcDominance:"BTC Dominance",instantFilter:"instant filter symbol",supportDeveloper:"Support Developer"}}},l=new i.a({locale:r.isZh?"zh":"en",messages:c});new n.a({el:"#app",data:{shared:r},router:o.a,i18n:l,template:"<App/>",components:{App:s.a}})},,,,function(t,e,a){"use strict";function n(t){a(11)}var s=a(3),o=a(13),i=a(2),r=n,c=i(s.a,o.a,!1,r,null,null);e.a=c.exports},function(t,e){},,function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("header",[a("div",{staticClass:"title link",on:{click:function(e){t.go({path:"/"})}}},[t._v("CoinMarket"),a("span",{staticClass:"sub"},[t._v("Lite")])]),t.loading?a("div",{staticClass:"loading"},[a("spinner",{attrs:{"line-fg-color":"#32669a"}})],1):t._e()]),a("div",{staticClass:"main"},[a("keep-alive",[t.$route.meta.keepAlive?a("router-view"):t._e()],1),t.$route.meta.keepAlive?t._e():a("transition",{attrs:{name:"fade"}},[a("router-view")],1)],1),t._m(0)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("a",{attrs:{href:"https://github.com/cyio/coinmarket-pwa",target:"_blank"}},[t._v("cyio/coinmarket-pwa")])])}],o={render:n,staticRenderFns:s};e.a=o},function(t,e,a){"use strict";var n=a(1),s=a(15),o=a(16),i=a.n(o),r=a(17);n.a.use(s.a),n.a.component("Spinner",i.a),e.a=new s.a({mode:"history",scrollBehavior:function(t,e,a){if(a)setTimeout(function(){window.scrollTo(a.x,a.y)},200);else if("Post"===t.name)return{x:0,y:0}},routes:[{path:"/",name:"Home",component:r.a,meta:{keepAlive:!0}},{path:"*",redirect:"/"}]})},,,function(t,e,a){"use strict";function n(t){a(18)}var s=a(5),o=a(24),i=a(2),r=n,c=i(s.a,o.a,!1,r,"data-v-0053c7af",null);e.a=c.exports},function(t,e){},,,,,function(t,e,a){"use strict";a.d(e,"a",function(){return n});var n=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)||window.location.hostname.match(/^192/))},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-view"},[t.global?a("div",{staticClass:"info"},[t._v(t._s(t.$t("list.totalMarketCap"))+":"),a("span",[t._v(t._s(t.marketCap(t.global.total_market_cap_cny,t.global.total_market_cap_usd))+" /  "+t._s(t.$t("list.btcDominance"))+":")]),a("span",[t._v(t._s(t.global.bitcoin_percentage_of_market_cap)+"% / "+t._s(t.$t("list.updateTime"))+"：")]),a("span",[t._v(t._s(t._f("timeFormat")(t.lastUpdated,t.locale)))])]):t._e(),a("div",{staticClass:"filter"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],ref:"search",attrs:{type:"email",placeholder:t.$t("list.instantFilter")},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),a("table",{staticClass:"table-left"},[a("tbody",[a("tr",{staticClass:"headorder"},[a("th",{staticClass:"h-rank f-left"},[t._v(t._s(t.$t("list.rank")))]),a("th",{staticClass:"h-name f-left"},[t._v(t._s(t.$t("list.symbol")))])]),t._l(t.filterTickers,function(e){return t.tickers?a("tr",{staticClass:"item"},[a("td",[a("span",[t._v(t._s(e.rank))])]),a("td",[a("span",[t._v(t._s(e.symbol))])])]):t._e()})],2)]),a("div",{staticClass:"table-scroll-x"},[a("div",{staticClass:"scroll-content"},[a("table",[a("tbody",[a("tr",{staticClass:"headorder"},[a("th",{staticClass:"h-price f-left"},[a("div",{staticClass:"inner-row"},[a("div",[t._v(t._s(t.$t("list.price")))]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedUnit,expression:"selectedUnit"}],on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selectedUnit=e.target.multiple?a:a[0]},t.setUnit]}},[a("option",{attrs:{value:"usd"}},[t._v("$")]),a("option",{attrs:{value:"cny"}},[t._v("¥")]),a("option",{attrs:{value:"btc"}},[t._v("Bits")])])])]),a("th",{staticClass:"h-change f-left"},[t._v(t._s(t.$t("list.change"))),a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedChange,expression:"selectedChange"}],on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selectedChange=e.target.multiple?a:a[0]},t.setChange]}},[a("option",{attrs:{value:"24h"}},[t._v("24H")]),a("option",{attrs:{value:"1h"}},[t._v("1H")]),a("option",{attrs:{value:"7d"}},[t._v("7D")])])]),a("th",{staticClass:"h-marketcap"},[a("div",[t._v(t._s(t.$t("list.marketCap")))])])]),t._l(t.filterTickers,function(e){return t.tickers?a("tr",{staticClass:"item"},[a("td",{staticClass:"align-right"},[a("span",[t._v(t._s(t._f("format")(e["price_"+t.selectedUnit],t.selectedUnit)))])]),a("td",{staticClass:"align-right"},[a("span",{staticClass:"change",class:{up:e["percent_change_"+t.selectedChange]>=0,down:e["percent_change_"+t.selectedChange]<0}},[t._v(t._s(t._f("format")(e["percent_change_"+t.selectedChange]))+"%")])]),a("td",{staticClass:"align-right"},[a("span",[t._v(t._s(t.marketCap(e.market_cap_cny,e.market_cap_usd)))])])]):t._e()})],2)])])])])},s=[],o={render:n,staticRenderFns:s};e.a=o}],[6]);
//# sourceMappingURL=app.9fd03a736d1ca2180875.js.map